"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  LightBulbIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Ljusdesign",
    description:
      "Professionell ljusdesign för alla typer av miljöer och evenemang. Vi skapar rätt stämning och atmosfär genom genomtänkt ljussättning.",
    icon: LightBulbIcon,
    features: [
      "Konsultation och konceptutveckling",
      "Teknisk planering och dokumentation",
      "Installation och programmering",
      "Efterjustering och optimering",
    ],
  },
  {
    name: "Projektledning",
    description:
      "Komplett projektledning från start till mål. Vi säkerställer att ditt projekt levereras i tid, inom budget och med högsta kvalitet.",
    icon: PresentationChartLineIcon,
    features: [
      "Projektplanering och budgetering",
      "Resursallokering och koordinering",
      "Kvalitetssäkring och uppföljning",
      "Dokumentation och rapportering",
    ],
  },
  {
    name: "Teknisk konsultation",
    description:
      "Expert rådgivning inom tekniska lösningar och implementation av ljusdesign. Vi hjälper dig att välja rätt utrustning och system.",
    icon: WrenchScrewdriverIcon,
    features: [
      "Teknisk specifikation",
      "Systemintegration",
      "Energioptimering",
      "Underhållsplanering",
    ],
  },
];

const features = [
  {
    name: "Erfaren personal",
    description:
      "Vårt team består av erfarna ljusdesigners och projektledare med bred kompetens.",
    icon: UserGroupIcon,
  },
  {
    name: "Snabb leverans",
    description:
      "Vi arbetar effektivt för att leverera projekt i tid och enligt överenskommelse.",
    icon: ClockIcon,
  },
  {
    name: "Kreativa lösningar",
    description:
      "Vi tänker utanför boxen för att skapa unika och innovativa ljuslösningar.",
    icon: SparklesIcon,
  },
];

export default function Services() {
  return (
    <main>
      <Navigation />
      <div className="relative isolate bg-gray-900/50">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Våra tjänster
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Vi erbjuder kompletta lösningar inom ljusdesign och
                projektledning. Upptäck våra tjänster nedan.
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
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                        <service.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {service.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{service.description}</p>
                      <ul role="list" className="mt-8 space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex gap-x-3">
                            <span className="text-amber-400">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>

            <div className="mx-auto mt-32 max-w-2xl sm:mt-40 lg:mt-48">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-amber-500">
                  Varför välja oss
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Expertis och kvalitet i varje projekt
                </p>
              </div>
              <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col"
                  >
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
