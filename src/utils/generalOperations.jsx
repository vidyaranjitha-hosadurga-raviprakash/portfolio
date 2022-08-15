export const openNewTab = (url) => {
  return window.open(url, "_blank");
};

export const isEmpty = (object) => Object.values(object).some((x) => x === "");
