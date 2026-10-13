import React from "react";

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

// ── Programming Languages ─────────────────────────────────────
export function PythonIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M11.91 2c-5.43 0-5.1 2.36-5.1 2.36l.01 2.45h5.19v.74H4.85S2 7.23 2 12.65c0 5.43 2.5 5.25 2.5 5.25h1.49v-2.09s-.08-2.5 2.46-2.5h4.24s2.38.04 2.38-2.33V4.33S15.44 2 11.91 2zm-2.76 1.54a.88.88 0 11.01 1.77.88.88 0 01-.01-1.77z"
        fill="#387EB8"
      />
      <path
        d="M12.09 22c5.43 0 5.1-2.36 5.1-2.36l-.01-2.45h-5.19v-.74h7.16S22 16.77 22 11.35c0-5.43-2.5-5.25-2.5-5.25h-1.49v2.09s.08 2.5-2.46 2.5h-4.24s-2.38-.04-2.38 2.33v6.65S8.56 22 12.09 22zm2.76-1.54a.88.88 0 11-.01-1.77.88.88 0 01.01 1.77z"
        fill="#FFE052"
      />
    </svg>
  );
}

export function CIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#659AD2" fillOpacity="0.15" stroke="#00599C" strokeWidth="1.5" />
      <path
        d="M15.5 8.5C14.5 7.5 13.3 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C13.3 17 14.5 16.5 15.5 15.5"
        stroke="#00599C"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SqlIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.75" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke="#0284C7" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#0284C7" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

// ── Web Technologies ──────────────────────────────────────────
export function Html5Icon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#E34F26" />
      <path d="M12 4.5v15.7l5.2-1.6L18.4 4.5H12z" fill="#EF652A" />
      <path d="M12 8.5H8.2l.3 3h3.5v2.2H8.7l.3 3.3L12 18v-2.2l-1.6-.4-.1-1.3h4.9l-.5 5.5L12 20.4V8.5z" fill="#fff" opacity="0.95" />
    </svg>
  );
}

export function Css3Icon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" fill="#1572B6" />
      <path d="M12 4.5v15.7l5.2-1.6L18.4 4.5H12z" fill="#33A9DC" />
      <path d="M12 8.5H8.2l.2 2.2h3.6V13H8.6l.3 3.3L12 17.2V15l-1.6-.4-.1-1H15l-.2 2.6L12 17.2v2.2l3.8-1.1.4-4.8H12V8.5z" fill="#fff" opacity="0.95" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M7.5 17.5c.8.6 1.7.9 2.5.9 1.4 0 2.2-.7 2.2-2.1v-5.8h-1.8v5.8c0 .6-.3.9-.9.9-.4 0-.8-.1-1.1-.3l-.9.6zm7.2-.2c1 .7 2.2 1.1 3.4 1.1 2.3 0 3.7-1.2 3.7-3.1 0-1.8-1.2-2.6-2.9-3.3-.9-.4-1.5-.7-1.5-1.4 0-.6.5-1.1 1.4-1.1.8 0 1.5.3 2 .8l1-1.2c-.8-.7-1.8-1-3-1-2.1 0-3.3 1.3-3.3 3 0 1.7 1.1 2.5 2.8 3.2 1 .4 1.6.8 1.6 1.5 0 .8-.7 1.3-1.7 1.3-1 0-2-.4-2.7-1l-.8 1.2z"
        fill="#000"
      />
    </svg>
  );
}

// ── Frameworks & Libraries ────────────────────────────────────
export function NodejsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#5FA04E" fillOpacity="0.15" stroke="#539E43" strokeWidth="1.5" />
      <path d="M12 6.5l5.5 3.2v6.4L12 19.3l-5.5-3.2V9.7L12 6.5z" fill="#539E43" />
      <circle cx="12" cy="12.9" r="2" fill="#fff" />
    </svg>
  );
}

export function NestjsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M21.38 6.04c-.3-.21-.71-.16-.94.13L15.6 12.3c-.23.29-.16.71.13.94.3.22.71.16.94-.13l4.84-6.13c.23-.29.17-.71-.13-.94z"
        fill="#E0234E"
      />
      <path
        d="M19.78 3.51c-.6-.44-1.43-.32-1.9.27L10.2 13.6c-.47.6-.33 1.45.27 1.9.6.45 1.44.33 1.9-.27l7.68-9.82c.47-.6.33-1.45-.27-1.9z"
        fill="#E0234E"
      />
      <path
        d="M7.8 7.37c-.77-.58-1.85-.43-2.45.34L2.3 11.66c-.6.77-.45 1.86.32 2.46.77.58 1.86.43 2.45-.34l3.05-3.95c.6-.77.46-1.86-.32-2.46z"
        fill="#E0234E"
      />
      <path
        d="M13.2 2.6c-.77-.58-1.85-.43-2.45.34L3.6 12.1c-1.3 1.66-.99 4.04.68 5.34 1.67 1.3 4.06 1 5.36-.66L17 7.7c.6-.77.46-1.86-.32-2.46-.77-.58-1.85-.43-2.45.34l-6.4 8.2c-.4.5-.9.4-1.2.2-.4-.3-.5-.8-.1-1.3L13 3.54c.6-.77.46-1.86-.32-2.46z"
        fill="#E0234E"
      />
    </svg>
  );
}

export function NextjsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path
        d="M8 8v8h1.7V9.7l6.6 6.3h1.7V8h-1.7v6.3L9.7 8H8z"
        fill="#fff"
      />
    </svg>
  );
}

export function ReactIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="2.2" fill="#0284C7" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#0284C7" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#0284C7" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#0284C7" strokeWidth="1.4" />
    </svg>
  );
}

// ── Databases & Data Tools ────────────────────────────────────
export function MongodbIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M12 2C11.5 3.5 6 9.5 6 14.5c0 3.5 2.7 6.5 6 7 3.3-.5 6-3.5 6-7 0-5-5.5-11-6-12.5z"
        fill="#47A248"
      />
      <path
        d="M12 2v19.5c.3-.1 6-3.2 6-7 0-5-5.5-11-6-12.5z"
        fill="#4DB33D"
      />
      <path
        d="M12 16.5c-1 0-1.5-.5-1.5-1.5 0-1.8 1.5-3 1.5-3s1.5 1.2 1.5 3c0 1-.5 1.5-1.5 1.5z"
        fill="#fff"
        opacity="0.85"
      />
    </svg>
  );
}

export function SupabaseIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M13.2 2.3c.4-.6 1.4-.4 1.5.3l1.8 8.4h5c.7 0 1.1.9.6 1.4l-9.1 10.3c-.5.6-1.5.4-1.6-.4l-1.8-8.4H4.5c-.7 0-1.1-.9-.6-1.4L13.2 2.3z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

export function PostgresIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#336791" fillOpacity="0.15" stroke="#336791" strokeWidth="1.5" />
      <path
        d="M12 6c-3 0-5 2-5 5 0 2 .8 3.5 2 4.3v2.7h2v-2h2v2h2v-2.7c1.2-.8 2-2.3 2-4.3 0-3-2-5-5-5zm-2.2 6.5c-.5 0-.8-.4-.8-.9 0-.5.3-.9.8-.9s.8.4.8.9c0 .5-.3.9-.8.9zm4.4 0c-.5 0-.8-.4-.8-.9 0-.5.3-.9.8-.9s.8.4.8.9c0 .5-.3.9-.8.9z"
        fill="#336791"
      />
    </svg>
  );
}

export function PrismaIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M5.5 19.5L12 3l6.5 16.5H5.5z"
        fill="#2D3748"
        fillOpacity="0.1"
      />
      <path
        d="M12 3L5.5 19.5h13L12 3z"
        stroke="#2D3748"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v16.5"
        stroke="#16A34A"
        strokeWidth="1.8"
      />
    </svg>
  );
}

// ── Cloud & DevOps ────────────────────────────────────────────
export function AwsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect width="24" height="24" rx="5" fill="#232F3E" />
      <path
        d="M6 14.5c3.2 2 8.8 2 12-1"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M17.5 12.8l.9.7-1.1.4"
        stroke="#FF9900"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 9.5h2.5M10.5 8v3M14 8l1.5 3 1.5-3"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DockerIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M21.5 12.2c-.3-.1-1.3-.3-2.1.2-.5.3-.8.8-1 1.4-.8-.4-2-.4-2.8-.2-.3-.5-.8-.8-1.5-.8H3c-.6 0-1 .4-1 1v1.5c0 3.5 2.8 6.5 6.5 6.5 4.5 0 8.2-3 9.4-6.8 1.4.1 2.8-.8 3.6-2.8z"
        fill="#2496ED"
      />
      <rect x="5.5" y="10" width="2" height="2" rx=".3" fill="#2496ED" />
      <rect x="8.5" y="10" width="2" height="2" rx=".3" fill="#2496ED" />
      <rect x="11.5" y="10" width="2" height="2" rx=".3" fill="#2496ED" />
      <rect x="8.5" y="7.5" width="2" height="2" rx=".3" fill="#2496ED" />
      <rect x="11.5" y="7.5" width="2" height="2" rx=".3" fill="#2496ED" />
    </svg>
  );
}

export function PrometheusIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#E6522C" fillOpacity="0.15" stroke="#E6522C" strokeWidth="1.5" />
      <path
        d="M12 4.5c-.8 2-2 3.5-3 5.5-1 2-.5 4.5 1 6 1.5 1.5 3.5 1.5 4.5 0s1-3.5 0-5.5c-1-2-1.7-3.5-2.5-6z"
        fill="#E6522C"
      />
      <path
        d="M12 11c-.5 1-1 1.8-1.2 2.5-.3.8 0 1.6.5 2.1.5.5 1.3.5 1.7 0s.5-1.2.2-2.1C13 12.8 12.5 12 12 11z"
        fill="#FFE885"
      />
    </svg>
  );
}

export function GrafanaIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#F46800" fillOpacity="0.15" stroke="#F46800" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6" stroke="#F46800" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" fill="#F46800" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#F46800" strokeWidth="1.5" />
    </svg>
  );
}

export function GithubActionsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect width="24" height="24" rx="5" fill="#2088FF" />
      <path
        d="M6 12l4-4v3h4V9l4 4-4 4v-3h-4v3l-4-4z"
        fill="#fff"
      />
    </svg>
  );
}

// ── Developer Tools ───────────────────────────────────────────
export function GitIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M21.7 10.9L13.1 2.3c-.4-.4-1.1-.4-1.5 0L9.4 4.5l3.2 3.2c.4-.1.8 0 1.1.3.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-.3-.3-.4-.7-.3-1.1L8.9 5.2 2.3 11.8c-.4.4-.4 1.1 0 1.5l8.6 8.6c.4.4 1.1.4 1.5 0l9.3-9.5c.4-.4.4-1.1 0-1.5z"
        fill="#F05032"
      />
      <circle cx="12.5" cy="15.5" r="1.5" fill="#fff" />
      <circle cx="14" cy="9.5" r="1.5" fill="#fff" />
    </svg>
  );
}

export function GithubToolIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        fill="#181717"
      />
    </svg>
  );
}

export function VscodeIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M17.5 2.5l-8.3 7.8L4.6 6.8 2 8.3l5 3.7-5 3.7 2.6 1.5 4.6-3.5 8.3 7.8 4.5-2.1V4.6l-4.5-2.1zm0 5.4v8.2l-5.3-4.1 5.3-4.1z"
        fill="#007ACC"
      />
    </svg>
  );
}

export function PostmanIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path
        d="M14 6l-6 6 6 6"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15.5" cy="12" r="1.5" fill="#fff" />
    </svg>
  );
}

export function RenderIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="10" fill="#46E3B7" fillOpacity="0.2" stroke="#00C7B7" strokeWidth="1.5" />
      <path
        d="M7 17V7h5.5a4 4 0 010 8H7zm5.5 0l4.5-5"
        stroke="#00A896"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AntigravityIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect width="24" height="24" rx="5" fill="#2563EB" />
      <path
        d="M12 4l2.5 5 5.5.8-4 3.9 1 5.5-5-2.7-5 2.7 1-5.5-4-3.9 5.5-.8L12 4z"
        fill="#fff"
      />
    </svg>
  );
}

// ── Core Computer Science ─────────────────────────────────────
export function OopIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#2563EB" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#2563EB" strokeWidth="1.8" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.5" stroke="#2563EB" strokeWidth="1.8" fill="#EFF6FF" />
      <path d="M6.5 10v2a1 1 0 001 1h4.5M17.5 10v2a1 1 0 01-1 1h-4.5" stroke="#2563EB" strokeWidth="1.5" />
    </svg>
  );
}

export function DbmsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <ellipse cx="12" cy="5" rx="8" ry="3" stroke="#0D9488" strokeWidth="1.8" fill="#CCFBF1" />
      <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#0D9488" strokeWidth="1.8" />
      <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5" stroke="#0D9488" strokeWidth="1.8" />
      <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke="#0D9488" strokeWidth="1.8" />
    </svg>
  );
}

export function NetworksIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="5" r="3" stroke="#4F46E5" strokeWidth="1.8" fill="#EEF2FF" />
      <circle cx="5" cy="18" r="3" stroke="#4F46E5" strokeWidth="1.8" fill="#EEF2FF" />
      <circle cx="19" cy="18" r="3" stroke="#4F46E5" strokeWidth="1.8" fill="#EEF2FF" />
      <path d="M10 7.5L6.8 15.5M14 7.5l3.2 8M8 18h8" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function OsIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="#EA580C" strokeWidth="1.8" fill="#FFF7ED" />
      <circle cx="12" cy="12" r="3" stroke="#EA580C" strokeWidth="1.8" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M7 2v2M17 2v2M7 20v2M17 20v2" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DsaIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="4" r="2.5" stroke="#7C3AED" strokeWidth="1.8" fill="#F5F3FF" />
      <circle cx="6" cy="12" r="2.5" stroke="#7C3AED" strokeWidth="1.8" fill="#F5F3FF" />
      <circle cx="18" cy="12" r="2.5" stroke="#7C3AED" strokeWidth="1.8" fill="#F5F3FF" />
      <circle cx="4" cy="20" r="2" stroke="#7C3AED" strokeWidth="1.6" />
      <circle cx="9" cy="20" r="2" stroke="#7C3AED" strokeWidth="1.6" />
      <path d="M10.2 5.8L7.8 10.2M13.8 5.8l2.4 4.4M5.5 14.4l-1 3.8M7 14.4l1.5 3.8" stroke="#7C3AED" strokeWidth="1.4" />
    </svg>
  );
}

// ── Soft Skills ───────────────────────────────────────────────
export function ProblemSolvingIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M12 2a7 7 0 00-4 12.7V17a1 1 0 001 1h6a1 1 0 001-1v-2.3A7 7 0 0012 2zM9 21h6"
        stroke="#D97706"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="#FEF3C7"
      />
      <circle cx="12" cy="8" r="1.5" fill="#D97706" />
    </svg>
  );
}

export function CollaborationIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="#0284C7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AdaptabilityIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path
        d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3L21.5 8M22 12.5a10 10 0 01-18.8 4.3L2.5 16"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DetailIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <circle cx="12" cy="12" r="9" stroke="#E11D48" strokeWidth="1.8" fill="#FFE4E6" fillOpacity="0.4" />
      <circle cx="12" cy="12" r="5" stroke="#E11D48" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill="#E11D48" />
    </svg>
  );
}

// ── Generic Fallback ──────────────────────────────────────────
export function DefaultSkillIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="#2563EB" strokeWidth="1.8" fill="#EFF6FF" />
      <path d="M8 12h8M12 8v8" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// ── Icon Registry Map ─────────────────────────────────────────
export const techIconMap: Record<string, React.ComponentType<IconProps>> = {
  // Programming Languages
  Python: PythonIcon,
  C: CIcon,
  SQL: SqlIcon,

  // Web Technologies
  HTML5: Html5Icon,
  CSS3: Css3Icon,
  JavaScript: JavaScriptIcon,

  // Frameworks & Libraries
  "Node.js": NodejsIcon,
  NestJS: NestjsIcon,
  "Next.js": NextjsIcon,
  "React.js": ReactIcon,

  // Databases & Data Tools
  MongoDB: MongodbIcon,
  Supabase: SupabaseIcon,
  PostgreSQL: PostgresIcon,
  Prisma: PrismaIcon,

  // Cloud & DevOps
  AWS: AwsIcon,
  Docker: DockerIcon,
  Prometheus: PrometheusIcon,
  Grafana: GrafanaIcon,
  "GitHub Actions": GithubActionsIcon,

  // Developer Tools
  Git: GitIcon,
  GitHub: GithubToolIcon,
  "VS Code": VscodeIcon,
  Postman: PostmanIcon,
  Render: RenderIcon,
  "Antigravity IDE": AntigravityIcon,

  // Core Computer Science
  "Object-Oriented Programming": OopIcon,
  OOP: OopIcon,
  DBMS: DbmsIcon,
  "Computer Networks": NetworksIcon,
  "Operating Systems": OsIcon,
  "Data Structures and Algorithms": DsaIcon,
  DSA: DsaIcon,

  // Soft Skills
  "Problem-solving": ProblemSolvingIcon,
  "Team collaboration": CollaborationIcon,
  Adaptability: AdaptabilityIcon,
  "Attention to detail": DetailIcon,
};

export function getTechIcon(name: string): React.ComponentType<IconProps> {
  return techIconMap[name] ?? DefaultSkillIcon;
}
