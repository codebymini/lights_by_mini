"use client";
import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Image from "next/image";

// Importera bilderna från projekten
const projectImages = [
  // Charlie Caper
  "/images/charlie_caper/char_MB8123.jpg",
  "/images/charlie_caper/char_MB9645.jpg",
  "/images/charlie_caper/char_MB9695.jpg",
  "/images/charlie_caper/char_MB9725.jpg",
  "/images/charlie_caper/char_MB9735.jpg",
  // Dans 2007
  "/images/dans_2007/Dans_034.jpg",
  "/images/dans_2007/Dans_038.jpg",
  "/images/dans_2007/Dans_048.jpg",
  "/images/dans_2007/Dans_051.jpg",
  "/images/dans_2007/Dans_052.jpg",
  // Lena PH
  "/images/lena_ph/Still_1.jpg",
  "/images/lena_ph/Still_2.jpg",
  "/images/lena_ph/Still_3.jpg",
  "/images/lena_ph/Still_4.jpg",
  "/images/lena_ph/Still_5.jpg",
];

function BackgroundSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    console.log("Starting slideshow");
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex =
          prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1;
        console.log("Changing to image", newIndex, projectImages[newIndex]);
        return newIndex;
      });
    }, 6000); // Byt bild var 6:e sekund

    return () => clearInterval(interval);
  }, []);

  console.log(
    "Rendering slideshow, current image:",
    currentImageIndex,
    projectImages[currentImageIndex]
  );

  return (
    <div className="fixed inset-0 -z-[1]">
      {projectImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt="Bakgrundsbild"
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
      ))}
    </div>
  );
}

function SpotlightTitle() {
  const [mousePosition, setMousePosition] = React.useState({ x: 50, y: 50 });
  const titleRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const rect = titleRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative pb-4">
      {/* Baslager för texten */}
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-amber-700 absolute inset-0">
        Ljusdesign som skapar stämning
      </h1>

      {/* Spotlight-effekt lagret */}
      <h1
        ref={titleRef}
        className="text-4xl font-bold tracking-tight sm:text-6xl relative"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgb(255, 250, 232) 0%, rgb(254, 243, 199) 15%, rgb(252, 211, 77) 25%, rgb(245, 158, 11) 50%, rgb(146, 64, 14) 100%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 2px rgba(245, 158, 11, 0.3))",
          paddingBottom: "0.1em",
        }}
      >
        Ljusdesign som skapar stämning
      </h1>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <BackgroundSlideshow />
      <main className="relative z-[1]">
        <Navigation />

        {/* Hero Section */}
        <div className="relative px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <SpotlightTitle />
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Vi erbjuder professionell ljusdesign och projektledning för att
                skapa den perfekta atmosfären för ditt projekt.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/contact"
                  className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                  Kontakta oss
                </a>
                <a
                  href="/portfolio"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Se våra projekt <span aria-hidden="true">→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-amber-500">
                Våra tjänster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Allt inom ljusdesign och projektledning
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {services.map((service) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <dt className="text-xl font-semibold leading-7 text-white">
                      {service.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{service.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const services = [
  {
    name: "Ljusdesign",
    description:
      "Skapa rätt stämning och atmosfär genom professionell ljussättning för alla typer av projekt.",
  },
  {
    name: "Projektledning",
    description:
      "Komplett projektledning från koncept till genomförande med fokus på kvalitet och kundnöjdhet.",
  },
  {
    name: "Teknisk konsultation",
    description:
      "Expert rådgivning inom tekniska lösningar och implementation av ljusdesign.",
  },
];
