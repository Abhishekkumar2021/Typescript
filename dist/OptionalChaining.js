"use strict";
function getCustomer(customerId) {
    if (customerId === 1) {
        return {
            name: "John Smith",
            age: 30
        };
    }
    else {
        return null;
    }
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.name); // John Smith
