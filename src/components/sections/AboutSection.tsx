"use client";

import { motion } from "framer-motion";
import { Cloud, GitBranch, Boxes, Activity, Code2, Brain } from "lucide-react";
import { about, personal } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Cloud,
  Workflow: GitBranch,
  GitBranch,
  Boxes,
  Activity,
  Code2,
  Brain,
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20px" },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "var(--color-bg-alt)",
        padding: "clamp(3rem, 5vw, 4.25rem) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "1.75rem" }}
        >
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-title">
            Focused on <span className="gradient-text">Cloud &amp; DevOps Engineering</span>
          </h2>
          <p className="section-description">
            {about.intro}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: supporting text + quick info */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
                fontSize: "0.9375rem",
              }}
            >
              {about.supporting}
            </p>

            {/* Quick info */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.625rem",
              }}
            >
              {[
                { label: "University", value: "Lovely Professional University" },
                { label: "Degree", value: "B.Tech CSE" },
                { label: "Location", value: "Phagwara, Punjab" },
                { label: "Email", value: personal.email, isEmail: true },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.625rem 0.875rem",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {item.label}
                  </span>
                  {"isEmail" in item && item.isEmail ? (
                    <a
                      href={`mailto:${item.value}`}
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--color-blue)",
                        wordBreak: "break-all",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--color-text)",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: focus areas */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
              }}
              className="about-focus-grid"
            >
              {about.focuses.map((focus, i) => {
                const Icon = iconMap[focus.icon] ?? Cloud;
                return (
                  <motion.div
                    key={focus.title}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="card"
                    style={{
                      padding: "1.125rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: "var(--color-blue-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-blue)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 700,
                          marginBottom: "0.25rem",
                          color: "var(--color-text)",
                        }}
                      >
                        {focus.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        {focus.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .about-focus-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
