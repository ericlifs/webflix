type ButtonProps = {
  variant: "primary" | "secondary";
  text: string;
  Icon: JSX.Element;
  //onClick: () => void;
};

export default function Button({ variant, text, Icon }: ButtonProps) {
  return (
    <button className={`cta ${variant}`}>
      {Icon}
      <label>{text}</label>
    </button>
  );
}

