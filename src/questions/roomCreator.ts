import axios from "axios";
import { Room, Rules } from "../types/types.js";
import { generateURL } from "./URLgenerator.js";

export const rooms: Room[] = [];

export const roomCreator = async (
  name: string,
  rules: Rules,
  id: string,
  creator: string
) => {
  const { number, difficulty, category } = rules;
  const URL = generateURL(number, difficulty, category);
  const res = await axios.get(URL);
  const questions = res.data.results.map((item: any) => {
    return {
      question: item.question,
      answers: [item.correct_answer, ...item.incorrect_answers]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
      correct_answer: item.correct_answer,
    };
  });

  const room = new Room(name, rules, questions, id, creator);
  return room;
};
