---
name: Trishit Swarnakar — After dark
description: A mature Spider-Man-inspired engineering portfolio.
colors:
  bg: "#101113"
  white: "#eeece7"
  muted: "#aaa9a7"
  red: "#d34b49"
  line: "#eeece722"
  section: "#191a1d"
  activity-panel: "#242528"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(7rem, 15.5vw, 15rem)"
    fontWeight: 800
    lineHeight: 0.78
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(4rem, 7.5vw, 7rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 700
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.58rem"
    letterSpacing: "0.07em"
rounded:
  media: "1rem"
  inset: "0.6rem"
  pill: "3rem"
  circle: "50%"
spacing:
  small: "1rem"
  medium: "2rem"
  large: "4rem"
  section: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.45rem 0.45rem 1.4rem"
  button-outline:
    textColor: "{colors.white}"
    rounded: "2rem"
    padding: "0.55rem 0.9rem 0.55rem 1.1rem"
  project-open:
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    width: "2.5rem"
    height: "2.5rem"
  project-open-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.bg}"
  activity-card:
    backgroundColor: "{colors.activity-panel}"
    rounded: "{rounded.media}"
    padding: "0.4rem"
---

# Design System: Trishit Swarnakar

## Overview

**Creative North Star: "After dark"**

A mature Spider-Man-inspired editorial world: charcoal, muted signal red, night photography, and condensed type. Personal identity and real engineering evidence carry the page; web geometry supplies a recognizable atmosphere without competing with reading.

**Key Characteristics:**

- Condensed display typography with clear Manrope supporting text.
- Integrated night photography and asymmetric project evidence.
- Flat tonal sections, precise hairlines, and rounded action controls.
- Restrained web interaction with native mobile scrolling and reduced-motion fallbacks.

## Colors

### Primary

Muted signal red (`red`) identifies the name, selected heading words, arrows, section markers, focus rings, and progress indicator.

### Neutral

Charcoal (`bg`) is the continuous canvas. Warm pale text (`white`) carries headings and primary actions; stone gray (`muted`) carries supporting copy. Translucent pale hairlines (`line`) divide editorial rows. Slightly lighter charcoal (`section`) separates expertise and activity; `activity-panel` contains social previews. These are roles, not interchangeable decorative accents.

## Typography

Local Barlow Condensed supplies uppercase display and chapter headings; local Manrope supplies descriptions, navigation, and project titles. The files are Barlow Condensed 800, Manrope 400, and Manrope 700; the latter is registered for weights 600–800. Both use sans-serif fallback and swap loading.

The frontmatter records the desktop hero, standard chapter heading, project title, hero description, and project metadata roles. Body sizing varies by context (roughly .77–.85rem). The manifesto uses Manrope (clamp(1.7rem, 3vw, 3rem), line-height 1.3); contact uses Barlow (clamp(5rem, 12vw, 11rem)). At 600px and below the hero is 20.1vw with a 1.35em first line, standard chapter headings are 4.5rem, and contact is 18vw. Uppercase labels use tracking; long prose stays in sentence case.

## Layout

The standard shell is capped at 88rem with 3rem side space. At 1100px and below it uses 2rem side space; at 600px and below it uses 1rem. Desktop composition uses asymmetric columns and broad section spacing, with quieter dividing rows for education and personal background.

Project evidence uses a 12-column grid with 7/5 and 6/6 spans, a 6rem offset for narrow cards, and a final card starting at column 6. At 1100px the project list becomes single-column beside its rail. At 899px the rail becomes a heading block above two columns; at 600px cards stack in source order. Expertise is a two-column grid that becomes one column at 600px. Social cards retain an explicitly scrollable horizontal track.

## Elevation & Depth

Depth comes primarily from tonal section changes, image crops, hairlines, and a fixed grain overlay (opacity .035). The scrolled header alone uses a diffuse exterior shadow (0 8px 30px #08090c1f) with 16px backdrop blur, reduced to 12px below 900px. Project media has fine inset highlights. Photography blends into its surroundings through directional shading and intersecting edge masks; it is not a raised portrait card.

## Shapes

Actions use pale pills with red circular arrow wells. Project and social imagery use softly rounded frames; editorial copy remains directly on the canvas. Thin rules organize lists. Shared authored SVG icons use a 24-unit viewBox, 1.3-unit strokes, and rounded caps and joins. The spider mark and web geometry are recurring identity details.

## Components

### Actions and navigation

Primary actions share a 3.4rem minimum height, pale fill, dark text, and a 2.5rem red arrow circle; hover rotates the circle by -45 degrees. The mobile hero action is 2.8rem high with a 2rem circle. The contact navigation action is outlined. Links and buttons receive a 2px red focus outline with a 6px offset and a 1px press translation.

The fixed pill navigation gains a dark translucent surface after the hero. Desktop links use a red underline for hover and current location. Below 900px it becomes a menu toggle and large section links. Escape closes the menu and restores toggle focus; Tab stays within visible header controls while open. Selecting a section updates the fragment, closes the menu, and focuses the target.

### Projects and supporting lists

Project titles precede category/year, descriptions, and underlined text stack tags. The image zooms to 1.035 on hover over .85s; its circular opening arrow turns 45 degrees and fills red. Light and dark contain variants preserve interfaces that would be lost by cropping. Education and journey entries are flat divided rows, not elevated cards.

### Social activity

Social previews are rounded charcoal cards with platform labels, explicit load controls, and direct external links. Third-party embeds load only after the visitor requests them. Track buttons and native horizontal scrolling provide access to adjacent posts. There are no input-field components in the current interface.

### Web field and motion

The hero's decorative WebGL field has 18 spokes and 11 rings. Pointer force displaces nearby nodes; springs restore them. Device pixel ratio is capped at 1.5, updates are throttled to roughly 30ms, and drawing pauses outside the viewport or when the document is hidden. Coarse pointers and reduced-motion preferences receive a static field; lack of WebGL leaves content usable.

GSAP stages the hero (1.1s with .12s stagger; photograph 1.3s after .25s), adds 32px once-only scroll reveals, scrubs manifesto opacity, and fills the thin page progress indicator. Lenis runs only with no reduced-motion preference, a fine pointer, and a viewport of at least 900px, using duration 1.05. Magnetic primary-action motion follows the same desktop restriction. Phones use native scrolling; reduced motion bypasses these GSAP entrances and smooth scrolling and disables CSS animation/transitions. There is no horizontal pinned expertise sequence. Barba is absent because there is one route.

## Do's and Don'ts

### Do

- Do preserve existing identity imagery and factual project content.
- Do place project names before category metadata and headings before supporting copy.
- Do use the shared thin-stroke SVG arrows and capability symbols.
- Do preserve visible keyboard focus, mobile navigation behavior, and reduced-motion access.

### Don't

- Don't reintroduce a rectangular portrait panel; dissolve the photograph into the charcoal background.
- Don't turn the Spider-Man reference into comic typography or competing decorative effects.
- Don't invent achievements or describe the design as award-winning.
- Don't add Barba route interception to this single-route portfolio.
