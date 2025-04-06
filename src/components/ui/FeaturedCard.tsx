
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeaturedCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const FeaturedCard = ({ title, description, icon, link }: FeaturedCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-primary hover:text-primary/80 font-medium transition-colors">
        Scopri di più →
      </Link>
    </div>
  );
};

export default FeaturedCard;
