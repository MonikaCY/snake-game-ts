/*
 * @Author: cy
 * @Date: 2020-10-14 17:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-23 09:48:59
 * @FilePath: /snake-game-ts/src/models/snake.ts
 * @Description:
 */
import Direction from '../utils/direction.ts'
import position from '../utils/position.ts'
import Food from './food'

class Snake {
  length: number //身体长度，默认2
  movingDiretion: Direction //移动方向
  headPosition: position //🐍 头的位置坐标
  speed: number // 移动速度
  body: position[] = []
  live: boolean = true

  constructor(
    headPosition: position = { x: 30, y: 30 },
    length: number = 2,
    movingDiretion: Direction = Direction.UP,
    speed: number = 400
  ) {
    this.length = length
    this.movingDiretion = movingDiretion
    this.headPosition = headPosition
    this.speed = speed
    this._initBody()
  }

  _initBody() {
    let bodyArray = []
    for (let i = 0; i < this.length; i++) {
      bodyArray.push({ x: this.headPosition.x, y: this.headPosition.y++ })
      this.body = bodyArray
    }
  }

  move(direction: Direction) {
    // 判断要转的方向 和当前 🐍 移动的方向
    // 如果是反向的则不进行任何操作，🐍 继续沿着当前方向移动
    // 如果是相邻方向的，则进行转向操作
    if (
      (this.movingDiretion == Direction.UP && direction == Direction.DOWN) ||
      (this.movingDiretion == Direction.DOWN && direction == Direction.UP) ||
      (this.movingDiretion == Direction.RIGHT && direction == Direction.LEFT) ||
      (this.movingDiretion == Direction.LEFT && direction == Direction.RIGHT)
    ) {
    } else {
      this.movingDiretion = direction
    }

    let { x, y } = this.body[0]
    switch (this.movingDiretion) {
      case Direction.UP:
        y--
        break
      case Direction.DOWN:
        y++
        break
      case Direction.LEFT:
        x--
        break
      case Direction.RIGHT:
        x++
        break
    }

    //超出地图范围，死亡
    if (x > 59 || x < 0 || y > 59 || y < 0) {
      this.live = false
      return
    }
    let tail = this.body.pop() // 移动的删除的上一次的尾巴，返回用来渲染页面
    this.body.unshift({ x, y }) // 向头部新增节点

    return tail
  }

  eat(foods: Food[]) {
    let { x, y } = this.body[0]
    let eatFood = foods.filter(
      (food) => food.position.x == x && food.position.y == y
    )[0]
    if (eatFood) return eatFood
    else return null
  }
}

export default Snake
