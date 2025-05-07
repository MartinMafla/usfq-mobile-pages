
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to handle scrolling to top on page navigation
 */
export function useScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

/**
 * Function to scroll to the top of the page
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
