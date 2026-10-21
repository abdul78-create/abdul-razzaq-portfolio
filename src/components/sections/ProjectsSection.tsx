"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects, type Project } from "@/data/portfolio";

const FILTERS = ["All", "Cloud & DevOps", "Full Stack", "AI", "Web App"];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {/* Color banner */}
      <div
        style={{
          height: "6px",
          background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}88)`,
        }}
      />

      {/* Project visual placeholder */}
      <div
        style={{
          height: "160px",
          background: project.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            color: project.accentColor,
            opacity: 0.12,
            letterSpacing: "-0.04em",
            userSelect: "none",
          }}
        >
          {project.title.slice(0, 2).toUpperCase()}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              background: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "1.25rem",
              color: project.accentColor,
              border: `2px solid ${project.accentColor}22`,
            }}
          >
            {project.title.slice(0, 2).toUpperCase()}
          </div>
        </div>
        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.06)",
            borderRadius: "999px",
            padding: "0.25rem 0.625rem",
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: project.accentColor,
            backdropFilter: "blur(4px)",
          }}
        >
          {project.category[0]}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.375rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "0.875rem" }}>
          {project.shortDescription}
        </p>

        {/* Structured Placement Summary */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.375rem",
            background: "var(--color-bg-alt)",
            padding: "0.75rem 0.875rem",
            borderRadius: "8px",
            marginBottom: "1rem",
            fontSize: "0.8125rem",
            border: "1px solid var(--color-border)",
            lineHeight: 1.5,
          }}
        >
          <div>
            <strong style={{ color: "var(--color-text)" }}>Role: </strong>
            <span style={{ color: "var(--color-text-secondary)" }}>{project.role}</span>
          </div>
          <div>
            <strong style={{ color: "var(--color-text)" }}>Objective: </strong>
            <span style={{ color: "var(--color-text-secondary)" }}>{project.objective}</span>
          </div>
          <div>
            <strong style={{ color: "var(--color-blue)" }}>Outcome: </strong>
            <span style={{ color: "var(--color-text)", fontWeight: 500 }}>{project.outcome}</span>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.25rem" }}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <button
            className="btn btn-primary"
            style={{ padding: "0.5rem 0.875rem", fontSize: "0.8125rem", flex: 1 }}
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            id={`case-study-btn-${project.id}`}
          >
            Case Study
            <ArrowUpRight size={14} />
          </button>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="btn btn-secondary"
              style={{ padding: "0.5rem 0.875rem", fontSize: "0.8125rem" }}
              onClick={(e) => e.stopPropagation()}
              id={`github-btn-${project.id}`}
            >
              <GithubIcon size={15} />
            </a>
          ) : (
            <span
              style={{
                fontSize: "0.6875rem",
                color: "var(--color-text-muted)",
                background: "var(--color-bg-alt)",
                border: "1px solid var(--color-border)",
                borderRadius: "6px",
                padding: "0.375rem 0.5rem",
                whiteSpace: "nowrap",
              }}
              title="Repository verification pending"
            >
              Repo Pending
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="btn btn-secondary"
              style={{ padding: "0.5rem 0.875rem", fontSize: "0.8125rem" }}
              onClick={(e) => e.stopPropagation()}
              id={`demo-btn-${project.id}`}
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          zIndex: 2000,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "1.5rem",
          paddingTop: "5rem",
          overflowY: "auto",
        }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label={`Case study: ${project.title}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "#fff",
            borderRadius: "20px",
            maxWidth: "760px",
            width: "100%",
            overflow: "hidden",
            boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
            marginBottom: "2rem",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div
            style={{
              height: "6px",
              background: `linear-gradient(90deg, ${project.accentColor}, ${project.accentColor}88)`,
            }}
          />

          {/* Modal header */}
          <div
            style={{
              padding: "1.75rem 2rem 1.25rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.625rem" }}>
                {project.category.map((c) => (
                  <span key={c} className="section-label" style={{ fontSize: "0.6875rem", padding: "0.25rem 0.625rem", marginBottom: 0 }}>
                    {c}
                  </span>
                ))}
              </div>
              <h2 style={{ fontSize: "1.625rem", fontWeight: 700, margin: 0 }}>{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close case study"
              style={{
                padding: "0.5rem",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                background: "transparent",
                cursor: "pointer",
                color: "var(--color-text-secondary)",
                flexShrink: 0,
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal body */}
          <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Visual Sample / Screenshot status */}
            <div style={{ background: project.color, border: `1px solid ${project.accentColor}33`, borderRadius: "12px", padding: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: project.accentColor, flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: project.accentColor }}>
                  Project Visual Sample Status
                </span>
                <p style={{ fontSize: "0.875rem", margin: "0.125rem 0 0", color: "var(--color-text)", fontWeight: 500 }}>
                  {project.screenshotStatus}
                </p>
              </div>
            </div>

            {/* My Role & Contribution */}
            <div>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.625rem" }}>
                My Role & Contribution
              </h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-text-secondary)", margin: 0 }}>{project.role}</p>
            </div>

            {/* Objective & Problem */}
            <div>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.625rem" }}>
                Problem & Objective
              </h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-text-secondary)", margin: 0 }}>{project.problem}</p>
            </div>

            {/* Solution & Architecture */}
            <div>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.625rem" }}>
                Solution & Architecture
              </h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "var(--color-text-secondary)", margin: 0 }}>{project.solution}</p>
            </div>

            {/* Outcome & Evidence */}
            <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "12px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1D4ED8", marginBottom: "0.5rem" }}>
                Outcome & Evidenced Results
              </h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.75, color: "#1E3A8A", margin: 0, fontWeight: 500 }}>
                {project.outcome}
              </p>
            </div>

            {/* Key features */}
            <div>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.875rem" }}>
                Implemented Features & Functionality
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {project.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                    <ChevronRight size={15} style={{ color: "var(--color-blue)", flexShrink: 0, marginTop: "0.2rem" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack */}
            <div>
              <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.875rem" }}>
                Verified Technologies Used
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {project.stack.map((layer) => (
                  <div key={layer.category}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {layer.category}
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.375rem" }}>
                      {layer.items.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & lessons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="case-two-col">
              <div style={{ background: "var(--color-bg-alt)", borderRadius: "12px", padding: "1.125rem" }}>
                <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.625rem" }}>
                  Challenges
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0 }}>{project.challenges}</p>
              </div>
              <div style={{ background: "var(--color-bg-alt)", borderRadius: "12px", padding: "1.125rem" }}>
                <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-blue)", marginBottom: "0.625rem" }}>
                  Lessons Learned
                </h3>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-text-secondary)", margin: 0 }}>{project.lessons}</p>
              </div>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: "0.875rem" }}>
                  <GithubIcon size={16} /> View Repository
                </a>
              ) : (
                <span style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", padding: "0.5rem 0.875rem", borderRadius: "8px" }}>
                  📁 Repository: Code undergoing final academic sanitization
                </span>
              )}
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: "0.875rem" }}>
                  <ExternalLink size={16} /> Live Demo
                </a>
              ) : (
                <span style={{ fontSize: "0.8125rem", color: "var(--color-text-secondary)", background: "var(--color-bg-alt)", border: "1px solid var(--color-border)", padding: "0.5rem 0.875rem", borderRadius: "8px" }}>
                  🌐 Deployment: Verified in local / staging environment
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" style={{ background: "var(--color-bg)", padding: "6rem 0" }}>
      <div className="section-container">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="section-description">
            A selection of projects spanning cloud infrastructure, DevOps pipelines, containerized systems, and web applications.
          </p>
        </motion.div>

        {/* Filter controls */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
          role="group"
          aria-label="Project filters"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              style={{
                padding: "0.5rem 1.125rem",
                borderRadius: "999px",
                border: "1.5px solid",
                borderColor: activeFilter === filter ? "var(--color-blue)" : "var(--color-border)",
                background: activeFilter === filter ? "var(--color-blue)" : "transparent",
                color: activeFilter === filter ? "#fff" : "var(--color-text-secondary)",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .case-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
