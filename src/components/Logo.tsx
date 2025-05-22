import { Link } from "react-router-dom";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link 
      to="#" 
      onClick={scrollToTop}
      className="flex items-center gap-2 hover:text-primary transition-colors"
    >
      <img 
        src="/icon.png" 
        alt="Airidas Augulis Logo" 
        className="w-8 h-8 object-contain"
      />
      <span className="font-bold text-xl">Airidas Augulis</span>
    </Link>
  );
};

export default Logo;
