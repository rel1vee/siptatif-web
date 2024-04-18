interface ButtonProps {
  buttonName: string;
}

const Button: React.FC<ButtonProps> = ({ buttonName }) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white border border-transparent rounded-lg gap-x-2 bg-gradient-to-tl from-blue-600 to-violet-600 hover:bg-gradient-to-tr disabled:opacity-50 disabled:pointer-events-none"
    >
      {buttonName}
    </button>
  );
};

export default Button;
