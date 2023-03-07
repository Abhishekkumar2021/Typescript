type Customer = {
    name: string;
    age: number;
}

function getCustomer(customerId: number): Customer | null {
    if (customerId === 1) {
        return {
            name: "John Smith",
            age: 30
        };
    } else {
        return null;
    }
}

let customer = getCustomer(1);
console.log(customer?.name); // John Smith