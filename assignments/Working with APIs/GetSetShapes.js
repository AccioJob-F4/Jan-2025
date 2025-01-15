class Rectangle {
  constructor(width, height) {
    // Ensure that width and height are positive integers
    if (!Number.isInteger(width) || width <= 0) {
      throw new Error("Width must be a positive integer.");
    }
    if (!Number.isInteger(height) || height <= 0) {
      throw new Error("Height must be a positive integer.");
    }

    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Ensure that side is a positive integer
    if (!Number.isInteger(side) || side <= 0) {
      throw new Error("Side must be a positive integer.");
    }

    // Call the parent constructor with equal width and height
    super(side, side);
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
