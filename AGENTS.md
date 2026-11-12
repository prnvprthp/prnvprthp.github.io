<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Pranav's Portfolio

Personal portfolio site, cross-linked with the Potato Projects hub. Dev port 3007.

- No database and no auth: nothing here touches the shared Postgres.
- Cross-links to `potato-projects`; keep the two in step when project names or URLs change.

## Mobile pass: pending

Not yet checked at phone width (noted 21 Sep 2026).

Marquee was swept at 375px on 19 Sep 2026 and **five of six surfaces were broken**: a tab
scrolled off the edge of the screen and was unreachable, a primary button was clipped
mid-word, a card was sized so all its actions sat below the fold, and a dialog was reduced
to a 200px window over 900px of content. Every fix was one or two responsive classes. All
of it had been built while looking at a desktop viewport, which is how this app was built
too, so assume the same until someone checks.

Do it by looking, not measuring: screenshots caught every one of those, the measurements
caught none. The three ways the usual checks lie are listed under "Working here" in the
root `AGENTS.md`.
