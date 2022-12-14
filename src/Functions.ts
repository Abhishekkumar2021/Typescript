function calculateTax(amount: number, discount: number, ...extraFees: number[]): number {
    return amount * 1.2 - discount + extraFees.reduce((prev, curr) => prev + curr);
}