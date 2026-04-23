"use client"

import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingSocials({ 
  customWhatsApp = "917066704913", 
  customLinkedIn = "https://linkedin.com" 
}: { 
  customWhatsApp?: string;
  customLinkedIn?: string;
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: customLinkedIn,
      color: "#0077b5",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com",
      color: "#333",
      label: "GitHub",
    },
    {
      icon: <MessageCircle size={20} />,
      href: `https://wa.me/${customWhatsApp.replace(/\+/g, '').replace(/\s+/g, '')}`,
      color: "#25d366",
      label: "WhatsApp",
    },
  ]

  return (
    <>
      {/* Social Sidebar - Left */}
      <div
        style={{
          position: "fixed",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          zIndex: 90,
        }}
        className="hidden md:flex"
      >
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="glass-card"
            style={{
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              color: "white",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              border: "1px solid rgba(255,255,255,0.1)",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
               e.currentTarget.style.transform = "translateX(5px) scale(1.1)"
               e.currentTarget.style.borderColor = link.color
               e.currentTarget.style.boxShadow = `0 0 15px ${link.color}40`
            }}
            onMouseLeave={(e) => {
               e.currentTarget.style.transform = "translateX(0) scale(1)"
               e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"
               e.currentTarget.style.boxShadow = "none"
            }}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Floating Bottom Group - Mobile */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          zIndex: 99,
        }}
        className="md:hidden"
      >
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "40px",
              height: "40px",
              background: link.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              border: "2px solid rgba(255,255,255,0.2)"
            }}
          >
            {link.icon}
          </a>
        ))}
        {isVisible && (
          <button
            onClick={scrollToTop}
            style={{
              width: "40px",
              height: "40px",
              background: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
            }}
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>

      {/* Scroll to top desktop */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "45px",
          height: "45px",
          background: "var(--primary)",
          display: isVisible ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          color: "white",
          border: "none",
          cursor: "pointer",
          zIndex: 90,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease"
        }}
        className="hidden md:flex hover:scale-110 active:scale-95"
      >
        <ArrowUp size={22} />
      </button>
    </>
  )
}
