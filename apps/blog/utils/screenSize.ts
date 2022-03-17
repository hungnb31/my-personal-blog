const widestPoint = {
  sm: 768,
  md: 1024,
  lg: 1536,
};

type screenSize = "small" | "medium" | "large";

export const isSize = (size: screenSize): boolean => {
  if (window) {
    switch (size) {
      case "small":
        return window.innerWidth < widestPoint.sm;
      case "medium":
        return window.innerWidth < widestPoint.md;
      case "large":
        return window.innerWidth < widestPoint.lg;
      default:
        return false;
    }
  }
  return false;
};
