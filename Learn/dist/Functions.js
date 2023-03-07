"use strict";
function calculateTax(amount, discount, ...extraFees) {
    return amount * 1.2 - discount + extraFees.reduce((prev, curr) => prev + curr);
}
