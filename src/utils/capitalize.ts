export const capitalize = (string: string) => {
  if (typeof string !== "string")
    throw new Error("You must pass a string into the capitalize function");

  return string[0].toUpperCase() + string.slice(1);
};
