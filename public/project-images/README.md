# project-images

This folder holds two different kinds of images, distinguished by the
separator before the number:

## 1. App preview heroes — DASH  →  `<slug>-<n>.<ext>`

Shown in the "Apps & Digital Products" cards on `/interests`, and auto-cycled
when an app has more than one.

- **slug** must match the app's `slug` in `app/interests/InterestsClient.tsx`
  (`kinship`, `flightsight`, `marquee`, `days`).
- **n** is the cycle order, starting at 1 (`-1`, `-2`, `-3`, …).
- **ext**: `png`, `jpg`, `jpeg`, or `webp`.
- 1 image → static · 2+ → crossfade carousel with dots · none → app icon.

```
marquee-1.png  marquee-2.png        days-1.png  days-2.png  days-3.png
```

## 2. Analytics project screenshots — UNDERSCORE  →  `<slug>_<n>.png`

Shown on the `/projects` page. These are listed explicitly in the `images: [...]`
arrays in `app/projects/page.tsx`, e.g. `churn-prediction_1.png`. The underscore
means they are NOT picked up by the `/interests` auto-scan.

## Note

The `/interests` list is read at **build time**, so after adding or removing
dash-named files, run `npm run build` (or push to redeploy) for changes to show.
