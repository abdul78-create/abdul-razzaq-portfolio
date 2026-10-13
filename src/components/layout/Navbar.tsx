"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personal } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Active section tracking
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.8)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(8px)",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          aria-label="Abdul Razzaq – home"
          style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}
        >
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
              letterSpacing: "-0.02em",
              flexShrink: 0,
            }}
          >
            AR
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--color-text)",
              letterSpacing: "-0.02em",
            }}
          >
            Abdul Razzaq
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}>
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`nav-item${isActive ? " active" : ""}`}
                  style={{ padding: "0.25rem 0.625rem", textDecoration: "none" }}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Resume button */}
          {personal.resume ? (
            <a
              href={personal.resume}
              download="Abdul_Razzaq_Resume.pdf"
              className="btn btn-primary"
              style={{ marginLeft: "1rem", padding: "0.5rem 1.125rem", fontSize: "0.875rem" }}
              id="nav-resume-btn"
            >
              <Download size={15} />
              Resume
            </a>
          ) : (
            <button
              className="btn btn-primary"
              style={{ marginLeft: "1rem", padding: "0.5rem 1.125rem", fontSize: "0.875rem", opacity: 0.85 }}
              title="Resume PDF coming soon"
              id="nav-resume-btn"
              disabled
            >
              <Download size={15} />
              Resume
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            style={{
              display: "none",
              marginLeft: "0.75rem",
              padding: "0.5rem",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              background: "transparent",
              cursor: "pointer",
              color: "var(--color-text)",
            }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid var(--color-border)",
              padding: "1rem 1.5rem 1.5rem",
              boxShadow: "var(--shadow-lg)",
              zIndex: 999,
            }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      display: "block",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid var(--color-border-light)",
                      fontWeight: isActive ? 600 : 500,
                      fontSize: "1rem",
                      color: isActive ? "var(--color-blue)" : "var(--color-text)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <div style={{ marginTop: "1rem" }}>
                {personal.resume ? (
                  <a
                    href={personal.resume}
                    download="Abdul_Razzaq_Resume.pdf"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                ) : (
                  <button
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center", opacity: 0.8 }}
                    disabled
                  >
                    <Download size={16} />
                    Resume — Coming Soon
                  </button>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          #nav-resume-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
