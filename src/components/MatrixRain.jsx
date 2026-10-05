import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const cols = Math.floor(canvas.width / 20)
    const drops = Array(cols).fill(1)
    const chars = '01アイウエオカキクケコサシスセソABCDEFGHIJKLMN</>{}[]|\\/?#$%^&*'

    function draw() {
      ctx.fillStyle = 'rgba(10,14,15,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff88'
      ctx.font = '14px Share Tech Mono'
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * 20, y * 20)
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 40)
    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { clearInterval(interval); window.removeEventListener('resize', onResize) }
  }, [])

  return <canvas id="matrix-canvas" ref={canvasRef} />
}
