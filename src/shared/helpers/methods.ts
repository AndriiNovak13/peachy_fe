export const setColumnMeta = (
  minSize?: string,
  maxSize?: string,
  size?: string
) => {
  return { minSize, maxSize, size };
};

export const truncateText = (text: string | null, length: number) => {
  if (!text) return;
  return text.length > length ? `${text?.substring(0, length)}...` : text;
};
