"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Download,
  ArrowDown,
  ChevronRight,
  Cloud,
  GitBranch,
  Boxes,
  Activity,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal, heroHighlights } from "@/data/portfolio";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: "smooth",
      });
  };

  return (
    <section
      id="home"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-bg)",
        paddingTop: "clamp(5rem, 7vw, 5.75rem)",
        paddingBottom: "clamp(2rem, 3.5vw, 2.75rem)",
      }}
    >
      {/* Subtle dot-grid background */}
      <div
        className="dot-grid"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      {/* Soft gradient blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          right: "2%",
          width: "min(500px, 45vw)",
          height: "min(500px, 45vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(219,234,254,0.45) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "min(350px, 35vw)",
          height: "min(350px, 35vw)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(219,234,254,0.25) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Main 2-column hero grid */}
        <div
          id="hero-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left: text content */}
          <div>
            {/* Tagline / Overline Badge */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.05 }}
              style={{ marginBottom: "0.875rem" }}
            >
              <span
                className="section-label"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: 0,
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--color-blue)",
                    display: "inline-block",
                  }}
                />
                CLOUD • DEVOPS • INFRASTRUCTURE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{
                marginBottom: "0.75rem",
                fontSize: "clamp(2.125rem, 4.2vw, 3.5rem)",
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Building the Future with{" "}
              <span className="gradient-text">Cloud &amp; DevOps</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{
                fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                fontWeight: 600,
                color: "var(--color-blue)",
                marginBottom: "0.625rem",
                lineHeight: 1.45,
              }}
            >
              B.Tech CSE Student | Cloud Computing &amp; DevOps Enthusiast
            </motion.p>

            {/* Introduction */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                fontSize: "0.9375rem",
                color: "var(--color-text-secondary)",
                maxWidth: "500px",
                marginBottom: "1.5rem",
                lineHeight: 1.65,
              }}
            >
              I&apos;m a Computer Science student at Lovely Professional
              University, developing my skills in cloud infrastructure,
              automation, CI/CD, containerization, and scalable systems.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.45 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <button
                onClick={scrollToProjects}
                className="btn btn-primary"
                id="hero-explore-btn"
                style={{ padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}
              >
                Explore My Projects
                <ChevronRight size={16} />
              </button>

              {personal.resume ? (
                <a
                  href={personal.resume}
                  download="Abdul_Razzaq_Resume.pdf"
                  className="btn btn-secondary"
                  id="hero-resume-btn"
                  style={{ padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}
                >
                  <Download size={15} />
                  Download Resume
                </a>
              ) : (
                <button
                  className="btn btn-secondary"
                  disabled
                  title="Resume PDF coming soon"
                  id="hero-resume-btn"
                  style={{ opacity: 0.6, cursor: "not-allowed", padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}
                >
                  <Download size={15} />
                  Resume Soon
                </button>
              )}
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.4375rem 0.875rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
                className="social-link"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  padding: "0.4375rem 0.875rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1.5px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
                className="social-link"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: 3D canvas */}
          <motion.div
            id="hero-canvas-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              position: "relative",
              aspectRatio: "1",
              width: "100%",
              maxWidth: "420px",
              marginLeft: "auto",
            }}
          >
            {/* Background soft circle */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "8%",
                borderRadius: "50%",
                background:
                  "radial-gradient(ellipse at center, rgba(219,234,254,0.7) 0%, rgba(255,255,255,0) 75%)",
              }}
            />
            <HeroCanvas />

            {/* Floating tech badges */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{
                position: "absolute",
                top: "10%",
                left: "-5%",
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                padding: "0.375rem 0.75rem",
                boxShadow: "var(--shadow-sm)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--color-text)",
                display: "flex",
                alignItems: "center",
                gap: "0.3125rem",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "0.875rem" }}>☁️</span>
              Cloud Infrastructure
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              style={{
                position: "absolute",
                bottom: "16%",
                right: "-5%",
                background: "#fff",
                border: "1px solid var(--color-border)",
                borderRadius: "10px",
                padding: "0.375rem 0.75rem",
                boxShadow: "var(--shadow-sm)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--color-text)",
                display: "flex",
                alignItems: "center",
                gap: "0.3125rem",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "0.875rem" }}>⚡</span>
              DevOps &amp; CI/CD
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              style={{
                position: "absolute",
                bottom: "4%",
                left: "6%",
                background: "var(--color-blue)",
                borderRadius: "10px",
                padding: "0.375rem 0.75rem",
                boxShadow: "0 4px 12px rgba(37,99,235,0.25)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "0.3125rem",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: "0.875rem" }}>🐳</span>
              Docker &amp; Automation
            </motion.div>
          </motion.div>
        </div>

        {/* 4 Supporting Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          id="hero-highlights-grid"
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            width: "100%",
          }}
        >
          {heroHighlights.map((item) => {
            const Icon =
              item.icon === "Cloud"
                ? Cloud
                : item.icon === "Workflow"
                ? GitBranch
                : item.icon === "Boxes"
                ? Boxes
                : Activity;

            return (
              <div
                key={item.title}
                className="card hero-highlight-card"
                style={{
                  padding: "1rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  background: "#ffffff",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "var(--shadow-sm)",
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--color-blue-soft)",
                    color: "var(--color-blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "0.25rem",
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Scroll indicator (in-flow below cards, avoids overlap) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{
            marginTop: "1.75rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
            color: "var(--color-text-muted)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
          }}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <ArrowDown size={14} className="animate-scroll-bounce" />
        </motion.div>
      </div>

      <style>{`
        .social-link:hover {
          border-color: var(--color-blue) !important;
          color: var(--color-blue) !important;
          background: var(--color-blue-soft) !important;
        }

        .hero-highlight-card:hover {
          transform: translateY(-2px);
          border-color: rgba(37, 99, 235, 0.3) !important;
          box-shadow: 0 6px 20px -3px rgba(37, 99, 235, 0.1) !important;
        }

        @media (max-width: 1024px) {
          #hero-highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.875rem !important;
          }
        }

        @media (max-width: 768px) {
          #hero-main-grid {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
          #hero-canvas-col {
            display: none !important;
          }
          #hero-highlights-grid {
            grid-template-columns: 1fr !important;
            margin-top: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
