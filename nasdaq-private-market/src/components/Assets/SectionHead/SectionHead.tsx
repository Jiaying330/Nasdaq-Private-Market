import "./SectionHead.scss";
type propType = { headline: string; title: string };
export default function SectionHead({ headline, title }: propType) {
  return (
    <header className="section__head">
      <Headline headline={headline} />
      <h2 className="section__title">{title}</h2>
    </header>
  );
}

export function Headline({ headline }: { headline: string }) {
  return <div className="section__headline">{headline}</div>;
}
