import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean);
  constructor(point1: Point, point2: Point, point3: Point) {
    super([point1, point2, point3]);
  }

  getType(): string {
    let type = '';
    let sides: { [key: string]: string } = {};

    for (let i = 0; i < this.points.length - 1; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        let distance = this.points[i].distance(this.points[j]).toFixed(2);
        sides[distance] = distance;
      }
    }

    let length = Object.keys(sides).length;

    switch (length) {
      case 3:
        type = 'scalene triangle';
        break;
      case 2:
        type = 'isosceles triangle';
        break;
      case 1:
        type = 'equilateral triangle';
        break;
      default:
        type = 'invalid points provided';
        break;
    }

    return type;
  }

  toString(): string {
    let pointsText = `${Triangle.name}[`;

    this.points.forEach((point, index) => {
      pointsText +=
        `v${index + 1}=(${point.x}, ${point.y})` + (this.points.length - index !== 1 ? ',' : ']');
    });
    return pointsText;
  }
}
