import Hero3D from "../components/Hero3D";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import {
  Code2,
  Palette,
  Cpu,
  Smartphone,
  Cloud,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Hero3D />
      <section className="container-xl py-16">
        <div className="reveal" data-reveal-delay="60">
          <SectionHeader
            title="Expertise"
            subtitle="Full-stack capabilities with robust delivery"
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Product Engineering",
              icon: <Code2 size={22} />,
              desc: "We build cloud-native applications featuring modular architecture, maintainable code quality, observability, and security-by-design practices.",
            },
            {
              title: "UI/UX Design",
              icon: <Palette size={22} />,
              desc: "Clean, accessible interfaces with strong typography and meaningful interactions that drive business outcomes.",
            },
            {
              title: "AI & Data",
              icon: <Cpu size={22} />,
              desc: "Pragmatic ML implementation, reliable data pipelines, and MLOps for a healthy model lifecycle.",
            },
            {
              title: "Mobile",
              icon: <Smartphone size={22} />,
              desc: "High-performance native and cross-platform applications adhering to platform standards and delivering a smooth user experience.",
            },
            {
              title: "Cloud & DevOps",
              icon: <Cloud size={22} />,
              desc: "Infrastructure as Code (IaC), monitoring/alerting, streamlined CI/CD, and SRE for reliability.",
            },
            {
              title: "Consulting",
              icon: <Layers size={22} />,
              desc: "Architecture reviews, security audits, and platform strategies ensuring long-term scalability.",
            },
          ]
            .slice(0, 3)
            .map((e, i) => (
              <div
                key={e.title}
                className="reveal"
                data-reveal-delay={`${i * 80}`}
              >
                <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                  <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                    {e.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                  <p className="text-neutral-600">{e.desc}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="reveal" data-reveal-delay="120">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 font-semibold hover:bg-neutral-50"
            >
              Lihat selengkapnya
            </Link>
          </div>
        </div>
      </section>

      <section className="container-xl py-16">
        <div className="reveal">
          <SectionHeader
            title="Featured Work"
            subtitle="Selected projects delivered with precision"
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              data-reveal-delay={`${i * 100}`}
            >
              <ProjectCard title={p.title} image={p.image} tags={p.tags} />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="reveal" data-reveal-delay="120">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-900 font-semibold hover:bg-neutral-50"
            >
              Lihat selengkapnya
            </Link>
          </div>
        </div>
      </section>

      <section className="container-xl py-16">
        <div className="reveal">
          <SectionHeader
            title="Why choose us"
            subtitle="Trusted by teams that value quality"
          />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Premium Design",
              icon: <Sparkles size={22} />,
              desc: "Elegant visuals with balanced layouts and fluid interactions that elevate trust and brand credibility.",
            },
            {
              title: "Engineering Excellence",
              icon: <Code2 size={22} />,
              desc: "Type-safe codebases, comprehensive testing, and disciplined CI/CD pipelines for predictable delivery.",
            },
            {
              title: "Security First",
              icon: <ShieldCheck size={22} />,
              desc: "Security-by-default practices, periodic reviews, and data protection prioritized at every phase.",
            },
          ].map((e, i) => (
            <div
              key={e.title}
              className="reveal"
              data-reveal-delay={`${i * 80}`}
            >
              <div className="rounded-2xl p-6 border border-neutral-200 bg-white shadow-soft">
                <div className="h-12 w-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-4">
                  {e.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                <p className="text-neutral-600">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="reveal">
        <Testimonials />
      </div>
    </div>
  );
}
