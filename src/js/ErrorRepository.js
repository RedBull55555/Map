export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [100, 'Invalid request'],
      [200, 'User not found'],
      [300, 'Server unavailable'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
