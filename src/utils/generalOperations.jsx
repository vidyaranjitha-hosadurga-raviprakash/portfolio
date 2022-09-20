export const openNewTab = (url) => {
  return window.open(url, "_blank");
};

export const isEmpty = (object) => Object.values(object).some((x) => x === "");

export const isActiveEle = (currentActiveEle, selectedElem) => {
  return currentActiveEle === selectedElem ? "active" : "";
};
