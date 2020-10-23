<!--
 * @Author: cy
 * @Date: 2020-10-15 14:29:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-10-22 08:40:15
 * @FilePath: /snake-game-ts/README.md
 * @Description:
-->

## 初步思路

- 初始化地图
  - 初始化一个 a\*a 的地图，采用二维数组
- 实现一个点 a[x][y]，用方向键控制，使其在地图上移动
  - 如何渲染这个点？
  - 如何让其移动？

## snake 是怎样一个数据结构？

- snake 由 body 组成。body 是一个队列,body 里存放每一个身体的 node

  - node 的结构：

    ```js
    node:{
      x:2,
      y:3
    }
    ```

  - body 的结构：

    ```js
    body: [node, node]
    ```

## 如何移动？

- snake 是一个队列的数据结构，页面根据队列数据渲染，表现为一个 🐍，，所以只需要改变这个队列的数据就可以模拟 🐍 的移动。
- 设置定时器，每隔规定的时间后，向队列的头部添加一个数据，同时将队列的尾部一个数据删除，然后将数据渲染到页面上，就好像 🐍 向前移动了一格
  - 具体实现步骤
    - snake 类实现 move 方法
    -

## 当方向改变后又改如何移动？对应的数据如何变化？

-
