# PerfectMatchSchools Design Guidelines

## Design Approach

**System**: Material Design with LinkedIn/Indeed marketplace patterns
**Rationale**: Professional job marketplace requiring trust, clarity, and efficient information architecture. Material Design provides robust components for data-dense interfaces while maintaining accessibility and mobile-first principles.

## Typography

**Font Family**: 
- Primary: Inter or Roboto via Google Fonts CDN
- Headings: 600-700 weight
- Body: 400 weight
- UI elements: 500 weight

**Scale**:
- Hero/Page titles: text-4xl (mobile) → text-5xl (desktop)
- Section headers: text-2xl → text-3xl
- Card titles: text-lg → text-xl
- Body text: text-base
- Captions/metadata: text-sm
- Micro-copy: text-xs

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16
- Tight spacing: p-2, gap-2
- Standard spacing: p-4, gap-4, m-6
- Section spacing: py-8, py-12 (mobile → desktop)
- Large gaps: gap-8, mb-16

**Containers**:
- Mobile: px-4 (16px gutters)
- Desktop: max-w-6xl mx-auto px-8
- Chat/Messages: max-w-4xl

## Core Components

### Navigation
**Top Bar (Desktop)**:
- Fixed header with logo left, navigation center, user menu right
- Height: h-16
- Shadow: subtle bottom border

**Bottom Nav (Mobile)**:
- Sticky bottom navigation with 4-5 icons
- Height: h-16 with safe-area-inset-bottom
- Icons: Heroicons (Home, Search, Messages, Profile)
- Active state: filled icon variant

### Authentication Pages
- Centered card layout: max-w-md mx-auto
- Card padding: p-8
- Form spacing: space-y-6
- Input fields: h-12 with clear labels above
- CTA buttons: w-full h-12
- Social proof: "Join 1,000+ educators" below form

### Dashboard Layouts

**School Dashboard**:
- Header: Welcome message + quick stats (Open Jobs, Total Applications)
- Grid: 2-column on desktop, 1-column mobile
- Cards: Posted jobs list, Recent applications, Quick actions
- Card structure: p-6, rounded-lg, border

**Teacher Dashboard**:
- Header: Profile completion indicator
- Grid layout: Saved jobs, Applications status, Recommended jobs
- Job cards: Horizontal on mobile (flex-row), vertical on desktop
- Application status badges: rounded-full px-3 py-1

### Job Listings

**List View**:
- Card-based layout with gap-4
- Each card: p-4 (mobile) → p-6 (desktop)
- Structure per card:
  - School logo (h-12 w-12 rounded)
  - Job title (text-xl font-semibold)
  - School name + location (text-sm)
  - Key details row: Subject, Grade level, Type (flex-wrap gap-2)
  - Footer: Posted date + Salary range (justify-between)

**Detail Page**:
- Two-column on desktop (2/3 main content, 1/3 sidebar)
- Main: Job description, requirements, benefits (prose max-w-none)
- Sidebar: Apply button (sticky top-24), School info card, Similar jobs
- Mobile: Stack all content, sticky bottom apply bar

### Application Modal
- Full-screen on mobile, centered modal (max-w-2xl) on desktop
- Structure: 
  - Header with close button
  - Job summary card (p-4, border rounded)
  - Form: Cover letter (h-32 textarea), Resume upload
  - Footer: Cancel + Submit (justify-end gap-3)

### Chat Interface

**Conversations List**:
- Full height layout with search bar at top
- Each conversation: p-4, flex layout
- Avatar (h-12 w-12) + Content (name, last message preview, timestamp)
- Unread indicator: dot or count badge
- Dividers between conversations

**Message Thread**:
- Split view on desktop (list left, thread right)
- Full screen on mobile with back button
- Messages: max-w-xs to max-w-md bubbles
- Sent: items-end, Received: items-start
- Input bar: sticky bottom with textarea + send button (h-14)
- Timestamp grouping: text-xs text-center between message groups

## Form Elements

**Inputs**:
- Height: h-12
- Padding: px-4
- Rounded: rounded-lg
- Border: 2px with focus ring-2
- Labels: text-sm font-medium mb-2

**Buttons**:
- Primary CTA: h-12 px-6 rounded-lg font-medium
- Secondary: h-10 px-4 rounded-lg
- Icon buttons: h-10 w-10 rounded-full
- Disabled state: opacity-50 cursor-not-allowed

**Select/Dropdown**:
- Same height as inputs (h-12)
- Chevron icon right-aligned
- Use Shadcn Select component

## Data Display

**Job Cards**:
- Rounded: rounded-xl
- Border: border with hover elevation
- Tags: inline-flex gap-2, each tag rounded-full px-3 py-1 text-sm
- Metadata icons: Heroicons before text (MapPin, Clock, Currency)

**Status Badges**:
- Sizes: px-3 py-1 (default), px-2 py-0.5 (compact)
- Rounded: rounded-full
- States: Applied, Under Review, Accepted, Rejected

**Stats Display**:
- Grid: grid-cols-2 gap-4 (mobile) → grid-cols-4 (desktop)
- Each stat: text-3xl font-bold + text-sm label below

## Icons
**Library**: Heroicons via CDN
**Usage**:
- Navigation: 24px (h-6 w-6)
- Inline with text: 20px (h-5 w-5)
- Large feature icons: 48px (h-12 w-12)

## Images

**School Logos**:
- Consistent sizes: h-12 w-12 (lists), h-20 w-20 (detail pages)
- Rounded: rounded-lg
- Fallback: Initials in rounded container

**User Avatars**:
- Sizes: h-8 w-8 (small), h-10 w-10 (default), h-16 w-16 (profile)
- Rounded: rounded-full
- Fallback: Initials or user icon

**No hero images** - This is a utility-focused marketplace prioritizing efficiency over visual storytelling.

## Responsive Breakpoints
- Mobile-first: Base styles for mobile
- Tablet: md: (768px)
- Desktop: lg: (1024px)
- Wide: xl: (1280px)

## Accessibility
- All interactive elements: min-height 44px (tap target)
- Focus states: ring-2 on all interactive elements
- Form labels: Always visible, never placeholder-only
- ARIA labels: On icon-only buttons
- Color contrast: Maintain WCAG AA standards

## Animations
**Minimal and purposeful**:
- Page transitions: None (instant navigation)
- Hover states: Simple opacity or border changes
- Loading states: Spinner or skeleton screens
- Modal entry: Fade in (duration-200)
- No scroll-triggered animations