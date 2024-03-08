export class Foo {
  #foo: boolean;

  constructor() {
    this.#foo = false;
  }

  foo(): boolean {
    return this.#foo;
  }
}
