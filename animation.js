export const container = {
  //initial
  hidden: { opacity: 0 },
  //animate
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
