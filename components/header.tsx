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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled || mobileMenuOpen
            ? "rgba(10, 10, 15, 0.95)"
            : "transparent",
          backdropFilter: scrolled || mobileMenuOpen ? "blur(20px)" : "none",
          borderBottom: (scrolled || mobileMenuOpen) ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px" }}>
            {/* Logo */}
            <Link href="#home" style={{ textDecoration: "none" }} onClick={() => setMobileMenuOpen(false)}>
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
              aria-label="Toggle Menu"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px",
                padding: "0.6rem",
                color: "var(--foreground)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 101,
                transition: "all 0.2s ease"
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(10, 10, 15, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            padding: "2rem",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(-110%)",
            opacity: mobileMenuOpen ? 1 : 0,
            pointerEvents: mobileMenuOpen ? "all" : "none",
            borderBottom: "1px solid rgba(255,255,255,0.08)"
          }}
          className="lg:hidden"
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              style={{ 
                fontSize: "1.5rem", 
                fontWeight: 700, 
                color: "var(--foreground)", 
                textDecoration: "none",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                transition: "all 0.3s ease",
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileMenuOpen ? 1 : 0,
                transitionDelay: `${idx * 0.1}s`
              }}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6c63ff]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ 
              marginTop: "1rem", 
              width: "100%", 
              maxWidth: "250px", 
              justifyContent: "center",
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileMenuOpen ? 1 : 0,
              transitionDelay: `${navItems.length * 0.1}s`
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </header>
    </>
  )
}
