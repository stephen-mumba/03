import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const cards = [
    {
      title: "Card One",
      description: "Fresh design with a clean photo layout.",
      image: "/WhatsApp Image 2026-06-12 at 11.33.22.jpeg",
    },
    {
      title: "Card Two",
      description: "Bold visuals and modern styling.",
      image: "/WhatsApp Image 2026-06-12 at 10.06.59 (2).jpeg",
    },
    {
      title: "Card Three",
      description: "A vivid image card for your scroll section.",
      image: "/WhatsApp Image 2026-06-12 at 10.06.59 (3).jpeg",
    },
    {
      title: "Card Four",
      description: "Strong color contrast and easy readability.",
      image: "/WhatsApp Image 2026-06-12 at 10.06.59 (4).jpeg",
    },
    {
      title: "Card Five",
      description: "Perfect for showcasing visual content.",
      image: "/WhatsApp Image 2026-06-12 at 10.06.59 (5).jpeg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      // A return function for killing the animation on component unmount
      pin.kill();
    };
  }, []);
  return (
    <>
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {cards.map((card) => (
            <div key={card.title} className="scroll-section">
              <div className="card">
                <div className="card-image">
                  <Link
                    href={`/photo?src=${encodeURIComponent(card.image)}&title=${encodeURIComponent(
                      card.title
                    )}`}
                    aria-label={`Open ${card.title} in full screen`}
                  >
                    <img src={card.image} alt={card.title} />
                  </Link>
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default ScrollSection;
