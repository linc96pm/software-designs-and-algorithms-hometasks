export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  distance(x?: number, y?: number): number;
  distance(x: number, y: number): number;
  distance(point: Point, _?: any): number;

  distance(x: number | Point | undefined, y: number | undefined): number {
    if (typeof x === 'number' && typeof y === 'number') {
      return Math.sqrt(Math.abs(x - this.x) ** 2 + Math.abs(y - this.y) ** 2);
    } else if (x instanceof Point) {
      return Math.sqrt(Math.abs(x.x - this.x) ** 2 + Math.abs(x.y - this.y) ** 2);
    } else {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
