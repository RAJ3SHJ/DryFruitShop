import React, { createContext, useContext, useState, useEffect } from 'react';

const QuickViewContext = createContext();

export function QuickViewProvider({ children }) {
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProduct(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <QuickViewContext.Provider value={{ activeProduct, setActiveProduct }}>
      {children}
    </QuickViewContext.Provider>
  );
}

export const useQuickView = () => useContext(QuickViewContext);
