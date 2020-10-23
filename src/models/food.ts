/*
 * @Author: cy
 * @Date: 2020-10-21 22:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-23 10:32:50
 * @FilePath: /snake-game-ts/src/models/food.ts
 * @Description:
 */
import Position from '../utils/position.ts'
const colors = ['#8bc34a', '#9c27b0', '#ffc107', '#009688']
const sizes = [1, 1.5]

class Food {
  position: Position // 位置
  color: string // 颜色
  size: number // 大小
  shape: string // 形状
  score: number // 代表的分值

  constructor(
    position?: Position,
    color: string = 'red',
    size: number = 1,
    shape: string = 'square',
    score: number = 1
  ) {
    this.position = position
    this.color = color
    this.size = size
    this.shape = shape
    this.score = score
  }

  // 生成食物
  genFood(count: number) {
    let foods: Food[] = []
    for (let i = 0; i < count; i++) {
      let randomColor = colors[Math.floor(Math.random() * 4)]
      let randomSize = sizes[Math.floor(Math.random() * 2)]
      let randomX = Math.floor(Math.random() * 60)
      let randomY = Math.floor(Math.random() * 60)
      let food = new Food({ x: randomX, y: randomY }, randomColor, randomSize)
      foods.push(food)
    }
    return foods
  }
}

export default Food
