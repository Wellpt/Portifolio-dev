export function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) {
  return <header className="section-heading"><div><p className="eyebrow"><span>{number}</span> / {eyebrow}</p><h2>{title}</h2></div>{text && <p className="section-intro">{text}</p>}</header>;
}
