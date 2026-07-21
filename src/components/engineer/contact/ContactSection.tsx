
import { profile } from "../../../config/profile.config";
import { SectionHeading } from "../layout/SectionHeading";
import { Reveal } from "../layout/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="eng-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="eng-container">
        <SectionHeading
          code="04"
          title="Let's talk"
          description="Open to interesting problems — scalable systems, considered interfaces, or both at once."
        />

        <Reveal>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                style={{
                  padding: "13px 22px",
                  borderRadius: 10,
                  border: "1px solid var(--border-strong)",
                  color: "var(--text-primary)",
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                {social.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              style={{
                padding: "13px 22px",
                borderRadius: 10,
                background: "var(--blue)",
                color: "#04121e",
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Download résumé
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
