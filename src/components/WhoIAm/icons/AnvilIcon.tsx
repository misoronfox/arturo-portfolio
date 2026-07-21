
import { colors } from "../../../theme/WhoIAm/colors";

export function AnvilIcon(){
  return (
    <svg viewBox="0 0 40 24" width="26" height="16" aria-hidden="true">
      <path
        d="M2,20 L8,20 L10,15 L20,15 L22,11 L34,11 L36,15 L36,17 L24,17 L22,20 L2,20 Z"
        fill={colors.gold}
      />
      <rect x="16" y="20" width="8" height="3" fill={colors.gold} />
    </svg>
  );
}
