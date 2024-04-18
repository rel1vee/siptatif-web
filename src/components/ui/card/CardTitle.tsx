import Link from "next/link";

interface CardProps {
  cardName: string;
  lineText: string;
  linkText: string;
  href: string;
}

const CardTitle: React.FC<CardProps> = ({ cardName, lineText, linkText, href }) => {
  return (
    <div className="text-center">
      <h1 className="block text-2xl font-bold text-slate-800">{cardName}</h1>
      <p className="mt-2 text-sm text-slate-600">
        {lineText}
        <Link className="font-medium text-indigo-600 decoration-2 hover:underline" href={href}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default CardTitle;
