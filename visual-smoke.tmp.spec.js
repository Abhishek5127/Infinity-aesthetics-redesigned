const { test } = require("@playwright/test");

const base = "http://127.0.0.1:3000";
const routes = ["/", "/about", "/contact", "/fees", "/process", "/results", "/services"];
const widths = [375, 414, 768, 1024, 1440];

function channel(v) {
  v /= 255;
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

function contrast(hexA, hexB) {
  const rgb = (hex) => {
    const h = hex.trim().replace("#", "");
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  };
  const lum = ([r, g, b]) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  const [a, b] = [lum(rgb(hexA)), lum(rgb(hexB))].sort((x, y) => y - x);
  return Number(((a + 0.05) / (b + 0.05)).toFixed(2));
}

test("responsive audit", async ({ page }) => {
  const results = [];

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      const response = await page.goto(`${base}${route}`, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(400);
      const data = await page.evaluate(() => {
        const doc = document.documentElement;
        const body = document.body;
        const overflowX = Math.max(doc.scrollWidth, body.scrollWidth) - doc.clientWidth;
        const offenders = [...document.querySelectorAll("body *")]
          .map((el) => {
            const rect = el.getBoundingClientRect();
            return {
              tag: el.tagName,
              cls: typeof el.className === "string" ? el.className.slice(0, 120) : "",
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
            };
          })
          .filter((item) => item.right > doc.clientWidth + 2 || item.left < -2)
          .slice(0, 5);
        const mobileBtn = document.querySelector(".ia-mobile-btn");
        const mobileBtnRect = mobileBtn?.getBoundingClientRect();
        const desktopNavDisplay = getComputedStyle(document.querySelector(".ia-nav-links") || body).display;
        return {
          overflowX,
          offenders,
          mobileBtnDisplay: mobileBtn ? getComputedStyle(mobileBtn).display : null,
          mobileBtnSize: mobileBtnRect ? [Math.round(mobileBtnRect.width), Math.round(mobileBtnRect.height)] : null,
          desktopNavDisplay,
        };
      });

      let drawer = null;
      if (width < 768 && route !== "/fees" && response?.status() !== 404) {
        const button = page.locator(".ia-mobile-btn");
        if (await button.count()) {
          await button.click();
          await page.waitForTimeout(200);
          const opened = await page.locator(".ia-drawer.open").count();
          const closeTargets = await page.evaluate(() => {
            const links = [...document.querySelectorAll(".ia-drawer a")].map((el) => {
              const r = el.getBoundingClientRect();
              return { text: el.textContent.trim().slice(0, 24), w: Math.round(r.width), h: Math.round(r.height) };
            });
            const close = document.querySelector(".ia-drawer-close")?.getBoundingClientRect();
            return { links, close: close ? [Math.round(close.width), Math.round(close.height)] : null };
          });
          await page.locator(".ia-drawer-overlay").click({ position: { x: 5, y: 5 } });
          await page.waitForTimeout(200);
          const closedByOverlay = (await page.locator(".ia-drawer.open").count()) === 0;
          await button.click();
          await page.waitForTimeout(100);
          await page.locator(".ia-drawer a").first().click();
          await page.waitForTimeout(250);
          const closedByLink = (await page.locator(".ia-drawer.open").count()) === 0;
          drawer = { opened: opened > 0, closedByOverlay, closedByLink, closeTargets };
        }
      }

      results.push({ width, route, status: response?.status(), ...data, drawer });
    }
  }

  await page.goto(base, { waitUntil: "networkidle", timeout: 60000 });
  const tokens = await page.evaluate(() => {
    const styles = getComputedStyle(document.documentElement);
    return {
      bg: styles.getPropertyValue("--color-bg-primary").trim(),
      card: styles.getPropertyValue("--color-bg-secondary").trim(),
      text: styles.getPropertyValue("--color-text-primary").trim(),
      accent: styles.getPropertyValue("--color-accent").trim(),
      dark: styles.getPropertyValue("--color-accent-dark").trim(),
    };
  });

  console.log(JSON.stringify({
    tokens,
    contrast: {
      textOnBg: contrast(tokens.text, tokens.bg),
      accentOnBg: contrast(tokens.accent, tokens.bg),
      cardOnAccent: contrast(tokens.card, tokens.accent),
      cardOnDark: contrast(tokens.card, tokens.dark),
    },
    results,
  }, null, 2));
});
