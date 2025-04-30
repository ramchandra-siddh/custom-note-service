const STORAGE_KEY = "custom_notes";

export const getNotes = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const saveNote = (note) => {
  const existing = getNotes();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, note]));
};
