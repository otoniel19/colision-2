class Sprite {
  constructor(posX, posY, width, height, color) {
    this.posX = posX
    this.posY = posY
    this.width = width
    this.height = height
    this.color = color
    this.visible = true
  }
  halfWidth() {
    return this.width/2
  }
  halfHeight() {
    return this.height/2
  }
  centerX() {
    return this.posX + this.halfWidth()
  }
  centerY() {
    return this.posY + this.halfHeight()
  }
}