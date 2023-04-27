type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }


type MyAwatited<T> = T extends Promise<infer U> ?
    U extends Promise<any>
        ? MyAwatited<U>
        : U
    :never;