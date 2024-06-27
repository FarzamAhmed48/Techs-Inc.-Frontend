import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({a=0,b=0}) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(a, b);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
