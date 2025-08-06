export const testimonials = [
  {
    name: "Sarah Chen",
    handle: "TechFlow",
    image: "/testimonials/sarah_chen.jpg",
    content:
      "SaaS Forge helped us launch our MVP in just 3 days instead of 3 weeks. The auth system and database setup just worked out of the box. Perfect for early-stage startups.",
    url: "/aa.jpg",
  },
  {
    name: "Marcus Rodriguez",
    handle: "StartupLab",
    image: "/testimonials/marcus_rodriguez.jpg",
    content: "The TypeScript integration is flawless. Finally, a starter that doesn't compromise on type safety while being incredibly fast to set up.",
    url: "#",
  },
  {
    name: "Emma Thompson",
    handle: "@emmathompson_dev",
    image: "/testimonials/emma_thompson.jpg",
    content:
      "I've tried dozens of Next.js starters, but SaaS Forge is the only one that comes with production-ready patterns. The Convex integration is brilliant.",
    url: "#",
  },
  {
    name: "David Kim",
    handle: "@davidkim_builds",
    image: "/testimonials/david_kim.jpg",
    content: "Best SaaS starter I've ever used. Clean code, great documentation, and it scales beautifully.",
    url: "#",
  },
  {
    name: "Lisa Wang",
    handle: "DevCorp Solutions",
    image: "/testimonials/lisa_wang.jpg",
    content:
      "The error monitoring with Sentry integration saved us hours of debugging. This starter thinks of everything a production app needs.",
    url: "#",
  },
  {
    name: "Alex Johnson",
    handle: "@alexjohnson",
    image: "/testimonials/alex_johnson.jpg",
    content: "Deployed our SaaS in under an hour. The authentication flows are polished and the data layer is robust.",
    url: "#",
  },
  {
    name: "Priya Patel",
    handle: "InnovateTech",
    image: "/testimonials/priya_patel.jpg",
    content: "Finally, a starter that doesn't require weeks of setup. SaaS Forge is opinionated in all the right ways.",
    url: "#",
  },
  {
    name: "Tom Wilson",
    handle: "@tomwilson_dev",
    image: "/testimonials/tom_wilson.jpg",
    content: "The edge-ready architecture and App Router setup is exactly what modern SaaS needs. Incredibly well thought out.",
    url: "#",
  },
  {
    name: "Rachel Green",
    handle: "BuildFast Inc",
    image: "/testimonials/rachel_green.jpg",
    content:
      "Used SaaS Forge for our latest product launch. The real-time features with Convex worked flawlessly from day one. Highly recommend!",
    url: "#",
  },
  {
    name: "Jason Lee",
    handle: "@jasonlee_code",
    image: "/testimonials/jason_lee.jpg",
    content: "This is how all SaaS starters should be built. Clean, fast, and production-ready. No more reinventing the wheel.",
    url: "#",
  },
  {
    name: "Sophie Martin",
    handle: "GrowthHack Studio",
    image: "/testimonials/sophie_martin.jpg",
    content:
      "The developer experience is outstanding. Hot reloading, type safety, and zero-config deployment. Everything just works.",
    url: "#",
  },
  {
    name: "Ryan Cooper",
    handle: "@ryancooper_dev",
    image: "/testimonials/ryan_cooper.jpg",
    content: "Been using SaaS Forge for 6 months now. It scales beautifully and the patterns are spot-on for enterprise needs.",
    url: "#",
  },
] as const;

export type Testimonial = {
  name: string;
  handle: string;
  image: string;
  content: string;
  url: string;
};