"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { training } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function TrainingSection() {
  return (
    <section
      id="training"
      style={{
        background: "var(--color-bg-alt)",
        padding: "clamp(3rem, 5vw, 4.25rem) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.4 }} style={{ marginBottom: "1.75rem" }}>
          <span className="section-label">Training</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Training</span>
          </h2>
          <p className="section-description">
            Structured programs that deepened my practical engineering skills.
          </p>
        </motion.div>

        {/* Training cards */}
        {training.map((t, i) => (
          <motion.div
            key={t.id}
            {...fadeUp}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card"
            style={{
              padding: "1.375rem 1.5rem",
              borderLeft: "4px solid var(--color-blue)",
            }}
          >
            {/* Top row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.25rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: "var(--color-blue-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-blue)",
                    flexShrink: 0,
                  }}
                >
                  <BookOpen size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.375rem", color: "var(--color-text)", lineHeight: 1.3 }}>
                    {t.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>
                    <Calendar size={13} />
                    {t.period}
                  </div>
                </div>
              </div>

              <div>
                {t.certificateUrl ? (
                  <a
                    href={t.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}
                  >
                    <ExternalLink size={14} />
                    Certificate
                  </a>
                ) : (
                  <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", fontStyle: "italic" }}>
                    Certificate pending
                  </span>
                )}
              </div>
            </div>

            {/* Focus areas */}
            <div>
              <h4 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "0.75rem" }}>
                Focus Areas
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {t.focus.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                    <ChevronRight size={14} style={{ color: "var(--color-blue)", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Associated project */}
            {t.project && (
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                <span>Associated Project:</span>
                <span
                  style={{
                    fontWeight: 600,
                    color: "var(--color-blue)",
                    background: "var(--color-blue-soft)",
                    padding: "0.2rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.8125rem",
                  }}
                >
                  {t.project}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
