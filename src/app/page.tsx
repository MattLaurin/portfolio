"use client";

import Section from "./components/Section";
import Nav from "./components/Nav";
import IconLink from "./components/IconLink";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillsMarquee from "./components/SkillsMarquee";
import { byCategory, type ProjectCategory } from "@/lib/projects";

import { Linkedin, Github, Mail, FileText, MapPin } from "lucide-react";
import { useState } from "react";

type Tab = ProjectCategory;


export default function Page() {
  const [tab, setTab] = useState<Tab>("jobs");

  return (
    <>
      <Nav />

      <Section id="home" className="pt-28">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">Matthieu Laurin</h1>
          <p className="mt-2 inline-flex items-center gap-2 text-white/70">
            <span>🇨🇦</span> Based in Canada
          </p>

          <h2 className="mx-auto mt-10 max-w-5xl text-6xl font-extrabold leading-[1.05] tracking-tight md:text-8xl">
            SOFTWARE<br/>ENGINEERING<br/>STUDENT
          </h2>

          <div className="mt-10 flex items-center justify-center gap-4">
            {/* <IconLink href="https://www.linkedin.com/in/matthieulaurin/" label="LinkedIn"><Linkedin/></IconLink> */}
            <IconLink href="https://www.linkedin.com/feed/" label="LinkedIn"><Linkedin/></IconLink>
            <IconLink href="https://github.com/mattLaurin" label="GitHub"><Github/></IconLink>
            <IconLink href="mailto:matthieu.laurin.1@ens.etsmtl.ca" label="Email"><Mail/></IconLink>
            {/* <IconLink href="/cv.pdf" label="CV"><FileText/></IconLink> */}
          </div>
        </div>
      </Section>

      <Section id="about">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-5xl font-extrabold">Matthieu Laurin </h2>
          <p className="mt-4 text-lg text-white/80">
          </p>

          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="card p-6 col-span-12 lg:col-span-8">
              <h3 className="text-xl font-semibold border-b border-white">About me </h3>
              <p className="mt-3 text-white/70">
                Software engineering student at ÉTS with a growing interest in Artificial Intelligence and Cybersecurity.
                Skilled in full-stack programming, automation, optimization, and collaborative projects. Recognized for adaptability, strong problem-solving abilities, and delivering impactful projects.
              </p>
              {/* <div className="mt-5 flex gap-3">
                <a className="btn-ghost" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} /> View CV
                </a>

                <a className="btn-primary" href="/cv-download">
                  Download CV
                </a>
              </div> */}
            </div>

            <div className="card p-6 col-span-12 lg:col-span-4 lg:col-start-9">
              <h3 className="text-xl font-semibold border-b border-white">Education</h3>
              <div className="mt-4 space-y-1">
                <p className="font-semibold"> Software Engineering Bachelor's Degree </p>
                <p className="text-white/70">ÉTS — 2023 – Present</p>
              </div>
              <div className="mt-4 space-y-1"> 
                <p className="font-semibold">DEC Computer Science & Mathematics</p>
                <p className="text-white/70">College Lionel-Groulx - 2021 - 2023 </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <SkillsMarquee />
          </div>
        </div>
      </Section>

      <Section id="projects">
  <div className="mx-auto max-w-6xl">
    <h2 className="text-6xl font-extrabold">PROJECTS</h2>
    <p className="mt-4 text-white/80">Browse by category.</p>

    <div className="mt-6 flex w-full gap-3">
      {[
        { k: "jobs" as Tab, label: "Jobs" },
        { k: "school" as Tab, label: "School Projects" },
        { k: "personal" as Tab, label: "Personal Projects" },
      ].map(({ k, label }) => (
        <button
          key={k}
          onClick={() => setTab(k)}
          className={`btn-ghost ${tab === k ? "bg-white/15" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-6 grid gap-5 md:grid-cols-3">
      {byCategory(tab).map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          description={p.summary}
          image={p.image}
          href={`/projects/${p.slug}`}
        />
      ))}
    </div>
  </div>
</Section>


      <Section id="contact" className="pb-0">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,.35)]">
            <h3 className="text-2xl font-bold">Let&apos;s collaborate</h3>
            <p className="mt-2 text-white/70">
              I’m open to internships, freelance, and cool side projects.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn-primary" href="mailto:matthieu.laurin.1@ens.etsmtl.ca">Email me</a>
              {/* <a className="btn-ghost" href="https://www.linkedin.com/in/matthieulaurin/" target="_blank" rel="noreferrer">
                <MapPin size={16}/> Montreal, Canada
              </a> */}
              <a className="btn-ghost" href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                <MapPin size={16}/> Montreal, Canada
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </Section>
    </>
  );
}
