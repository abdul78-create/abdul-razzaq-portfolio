"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { education } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function EducationSection() {
  return (
    <section id="education" style={{ background: "var(--color-bg)", padding: "6rem 0" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-description">
            My educational journey through computer science and engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "3rem" }}>
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "1.1875rem",
              top: "1.5rem",
              bottom: "1.5rem",
              width: "2px",
              background: "linear-gradient(to bottom, var(--color-blue), var(--color-blue-soft), var(--color-border))",
              borderRadius: "2px",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ position: "relative", display: "flex", gap: "1.75rem", alignItems: "flex-start" }}
              >
                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-3rem",
                    top: "0.875rem",
                    width: "2.375rem",
                    height: "2.375rem",
                    borderRadius: "50%",
                    background: edu.current ? "var(--color-blue)" : "#fff",
                    border: `3px solid ${edu.current ? "var(--color-blue)" : "var(--color-border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: edu.current ? "#fff" : "var(--color-text-muted)",
                    boxShadow: edu.current ? "0 0 0 4px rgba(37,99,235,0.12)" : "none",
                    zIndex: 1,
                  }}
                >
                  <GraduationCap size={14} />
                </div>

                {/* Card */}
                <div
                  className="card"
                  style={{
                    padding: "1.625rem",
                    width: "100%",
                    borderLeft: edu.current ? "3px solid var(--color-blue)" : "3px solid var(--color-border)",
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <div>
                      <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, marginBottom: "0.25rem", color: "var(--color-text)" }}>
                        {edu.institution}
                      </h3>
                      <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-blue)", margin: 0 }}>
                        {edu.degree}
                      </p>
                    </div>
                    {edu.current && (
                      <span
                        style={{
                          padding: "0.25rem 0.75rem",
                          background: "var(--color-blue-soft)",
                          borderRadius: "999px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--color-blue)",
                          height: "fit-content",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta row */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.875rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: edu.current ? "var(--color-blue)" : "var(--color-text)",
                        background: edu.current ? "var(--color-blue-soft)" : "var(--color-bg-alt)",
                        borderRadius: "6px",
                        padding: "0.2rem 0.625rem",
                      }}
                    >
                      🎓 {edu.grade}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
