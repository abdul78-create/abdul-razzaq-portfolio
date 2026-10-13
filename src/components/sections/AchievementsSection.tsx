"use client";

import { motion } from "framer-motion";
import { Trophy, Rocket, Star, ExternalLink } from "lucide-react";
import { achievements } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const TYPE_CONFIG: Record<string, { Icon: React.ComponentType<{ size?: number; className?: string }>; bg: string; color: string; emoji: string }> = {
  Competition: { Icon: Trophy, bg: "#FFF7ED", color: "#C2410C", emoji: "🏆" },
  Hackathon: { Icon: Rocket, bg: "#EFF6FF", color: "#1D4ED8", emoji: "🚀" },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" style={{ background: "var(--color-bg-alt)", padding: "6rem 0" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Achievements & Hackathons</span>
          <h2 className="section-title">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-description">
            Competitions, hackathons, and recognition that reflect my growth as an engineer.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {achievements.map((item, i) => {
            const config = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.Hackathon;
            const { Icon } = config;
            return (
              <motion.div
                key={item.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card"
                style={{ padding: "1.75rem" }}
              >
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      padding: "0.375rem 0.875rem",
                      background: config.bg,
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: config.color,
                    }}
                  >
                    {item.type}
                  </div>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: config.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: config.color,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.625rem", color: "var(--color-text)" }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {item.description}
                </p>

                {/* Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-muted)",
                      fontWeight: 500,
                    }}
                  >
                    📅 {item.date}
                  </span>
                  {item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      style={{ padding: "0.25rem 0.5rem", fontSize: "0.8125rem" }}
                    >
                      <ExternalLink size={13} />
                      Certificate
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", fontStyle: "italic" }}>
                      Certificate pending
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
