"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/portfolio";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const contactLinks = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: "Best way to reach me",
    color: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    id: "contact-github",
    icon: GithubIcon,
    label: "GitHub",
    value: "abdul78-create",
    href: personal.github,
    description: "Check out my repositories",
    color: "#F9FAFB",
    iconColor: "#111827",
    external: true,
  },
  {
    id: "contact-linkedin",
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "abdulrazzaq78",
    href: personal.linkedin,
    description: "Connect with me professionally",
    color: "#EFF6FF",
    iconColor: "#0A66C2",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--color-bg)",
        padding: "clamp(3rem, 5vw, 4.25rem) 0",
      }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.4 }}
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 1.75rem" }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-description" style={{ maxWidth: "none" }}>
            I&apos;m open to internships, project collaborations, and interesting conversations.
            Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.125rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card"
                style={{
                  padding: "1.375rem 1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: link.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: link.iconColor,
                    border: `1px solid ${link.iconColor}18`,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-muted)", marginBottom: "0.2rem" }}>
                    {link.label}
                  </p>
                  <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-text)", marginBottom: "0.2rem", wordBreak: "break-all" }}>
                    {link.value}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)" }}>
                    {link.description}
                  </p>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: link.iconColor,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    <Send size={13} />
                    {link.label === "Email" ? "Send Email" : `Visit ${link.label}`}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Location note */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: "1.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            color: "var(--color-text-muted)",
            fontSize: "0.8125rem",
          }}
        >
          <MapPin size={14} />
          {personal.location}
        </motion.div>
      </div>
    </section>
  );
}
