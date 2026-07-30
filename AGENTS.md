# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable Design Decisions

- Use the standalone ESEN brand symbol as the browser title/tab icon (favicon).
- Display the company contact details in English: ESEN, 1-12-6 Shinjuku, Chuo-ku, Chiba-shi, Chiba 260-0021, Japan, and +81 90 8722 7579.
- In the support section's right column, show only the ESEN company contact block; omit the "What we cover" and "Before you write" rows.
- Omit the three-item trust strip below the product cards ("Shopify verified", "Try before you buy", and "Need help?").
- Omit the "Products" and "Apps" items from the primary navigation; keep their page content available elsewhere.
- Keep the support dividers at their original spacing; use generous vertical spacing between the ESEN name, address, and phone number.
- Include an English "About ESEN" section between Products and Resources, covering the 2015 founding, Chiba location, commitment to professionalism/reliability/innovation, and global growth; do not show a company-address block in this section.
- Link the Resources section's Documentation card to `https://esentheme.vercel.app/` and open it in a new tab.
- Link the Resources section's Changelog card to `https://esentheme.vercel.app/en/support` and open it in a new tab.
