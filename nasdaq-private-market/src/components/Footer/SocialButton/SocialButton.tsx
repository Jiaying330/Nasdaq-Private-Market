import "./SocialButton.scss";

export default function SocialButton({
  image,
  name,
}: {
  image: string;
  name?: string;
}) {
  return (
    <a href="#" className={`btn__social ${name === "youtube" ? "" : "style"}`}>
      <img src={image} alt="" />
    </a>
  );
}
