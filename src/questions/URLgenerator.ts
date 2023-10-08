export const generateURL = (
  number: number,
  difficulty: string,
  category: number
) => {
  return `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`;
};
