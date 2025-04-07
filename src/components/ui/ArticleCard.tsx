
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
}: ArticleCardProps) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px] flex flex-col h-full">
      <Link to={`/blog/${id}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2">
          <div
            className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {category}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">
          <Link to={`/blog/${id}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center space-x-1">
            <User size={14} />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            to={`/blog/${id}`} 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Leggi l'articolo
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
