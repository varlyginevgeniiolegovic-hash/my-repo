/* @flow */
type Point = {
	x: number,
	y: number,
};

type Matrix = [number, number, number, number, number, number];

export function transform2D(viewMatrix: Matrix, p: Point): Point {
	const [a, b, c, d, tx, ty] = viewMatrix;

	return {
		x: a * p.x + b * p.y + tx,
		y: c * p.x + d * p.y + ty,
	};
}

export function matrixMul(b: Matrix, a: Matrix): Matrix {
	const [aa, ab, ac, ad, atx, aty] = a;
	const [ba, bb, bc, bd, btx, bty] = b;

	return [
		aa * ba + ab * bc,
		aa * bb + ab * bd,
		ac * ba + ad * bc,
		ac * bb + ad * bd,
		aa * btx + ab * bty + atx,
		ac * btx + ad * bty + aty,
	];
}

export function dot2D(v1: Point, v2: Point): number {
	return v1.x * v2.x + v1.y * v2.y;
}

export function add2D(v1: Point, v2: Point): Point {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y,
	};
}

export function subtract2D(v1: Point, v2: Point): Point {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y,
	};
}

export function mulScalar2D(scalar: number, v: Point) {
	return {
		x: scalar * v.x,
		y: scalar * v.y,
	};
}

function parametricAngle(lambda: number, a: number, b: number): number {
	return Math.atan2(Math.sin(lambda) / b, Math.cos(lambda) / a);
}

export function arcToCubicBezier(
	a: number,
	b: number,
	t1: number,
	t2: number,
): [Point, Point, Point, Point] {
	const major = a > b ? a : b;
	const minor = a > b ? b : a;
	const firstAngle = Math.PI * 2 * t1;
	const secondAngle = Math.PI * 2 * t2;
	const firstPoint = {
		x: major * Math.cos(firstAngle),
		y: minor * Math.sin(firstAngle),
	};
	const secondPoint = {
		x: major * Math.cos(secondAngle),
		y: minor * Math.sin(secondAngle),
	};
	const eta1 = parametricAngle(firstAngle, a, b);
	const eta2 = parametricAngle(secondAngle, a, b);
	const EPrime1 = {
		x: -major * Math.sin(eta1),
		y: minor * Math.cos(eta1),
	};
	const EPrime2 = {
		x: -major * Math.sin(eta2),
		y: minor * Math.cos(eta2),
	};
	const alpha
		= Math.sin(eta2 - eta1)
		* (Math.sqrt(4 + 3 * Math.tan((eta2 - eta1) / 2) ** 2) - 1)
		/ 3;

	return [
		firstPoint,
		add2D(firstPoint, mulScalar2D(alpha, EPrime1)),
		subtract2D(secondPoint, mulScalar2D(alpha, EPrime2)),
		secondPoint,
	];
}

export function round2D(a: Point): Point {
	return {
		x: Math.round(a.x),
		y: Math.round(a.y),
	};
}

export function distance2D(a: Point, b: Point): Point {
	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

export function normalize2D(a: Point): Point {
	return mulScalar2D(1 / distance2D({x: 0, y: 0}, a), a);
}
