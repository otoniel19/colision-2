(function() {
  var cnv = document.querySelector('canvas')
  var ctx = cnv.getContext('2d')

  const stick = new JoyStick('stick', {}, data => {
    if (stick.GetPosX() > 100) player.posX += 2
    if (stick.GetPosX() < 100) player.posX -= 2
    if (stick.GetPosY() > 100) player.posY += 2
    if (stick.GetPosY() < 100) player.posY -= 2
  })

  var sprites = []
  var blocks = []

  var player = new Sprite(150, 150, 50, 50, "#00f")
  sprites.push(player)
  
  var bloco2 = new Sprite(200,200,50,50,"#000")
  sprites.push(bloco2)
  blocks.push(bloco2)
  

  var block1 = new Sprite(50, 50, 50, 50, "#000")
  sprites.push(block1)
  blocks.push(block1)

  function main() {
    update()
    render()
    window.requestAnimationFrame(main, cnv)
  }

  function update() {

    player.posX = Math.max(0, Math.min(cnv.width - player.width, player.posX))
    player.posY = Math.max(0, Math.min(cnv.height - player.height, player.posY))

    for (let i in blocks) {
      let blk = blocks[i]
      if (blk.visible) {
        //blockRect(blk, player) - empurra
        //blockRect(player,blk) - bloqueia
        blockRect(player,blk)
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, cnv.width, cnv.height)
    for (let i in sprites) {
      let tmp = sprites[i]
      ctx.fillStyle = tmp.color
      if (tmp.visible) ctx.fillRect(tmp.posX, tmp.posY, tmp.width, tmp.height)
    }
  }

  main()

})();