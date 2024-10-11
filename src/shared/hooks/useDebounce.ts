import { useState, useEffect } from "react";

function useDebounce<T>(initialValue: T, time: number): T {
  const value = initialValue;
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, time]);

  return debouncedValue;
}

export default useDebounce;
