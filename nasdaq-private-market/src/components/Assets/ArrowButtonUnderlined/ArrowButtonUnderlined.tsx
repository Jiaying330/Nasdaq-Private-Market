import "./ArrowButtonUnderlined.scss";

export default function ArrowButtonUnderlined({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <a href={link} className="btn__arrow--underlined">
      {text} &#8594;
    </a>
  );
}
