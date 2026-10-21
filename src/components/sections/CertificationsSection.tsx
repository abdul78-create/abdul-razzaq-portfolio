"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const ISSUER_COLORS: Record<string, { bg: string; color: string }> = {
  Oracle: { bg: "#FFF7ED", color: "#C2410C" },
  iamneo: { bg: "#F0FDF4", color: "#15803D" },
};

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      style={{
        background: "var(--color-bg)",
        padding: "clamp(3rem, 5vw, 4.25rem) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.4 }} style={{ marginBottom: "1.75rem" }}>
          <span className="section-label">Certifications</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-description">
            Formal certifications that validate my skills in AI, databases, and programming.
          </p>
        </motion.div>

        {/* Certs grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.125rem",
          }}
        >
          {certifications.map((cert, i) => {
            const colors = ISSUER_COLORS[cert.issuer] ?? { bg: "var(--color-blue-soft)", color: "var(--color-blue)" };
            return (
              <motion.div
                key={cert.id}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card"
                style={{ padding: "1.25rem 1.375rem" }}
              >
                {/* Issuer badge */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                  <div
                    style={{
                      padding: "0.375rem 0.875rem",
                      background: colors.bg,
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: colors.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {cert.issuer}
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "var(--color-blue-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-blue)",
                    }}
                  >
                    <Award size={20} />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.625rem", color: "var(--color-text)" }}>
                  {cert.title}
                </h3>

                {/* Date */}
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", marginBottom: "1.25rem" }}>
                  {cert.date}
                </p>

                {/* Credential action */}
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: "0.375rem 0", fontSize: "0.8125rem" }}
                  >
                    <ExternalLink size={14} />
                    View Credential
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      fontStyle: "italic",
                    }}
                  >
                    Credential verification link coming soon
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
