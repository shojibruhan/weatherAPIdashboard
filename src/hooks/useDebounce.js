import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutIdRef.current) {
        clearTimeout(timeOutIdRef.current);
      }
    };
  }, []);
  const debounceCallBack = (...args) => {
    if (timeOutIdRef.current) {
      clearTimeout(timeOutIdRef.current);
    }

    timeOutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debounceCallBack;
};

export default useDebounce;
