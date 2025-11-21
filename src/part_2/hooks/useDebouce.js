import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeOutId.current) {
        console.log(
          "clearing timeout: . . .",
          timeOutId.current,
          typeof timeOutId.current
        );
        clearTimeout(timeOutId.current);
      }
    };
  }, []);

  const debouncedCallBack = (...args) => {
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }
    timeOutId.current = setTimeout(() => {
      callback(...args);
      console.log("args of debounce: ", args);
    }, delay);
  };
  return debouncedCallBack;
};

// test debounce
// const demoDebounce = (fn, delayTime) => {
//   let id;
//   return () => {
//     if (id) clearTimeout(id);
//     id = setTimeout(() => {
//       fn();
//     }, delayTime);
//   };
// };

// const button = document.getElementById("button");
// button.addEventListener(
//   "click",
//   demoDebounce(() => {
//     console.log("object");
//   }, 1000)
// );

export default useDebounce;
