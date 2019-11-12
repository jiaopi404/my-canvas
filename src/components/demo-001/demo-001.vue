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
      ctx: null
    }
  },
  mounted () {
    this.init()
    window.requestAnimationFrame(this.draw)
    // this.draw()
  },
  methods: {
    init () {
      const canvas = document.getElementById('demo-001-canvas')
      this.ctx = canvas.getContext('2d')
    },
    draw () {
      this.drawRect()
      this.drawPolygon()
      window.requestAnimationFrame(this.draw)
    },
    drawRect () {
      this.ctx.strokeRect(50, 50, 50, 50)
      this.ctx.fillRect(75, 75, 25, 25)
    },
    drawPolygon () {
      this.ctx.clearRect(0, 0, 300, 150)
      this.ctx.beginPath()
      this.ctx.moveTo(Math.random() * 300, Math.random() * 150)
      this.ctx.lineTo(Math.random() * 300, Math.random() * 150)
      this.ctx.lineTo(Math.random() * 300, Math.random() * 150)
      // this.ctx.stroke()
      this.ctx.fillStyle = 'pink'
      this.ctx.fill()
      this.ctx.rotate(1)
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
