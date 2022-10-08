export const getResponsiveWidth = () => {
  if (innerWidth > 800) {
    if (innerWidth * 0.6 > 800) {
      return 800;
    } else {
      return innerWidth * 0.6;
    }
  } else {
    return innerWidth * 0.9;
  }
};
