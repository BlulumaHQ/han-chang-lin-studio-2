# Memory: index.md
Updated: today

# John Han-Chang Lin — Artist Portfolio

## Design System
- Fonts: Cormorant (serif headings), Source Sans 3 (body sans)
- Colors: warm ivory bg (40 20% 97%), charcoal text (220 10% 20%), museum tokens
- Aesthetic: museum-grade, minimal, artwork-centric
- Button variants: `museum` (dark border), `museum-light` (light border for hero)
- No dark mode toggle

## Structure
- Pages: Home, About, Gallery, Exhibitions, Contact
- Artworks in data/artworks.ts — real images only, parsed from filenames
- Filename format: john-lin-emit-flow-{size}-{number}-{tags}.webp
- Tags: "private" → Private Collection, "selected" → homepage featured, "hero" → hero slider
- Categories removed — single series "Emit Flow"
- Contact form: Formspree endpoint xpwzgkvl
- Gallery will have 36 artworks total (uploaded in batches)
- Batch 1: 10 artworks uploaded (#1109, #1308, #1506, #1603, #1609, #1806, #2102-1, #2102-2, #2102-3, #2108)

## Key Decisions
- Traditional Chinese only (no simplified)
- No prices displayed
- No fabricated awards
- Immigration year: 1990
- All placeholder/fake artworks removed permanently

## Removals & Rejections
- Logo/signature image REMOVED from header and footer — user wants text-only name
- No duplicate paintings — each gallery entry must use a unique image
- Old category system (Ocean Flow, Earth Layers, Light Atmosphere, Early Works) removed
