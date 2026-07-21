
import { profile } from "../../../config/profile.config";
import { SectionHeading } from "../layout/SectionHeading";
import { PrincipleRow } from "./PrincipleRow";
import { StatsStrip } from "./StatsStrip";
import { Reveal } from "../layout/Reveal";

export function PrinciplesSection(){
  return (
    <section id="principles" className="eng-section">
      <div className="eng-container">
        <SectionHeading
          code="01"
          title="How I work"
          description={profile.summary}
        />

        <Reveal>
          <StatsStrip />
        </Reveal>

        <div style={{ marginTop: 56 }}>
          {profile.principles.map((principle, index) => (
            <PrincipleRow key={principle.code} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
