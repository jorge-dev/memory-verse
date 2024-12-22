# High-Level Technical Plan for 10th Wedding Anniversary Website

Below is a structured plan to build a romantic and modern anniversary website using **Next.js** and **shadcn**. The project is broken down into features, site structure, and a proposed 3-week timeline. Code examples with syntax highlighting are included to illustrate some of the core implementation details.

---

## 1. Detailed Description of Each Feature & Section

1. **Landing Page**  
   - **Hero Section**: Displays a large, romantic header image and a welcoming headline (e.g., *“A Decade of Love”*).  
   - **Call-to-Action (CTA)**: A button leading to the main content, such as “Explore Our Story.”

2. **Our Story Timeline**  
   - Interactive timeline showcasing important milestones (wedding day, honeymoon, kids, special trips).  
   - Each milestone includes a short description, date, and optional small image or icon.  
   - Potential for animated transitions to make it feel modern and engaging.

3. **Photo Gallery**  
   - A grid or mosaic layout that elegantly displays a curated set of memorable photos.  
   - Clicking on a photo opens a modal with a larger view and optional caption.

4. **Love Letter / Message Section**  
   - A dedicated section to display a personal letter, poem, or heartfelt message to your wife.  
   - Possibly includes audio or voice notes for an extra romantic touch (optional).

5. **Guestbook or Tribute Section (Optional)**  
   - A section where friends or family can write short messages or tributes.  
   - If you choose to include this, you’ll need simple form handling. Could be stored in a database or a static JSON file if you want to keep it minimal.

6. **Surprise / Easter Egg**  
   - A hidden page or pop-up that reveals a special video or collage.  
   - Could be triggered by a secret link or a specific user action (e.g., clicking a special icon).

7. **Footer**  
   - Subtle branding with your names, the wedding date, and a small note like *“10 Years & Counting”*.  
   - Links to any social media (if relevant).

---

## 2. Breakdown of the Overall Structure

Below is a possible file structure following the **Next.js 13 App Router** convention with **shadcn/ui**. If you are still using the `pages` directory approach, you can adapt the structure accordingly.

```bash
my-anniversary-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx               # Landing page
│   ├── story/
│   │   └── page.tsx           # "Our Story" timeline
│   ├── gallery/
│   │   └── page.tsx           # Photo gallery
│   ├── letter/
│   │   └── page.tsx           # Love letter or message section
│   ├── guestbook/ (Optional)
│   │   ├── page.tsx           # Guestbook page
│   │   └── api/submit.ts      # API route for form submission
│   ├── surprise/
│   │   └── page.tsx           # Hidden or Easter Egg page
│   └── globals.css            # Global styles
├── components/                # Reusable components
│   ├── Hero.tsx
│   ├── Timeline.tsx
│   ├── GalleryGrid.tsx
│   ├── Modal.tsx
│   └── ...
├── lib/                       # Utility functions or helpers
├── public/                    # Static images and assets
├── shadcn-ui.config.js        # shadcn/ui configuration
├── package.json
└── tsconfig.json
```

### Notable Components

- **Hero.tsx**: A hero banner component (using `shadcn/ui`) for the landing page.
- **Timeline.tsx**: Renders an interactive timeline with animations.
- **GalleryGrid.tsx**: Displays photos in a modern grid layout using shadcn styling or a library like `react-photo-gallery`.
- **Modal.tsx**: A modal component for enlarged images or additional messages.
- **Forms**: If you include a guestbook, create a small form for users to leave messages and store them in a simple database or JSON.

---

## 3. Proposed Breakdown of Tasks & Timeline (3 Weeks)

Below is a suggested schedule to complete the project in **3 weeks**:

### Week 1: Setup & Basic Structure

1. **Project Setup (Day 1)**  
   - Initialize the Next.js project:  

     ```bash
     npx create-next-app@latest my-anniversary-website
     ```

   - Install dependencies for `shadcn/ui`:  

     ```bash
     npm install shadcn/ui
     ```

   - Configure `shadcn/ui` in your `shadcn-ui.config.js` (or equivalent config).
   - Set up GitHub repository (optional but recommended).
2. **Basic Layout & Routing (Days 2-3)**  
   - Create the `layout.tsx` and define the overall site layout (header, footer, global CSS).
   - Set up pages for **Landing**, **Our Story**, **Gallery**, **Letter**, and **Guestbook** (optional).
3. **Styling & Theme Setup (Days 4-5)**  
   - Decide on a color palette (romantic tones, e.g., soft pinks, golds, whites).  
   - Configure the theming if necessary (e.g., customizing `shadcn` components).
   - Create a consistent design style across pages.

### Week 2: Core Features & Content

1. **Our Story Timeline (Days 1-2)**  
   - Implement a **Timeline** component with smooth animations.  
   - Dynamically load milestones from a JSON file or inline data.
2. **Photo Gallery (Days 3-4)**  
   - Build the **GalleryGrid** component.  
   - Allow click-to-open a **Modal** for a larger view.  
   - Optimize images for performance (Next.js `Image` component).
3. **Love Letter / Message Section (Days 5-6)**  
   - Create a dedicated page with a heartfelt message.  
   - Optionally add a background audio player or voice note.

### Week 3: Additional Sections, Polishing, and Deployment

1. **Guestbook (Optional) (Days 1-2)**  
   - Set up a simple form to capture messages.  
   - Store messages in a file or a lightweight database (e.g., SQLite or a serverless DB).  
   - Handle basic validations (e.g., required name and message fields).
2. **Surprise / Easter Egg (Days 3-4)**  
   - Implement a hidden route or clickable element that unveils a special collage or video.  
   - Add a subtle animation or playful effect for discovery.
3. **Polish & Deployment (Days 5-7)**  
   - Test on different devices (mobile, tablet, desktop) to ensure responsiveness.  
   - Check performance, accessibility, and SEO.  
   - Deploy to a platform like **Vercel**.  
   - Purchase a custom domain if desired.

---

## Code Snippets & Examples

### Example Landing Page (`app/page.tsx`)

```tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Example import from shadcn/ui
import Image from 'next/image';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      {/* Hero section */}
      <Hero
        title="A Decade of Love"
        subtitle="Celebrate 10 Years of Our Journey"
        backgroundImage="/hero-background.jpg"
      />

      {/* Call-to-Action button */}
      <Button variant="default" className="mt-8">
        <a href="/story">Explore Our Story</a>
      </Button>
    </main>
  );
}
```

### Example Timeline Component (`components/Timeline.tsx`)

```tsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // shadcn/ui example

type TimelineEvent = {
  year: string;
  description: string;
  image?: string;
};

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <Card key={index} className="flex items-center space-x-4">
          <div className="w-1/3 p-4">
            {event.image && (
              <img src={event.image} alt={event.description} className="rounded" />
            )}
          </div>
          <CardContent className="w-2/3">
            <h3 className="text-lg font-semibold">{event.year}</h3>
            <p>{event.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
```

### Example Modal for Photo Gallery (`components/Modal.tsx`)

```tsx
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-screen-sm">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
```

---

## Potential Edge Cases & Error Handling

1. **Image Loading Errors**: Large images may fail to load or cause slow performance. Consider compressing images or using Next.js `Image` for optimization.  
2. **Form Validation**: If you add a guestbook, ensure required fields are validated to avoid empty or malformed submissions.  
3. **API Rate Limits**: If hosting on a free tier or serverless solution, be mindful of any rate limits for form submissions.  
4. **Accessibility**: Add alt text for images, proper aria labels, and use semantic HTML elements to ensure an inclusive experience.  
5. **Secrets / Private Pages**: If certain pages should remain hidden, consider password protecting or using a hidden route.  
6. **Audio / Video Formats**: If adding audio or video, ensure cross-browser compatibility (e.g., `.mp4` or `.webm` for video, `.mp3` or `.ogg` for audio).

---

## References

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)  
- **shadcn/ui Documentation**: [https://ui.shadcn.com](https://ui.shadcn.com)

---

## Assumptions

- You have a functioning Node.js environment (v16+).  
- You are comfortable deploying the final build to a platform such as **Vercel**.  
- You have at least a basic design concept (colors, fonts) in mind to align with a romantic theme.

---

## Security Considerations

- If including a guestbook form, sanitize inputs and avoid storing any sensitive user data.  
- Use HTTPS when deploying publicly to protect any personal data or messages.

---

## Caveats / Final Thoughts

- Keep the site simple and personal—overly complex animations might distract from the emotional message.  
- Test on various devices to ensure the best user experience for your wife and any guests.  
- Be mindful of performance; images and videos can slow down loading if not optimized properly.

**With this plan and timeline, you should be well on your way to creating a heartfelt, modern, and interactive anniversary website in just three weeks. Good luck, and enjoy surprising your wife with this special project!**
