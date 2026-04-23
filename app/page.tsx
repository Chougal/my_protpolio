"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingSocials } from "@/components/FloatingSocials"
import Link from "next/link"
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Cpu,
  ArrowLeft,
  ChevronDown,
  Send,
  Github,
  Linkedin,
  Award,
  Calendar,
  BookOpen,
  Star,
  Check,
  Zap,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// ===================== DATA =====================

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "D.Y. Patil College, Talsande",
    year: "2023 - 2025",
    status: "Completed",
    icon: "🎓",
    color: "#6c63ff",
    description: "Advanced studies in computer science and modern application development.",
    details: [
      "Specialization in Full Stack Development",
      "Advanced Database Management Systems",
      "Cloud Computing Basics",
      "Software Engineering excellence",
    ],
    grade: "Distinction",
    projects: ["E-Commerce Platform", "Real-time Chat App"],
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "D.R. Mane College, Kagal",
    year: "2020 - 2023",
    status: "Completed",
    icon: "🎓",
    color: "#ff6584",
    description: "Foundation in programming, database management, and software development.",
    details: [
      "Object-Oriented Programming (Java & C++)",
      "Web Technologies",
      "Data Structures",
      "Networking concepts",
    ],
    grade: "First Class with Distinction",
  },
  {
    id: 3,
    degree: "12th Standard (HSC)",
    institution: "M.H. Shine, Tisangi",
    year: "2019 - 2020",
    status: "Completed",
    icon: "📚",
    color: "#43d9ad",
    description: "Higher Secondary Certificate from Maharashtra State Board.",
    details: [
      "Stream: Science",
      "Focus on Information Technology & Mathematics",
    ],
  },
  {
    id: 4,
    degree: "11th Standard",
    institution: "M.H. Shine, Tisangi",
    year: "2018 - 2019",
    status: "Completed",
    icon: "📖",
    color: "#ffa500",
    description: "Junior College from Maharashtra State Board.",
    details: ["Academic excellence in Science subjects"],
  },
  {
    id: 5,
    degree: "10th Standard (SSC)",
    institution: "D.M. Patil, Tisangi",
    year: "2017 - 2018",
    status: "Completed",
    icon: "🏫",
    color: "#ff4757",
    description: "Secondary School Certificate from Maharashtra State Board.",
    details: ["General subjects with strong performance in Technical studies"],
  },
]

const skills = [
  { category: "Frontend", icon: <Globe size={22} />, color: "#6c63ff", techs: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "TypeScript"] },
  { category: "Backend", icon: <Code size={22} />, color: "#ff6584", techs: ["Node.js", "Express.js", "REST API", "Python", "Java"] },
  { category: "Database", icon: <Database size={22} />, color: "#43d9ad", techs: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"] },
  { category: "Tools & Others", icon: <Cpu size={22} />, color: "#ffa500", techs: ["Git", "GitHub", "VS Code", "Postman", "Linux", "Docker"] },
]

const stats = [
  { label: "Years of Study", value: "7+", icon: <BookOpen size={20} />, color: "#6c63ff" },
  { label: "Degrees Earned", value: "2", icon: <Award size={20} />, color: "#ff6584" },
  { label: "Projects Built", value: "15+", icon: <Zap size={20} />, color: "#43d9ad" },
  { label: "Technologies", value: "20+", icon: <Star size={20} />, color: "#ffa500" },
]

const products = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    description: "A full-scale online shopping experience with real-time inventory and secure payments.",
    fullDescription: "E-Commerce Revolution is a state-of-the-art platform designed for modern retailers. It features a blazing-fast frontend built with Next.js, a robust backend powered by Supabase, and a serverless architecture for ultimate scalability. Key features include real-time inventory tracking, multi-vendor support, AI-driven product recommendations, and integrated analytics dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "/modern-office-dashboard.png",
    link: "#",
    features: ["Real-time Inventory", "Secure Payment Gateway", "AI Recommendations", "Admin Dashboard"],
    category: "Web Application"
  },
  {
    id: 2,
    title: "Smart Dairy Analytics",
    description: "IoT integrated dashboard for monitoring milk quality and collection efficiency.",
    fullDescription: "Smart Dairy Analytics bridges the gap between traditional farming and modern technology. Using IoT sensors at collection points, it automatically records quality metrics, volume, and temperature. The platform provides dairy owners with real-time insights into production trends, farmer payouts, and distribution logistics through interactive charts and automated reporting.",
    tech: ["React", "Express", "MongoDB", "Chart.js"],
    image: "/modern-dairy-farm.png",
    link: "#",
    features: ["IoT Integration", "Quality Monitoring", "Farmer Database", "Analytical Reporting"],
    category: "Enterprise Solution"
  },
  {
    id: 3,
    title: "Jewellery Management Pro",
    description: "Inventory and billing system for high-end retail jewellery outlets.",
    fullDescription: "Jewellery Management Pro is a specialized ERP solution for high-value retail. It handles intricate inventory management including gold weight, stone values, and making charges. The system includes advanced features like hallmarking tracking, customer loyalty programs, secure local-first data storage with Electron, and professional invoice generation.",
    tech: ["Electron", "Node.js", "SQLite"],
    image: "/jewelry-store-system.png",
    link: "#",
    features: ["Gold Weight Tracking", "Professional Billing", "Hallmark Management", "Local-first Security"],
    category: "Desktop Application"
  },
]

// ===================== ANIMATED COUNTER =====================
function AnimatedCounter({ value }: { value: string }) {
  return <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>{value}</span>
}

// ===================== TYPING EFFECT =====================
function TypeWriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState("")

  useEffect(() => {
    const current = words[wordIndex]
    const timeout = deleting ? 60 : 100

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (deleting && charIndex > 0) {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800)
      } else if (deleting && charIndex === 0) {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [charIndex, deleting, wordIndex, words])

  return (
    <span>
      <span className="gradient-text">{text}</span>
      <span className="animate-blink" style={{ color: "#6c63ff", marginLeft: "2px" }}>|</span>
    </span>
  )
}

// ===================== SKILL CARD =====================
function SkillCard({ skill }: { skill: typeof skills[0] }) {
  return (
    <div className="glass-card" style={{ padding: "1.75rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `${skill.color}20`,
            border: `1px solid ${skill.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: skill.color,
          }}
        >
          {skill.icon}
        </div>
        <h3 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "1.05rem", fontWeight: 700 }}>
          {skill.category}
        </h3>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {skill.techs.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

// ===================== PRODUCT CARD =====================
function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <Dialog>
      <div className="glass-card group" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", height: "200px", background: "rgba(0,0,0,0.2)" }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
            className="group-hover:scale-110"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.8), transparent)" }} />
          <div style={{ position: "absolute", bottom: "1rem", left: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
             {product.tech.map(t => (
               <span key={t} style={{ fontSize: "0.65rem", padding: "2px 8px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", backdropFilter: "blur(4px)" }}>{t}</span>
             ))}
          </div>
        </div>
        <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
           <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>{product.title}</h4>
           <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", marginBottom: "1.5rem", flex: 1 }}>{product.description}</p>
           
           <DialogTrigger asChild>
             <button className="btn-outline" style={{ width: "100%", padding: "0.5rem" }}>View Details</button>
           </DialogTrigger>
        </div>
      </div>

      <DialogContent className="sm:max-w-[600px] bg-[#0a0a0f] border-white/10">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6c63ff] bg-[#6c63ff]/10 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {product.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400 mt-2 line-height-relaxed">
            {product.fullDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white/90">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {product.tech.map(t => (
                  <span key={t} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white/90">Key Features</h4>
              <ul className="space-y-1">
                {product.features.map(f => (
                  <li key={f} className="text-xs text-gray-400 flex items-center gap-2">
                    <Check size={12} className="text-[#6c63ff]" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/5 flex gap-3">
             <a href={product.link} className="btn-primary flex-1 justify-center py-2 text-sm">
                Live Demo
             </a>
             <button className="btn-outline flex-1 justify-center py-2 text-sm">
                Source Code
             </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ===================== EDUCATION CARD =====================
function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
  return (
    <Link 
      href={`/education/${edu.id}`}
      style={{
        display: "flex",
        gap: "1.5rem",
        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
        textDecoration: "none",
        cursor: "pointer"
      }}
      className="group"
    >
      {/* Timeline indicator */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: `${edu.color}20`,
            border: `1px solid ${edu.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            flexShrink: 0,
            transition: "all 0.3s ease"
          }}
          className="group-hover:scale-110 group-hover:rotate-12"
        >
          {edu.icon}
        </div>
        {index < education.length - 1 && (
          <div
            style={{
              width: "2px",
              flex: 1,
              minHeight: "30px",
              background: `linear-gradient(to bottom, ${edu.color}60, transparent)`,
              margin: "0.5rem 0",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="glass-card"
        style={{
          padding: "1.5rem",
          flex: 1,
          marginBottom: index < education.length - 1 ? "1.25rem" : "0",
          borderLeft: `3px solid ${edu.color}`,
          transition: "transform 0.3s ease, border-color 0.3s ease"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                marginBottom: "0.3rem",
                color: "var(--foreground)",
              }}
              className="group-hover:text-[#6c63ff] transition-colors"
            >
              {edu.degree}
            </h3>
            <p
              style={{
                color: edu.color,
                fontSize: "0.9rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <GraduationCap size={14} />
              {edu.institution}
            </p>
          </div>
          <span
            style={{
              background: `${edu.color}20`,
              color: edu.color,
              border: `1px solid ${edu.color}40`,
              padding: "0.25rem 0.75rem",
              borderRadius: "50px",
              fontSize: "0.75rem",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              whiteSpace: "nowrap",
            }}
          >
            <Calendar size={12} />
            {edu.year}
          </span>
        </div>
        <p style={{ color: "var(--muted-foreground)", fontSize: "0.875rem", marginTop: "0.75rem", lineHeight: 1.6 }}>
          {edu.description}
        </p>
        <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.5rem", color: edu.color, fontSize: "0.85rem", fontWeight: 600, opacity: 0 }} className="group-hover:opacity-100 transition-opacity">
           See Details <ArrowLeft size={14} style={{ transform: "rotate(180deg)" }} />
        </div>
      </div>
    </Link>
  )
}

// ===================== CONTACT FORM =====================
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: "", email: "", message: "" })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        <div>
          <label style={{ display: "block", color: "var(--muted-foreground)", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 500 }}>
            Your Name *
          </label>
          <input
            type="text"
            className="contact-input"
            placeholder="Abhishek Chougale"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: "block", color: "var(--muted-foreground)", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 500 }}>
            Email Address *
          </label>
          <input
            type="email"
            className="contact-input"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label style={{ display: "block", color: "var(--muted-foreground)", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: 500 }}>
          Message *
        </label>
        <textarea
          className="contact-input"
          rows={5}
          placeholder="I'd love to collaborate on a project..."
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={{ resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        disabled={sending || sent}
        className="btn-primary"
        style={{
          width: "fit-content",
          opacity: sending ? 0.7 : 1,
          cursor: sending ? "not-allowed" : "pointer",
        }}
      >
        {sent ? (
          "✅ Message Sent!"
        ) : sending ? (
          "Sending..."
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}

// ===================== MAIN PAGE =====================
export default function HomePage() {
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="bg-mesh"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "clamp(120px, 20vh, 160px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Orbs */}
        <div
          className="orb orb-purple animate-float"
          style={{ width: "min(500px, 80vw)", height: "min(500px, 80vw)", top: "-100px", right: "-100px" }}
        />
        <div
          className="orb orb-pink"
          style={{ width: "min(400px, 70vw)", height: "min(400px, 70vw)", bottom: "-50px", left: "-100px" }}
        />
        <div
          className="orb orb-cyan"
          style={{ width: "min(300px, 60vw)", height: "min(300px, 60vw)", top: "50%", left: "40%" }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "2rem 1.5rem",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gap: "3rem",
            alignItems: "center",
          }}
          className="md:grid-cols-[1fr_auto] grid-cols-1"
        >
          {/* Left Content */}
          <div className="animate-fade-in-up md:order-1 order-2 text-center md:text-left">
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(108,99,255,0.12)",
                border: "1px solid rgba(108,99,255,0.3)",
                borderRadius: "50px",
                padding: "0.4rem 1rem",
                marginBottom: "1.5rem",
                color: "#8b85ff",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: "0.7rem" }}>🟢</span>
              Available for opportunities
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(1.75rem, 8vw, 4.5rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Abhishek</span>
              <br />
              <span style={{ color: "var(--foreground)" }}>Vishnu Chougale</span>
            </h1>

            {/* Typing Effect */}
            <div
              style={{
                fontSize: "clamp(1.1rem, 4vw, 1.8rem)",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "var(--muted-foreground)",
                minHeight: "2.5rem",
              }}
            >
              <TypeWriter
                words={[
                  "Full Stack Developer",
                  "MCA Student",
                  "React & Next.js Expert",
                  "MERN Stack Developer",
                  "Product Designer",
                ]}
              />
            </div>

            {/* Description */}
            <p
              style={{
                color: "var(--muted-foreground)",
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                lineHeight: 1.8,
                maxWidth: "580px",
                marginBottom: "2.5rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              className="md:ml-0 md:mr-0"
            >
              Passionate developer with expertise in building modern, scalable web applications. 
              Currently pursuing MCA with a focus on creating impactful digital solutions.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }} className="md:justify-start">
              <a href="#contact" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Mail size={18} /> Get In Touch
              </a>
              <a href="#products" className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Zap size={18} /> View Products
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", alignItems: "center", justifyContent: "center" }} className="md:justify-start">
              <span style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>Find me:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  fontSize: "0.91rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6c63ff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-chougale-573786268"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--muted-foreground)",
                  textDecoration: "none",
                  fontSize: "0.91rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#0077b5")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <FloatingSocials />

          {/* Right - Avatar */}
          <div
            className="animate-float md:order-2 order-1"
            style={{ position: "relative", flexShrink: 0, margin: "0 auto" }}
          >
            <div
              className="animate-pulse-glow"
              style={{
                width: "clamp(220px, 40vw, 320px)",
                height: "clamp(220px, 40vw, 320px)",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 50%, #43d9ad 100%)",
                padding: "4px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "var(--background)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "6rem",
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <img 
                  src="/abhi.jpeg" 
                  alt="Abhishek Chougale" 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'absolute', background: "var(--card)" }}>
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="animate-float"
        >
          <span style={{ color: "var(--muted-foreground)", fontSize: "0.75rem", letterSpacing: "0.1em" }}>SCROLL</span>
          <ChevronDown size={20} style={{ color: "var(--primary)" }} />
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section style={{ padding: "5rem 1.5rem", background: "rgba(12,12,20,0.6)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card"
                style={{ padding: "2rem", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "14px",
                    background: `${stat.color}20`,
                    border: `1px solid ${stat.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: stat.color,
                    margin: "0 auto 1rem",
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                </div>
                <div style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section id="products" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#6c63ff", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              My Offerings
            </p>
            <h2 className="section-title">Premium <span className="gradient-text">Products</span></h2>
            <div className="section-line" />
            <p className="section-subtitle">High-quality digital solutions for businesses and individuals</p>
          </div>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "2.5rem" 
            }}
          >
             {products.map((prod, idx) => (
                <div key={idx} style={{ animation: `fadeInUp 0.6s ease ${idx * 0.15}s both` }}>
                   <ProductCard product={prod} />
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ===== EDUCATION SECTION ===== */}
      <section id="education" style={{ padding: "6rem 1.5rem", background: "rgba(10,10,18,0.8)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#ff6584", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              Academic Journey
            </p>
            <h2 className="section-title">My <span style={{ background: "linear-gradient(135deg, #ff6584 0%, #6c63ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Education</span></h2>
            <div className="section-line" style={{ background: "linear-gradient(135deg, #ff6584 0%, #6c63ff 100%)" }} />
            <p className="section-subtitle">
              Milestones of my academic and technical foundation
            </p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0" }}>
            {education.map((edu, index) => (
              <EducationCard key={edu.id} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#43d9ad", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              What I Know
            </p>
            <h2 className="section-title">Technical <span className="gradient-text-2">Skills</span></h2>
            <div className="section-line" style={{ background: "linear-gradient(135deg, #43d9ad 0%, #6c63ff 100%)" }} />
            <p className="section-subtitle">
              Mastering the modern web stack and development tools
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {skills.map((skill) => (
              <SkillCard key={skill.category} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" style={{ padding: "6rem 1.5rem", background: "rgba(10,10,18,0.8)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ color: "#ffa500", fontWeight: 600, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>
              Let&apos;s Connect
            </p>
            <h2 className="section-title">Get In <span style={{ background: "linear-gradient(135deg, #ffa500 0%, #ff6584 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Touch</span></h2>
            <div className="section-line" style={{ background: "linear-gradient(135deg, #ffa500 0%, #ff6584 100%)" }} />
            <p className="section-subtitle">
              Have a project in mind? Reach out to me!
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Contact Information
              </h3>

              {[
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "abhishekchougale038@gmail.com",
                  color: "#ff6584",
                  href: "mailto:abhishekchougale038@gmail.com",
                },
                {
                  icon: <Phone size={20} />,
                  label: "Phone",
                  value: "+91 9325519485",
                  color: "#6c63ff",
                  href: "tel:+919325519485",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Location",
                  value: "Tisangi, Maharashtra",
                  color: "#43d9ad",
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card"
                  style={{ padding: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.color,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: "var(--muted-foreground)", fontSize: "0.75rem", fontWeight: 500, marginBottom: "0.15rem" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--foreground)",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = item.color)}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ color: "var(--foreground)", fontSize: "0.9rem", fontWeight: 600 }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
