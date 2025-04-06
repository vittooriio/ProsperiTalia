
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
}

const CallToAction = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  bgColor = "bg-primary"
}: CallToActionProps) => {
  return (
    <section className={`${bgColor} text-white py-16 px-4`}>
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Link 
          to={buttonLink}
          className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
