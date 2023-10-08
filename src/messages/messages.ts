export class Message {
  user: { name: string; image: string };
  message: string;
  time: string;
  id: string;
  constructor(
    user: { name: string; image: string },
    message: string,
    id: string
  ) {
    this.user = user;
    this.message = message;
    this.time = new Date().toLocaleTimeString();
    this.id = id;
  }
}

export const messages: Message[] = [];
