class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}
Rectangle.prototype.area = function () {};

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}
