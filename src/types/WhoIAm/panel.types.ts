import type { ReactNode } from "react";

export type PanelVariant = "engineer" | "silversmith";

export interface PanelConfig {
  /** Which visual theme (colors, overlay) the panel uses */
  variant: PanelVariant;
  /** Main label shown in the panel, e.g. "Software Engineer" */
  label: string;
  /** Small caption/icon shown under the label */
  sublabel: ReactNode;
  /** Background photo for the panel */
  backgroundImage: string;
  /** Where the panel navigates to when clicked */
  href: string;
  /** Accessible description of the destination */
  ariaLabel: string;
}
