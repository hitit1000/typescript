let ex1: number = 1;
let ex2: string = "2";
let ex3: boolean = true;

let ex4: number[] = [1, 1];
let ex5: string[] = ["2", "2"];
let ex6: boolean[] = [true, false];

const ex7: {
  name: string;
  age?: number;
} = {
  name: "hi",
};

type Typetest = {
  name: string;
  readonly age?: number;
};

const ex8: Typetest = { name: "hitit", age: 55 };
const ex9 = (name: string): Typetest => ({ name });
ex9("dd");

const ex10: readonly number[] = [1, 2, 3, 4];

const ex11: [string, number, boolean] = ["hi", 24, true];

let ex12: unknown;
// ex12 + 2;
if (typeof ex12 === "number") {
  ex12 + 2;
}
// ex12.toUpperCase;
if (typeof ex12 === "string") {
  ex12.toUpperCase;
}

// ///////////////////////////////////////////////////////////////////////////////

let a: string = "kim";
let b: string[] = ["kim", "lee"];
let c: { c_1: string; c_2: number; c_3?: number } = { c_1: "kim", c_2: 123 };

let d_1: string | number = "kim";
let d_2: string | number = 123;

const sum = (x: number): number => {
  return x * 2;
};

type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  name: string;
  age: number;
};

type Member3 = {
  [key: string]: string; // 모든 속성 일괄 적용
};
