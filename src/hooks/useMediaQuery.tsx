import { useMemo, useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [isMatch, setIsMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChangeMediaQuery = () => setIsMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChangeMediaQuery);

    return () => mediaQuery.removeEventListener("change", onChangeMediaQuery);
  }, [mediaQuery]);

  return isMatch;
};
