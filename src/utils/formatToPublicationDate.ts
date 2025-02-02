export const formatToPublicationDate = (dateString: string): string => {
  const currentYear = new Date().getFullYear();
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = String(date.getDate()).padStart(2, "0");

  if (currentYear !== year) {
    return `${month} ${day}, ${year}`;
  }

  return `${month} ${day}`;
};
