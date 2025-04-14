"use client"

import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Team() {
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Zahra Cahya",
          designation: "Informatics Student at ITENAS",
          src: "/zahra.jpeg",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Ambar Wulandari",
          designation: "Informatics Student at ITENAS",
          src: "/ambar.jpeg",
        },
        {
          quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
          name: "Maysa Nusi",
          designation: "Informatics Student at ITENAS",
          src: "/agum.jpeg",
        },
        {
          quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
          name: "Usri Yusron",
          designation: "Informatics Student at ITENAS",
          src: "/gw.jpg",
        },
        {
          quote:
            "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
          name: "Risha Marshela",
          designation: "Informatics Student at ITENAS",
          src: "/risha.jepg",
        },
      ];
      return <AnimatedTestimonials testimonials={testimonials} />;
}