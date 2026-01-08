interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  buttonType: "button" | "submit" | "reset";
}

const Button = ({ handleClick, buttonType, children }: ButtonProps) => {
  return (
    <button
      className="px-3 py-2 border border-black/25 rounded-md cursor-pointer"
      onClick={handleClick}
      type={buttonType}
    >
      {children}
    </button>
  );
};

export default Button;
