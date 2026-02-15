// Task #1

let userName: string;
let userAge: number;
let isStudent: boolean;
let emptyValue: null;
let notAssigned: undefined;

// Task #2

let something: unknown;
something = "string";
something = 55;
something = true;

// Task #3

function printValue(arg: unknown): void {
  if (typeof arg === "string") {
    console.log(arg.length);
  } else if (typeof arg === "number") {
    console.log(arg ** 2);
  } else {
    console.log("Невідомий тип");
  }
}

// Task #4

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  phone?: string;
}

const user1: User = {
  id: 1,
  name: "Eugene",
  email: "eugene@gmail.com",
  isActive: true,
};

// Task #5

const user2: User = {
  id: 2,
  name: "notEugene",
  email: "noteugene@gmail.com",
  isActive: false,
};

// Task #6

interface Product {
  title: string;
  price: number;
  tags: string[];
}

const phone: Product = {
  title: "phone",
  price: 200,
  tags: ["tag1", "tag2", "tag3"],
};

const laptop: Product = {
  title: "laptop",
  price: 500,
  tags: ["tag1", "tag2"],
};

const products: Product[] = [phone, laptop];

// Task #7

let id: number | string;

id = 100;
id = "100";

// Task #8

function formatID(id: number | string): string {
  return typeof id === "number" ? "ID: 123" : "ID: abc";
}

// Task #9

type Status = "success" | "error" | "loading";

const successStatus: Status = "success";

// Task #10

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ["a", "b", "c"];
const flags: boolean[] = [true, false, true];

// Task #11

const users: User[] = [user1, user2];

// Task #12

const mixedArray: (string | number)[] = ["one", 1, "1", 111];

// Task #13

function sum(first: number, second: number): number {
  return first + second;
}

// Task #14

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// Task #15

function getDiscount(price: number, discount: number): number {
  return price - (price * discount) / 100;
}

// Task #16

function handleResponse(
  status: "success" | "error",
  data: unknown,
): string | number | undefined {
  if (status === "success" && typeof data === "string") {
    return data.length;
  } else if (status === "success" && typeof data === "number") {
    return data * 2;
  } else if (status === "error") {
    return "Something went wrong";
  }
}
