// 部分型についての学習 参考（プロになるためのTypeScript入門）

type FooBar = {
  foo: string;
  bar: number;
};

type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};

const obj: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false,
};

/**
 * このように、FooBarBaz型のオブジェクトをFooBar型の変数に代入することはできる。（このとき、FooBarBaz型はFooBar型の部分型である）
 *
 * TypeScriptは構造的部分型を採用しており、プロパティの型が互いに代入可能であれば、その型は部分型であるとみなす。
 * そのため、全く関係のない場所で定義された型でも、構造がどちらか一方を満たしていれば部分型であるとみなす。
 * 別の方法として、S型はTの部分型であることを明示的に定義する名前的部分型というものもある。（一般にサブタイプを定義する継承による方法）
 */
const obj2: FooBar = obj;

type Animal = {
  age: number;
};
