/*
 * @Author: cy
 * @Date: 2020-10-14 17:32:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-22 13:30:46
 * @FilePath: /snake-game-ts/src/ts/initMap.ts
 * @Description:
 */
let rows: number = 60
let columns: number = 60

let squareArr: any = []
for (let m = 0; m < rows; m++) {
  squareArr.push([])
  for (let n = 0; n < columns; n++) {
    squareArr[m].push(0)
  }
}

let sceneTable: HTMLTableElement = document.createElement('table')
sceneTable.style.width = '100%'
sceneTable.style.height = '100%'
sceneTable.id = 'map'

squareArr.map((rows: any, rowIndex: number) => {
  let tr: HTMLTableRowElement = sceneTable.insertRow()
  rows.map((columns: any, columnsIndex: number) => {
    let td: HTMLTableCellElement = tr.insertCell()
  })
})
document.getElementsByClassName('game-scene')[0].appendChild(sceneTable)
