// Objects
// const person = {
//   name: "Divyansh Singh",
//   age: 25,
//   isStudent: true,
//   address: {
//     houseNo: 53, // <---
//     block: "Jakasandra", // <---
//     road: "4th Cross Road",
//     city: "Bangalore", // <---
//     state: "Karnataka",
//     pin: 560034, // <---
//   },
// };

// 13 --> 4 --> 50 places

// const pin = person.address.pin;
// const hno = person.address.houseNo;
// const city = person.address.city;
// const block = person.address.block;

// 8000 --> 200 --> 10 places

// const a = [1, 2, 3, 4];
// const b = 6;
// const c = "divyansh";
// const d = true;

// console.log(typeof a);
// console.log(typeof person);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// console.log(Array.isArray(a));
// console.log(Array.isArray(person));

// if (!Array.isArray(person) && typeof a === "object")
//   console.log("This is an object and not an array");
// else console.log("This is an array and not an object");

// Object.assign()
// const target = { a: 1 };
// const source1 = { b: 2, c: 3 };
// const source2 = { d: 4, e: 5 };
// const result = Object.assign(target, source1, source2);

// console.log("🚀 ~ target:", target);
// console.log("🚀 ~ source1:", source1);
// console.log("🚀 ~ source2:", source2);
// console.log("🚀 ~ result:", result);

// Object.seal()
// const car = { make: "Toyota" };

// Object.seal(car);

// car.make = "Honda";
// car.model = "Civic";
// delete car.make;

// console.log(car);

// Object.isFrozen() --> Object.freeze()

// const car = { make: "Toyota" };

// Object.freeze(car);

// car.make = "Honda";
// car.model = "Civic";
// delete car.make;

// console.log(car);

// console.log(Object.isFrozen(car));
// console.log(Object.isFrozen(person));

// Object.hasOwnProperty()

// const obj = { key: "value" };
// console.log(obj.hasOwnProperty("key"));
// console.log(obj.hasOwnProperty("divyansh"));

// ==============================================================================

// Spread Operator (...)
// const base = { a: 1, b: 2 };
// const extended = { ...base, c: 3, d: 4, ...person.address };
// console.log("🚀 ~ base:", base);
// console.log("🚀 ~ extended:", extended);
// base.a;

// Rest Operator (...)
// const { f, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// console.log("🚀 ~ f:", f);
// console.log("🚀 ~ d:", d);
// console.log("🚀 ~ b:", b);
// console.log("🚀 ~ rest:", rest);

// ==============================================================================

// Destructuring
// const data = [10, { details: [20, { nested: [30, 40] }] }];
// // data[1].details[1].nested[0]
// const [
//   first,
//   {
//     details: [second],
//   },
// ] = data;

// const a = [1, 2, 3, 4, 5];
// const b = { c: 1, d: 2, e: 3 };

// const [first, second] = a;
// console.log("🚀 ~ second:", second);
// console.log("🚀 ~ first:", first);

// const [state, setState] = useState(null);

// console.log("🚀 ~ first:", first);
// console.log("🚀 ~ second:", second);
// console.log("🚀 ~ third:", third);
// console.log("🚀 ~ fourth:", fourth);

// ==============================================================================

// Date Object

// const now = new Date();
// console.log("🚀 ~ now:", now.getHours());

// ==============================================================================

// Shallow Copy & Deep Copy

// const shallow = { a: { b: 1 }, c: 2 };
// const copy = { ...shallow };
// const copy1 = shallow;
// const copy3 = {};
// Object.assign(copy3, shallow);

// copy3.c = 4;
// copy3.a.b = 10;

// console.log("🚀 ~ shallow:", shallow);
// console.log("🚀 ~ copy:", copy3);

// const deep = JSON.parse(JSON.stringify(shallow));
// deep.c = 40;
// deep.a.b = 20;
// console.log("🚀 ~ shallow:", shallow);
// console.log("🚀 ~ deep:", deep);

// const a = { b: 1, c: 2, d: 3, e: { f: 4, e: 5 } };
// const p = "{'b':1,'c':2,'d':3,'e':{'f':4,'e':5}}";

// console.log(typeof a);
// console.log(typeof JSON.stringify(a));
// console.log(typeof JSON.parse(JSON.stringify(a)));
// const p = JSON.stringify(a);
// p.b = 2;
// console.log("🚀 ~ p:", p);
