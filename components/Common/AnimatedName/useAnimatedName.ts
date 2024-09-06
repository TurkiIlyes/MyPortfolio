import { useEffect, useState } from "react";

const useAnimatedName = () => {
  const firstName = "Ilyes";
  const lastName = "Turki";
  const [index, setIndex] = useState(1);
  const [isReversing, setIsReversing] = useState(false);
  const delay = 1000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        if (!isReversing) {
          if (prevIndex < Math.min(firstName.length, lastName.length)) {
            return prevIndex + 1;
          } else {
            setTimeout(() => {
              setIsReversing(true);
            }, 1000);

            return prevIndex;
          }
        } else {
          if (prevIndex > 1) {
            return prevIndex - 1;
          } else {
            setTimeout(() => {
              setIsReversing(false);
            }, 1000);
            return prevIndex;
          }
        }
      });
    }, delay);

    return () => clearInterval(interval);
  }, [isReversing, firstName.length, lastName.length]);
  return {
    firstName,
    lastName,
    index,
  };
};

export default useAnimatedName;
