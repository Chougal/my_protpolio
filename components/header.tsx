"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 10, 15, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px" }}>
          {/* Logo */}
          <Link href="#home" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Abhishek.dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
              style={{ marginLeft: "1rem", padding: "0.5rem 1.5rem", fontSize: "0.875rem" }}
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "var(--glass)",
              border: "1px solid var(--glass-border)",
              borderRadius: "8px",
              padding: "0.5rem",
              color: "var(--foreground)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "rgba(10, 10, 15, 0.96)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "1rem",
              padding: "1.5rem",
              marginBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
            className="lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                style={{ display: "block", padding: "0.75rem 1rem", fontSize: "1rem" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
              style={{ marginTop: "0.5rem", textAlign: "center", justifyContent: "center" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
