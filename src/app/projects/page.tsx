"use client";
import * as React from "react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Charlie Caper",
    description:
      "Magisk ljusdesign för illusioner och scenkonst. Specialanpassad belysning som förstärker det mystiska och dramatiska i föreställningen.",
    images: [
      "/images/charlie_caper/char_MB8123.jpg",
      "/images/charlie_caper/char_MB9645.jpg",
      "/images/charlie_caper/char_MB9695.jpg",
      "/images/charlie_caper/char_MB9725.jpg",
      "/images/charlie_caper/char_MB9735.jpg",
    ],
  },
  {
    title: "Dans 2007",
    description:
      "Dynamisk ljussättning för dansföreställningar. Ljus som följer rörelser och skapar stämning på scenen.",
    images: [
      "/images/dans_2007/Dans_034.jpg",
      "/images/dans_2007/Dans_038.jpg",
      "/images/dans_2007/Dans_048.jpg",
      "/images/dans_2007/Dans_051.jpg",
      "/images/dans_2007/Dans_052.jpg",
    ],
  },
  {
    title: "Lena PH i Berwaldhallen",
    description:
      "Professionell ljusdesign för musikframträdanden. Elegant och stämningsfull belysning som kompletterar musiken.",
    images: [
      "/images/lena_ph/Still_1.jpg",
      "/images/lena_ph/Still_2.jpg",
      "/images/lena_ph/Still_3.jpg",
      "/images/lena_ph/Still_4.jpg",
      "/images/lena_ph/Still_5.jpg",
    ],
  },
];

const pastProjects = [
  { name: "Störst av allt", role: "Ljustekniker" },
  { name: "2Rent", role: "Teknisk säljare" },
  { name: "Den Flygande Holländaren, Folkoperan", role: "Belysningsmästare" },
  {
    name: "Jesus Christ Superstar, Göta Lejon",
    role: "Belysningsmästare",
  },
  { name: "Carmina Burana, Folkoperan", role: "Ljustekniker" },
  { name: "Maskeradbalen, Folkoperan", role: "Ljustekniker" },
  { name: "Make-Up Store Höstvisning", role: "Ljusdesign" },
  { name: "Dansmånad, Parkteatern", role: "Scentekniker" },
  { name: "127, Parkteatern", role: "Scenmästare" },
  { name: "Bra, är inte ordet, Parkteatern", role: "Scentekniker" },
  { name: "Fröken Julie", role: "Ljusanpassning" },
  { name: "Maria Möller, Villmans", role: "Ljustekniker/Operatör" },

  { name: "Charlie Caper, Maximteatern", role: "Ljustekniker" },
  { name: "Peter Jöback, Berwaldhallen", role: "Ljusdesign" },
  { name: "Sirqus Alfon, Riksteatern", role: "Turnétekniker" },
  { name: "Jonas Gardell - Mitt enda liv", role: "Ljustekniker" },

  { name: "Stockholm Stadsteater", role: "Belysningsmästare" },

  { name: "Folkoperan", role: "Belysningsmästare" },

  { name: "Guldknappen", role: "Projektledare/Teknisk Samordnare" },
  { name: "Sisyfos Back On Top", role: "Ljusoperatör/Ass. Ljusdesign" },
  { name: "Charlie Caper (Turné)", role: "Ljusoperatör/Ass. Ljusdesign" },
  { name: "Lena PH, Berwaldhallen", role: "Ljusdesign/Ljusoperatör" },
  {
    name: "Sweden Grand Prix Offshore",
    role: "Projektledare/Teknisk Samordnare",
  },
  { name: "Sissela Kyle (Turné)", role: "Turnetekniker/Chaufför" },
  { name: "Nobelmiddagen", role: "Tekniker" },
  { name: "Pelle Svanslös", role: "Belysningsmästare" },
  { name: "Dansmånad", role: "Tekniker" },
  { name: "Rökt", role: "Scenmästare/Ljudtekniker" },
  { name: "Figaros Bröllop", role: "Tekniker/Chaufför" },
  { name: "Danshögskolan", role: "Ljusdesign, Ljustekniker" },
  { name: "Sissela Kyle, Rival", role: "Belysningsmästare, Ljudtekniker" },
  { name: "Sune, Göta Lejon", role: "Belysningsmästare, Videotekniker" },
];

export default function Projects() {
  return (
    <main>
      <Navigation />
      <div className="relative isolate bg-gray-900/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Våra projekt
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Upptäck några av våra mest spännande projekt och se hur vi skapar
              unika ljusupplevelser för olika typer av föreställningar.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="relative w-full">
                  <div className="grid grid-cols-2 gap-2">
                    {project.images.slice(0, 4).map((image, imageIndex) => (
                      <div
                        key={image}
                        className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg ${
                          imageIndex === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - Bild ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <h3 className="text-lg font-semibold leading-6 text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-4 text-sm leading-6 text-gray-300">
                    {project.description}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Past Projects Section */}
          <div className="mx-auto mt-32 max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-amber-500 sm:text-3xl">
              Tidigare projekt
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Ett urval av projekt vi har arbetat med genom åren
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {pastProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col gap-2 rounded-lg bg-gray-900/30 p-6 ring-1 ring-white/10 transition-colors hover:bg-gray-900/50"
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400">{project.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
