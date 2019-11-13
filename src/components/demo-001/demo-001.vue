<template>
  <div id="demo-001">
    <canvas id="demo-001-canvas">
      不支持 canvas
    </canvas>
  </div>
</template>

<script>
export default {
  name: 'demo-001.vue',
  data () {
    return {
      ctx: null,
      x: 0
    }
  },
  mounted () {
    this.init()
    // window.requestAnimationFrame(this.draw)
    this.draw()
  },
  methods: {
    init () {
      const canvas = document.getElementById('demo-001-canvas')
      this.ctx = canvas.getContext('2d')
    },
    draw () {
      this.drawRect()
      this.drawPolygon()
      this.x += 1
      if (this.x >= 270) {
        this.x = 0
      }
      window.requestAnimationFrame(this.draw)
    },
    drawRect () {
      this.ctx.strokeRect(50, 50, 50, 50)
      this.ctx.fillRect(75, 75, 25, 25)
    },
    drawPolygon () {
      this.ctx.clearRect(0, 0, 300, 150)
      this.ctx.beginPath()
      this.ctx.moveTo(this.x, 75)
      this.ctx.lineTo(this.x + 30, 45)
      this.ctx.lineTo(this.x + 30, 105)
      // this.ctx.stroke()
      this.ctx.fillStyle = 'pink'
      // this.ctx.rotate(5 * Math.PI / 360)
      this.ctx.fill()
      // note
    }
  }
}
</script>

<style lang="scss" scoped>
#demo-001 {
  #demo-001-canvas {
    border-radius: 5px;
    border: 1px solid #333;
  }
}
</style>
