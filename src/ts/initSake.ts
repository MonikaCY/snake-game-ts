/*
 * @Author: cy
 * @Date: 2020-10-21 18:11:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-23 18:23:55
 * @FilePath: /snake-game-ts/src/ts/initSake.ts
 * @Description:
 */
import Snake from '../models/snake.ts'
import Direction from '../utils/direction.ts'
import Position from '../utils/position.ts'
import Food from '../models/food.ts'

let snakePosition: Position = {
  x: 30,
  y: 30,
}
let speed = 400
let snake: Snake = new Snake(snakePosition, 3, Direction.UP, speed)
let foods = new Food().genFood(10)

let mapTable: HTMLTableElement = <HTMLTableElement>(
  document.getElementById('map')
)

renderFood()
renderSnake()

let timer: any
document.onkeydown = function (e) {
  if (
    e.code == Direction.UP ||
    e.code == Direction.DOWN ||
    e.code == Direction.LEFT ||
    e.code == Direction.RIGHT
  ) {
    let delBody = <Position>snake.move(<Direction>e.code)
    renderSnake(delBody)

    if (timer) clearInterval(timer)
    timer = setInterval(() => {
      let delBody = snake.move(<Direction>e.code)

      // eatFood不为空表示吃到了食物
      let eatFood = snake.eat(foods)
      if (eatFood) {
        snake.body.push(delBody)
        renderSnake(null)
      } else {
        if (delBody) renderSnake(delBody)
        if (!snake.live) {
          clearInterval(timer)
          alert('you are die')
        }
      }
    }, snake.speed)
  }
}

// 根据长度、方向、头部的初始位置 来初始化蛇
function renderSnake(delBody?: Position) {
  snake.body.map((body: Position, index: number) => {
    let td: HTMLTableCellElement = mapTable.rows[body.y].cells[body.x]
    td.style.backgroundColor = 'green'
    td.style.borderRadius = '50%'
    td.style.transform = `scale(${1 + 0.03 * (snake.body.length - index)})`
    if (delBody) {
      let td: HTMLTableCellElement = mapTable.rows[delBody.y].cells[delBody.x]
      td.style.backgroundColor = ''
    }
  })
}

// 渲染食物
function renderFood() {
  foods.map((food: Food) => {
    let td: HTMLTableCellElement =
      mapTable.rows[food.position.y].cells[food.position.x]
    td.style.backgroundColor = food.color
    td.style.transform = `scale(${food.size})`
  })
}
