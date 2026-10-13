"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Puzzle } from "lucide-react";
import { about, personal } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Cloud, Brain, Puzzle,
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{ background: "var(--color-bg-alt)", padding: "6rem 0" }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about building <span className="gradient-text">impactful software</span>
          </h2>
          <p className="section-description">
            {about.bio}
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: bio + info */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              {about.bio}
            </p>
            <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              {about.extended}
            </p>

            {/* Quick info */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.875rem",
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
                    padding: "0.875rem 1rem",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </span>
                  {"isEmail" in item && item.isEmail ? (
                    <a
                      href={`mailto:${item.value}`}
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--color-blue)",
                        wordBreak: "break-all",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-text)" }}>
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
                gap: "1rem",
              }}
            >
              {about.focuses.map((focus, i) => {
                const Icon = iconMap[focus.icon] ?? Code2;
                return (
                  <motion.div
                    key={focus.title}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                    className="card"
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.875rem",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "var(--color-blue-soft)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-blue)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.375rem" }}>
                        {focus.title}
                      </h3>
                      <p style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", lineHeight: 1.65, margin: 0 }}>
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
          }
        }
      `}</style>
    </section>
  );
}
