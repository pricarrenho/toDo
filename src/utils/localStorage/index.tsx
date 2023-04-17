type LocalStorageItem = "Tasks" | "Teste";

export const getLocalStorageItem = (key: LocalStorageItem) => {
  const localStorageData = localStorage.getItem(key);
  if (!localStorageData) return;
  return JSON.parse(localStorageData);
};

export const setLocalStorageItem = (key: LocalStorageItem, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
