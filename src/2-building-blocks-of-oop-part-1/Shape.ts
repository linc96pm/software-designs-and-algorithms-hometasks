import { Point } from './Point';

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  protected points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean) {
    if (points.length < 3) {
      throw new Error('There should be at least 3 points to create a shape')
    }
    this.points = points;
    this.color = color ?? 'green';
    this.filled = filled ?? true;
  }

  abstract getType(): string;

  getPerimeter(): number {
    let perimeter = 0
    for (let i = 0; i < this.points.length - 1; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        perimeter += this.points[i].distance(this.points[j])
      }
    }
    return perimeter;
  }

  toString() {
    let text = `A Shape with color of ${this.color} and` + (!this.filled ? ' not ' : ' ') + `filled.`;
    let pointsText = 'Points: ';

    this.points.forEach((point, index) => {
      pointsText += `(${point.x}, ${point.y})` + (this.points.length - index !== 1 ? ', ' : '.');  
    })
    return text + ' ' + pointsText;
  }
}
