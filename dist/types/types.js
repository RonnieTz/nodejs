export class Room {
    constructor(name, rules, questions, id) {
        this.name = name;
        this.rules = rules;
        this.users = [];
        this.questions = questions;
        this.id = id;
    }
    addUser(name) {
        this.users.push({
            name,
            questionsAnswered: 0,
            correctAnswers: 0,
            checkedAnswer: false,
            startedGame: false,
        });
    }
    updateUserScore(name, questionsAnswered, correct_answer) {
        const index = this.users.findIndex((user) => user.name === name);
        this.users[index].correctAnswers =
            this.users[index].correctAnswers + correct_answer;
        this.users[index].questionsAnswered = questionsAnswered;
    }
}
//# sourceMappingURL=types.js.map