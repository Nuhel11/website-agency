export interface Project {
  title: string;
  slug: string; // New: used for the URL
  description: string;
  image: string;
  tags: string[];
  content: string; // New: The actual case study text
}

export const projects: Project[] = [
{
  title: "E-Commerce Rebrand",
  slug: "ecommerce-rebrand",
  description: "A custom-built Next.js storefront focused on performance and seamless Stripe integration.",
  image: "/project1.jpg", 
  tags: ["Next.js", "Stripe", "Tailwind", "TypeScript"],
  content: `
MY GOAL
I wanted to challenge myself to build a fully functional, high-performance e-commerce engine from scratch. My focus was to move away from heavy, slow templates and instead create a lightweight "Headless" storefront that prioritizes user experience and speed.

THE TECHNICAL CHALLENGE
The most difficult part of this project was managing the complex state of a shopping cart while ensuring that the page load times remained under one second. I spent a lot of time optimizing images and implementing "Server Components" in Next.js 15 to reduce the amount of JavaScript sent to the browser. 

HOW I BUILT IT
• Performance First: I used Next.js and Tailwind CSS to ensure the site was responsive and scored 100 on Google Lighthouse.
• Secure Payments: I integrated Stripe for the checkout flow, handling sensitive payment data securely through server-side webhooks.
• Modern Data Fetching: I used TypeScript to ensure data type safety and implemented pre-fetching so that product pages load instantly when a user hovers over them.

WHAT I LEARNED
This project taught me a lot about the balance between design and performance. I learned how to handle complex API integrations and the importance of "Core Web Vitals" in modern web development. Seeing a project go from a blank screen to a fully functioning store was incredibly rewarding.`
},
  {
  title: "SaaS Dashboard",
  slug: "saas-dashboard",
  description: "A real-time analytics platform using Server Actions and PostgreSQL.",
  image: "/project2.jpg", // Update with your actual image path
  tags: ["TypeScript", "Drizzle", "Charts", "Next.js"],
  content: `
THE INSPIRATION
I wanted to explore how modern web applications handle large amounts of data without sacrificing speed. Most dashboards feel slow because they fetch too much data at once, so I built this project to master efficient data streaming and real-time updates.

TECHNICAL ARCHITECTURE
This was my first deep dive into the "T3-stack" philosophy. I chose PostgreSQL as the foundation and used Drizzle ORM for type-safe database interactions.
• Real-Time Data: I implemented Next.js Server Actions to handle data mutations, which allowed me to keep the logic on the server while updating the UI instantly.
• Data Visualization: I integrated a charting library to turn raw JSON data into interactive, readable graphs.
• Database Design: I architected the schema to handle relational data efficiently, ensuring that even as the dataset grows, the query times remain low.

THE HARD PART
The biggest hurdle was "Optimistic Updates." I wanted the UI to update immediately when a user made a change, before the database even confirmed it. Figuring out how to sync the local state with the server without creating bugs was a major learning curve for me, but it resulted in a much smoother user experience.

KEY TAKEAWAYS
Building this dashboard solidified my understanding of Full-Stack development. I moved past just building "frontends" and learned how to manage a complete data lifecycle—from the database to the server, and finally to a beautiful, interactive user interface. It proved to me that TypeScript is essential for managing complex data structures without losing your mind.`
},
{
  title: "Portfolio for Architect",
  slug: "portfolio-architect",
  description: "A minimalist, image-heavy site optimized for Core Web Vitals.",
  image: "/project3.avif",
  tags: ["Next.js", "Framer Motion", "Tailwind"],
  content: `
THE VISION
As a Computer Science student, I often see portfolios that are cluttered. I wanted to build the "Portfolio for Architect" project to prove that I could create something minimalist yet technically complex. The goal was to build a site that felt like an art gallery—fast, silent, and visually driven.

TECHNICAL ACHIEVEMENTS
• Performance Engineering: I used this project to experiment with "Core Web Vitals." I optimized the Largest Contentful Paint (LCP) by using Next.js Image optimization and priority loading for hero sections.
• Fluid Animations: I implemented Framer Motion for smooth, high-end transitions. I had to ensure these animations didn't compromise the site's performance on lower-end mobile devices.
• Clean Architecture: I focused on writing highly reusable React components, applying the "DRY" (Don't Repeat Yourself) principle I've been learning in my CS coursework.

THE STUDENT PERSPECTIVE
This project was a major milestone for me. It was the first time I successfully integrated complex design requirements with strict performance constraints. It taught me that being a developer isn't just about making things work—it's about making them work beautifully and efficiently.`
},
];