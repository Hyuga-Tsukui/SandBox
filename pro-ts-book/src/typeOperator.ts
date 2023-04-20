function getter<O extends object, K extends keyof O>(o: O, k: K): O[K] {
  return o[k];
}

type ActivityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  }[];
};

const log: ActivityLog = {
  lastEvent: new Date(),
  events: [
    { id: "hogehoge", timestamp: new Date(), type: "Read" },
    { id: "fugafuga", timestamp: new Date(), type: "Write" },
  ],
};

const lastEvent = getter(log, "lastEvent");

type Get = {
  <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
  <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
    o: O,
    k1: K1,
    k2: K2
  ): O[K1][K2];
  <
    O extends object,
    K1 extends keyof O,
    K2 extends keyof O[K1],
    K3 extends keyof O[K1][K2]
  >(
    o: O,
    k1: K1,
    k2: K2,
    k3: K3
  ): O[K1][K2][K3];
};

const deepGetter: Get = (object: any, ...keys: string[]) => {
  let result = object;
  keys.forEach((k) => (result = result[k]));
  return result;
};

console.log(deepGetter(log, 'events', 0, 'type'));