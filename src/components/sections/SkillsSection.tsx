"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { getTechIcon } from "@/components/ui/TechIcons";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

type SkillCategory = {
  title: string;
  items: string[];
  tagline: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: skills.languages,
    tagline: "Core syntax & algorithms",
  },
  {
    title: "Web Technologies",
    items: skills.web,
    tagline: "Modern markup & styling",
  },
  {
    title: "Frameworks and Libraries",
    items: skills.frameworks,
    tagline: "Scalable frontend & backend",
  },
  {
    title: "Databases and Data Tools",
    items: skills.databases,
    tagline: "Relational, document & cache stores",
  },
  {
    title: "Cloud and DevOps",
    items: skills.cloudDevops,
    tagline: "Containers, CI/CD & telemetry",
  },
  {
    title: "Developer Tools",
    items: skills.tools,
    tagline: "Productivity & environments",
  },
  {
    title: "Core Computer Science",
    items: skills.cs,
    tagline: "Foundational software principles",
  },
  {
    title: "Soft Skills",
    items: skills.strengths,
    tagline: "Professional engineering strengths",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ background: "var(--color-bg-alt)", padding: "6rem 0" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">SKILLS & TECHNOLOGIES</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="section-description">
            A comprehensive, categorized overview of programming languages, frameworks, cloud infrastructure, and core computer science competencies.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
          className="skills-category-grid"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              {...fadeUp}
              transition={{ duration: 0.45, delay: catIndex * 0.06 }}
              className="card skill-category-card"
              style={{
                padding: "1.625rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  paddingBottom: "0.875rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "var(--color-text)",
                    margin: 0,
                    marginBottom: "0.25rem",
                  }}
                >
                  {category.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--color-text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  {category.tagline}
                </span>
              </div>

              {/* Skill Items Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
                  gap: "0.625rem",
                }}
                className="skill-items-grid"
              >
                {category.items.map((skillName, itemIndex) => {
                  const Icon = getTechIcon(skillName);
                  return (
                    <motion.div
                      key={skillName}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.05 + itemIndex * 0.03,
                        duration: 0.25,
                      }}
                      tabIndex={0}
                      className="skill-item-card"
                      aria-label={skillName}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.625rem",
                        padding: "0.625rem 0.75rem",
                        background: "var(--color-bg)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-sm)",
                        transition: "all 0.2s ease",
                        outline: "none",
                        cursor: "default",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "26px",
                          height: "26px",
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--color-text)",
                          lineHeight: 1.35,
                          wordBreak: "break-word",
                        }}
                      >
                        {skillName}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-item-card:hover,
        .skill-item-card:focus-visible {
          border-color: var(--color-blue) !important;
          background: #ffffff !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12) !important;
          transform: translateY(-2px);
        }

        .skill-item-card:focus-visible {
          outline: 2px solid var(--color-blue);
          outline-offset: 2px;
        }

        @media (max-width: 640px) {
          .skills-category-grid {
            grid-template-columns: 1fr !important;
          }
          .skill-items-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 400px) {
          .skill-items-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
