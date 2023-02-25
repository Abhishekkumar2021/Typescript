"use strict";
let n = 1;
while (n <= 100000000) {
    function generatePoint() {
        return {
            x: Math.random(),
            y: Math.random()
        };
    }
    function isInsideCircle(point) {
        return point.x * point.x + point.y * point.y <= 1;
    }
    function main() {
        let inside = 0;
        for (let i = 0; i < n; i++) {
            if (isInsideCircle(generatePoint())) {
                inside++;
            }
        }
        const diff = Math.abs(Math.PI - 4 * inside / n);
        console.log(`n: ${n}, diff: ${diff}`);
    }
    main();
    n = n * 10;
}
