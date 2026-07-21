

import type { Principle } from "../../../config/profile.config";
import { Reveal } from "../layout/Reveal";

interface PrincipleRowProps {
  principle: Principle;
  index: number;
}

export function PrincipleRow({ principle, index }: PrincipleRowProps){
  return (
    <Reveal delayMs={index * 90}>
      <div className="eng-principle-row">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "var(--blue-dim)",
            paddingTop: 2,
            width: 28,
            flexShrink: 0,
          }}
        >
          {principle.code}
        </span>
        <div className="eng-principle-row__title">
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-serif)",
              fontWeight: 500,
              fontSize: 20,
              color: "var(--text-primary)",
            }}
          >
            {principle.title}
          </h3>
        </div>
        <p style={{ margin: 0, color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, flex: 1 }}>
          {principle.description}
        </p>
      </div>
    </Reveal>
  );
}
