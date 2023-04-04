// 部分型についての学習 参考（プロになるためのTypeScript入門）

type FooBar = {
    foo: string;
    bar: number;
};

type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
}

const obj: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: false
}

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
}

/**
 * Human型はプロパティage（number）を持つため、Animal型の部分型である。
 */
type Human = {
    age: number;
    name: string;
}

type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
}

type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
}


const humanFamily: HumanFamily = {
    familyName: "山田",
    mother: {
        age: 30,
        name: "山田太郎"
    },
    father: {
        age: 35,
        name: "山田花子"
    },
    child: {
        age: 10,
        name: "山田次郎"
    }
}

const animalFamily: AnimalFamily = humanFamily;