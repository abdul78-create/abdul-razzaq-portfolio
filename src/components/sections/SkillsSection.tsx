"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

type SkillGroup = {
  title: string;
  items: string[];
  emoji: string;
};

const groups: SkillGroup[] = [
  { title: "Programming Languages", items: skills.languages, emoji: "💻" },
  { title: "Web Technologies", items: skills.web, emoji: "🌐" },
  { title: "Frameworks & Libraries", items: skills.frameworks, emoji: "⚛️" },
  { title: "Databases & Data Tools", items: skills.databases, emoji: "🗄️" },
  { title: "Cloud & DevOps", items: skills.cloudDevops, emoji: "☁️" },
  { title: "Developer Tools", items: skills.tools, emoji: "🛠️" },
  { title: "Core CS Concepts", items: skills.cs, emoji: "📚" },
  { title: "Professional Strengths", items: skills.strengths, emoji: "🤝" },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background: "var(--color-bg-alt)", padding: "6rem 0" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-description">
            A curated overview of the technologies, tools, and concepts I use to build and ship software.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="card"
              style={{ padding: "1.5rem" }}
            >
              {/* Group header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  marginBottom: "1rem",
                  paddingBottom: "0.875rem",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <span style={{ fontSize: "1.25rem" }} aria-hidden="true">{group.emoji}</span>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-text)", margin: 0 }}>
                  {group.title}
                </h3>
              </div>

              {/* Skill chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.07 + ii * 0.04, duration: 0.3 }}
                    className="skill-chip"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
