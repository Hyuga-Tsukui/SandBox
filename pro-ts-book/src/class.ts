class UserC {
    name: string = '';
    age: number = 0;
}

type Hoge = {
    name: string;
}


function getHelloStr(): `Hello, ${string}!` {
    // returns a random hello string
    const rand = Math.random();
    if(rand < 0.3) {
        return "Hello, world!";
    }else if (rand < 0.4) {
        return "Hello, my world!";
    }else {
        return "Hello, World!";
    }
}


function makeKey<T extends string>(userName: T) {
    return `user:${userName}` as const;
}

function fromKey<T extends string>(key: `user:${T}`) {
    // remove `user:` prefix
    const userKey = key.slice(5);
    // cast to type T
    return userKey as T;
}

const key = makeKey("Hyuga");
const user = fromKey(key)


const hyuga = {
    name: "hyug",
    age: 27
} as const;

type Uhyo = {
    name: "uhyo";
    age: number;
};


type Human = {
    type: "human";
    name: string;
    age: number;
};

function setAge(human: Human, age: Human["age"]) {
    return {
        ...human,
        age
    };
}

const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26,
};

const uhyo2 = setAge(uhyo, 29)

type HumanKeys = keyof Human;

function get<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(get(uhyo, 'name'));
console.log(get(uhyo, 'age'));


const fruits = ['Apple', 'Orange', 'Grape'] as const;

type Fruits = (typeof fruits)[number];

function doWhatever(obj: unknown) {
}


type HasToString = {
    toString: () => string;
};

function useToString1(obj: HasToString & object) {
    console.log(obj.toString());
}

useToString1({
    toString() {
        return "Hello";
    }
});

const map1: Map<string, number> = new Map();
map1.set("foo", 1234);
const value = map1.get("foo");
console.log(map1.size);

function useNever(value: never) {
    console.log(value);
}

function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === "string" || typeof value === "number";
}

type SystemSupportLanguage = "en" | "fr" | "it" | "es";

type Butterfly = {
    [key in SystemSupportLanguage]: string;
};

const butterflies: Butterfly = {
    en: "Butterfly",
    fr: "Papillon",
    it: "Farfalla",
    es: "Mariposa"
};

type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
type Day = Weekday | "Sat" | "Sun";

let nextDay: {[K in Weekday]: Day} = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat"
};

type Account = {
    id: number;
    isEmployee: boolean;
    notes: string[];
}

/**
 * すべてのプロパティをオプショナルにする
 */
type OptionalAccount = Partial<Account>;

/**
 * すべてのプロパティを必須にする
 */
type Account2 = Required<OptionalAccount>;

/**
 * すべてのプロパティを読み取り専用にする
 */
type ReadOnlyAccount = Readonly<Account>;

/**
 * 指定したプロパティのみを抽出した型を作る
 */
type Account3 = Pick<Account, "id" | "isEmployee">;


type RestArgas<M> = M extends "string" ? [string, string] : [number, number, number];


function func<M extends "string" | "number">(mode: M, ...args: RestArgas<M>) {
    console.log(mode, ...args);
}

func("string", "foo", "1");
func("number" , 1, 2, 3);


type ToArray<T> = T[]


type ToArray2<T> = T extends unknown ? T[]: T[];

type Without<T, U> = T extends U ? never : T;

type A = Without<string | number | boolean, boolean>;


type Option<T> = {
    tag: "some";
    value: T;
} | {
    tag: "none";
}

function isSome<T>(obj: Option<T>): obj is {tag: "some", value: T} {
    return obj.tag === "some";
}

function showNumberIfExists(obj: Option<number>): void {
    if(isSome(obj)) {
        console.log(obj.value);
    }
}

function mapOption<T, U>(obj: Option<T>, callBack: (arg: T) => U): Option<U> {
    switch(obj.tag) {
        case 'some':
            return {...obj, value: callBack(obj.value)}; 
        case 'none':
            return {...obj}     
    }
}


function doubleOption(obj: Option<number>) {
    return mapOption(obj, x => x * 2);
}

const four: Option<number> = { tag: "some", value: 4 };
const nothing: Option<number> = { tag: "none" };

console.log(doubleOption(four))
console.log(doubleOption(nothing))

