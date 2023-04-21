type ElementType<T> = T extends unknown[] ? T[number] : T;
type AA = ElementType<number[]>

type ElementType2<T> = T extends (infer U)[] ? U : T
type BB = ElementType2<number[]>


type SecondArg<F> = F extends (a: infer B) => any ? B : never;

type F = typeof Array['prototype']['slice']

type AB = SecondArg<F>

type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : any;


type C = ReturnType2<F>


type ExcludeSample = Exclude<number | string, string>;


type ExtractSample = Extract<number | string, string>;

type NonNullableSample = NonNullable<{a?: number | null}['a']>


type NullableObjType = {
    a?: number | null;
}