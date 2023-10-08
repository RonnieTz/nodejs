export class Message {
    constructor(user, message, id) {
        this.user = user;
        this.message = message;
        this.time = new Date().toLocaleTimeString();
        this.id = id;
    }
}
export const messages = [];
//# sourceMappingURL=messages.js.map