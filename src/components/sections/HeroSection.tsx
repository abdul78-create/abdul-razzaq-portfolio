"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Download, ArrowDown, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { personal } from "@/data/portfolio";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-bg)",
        paddingTop: "72px",
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
          width: "min(600px, 55vw)",
          height: "min(600px, 55vw)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(219,234,254,0.5) 0%, rgba(255,255,255,0) 70%)",
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
          width: "min(400px, 40vw)",
          height: "min(400px, 40vw)",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(219,234,254,0.3) 0%, rgba(255,255,255,0) 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="section-container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "4rem",
          width: "100%",
        }}
      >
        {/* Left: text content */}
        <div>
          {/* Badge */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: "1.5rem" }}
          >
            <span className="section-label" style={{ fontSize: "0.75rem" }}>
              Available for Projects & Internships
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: "1.25rem", fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Abdul Razzaq</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
              fontWeight: 600,
              color: "var(--color-text)",
              marginBottom: "1rem",
              lineHeight: 1.5,
            }}
          >
            B.Tech CSE Student &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; AI &amp; DevOps Enthusiast
          </motion.p>

          {/* Tagline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "1rem",
              color: "var(--color-text-secondary)",
              maxWidth: "500px",
              marginBottom: "2.5rem",
              lineHeight: 1.75,
            }}
          >
            {personal.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginBottom: "2.5rem" }}
          >
            <button
              onClick={scrollToProjects}
              className="btn btn-primary"
              id="hero-explore-btn"
            >
              Explore My Work
              <ChevronRight size={17} />
            </button>

            {personal.resume ? (
              <a
                href={personal.resume}
                download="Abdul_Razzaq_Resume.pdf"
                className="btn btn-secondary"
                id="hero-resume-btn"
              >
                <Download size={16} />
                Download Resume
              </a>
            ) : (
              <button
                className="btn btn-secondary"
                disabled
                title="Resume PDF coming soon"
                id="hero-resume-btn"
                style={{ opacity: 0.6, cursor: "not-allowed" }}
              >
                <Download size={16} />
                Resume Soon
              </button>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1.5px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              className="social-link"
            >
              <GithubIcon size={17} />
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
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-sm)",
                border: "1.5px solid var(--color-border)",
                color: "var(--color-text-secondary)",
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
              className="social-link"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right: 3D canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          style={{
            position: "relative",
            aspectRatio: "1",
            width: "100%",
            maxWidth: "520px",
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
              background: "radial-gradient(ellipse at center, rgba(219,234,254,0.7) 0%, rgba(255,255,255,0) 75%)",
            }}
          />
          <HeroCanvas />

          {/* Floating tech badges */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{
              position: "absolute",
              top: "12%",
              left: "-8%",
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              padding: "0.5rem 0.875rem",
              boxShadow: "var(--shadow-md)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--color-text)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "1rem" }}>🚀</span>
            Full-Stack Dev
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "18%",
              right: "-6%",
              background: "#fff",
              border: "1px solid var(--color-border)",
              borderRadius: "12px",
              padding: "0.5rem 0.875rem",
              boxShadow: "var(--shadow-md)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--color-text)",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "1rem" }}>☁️</span>
            Cloud & DevOps
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{
              position: "absolute",
              bottom: "6%",
              left: "8%",
              background: "var(--color-blue)",
              borderRadius: "12px",
              padding: "0.5rem 0.875rem",
              boxShadow: "0 4px 16px rgba(37,99,235,0.3)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "1rem" }}>🤖</span>
            AI Enthusiast
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.375rem",
          color: "var(--color-text-muted)",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <ArrowDown size={16} className="animate-scroll-bounce" />
      </motion.div>

      <style>{`
        .social-link:hover {
          border-color: var(--color-blue) !important;
          color: var(--color-blue) !important;
          background: var(--color-blue-soft) !important;
        }

        @media (max-width: 768px) {
          #hero-section-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          section[id="home"] .section-container {
            grid-template-columns: 1fr !important;
          }
          section[id="home"] .section-container > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
