"use client";
import React from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">
              Ljusdesign som skapar stämning
            </h1>
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
      <div className="bg-gray-900/50 py-24 sm:py-32">
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
