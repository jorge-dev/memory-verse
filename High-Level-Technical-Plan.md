# Anniversary Website Plan (Version 3)

This version consolidates all previous concepts—**single-page main layout**, **additional routes**, **parallax** animations, and the new **“Time Since We Met”** feature. Below is a comprehensive plan detailing each section, page, layout concept, and potential animations to make your 10th-anniversary website a memorable, immersive experience.

---

## 1. Project Overview

1. **Framework & Stack**  
   - **Next.js (v15)**  
   - **TypeScript**  
   - **shadcn UI** for pre-styled React components  
   - **Tailwind CSS** for utility-first styling  

2. **Structure**  
   - **Single-Page Main Layout**: Hero, Time Since We Met, Timeline, Love Letter, and other optional romantic sections—unified by parallax transitions.  
   - **Additional Routes**: Gallery, Tribute/Guestbook, Easter Egg/Surprise, etc.  

3. **Design & Themes**  
   - Romantic color palette (soft pinks, warm golds, ivory, subtle floral or love-themed visuals).  
   - Elegant typography, mild gradients, and decorative flourishes (hearts, petals, swirling motifs).  
   - Smooth, subtle animations that reinforce the emotional tone without overwhelming users.

---

## 2. Single-Page Main Layout

Below is a high-level structure for the main page. Each section flows into the next using smooth scrolling and parallax backgrounds.

### 2.1 Landing (Hero) Section

- **Purpose**: Create an impactful first impression, set the romantic and celebratory mood.  
- **Content Ideas**:  
  - Full-screen background (photo or looped video) with parallax layering (the background moves slightly slower than the foreground on scroll).  
  - Centered text: *“A Decade of Love”*, *“Celebrating 10 Years Together”*.  
  - A “Scroll Down” arrow or button guiding visitors to the next section.  
- **Animation Suggestions**:  
  - Slight fade-in for the headline, timed to appear after the background.  
  - Optional small floating heart or petals that drift gently across the hero section for a whimsical touch.

---

### 2.2 Time Since We Met (Dynamic Count-Up)

- **Purpose**: Show how long you’ve been together, updating in real-time.  
- **Layout & Ideas**:  
  - Large, bold numeric display (e.g., “3,652 days, 12 hours, 45 minutes, 10 seconds”).  
  - Intro text like *“Together Since …”* or *“Our Love in Numbers”*.  
  - Subheading referencing the date you first met: *“Since the day we locked eyes...”*.  
- **Animation Suggestions**:  
  - Light scaling effect or gentle blinking of the colon (:) in the time display to convey liveliness.  
  - Subtle parallax background—for instance, a faint starry sky or soft glow that shifts as you scroll.

---

### 2.3 Interactive Timeline

- **Purpose**: Illustrate major milestones (wedding, trips, children, etc.) in chronological order.  
- **Layout & Ideas**:  
  - Vertical or horizontal progression. Each milestone includes a date, short description, and small photo/icon.  
  - Section heading like *“Our Journey So Far”*.  
- **Animation Suggestions**:  
  - Each milestone card slides or fades in as the user scrolls.  
  - A connecting line that draws itself while scrolling (if vertical), symbolizing continuity.

---

### 2.4 Memory Lane Slideshow

- **Purpose**: Highlight mini-stories or moments in a more visual, less structured format than the timeline.  
- **Layout & Ideas**:  
  - A horizontal carousel or “filmstrip” featuring short, bite-sized memories.  
  - Each slide could include a small photo, date, and humorous or heartfelt anecdote.  
  - Auto-rotation with navigation arrows to let users browse at their own pace.  
- **Animation Suggestions**:  
  - Smooth sliding transitions.  
  - Soft zoom on images when they become the active slide.

---

### 2.5 “10 Reasons I Love You” (or X Reasons)

- **Purpose**: Give a heartfelt breakdown of specific traits or moments you cherish.  
- **Layout & Ideas**:  
  - Each reason can be displayed as a numbered card or panel.  
  - Short descriptive text: e.g., “Your unwavering support,” “How you make me laugh at the silliest things.”  
  - Optionally, add small icons or emotive images (like a tiny laughing face for “laughter”).  
- **Animation Suggestions**:  
  - Sequential fade-in for each reason.  
  - Gentle hover effect highlighting each card when hovered.

---

### 2.6 Love Letter / Personal Message

- **Purpose**: Provide a direct, sincere expression of your feelings to your spouse.  
- **Layout & Ideas**:  
  - Single, centered column with an elegant, script-like font for the letter.  
  - Pastel or softly tinted background with subtle floral or lace-like motifs.  
  - Optional audio note or track of soft music that plays if the user opts in.  
- **Animation Suggestions**:  
  - Fade-up effect for each paragraph as the user scrolls.  
  - Slow-floating decorative elements (hearts, petals, or ring icons) in the background.

---

### 2.7 Future Plans / Vision Board

- **Purpose**: Outline dreams and aspirations for the next 10 years and beyond.  
- **Layout & Ideas**:  
  - Grid or timeline showing future milestones: traveling, family goals, joint projects, personal achievements.  
  - Headline: *“Looking Ahead”* or *“Our Next Chapter”*.  
- **Animation Suggestions**:  
  - Each future goal item appears with a short bounce or scale-up animation.  
  - A gently shifting background gradient that symbolizes optimism and growth.

---

### 2.8 Footer

- **Purpose**: Concludes the single-page experience.  
- **Layout & Ideas**:  
  - A minimal strip with names, an anniversary date, a small tagline like *“Ten Years and Counting”*.  
  - Optional social media links or a final “Thank You for Visiting” note.  
- **Animation Suggestions**:  
  - A final parallax shift as you reach the bottom, revealing decorative elements (floral border, ring icons, hearts).

---

## 3. Additional Pages & Routes

While the main story unfolds on a single scrollable page, you can link to extra routes for more robust or interactive content.

### 3.1 Photo Gallery

- **Route**: `/gallery`  
- **Purpose**: Show a more extensive album beyond the highlights on the main page.  
- **Layout & Ideas**:  
  - Masonry or grid layout, possibly sorted by year or theme (“Wedding,” “Vacations,” “Daily Life,” etc.).  
  - Clicking images opens a larger slideshow or lightbox.  
- **Animation Suggestions**:  
  - Images gently fade or scale in as the user scrolls or filters them.  
  - Hover effects that lightly zoom or rotate the photo thumbnail.

---

### 3.2 Tribute / Guestbook

- **Route**: `/tribute` or `/guestbook`  
- **Purpose**: Let friends/family post short messages or tributes for your anniversary.  
- **Layout & Ideas**:  
  - A friendly form collecting name, message, and optional photo or emoji.  
  - Display messages in chronological order or a mosaic of tributes.  
- **Animation Suggestions**:  
  - Subtle expansion of a new message card as it’s added.  
  - Confetti effect or small heart float-in to celebrate a new entry.

---

### 3.3 Easter Egg / Surprise

- **Route**: `/surprise` (hidden link or code)  
- **Purpose**: Add a secret, whimsical treat—a video, collage, or game.  
- **Layout & Ideas**:  
  - Potentially a montage of goofy or tender clips not shown elsewhere.  
  - A small puzzle or “click-the-heart” game that triggers a personalized message.  
- **Animation Suggestions**:  
  - Dramatic reveal or burst effect once the user cracks the secret link.  
  - Could sync with a fun audio snippet (laugh track, confetti pop sound, etc.).

---

## 4. Parallax & Animation Suggestions

- **Layered Parallax**  
  - Hero background, mid-layer patterns (soft shapes or abstract swirls), and foreground text moving at different speeds.  
  - Add parallax images or backgrounds behind each major section divider, so as you scroll, images shift gracefully.
- **Smooth Scroll**  
  - Use a gentle, decelerated scrolling behavior for transitions between sections.  
  - Each new section can fade in or slide up from below the fold.
- **Subtle Hover & Click Effects**  
  - Make interactive elements (buttons, cards, images) respond with micro-animations (scale, color shift, shadow pop).  
  - Ensures the site feels polished and dynamic.

---

## 5. Timeline & Tasks

Below is a proposed schedule; adapt it to your actual availability:

1. **Week 1: Setup & Initial Design**  
   - Initialize Next.js project.  
   - Configure Tailwind CSS and shadcn UI.  
   - Define color palette, fonts, and overall design scheme (romantic, elegant).
2. **Week 2: Core Single-Page Sections**  
   - Create Hero, Time Since We Met, Timeline, Love Letter, Future Plans, and Footer.  
   - Implement parallax backgrounds and basic animations.  
   - Add placeholder text and images for initial testing.
3. **Week 3: Additional Routes & Final Polish**  
   - Build out `/gallery`, `/tribute`, and `/surprise` pages.  
   - Test interactions, refine animations, and finalize visual consistency.  
   - Deploy to a hosting platform (e.g., Vercel) and share with friends/family.

---

## 6. Wrap-Up & Additional Romantic Touches

- **Interactive Elements**: Add playful microgames or hover-based reveals (e.g., hidden hearts that appear on certain sections).  
- **Themed Icons & Decorations**: Consider custom icons that represent your journey—wedding rings, plane icons for trips, little houses for shared homes, etc.  
- **Personal Narration**: If you feel comfortable, record a short audio commentary or mini “podcast” snippet to guide your wife through each milestone.  
- **Future-Proofing**: Keep the content easily updatable so you can celebrate each new anniversary or major life event by adding new slides or timeline entries.
