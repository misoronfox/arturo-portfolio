
import { colors } from "../../../theme/WhoIAm/colors";

export function CodeIcon(){
  return (
    <span
      style={{
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        fontSize: 15,
        color: colors.blue,
        letterSpacing: "0.08em",
      }}
      aria-hidden="true"
    >
      {"</>"}
    </span>
  );
}
