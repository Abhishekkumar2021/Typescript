const marks: number[] = [1, 2, 3, 4, 5];
const marks2: Array<number> = [1, 2, 3, 4, 5];

function printArray<T>(arr: T[]): void {
  arr.forEach((item) => console.log(item));
}

printArray(marks);

const getData = <T>(data: T): T => {
    return data;
}


class Seller<T> {
    constructor(
        public name: string,
        public age: number,
        public product: T,
    ){}
}


const seller = new Seller("John", 30, "Apple");
const seller2 = new Seller("John", 30, ["Apple", "Banana"]);


