import "./ArrowButtonFilled.scss";

type propType = { text: string };
export default function ArrowButtonFilled({ text }: propType) {
  return (
    <a href="#" className="btn__arrow--filled">
      {text} &#8594;
    </a>
  );
}
