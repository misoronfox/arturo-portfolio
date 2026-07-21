import React from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delayMs?: number;
  as?: ElementType;
}
export function Reveal({ children, delayMs = 0, as = "div" }: RevealProps){
  const [ref, visible] = useScrollReveal<HTMLDivElement>();
  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      className={`eng-reveal${visible ? " eng-reveal--visible" : ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </Tag>
  );
}
