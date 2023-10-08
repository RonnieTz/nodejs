import { Message } from "../messages/messages.js";

export type User = {
  name: string;
  questionsAnswered: number;
  correctAnswers: number;
  startedGame: boolean;
  checkedAnswer: boolean;
};
export type Rules = { number: number; difficulty: string; category: number };
export type Question = {
  question: string;
  answers: string[];
  correct_answer: string;
};
export class Room {
  name: string;
  rules: Rules;
  users: User[];
  questions: Question[];
  id: string;

  constructor(name: string, rules: Rules, questions: Question[], id: string) {
    this.name = name;
    this.rules = rules;
    this.users = [];
    this.questions = questions;
    this.id = id;
  }

  addUser(name: string) {
    this.users.push({
      name,
      questionsAnswered: 0,
      correctAnswers: 0,
      checkedAnswer: false,
      startedGame: false,
    });
  }

  updateUserScore(
    name: string,
    questionsAnswered: number,
    correct_answer: number
  ) {
    const index = this.users.findIndex((user) => user.name === name);
    this.users[index].correctAnswers =
      this.users[index].correctAnswers + correct_answer;
    this.users[index].questionsAnswered = questionsAnswered;
  }
}
