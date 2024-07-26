export const PI = 3.14;
export const TAU = 2 * PI;
export const goldenRatio = (1 + Math.sqrt(5)) / 2;

export function calculateArea(radius) {
    return PI * radius * radius;
}

export function arcLength(radius, angleInDegrees) {
    const angleInRadians = angleInDegrees * (PI / 180);
    return radius * angleInRadians;
}

export function sectorArea(radius, angleInDegrees) {
    const angleInRadians = angleInDegrees * (PI / 180);
    return 0.5 * Math.pow(radius, 2) * angleInRadians;
}
