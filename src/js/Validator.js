export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const reg = /[a-zA-Я\d\-_]/;
    const reg1 = /\d{4}/;
    const reg2 = /^[\d_-]/;
    const reg3 = /[\d_-]$/;
    if (
      reg.test(this.name)
      && !reg1.test(this.name)
      && !reg2.test(this.name)
      && !reg3.test(this.name)
    ) {
      return true;
    }
    return false;
  }
}
