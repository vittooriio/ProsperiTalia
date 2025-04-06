
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  subtitle,
  image,
  buttonText,
  buttonLink
}: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-primary py-20 md:py-32 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="w-full h-full object-cover object-center opacity-15" />
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">{subtitle}</p>
          
          {buttonText && buttonLink && (
            <Link to={buttonLink} className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-md inline-block transition-colors">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
