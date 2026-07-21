
import { profile } from "../../../config/profile.config";
import { SectionHeading } from "../layout/SectionHeading";
import { SkillChip } from "./SkillChip";
import { Reveal } from "../layout/Reveal";

export function SkillsSection() {
  const categories = Object.entries(profile.skills);

  return (
    <section id="stack" className="eng-section" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="eng-container">
        <SectionHeading
          code="02"
          title="Stack"
          description="Tools I reach for by default — chosen for how well they age, not how new they are."
        />

        <div className="eng-grid-3">
          {categories.map(([category, items], index) => (
            <Reveal key={category} delayMs={index * 100}>
              <div>
                <span className="eng-mono-label">{category}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                  {items.map((item) => (
                    <SkillChip key={item} label={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
