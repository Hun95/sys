import { useEffect } from 'react';

export const useLazyLoading = (ref, number, something, attr) => {
  // const { yOffset } = useGlobalContext();
  useEffect(() => {
    const { current } = ref;
    const play = (something, attr) => {
      current.style[something] = attr;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.isIntersecting) {
            if (entry.intersectionRect.top < number) {
              return play(something, attr);
            }
          }
        });
      },
      { root: null }
    );

    observer.observe(current);

    return () => {
      observer.disconnect();
    };
  }, [attr, number, ref, something]);
};

export const useLoadingID = (ref, number, attr) => {
  useEffect(() => {
    const { current } = ref;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.intersectionRect.top < number) {
          current.id = attr;
        }
      });
    }, {});

    observer.observe(current);

    return () => {
      observer && observer.disconnect();
    };
  }, [attr, number, ref]);
};
