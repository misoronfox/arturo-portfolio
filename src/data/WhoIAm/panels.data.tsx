
import type { PanelConfig } from "../../types/WhoIAm/panel.types";
import { CodeIcon } from "../../components/WhoIAm/icons/CodeIcon";
import { AnvilIcon } from "../../components/WhoIAm/icons/AnvilIcon";


import engineerBg from "../../assets/WhoIAm/engineer-bg.png";

import silversmithBg from "../../assets/WhoIAm/silversmith-bg.png"

// Update `href` below to point at your real routes (e.g. "/software-engineer"
// and "/silversmith"), or to full URLs if the two portfolios live on
// separate domains.
export const panels: PanelConfig[] = [
  {
    variant: "engineer",
    label: "Software Engineer",
    sublabel: <CodeIcon />,
    backgroundImage: engineerBg,
    href: "/engineer",
    ariaLabel: "Go to my software engineering portfolio",
  },
  {
    variant: "silversmith",
    label: "Silversmith",
    sublabel: <AnvilIcon />,
    backgroundImage: silversmithBg,
    href: "/silversmith",
    ariaLabel: "Go to my silversmithing portfolio",
  },
];
