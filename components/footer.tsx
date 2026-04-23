import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer
      style={{
        background: "rgba(10, 10, 15, 0.98)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 1.5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                background: "linear-gradient(135deg, #6c63ff 0%, #ff6584 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "1rem",
              }}
            >
              Abhishek.dev
            </div>
            <p style={{ color: "var(--muted-foreground)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "280px" }}>
              MCA Student & Full Stack Developer from Tisangi, Maharashtra. Passionate about building elegant digital experiences.
            </p>
            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--muted-foreground)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "#6c63ff"
                  el.style.borderColor = "rgba(108,99,255,0.5)"
                  el.style.background = "rgba(108,99,255,0.1)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "var(--muted-foreground)"
                  el.style.borderColor = "var(--glass-border)"
                  el.style.background = "var(--glass)"
                }}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-chougale-573786268"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--muted-foreground)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "#0077b5"
                  el.style.borderColor = "rgba(0,119,181,0.5)"
                  el.style.background = "rgba(0,119,181,0.1)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "var(--muted-foreground)"
                  el.style.borderColor = "var(--glass-border)"
                  el.style.background = "var(--glass)"
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:abhishekchougale038@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "var(--glass)",
                  border: "1px solid var(--glass-border)",
                  color: "var(--muted-foreground)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "#ff6584"
                  el.style.borderColor = "rgba(255,101,132,0.5)"
                  el.style.background = "rgba(255,101,132,0.1)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.color = "var(--muted-foreground)"
                  el.style.borderColor = "var(--glass-border)"
                  el.style.background = "var(--glass)"
                }}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Home", "About", "Education", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    style={{
                      color: "var(--muted-foreground)",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      transition: "color 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6c63ff"
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)"
                    }}
                  >
                    <span style={{ color: "#6c63ff", fontSize: "0.7rem" }}>▶</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Snapshot */}
          <div>
            <h3
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1.25rem",
              }}
            >
              Education
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { degree: "MCA", college: "D.Y. Patil College, Talsande" },
                { degree: "BCA", college: "D.R. Mane College, Kagal" },
                { degree: "12th", college: "M.H. Shine, Tisangi" },
                { degree: "10th", college: "D.M. Patil, Tisangi" },
              ].map((edu) => (
                <li key={edu.degree} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                  <span
                    style={{
                      color: "var(--foreground)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                    }}
                  >
                    {edu.degree}
                  </span>
                  <span style={{ color: "var(--muted-foreground)", fontSize: "0.8rem" }}>{edu.college}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "0.85rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            © {new Date().getFullYear()} Abhishek Vishnu Chougale. Made with info.
            <Heart size={14} style={{ color: "#ff6584", fill: "#ff6584" }} /> in Maharashtra
          </p>
          <p style={{ color: "var(--muted-foreground)", fontSize: "0.85rem" }}>
            Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  )
}
