"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal, navLinks } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--color-text)",
        color: "#e5e7eb",
        paddingTop: "3rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="section-container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "2rem",
            alignItems: "start",
            marginBottom: "2.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "var(--color-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                }}
              >
                AR
              </div>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "#f9fafb" }}>
                Abdul Razzaq
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "#9ca3af", maxWidth: "280px", lineHeight: 1.7 }}>
              B.Tech CSE student focused on cloud infrastructure, DevOps pipelines, containerization, and reliable systems.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  color: "#d1d5db",
                  transition: "all 0.2s",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                className="footer-icon"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  color: "#d1d5db",
                  transition: "all 0.2s",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                className="footer-icon"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Send email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  color: "#d1d5db",
                  transition: "all 0.2s",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                className="footer-icon"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{ fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9ca3af", marginBottom: "1rem" }}>
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.375rem 1.5rem" }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = link.href.replace("#", "");
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    style={{
                      fontSize: "0.875rem",
                      color: "#9ca3af",
                      textDecoration: "none",
                      transition: "color 0.15s",
                      paddingBlock: "0.2rem",
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Back to top */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.75rem 1rem",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#9ca3af",
                cursor: "pointer",
                transition: "all 0.2s",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
              className="back-to-top"
            >
              <ArrowUp size={18} />
              Back to top
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#6b7280", margin: 0 }}>
            © {year} Abdul Razzaq. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#6b7280", margin: 0 }}>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>

      <style>{`
        .footer-icon:hover { background: rgba(37,99,235,0.3) !important; color: #93c5fd !important; }
        .footer-link:hover { color: #e5e7eb !important; }
        .back-to-top:hover { background: rgba(255,255,255,0.1) !important; color: #e5e7eb !important; border-color: rgba(255,255,255,0.2) !important; }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
