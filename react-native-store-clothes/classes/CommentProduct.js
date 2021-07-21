export default class CommentProduct {
    constructor(userName, msg) {
      this.userName = userName;
      this.msg = msg;
      this.id = Math.random();
    }
  }