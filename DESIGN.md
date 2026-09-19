# Vibe Learn Design System

> Version 1.0 • May 2025  
> A unified design language for the Vibe Learn learning platform. Clean, modern, and focused on clarity, consistency, and intuitive learning experiences.

---

## 01. Colors

### Primary Palette (Brand & Accent)
Used for brand identification, primary actions, progress indicators, active states, and focal highlights.

| Token | Hex | RGB | Tailwind Class | Intended Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary 500** | `#10B981` | `rgb(16, 185, 129)` | `bg-primary-500` / `text-primary-500` | Primary brand color, primary buttons, active link indicator, progress fill, checkmarks |
| **Primary 400** | `#34D399` | `rgb(52, 211, 153)` | `bg-primary-400` / `text-primary-400` | Button hover states, bright illustrations, progress bar gradients |
| **Primary 300** | `#6EE7B7` | `rgb(110, 231, 183)` | `bg-primary-300` / `text-primary-300` | Secondary accents, decorative elements, subtle borders |
| **Primary 200** | `#A7F3D0` | `rgb(167, 243, 208)` | `bg-primary-200` / `text-primary-200` | Light borders, glowing rings, soft backgrounds |
| **Primary 100** | `#D1FAE5` | `rgb(209, 250, 229)` | `bg-primary-100` / `text-primary-100` | Badge and pill backgrounds, card hover tints, active list item backgrounds |

### Neutral Palette (Typography & Surfaces)
Tailored slate neutral palette providing high readability and balanced contrast across light and dark elements.

| Token | Hex | RGB | Tailwind Class | Intended Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Neutral 900** | `#0F172A` | `rgb(15, 23, 42)` | `bg-neutral-900` / `text-neutral-900` | Primary headings, page titles, main body text, high-contrast dark accents |
| **Neutral 700** | `#334155` | `rgb(51, 65, 85)` | `bg-neutral-700` / `text-neutral-700` | Subtitles, secondary headings, card descriptions, dark icons |
| **Neutral 500** | `#64748B` | `rgb(100, 116, 139)` | `bg-neutral-500` / `text-neutral-500` | Muted text, metadata (duration, student counts), placeholder text |
| **Neutral 300** | `#CBD5E1` | `rgb(203, 213, 225)` | `bg-neutral-300` / `text-neutral-300` | Structural dividers, hover border states, disabled controls |
| **Neutral 200** | `#E2E8F0` | `rgb(226, 232, 240)` | `bg-neutral-200` / `text-neutral-200` | Default card borders, input borders, progress bar tracks |
| **Neutral 100** | `#F1F5F9` | `rgb(241, 245, 249)` | `bg-neutral-100` / `text-neutral-100` | Secondary button backgrounds, section contrast backgrounds, code blocks |
| **Neutral 50** | `#FAFAFC` | `rgb(250, 250, 252)` | `bg-neutral-50` / `text-neutral-50` | Primary page background, canvas backdrop |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | `bg-white` / `text-white` | Card surfaces, modal dialogs, popovers, button text on primary |

---

## 02. Typography

The typographic system combines a distinguished editorial serif for display headings with a crisp neo-grotesque sans-serif for UI, cards, and body content.

- **Playfair Display** (Google Fonts)
  - *Attributes:* Elegant, Readable, Timeless
  - *Role:* Display 1, Display 2 (Page titles, hero titles, major section headlines)
  - *Tailwind Family:* `font-serif` or `font-display`
- **Inter** (Google Fonts)
  - *Attributes:* Clean, Modern, Highly legible
  - *Role:* Headings 1–3, Body Large, Body, Small, Buttons, Badges, Metadata
  - *Tailwind Family:* `font-sans`

---

## 03. Type Scale

| Style | Font Family | Size (px / rem) | Line Height (px) | Weight | Tailwind Equivalent | Primary Use |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 1** | Playfair Display | 48px / 3.0rem | 56px | Bold (700) | `font-serif text-5xl font-bold leading-[56px]` | Hero headlines, main page titles |
| **Display 2** | Playfair Display | 36px / 2.25rem | 44px | Bold (700) | `font-serif text-4xl font-bold leading-[44px]` | Section titles, feature headers |
| **Heading 1** | Inter | 28px / 1.75rem | 36px | Semi Bold (600) | `font-sans text-2xl font-semibold leading-9` | Card titles, modal headers |
| **Heading 2** | Inter | 22px / 1.375rem | 30px | Semi Bold (600) | `font-sans text-xl font-semibold leading-[30px]` | Sub sections, module headers |
| **Heading 3** | Inter | 18px / 1.125rem | 26px | Medium (500) | `font-sans text-lg font-medium leading-[26px]` | Small titles, accordion titles |
| **Body Large** | Inter | 16px / 1.0rem | 24px | Regular (400) | `font-sans text-base font-normal leading-6` | Lead paragraphs, hero subtext |
| **Body** | Inter | 14px / 0.875rem | 20px | Regular (400) | `font-sans text-sm font-normal leading-5` | Default supporting text, card copy |
| **Small** | Inter | 12px / 0.75rem | 16px | Regular (400) | `font-sans text-xs font-normal leading-4` | Captions, metadata tags, timestamps |

---

## 04. Spacing System

Based on a strict 4px grid base unit to guarantee rhythmic alignment across layouts.

| Token | Pixels | rem | Tailwind Class | Usage Guidelines |
| :--- | :--- | :--- | :--- | :--- |
| **1** | 4px | 0.25rem | `p-1`, `m-1`, `gap-1` | Micro spacing, icon gaps, pill padding |
| **2** | 8px | 0.5rem | `p-2`, `m-2`, `gap-2` | Tight element spacing, badge vertical padding |
| **3** | 12px | 0.75rem | `p-3`, `m-3`, `gap-3` | Button vertical padding, compact card padding |
| **4** | 16px | 1.0rem | `p-4`, `m-4`, `gap-4` | Base padding, button horizontal padding, list gap |
| **6** | 24px | 1.5rem | `p-6`, `m-6`, `gap-6` | Standard card internal padding, grid column gap |
| **8** | 32px | 2.0rem | `p-8`, `m-8`, `gap-8` | Section internal padding, large card padding |
| **10** | 40px | 2.5rem | `p-10`, `m-10`, `gap-10` | Section spacing, container gaps |
| **12** | 48px | 3.0rem | `p-12`, `m-12`, `gap-12` | Major section vertical margins |
| **16** | 64px | 4.0rem | `p-16`, `m-16`, `gap-16` | Hero section padding, page separators |

---

## 05. Radius & Shadows

### Border Radius
Smooth rounded aesthetic that feels modern and approachable.

| Token | Value | Tailwind Class | Component Application |
| :--- | :--- | :--- | :--- |
| **xs** | 4px | `rounded-xs` (`rounded-[4px]`) | Tags, status indicator dots, small tooltips |
| **sm** | 8px | `rounded-sm` (`rounded-[8px]`) | Dropdown menus, code blocks, checkboxes |
| **md** | 12px | `rounded-md` (`rounded-[12px]`) | Buttons, inputs, search bars, selects |
| **lg** | 16px | `rounded-lg` (`rounded-[16px]`) | Standard cards, video containers, popovers |
| **xl** | 24px | `rounded-xl` (`rounded-[24px]`) | Hero callouts, featured modals, highlighted cards |
| **Full** | 9999px | `rounded-full` | Badges, avatar circles, icon buttons, progress bars |

### Elevation Shadows
Subtle, multi-layered shadows designed for a soft, premium feel without harsh outlines.

| Token | CSS Value | Tailwind Class | Usage |
| :--- | :--- | :--- | :--- |
| **Sm** | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | `shadow-sm` | Default interactive elements, input hover |
| **Md** | `0 4px 12px -2px rgba(0, 0, 0, 0.08)` | `shadow-md` | Course cards, floating action bars, dropdowns |
| **Lg** | `0 12px 24px -4px rgba(0, 0, 0, 0.10)` | `shadow-lg` | Card hover state, modals, sticky player header |
| **XL** | `0 20px 40px -8px rgba(0, 0, 0, 0.12)` | `shadow-xl` | Floating progress bar, hero popout banners |

---

## 06. Iconography

- **Grid Size:** 24x24 px base canvas.
- **Stroke Width:** 2px uniform stroke width for outline icons.
- **Line Caps:** Rounded line caps and corners (`stroke-linecap="round" stroke-linejoin="round"`).
- **Styles:**
  - *Outline Style:* Default for navigation, search, checkmarks, clocks, external links, and bookmarks.
  - *Filled Style:* Used for active media controls (play, completed checkmark, lock).
- **Coloring:** Inherits current text color (`currentColor`) or uses `text-primary-500` for brand accents and `text-neutral-500` for secondary metadata.

---

## 07. Buttons

Buttons have a standard height of 44px to satisfy tap-target accessibility standards.

| Variant | Styling Details | States | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | Background `#10B981`, text `#FFFFFF`, radius 12px, font Inter Medium 14–16px, padding `0 16px` | Hover: `bg-[#059669]`, Active: `bg-[#047857]`, Disabled: `bg-[#A7F3D0] cursor-not-allowed` | "Get Started", "Explore Courses", "Continue Learning" |
| **Secondary** | Background `#FFFFFF`, border `1px solid #E2E8F0` or `#10B981`, text `#10B981`, radius 12px | Hover: `border-[#10B981] bg-[#F0FDF4]`, Active: `bg-[#D1FAE5]` | "Explore Courses", "Bookmark", "Cancel" |
| **Tertiary / Link** | Background transparent, text `#334155`, subtle icon | Hover: `text-[#10B981] underline`, Active: `text-[#047857]` | "View Lesson ↗", "Back to course" |
| **Text Action** | Text `#10B981`, inline play icon, font Medium | Hover: `text-[#059669]`, Active: `text-[#047857]` | "Watch Video ▶", "Watch from 12:45 >" |

---

## 08. Inputs & Form Controls

- **Standard Search / Text Input:**
  - *Height:* 44px
  - *Border Radius:* 12px (`rounded-md`)
  - *Border:* `1px solid #E2E8F0` (`border-neutral-200`)
  - *Background:* `#FFFFFF`
  - *Padding:* `0 16px`
  - *Focus State:* Border `#10B981` (`focus:border-primary-500`), focus ring `rgba(16, 185, 129, 0.15)`
  - *Shortcut Badge:* `⌘ K` in `bg-neutral-100 text-neutral-500 rounded px-1.5 py-0.5 text-xs`
- **Select Dropdown:**
  - *Height:* 44px
  - *Radius:* 12px
  - *Border:* `1px solid #E2E8F0`
  - *Chevron:* Subtle 2px stroke down-chevron in `text-neutral-500`

---

## 09. Badges & Tags

Pill-shaped badges with full border-radius for categorical, level, or media type distinctions.

| Badge Type | Background | Text Color | Icon / Prefix | Example Text |
| :--- | :--- | :--- | :--- | :--- |
| **Video Tag** | `#10B981` (`bg-primary-500`) | `#FFFFFF` | Play Triangle Icon | `▶ VIDEO` |
| **Lesson Tag** | `#D1FAE5` (`bg-primary-100`) | `#065F46` (`text-primary-800`) | Optional document icon | `LESSON 5.1` |
| **Popular Tag** | `#D1FAE5` (`bg-primary-100`) | `#047857` (`text-primary-700`) | Flame / Sparkle Icon | `🔥 POPULAR` |
| **Trending Tag** | `#E0F2FE` (`bg-sky-100`) | `#0369A1` (`text-sky-700`) | Trending Up Icon | `TRENDING` |
| **Level Tag** | `#F1F5F9` (`bg-neutral-100`) | `#334155` (`text-neutral-700`) | Signal bars icon | `Beginner` / `Intermediate` |

---

## 10. Status & Progress Indicators

| Status | Visual Representation | Meaning |
| :--- | :--- | :--- |
| **In Progress** | Circle with hollow play icon (`text-primary-500`) | Lesson currently started but not finished |
| **Completed** | Solid green circle with white checkmark (`bg-primary-500 text-white`) | Lesson finished by learner |
| **Now Playing** | Green filled circle with white play icon (`bg-primary-500`) + highlight | Currently active lesson in player |
| **Locked** | Neutral gray padlock icon (`text-neutral-400`) | Future module or restricted content |

---

## 11. Progress Bars

Used on the Home page, Course Detail hero, Lesson sidebar, and My Learning dashboard.

- **Track:** Height 8px (or 6px in compact sidebars), `bg-neutral-200` (`#E2E8F0`), `rounded-full`.
- **Fill:** `bg-primary-500` (`#10B981`), `rounded-full`, smooth `transition-all duration-300`.
- **Label:** Text `text-xs font-semibold text-neutral-700`, format: `XX% complete`.

---

## 12. Component Cards

### Course Card (Catalog & Home)
- Container: `bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all`
- Top Row: Course Icon / Logo badge (e.g., Next.js 'N', Docker whale, TypeScript 'TS') + Arrow button `->`
- Tag: Level badge (`Beginner`, `Intermediate`) or Popular badge
- Title: `Heading 1` (`font-sans text-xl font-bold text-neutral-900`)
- Description: `Body` (`text-neutral-500 text-sm line-clamp-2`)
- Meta Footer: Signal icon (Level) • Clock icon (Duration) • Book icon (Module count)
- Accent: Optional 3px emerald bottom border on hover/active

### Lesson Video Card (Search Results & Curriculum)
- Layout: Split horizontal card (Video thumbnail on left with duration badge `12:45`, metadata on right)
- Badges: Course name tag + `VIDEO` badge
- Title: Lesson title with bold hover state
- Action: "Watch from 12:45 >" button in `text-primary-500 font-medium`

### Resource Card (Lesson Notes)
- Layout: Horizontal card with document / guide icon on left, title & description in center, external link icon on right
- Border: `1px solid #E2E8F0`, `rounded-md`, `p-4`, `hover:border-primary-500`

---

## 13. Navigation & Breadcrumbs

### Main Header Navigation
- Height: 72px (`h-[72px]`), sticky top with `backdrop-blur-md bg-white/90 border-b border-neutral-200`
- Logo: Vibe Learn leaf icon in `#10B981` + "Vibe Learn" logotype
- Nav Links: "Courses", "My Learning"
  - *Active State:* `text-neutral-900 font-semibold` with 2px solid `#10B981` underline bar positioned at the bottom of the header
  - *Inactive State:* `text-neutral-500 hover:text-neutral-900 font-medium`
- Actions: Notification Bell icon (`text-neutral-700 hover:text-neutral-900`), Clerk User Button or Sign In / Sign Up triggers

### Breadcrumb Trail
- Format: `Home > All Courses > [Course Title] > [Lesson Title]`
- Separator: Chevron right `>` in `text-neutral-400`
- Links: `text-neutral-500 hover:text-primary-500 text-sm font-medium`
- Current item: `text-neutral-900 font-medium`

### Pagination
- Controls: Previous `<` and Next `>` buttons
- Active Page: `bg-primary-500 text-white font-semibold rounded-md w-8 h-8 flex items-center justify-center`
- Inactive Pages: `text-neutral-700 hover:bg-neutral-100 rounded-md w-8 h-8 flex items-center justify-center`

---

## 14. Core Design Principles

1. **Clarity First:** Every element should communicate clearly. No cryptic iconography or hidden primary actions.
2. **Consistency:** Strictly reuse tokens, spacing units, and components across all screens. Never create one-off arbitrary values.
3. **Focus & Calm:** Remove noise, employ generous whitespace, soft shadows, and a calming neutral-emerald harmony so learners focus on educational content.
4. **Accessible:** High-contrast text ratios (WCAG AA compliant), standard minimum 44px tap targets, responsive adaptation down to 320px mobile viewports, and clear keyboard focus states.