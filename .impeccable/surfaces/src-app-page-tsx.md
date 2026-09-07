---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/globals.css","src/components/WebField.tsx","src/components/MotionController.tsx","src/components/ActivityGallery.tsx","src/components/TopNavBar.tsx","public/social"]
---

# Portfolio home — After dark

Scope: the single home route, in Experience mode, for interviewers and potential collaborators. Visitors should recognize Trishit, inspect real project evidence, understand his capabilities and background, and reach working project or contact destinations.

The opening layers an oversized condensed red name across the edge of the existing night portrait, followed by the role and work action. The portrait dissolves into the background through directional charcoal shading and intersecting edge masks, matching the integration requested from trishitswarnakar.vercel.app; this supersedes the earlier rectangular photograph-panel direction. On small screens the identity and action precede the integrated photograph.

The narrative proceeds through a short manifesto, seven asymmetric project entries, a normal-flow capabilities grid, education, personal background, the "Off the clock." photo gallery, and a large contact invitation. The memorable interaction is restrained spring-restored web geometry behind the opening. Preserve project names before metadata and contact headings before supporting copy.

`ActivityGallery.tsx` replaces `LinkedInActivitySection.tsx` with real local images in `public/social`, staggered photograph cards, and full platform embeds loaded on click inside a native modal dialog. The horizontal track continuously drifts with GSAP, slows on hover, and pauses for explicit pause or interaction, open embeds, offscreen content, hidden documents, and reduced motion. Mouse dragging supplies release inertia; touch uses native scrolling. Explicit Play resumes after interaction, and reduced motion removes autoplay and inertia.

The fixed navigation hides on downward scroll and reveals on upward scroll after 12px of travel in the current direction at scrollY >= 120px. It retains visibility near the page top, for an open mobile menu, and for keyboard-visible focus within the header.

Code-led execution using existing assets; no generated image or approved comp. There is one route, so Barba is not part of this implementation. Mobile scrolling is native and reduced-motion content is fully available without entrances.

Review disposition supplied at documentation: ship. The reviewer scored the requested fixes and portrait-blend correction resolved; the user subsequently approved the gallery visuals, and two interaction edge-case fixes were verified. This is not an award claim or a broader independent audit. Direction and validation records remain in .impeccable/review. No unresolved visual decision was supplied for this documentation pass.
