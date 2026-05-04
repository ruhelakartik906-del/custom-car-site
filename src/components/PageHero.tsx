import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: Props) => (
  <section className="relative bg-gradient-hero border-b border-border">
    <div className="container mx-auto py-20 md:py-28 text-center">
      {eyebrow && (
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 animate-fade-in">{eyebrow}</p>
      )}
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground animate-fade-up">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto h-px w-24 gold-divider" />
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);

export default PageHero;