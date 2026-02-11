import { useEffect } from "react"

export default function Sakura() {
	useEffect(() => {
		const canvas = document.createElement("canvas")
		canvas.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			pointer-events: none;
			z-index: -1;
		`
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
		document.body.appendChild(canvas)
		const ctx = canvas.getContext("2d")

		const colors = ["#c96d6d"]
		const flowerPath = new Path2D(
			"M511.976,213.063l-45.863-9.749l31.374-34.845c-25.373-36.736-80.219-53.454-137.114-40.543 c-5.302-58.1-38.15-105.096-80.929-117.874L256,50.659l-23.444-40.606c-42.779,12.779-75.626,59.775-80.929,117.874 c-56.894-12.911-111.741,3.807-137.113,40.543l31.374,34.844l-45.864,9.749c-1.066,44.634,33.479,90.396,87.097,113.393 c-29.86,50.12-30.91,107.448-3.812,142.931l42.834-19.071l-4.901,46.632c42.12,14.806,96.318-3.907,134.758-47.794 c38.44,43.887,92.638,62.6,134.758,47.794l-4.901-46.632l42.835,19.072c27.097-35.483,26.048-92.811-3.812-142.932 C478.497,303.46,513.042,257.697,511.976,213.063z"
		)
		const petalPath = new Path2D(
			"M256,0 C190,80 150,180 200,300 C230,360 280,360 312,300 C362,180 322,80 256,0 Z M256,0 C246,20 266,20 256,0 Z"
		)

		const items = []

		class FallingItem {
			constructor(type) {
				this.type = type
				this.reset()
			}

			reset() {
				const spawnFromSide = Math.random() < 0.5
				if (spawnFromSide) {
					this.x = canvas.width + Math.random() * 100
					this.y = Math.random() * canvas.height
				} else {
					this.x = Math.random() * canvas.width
					this.y = -Math.random() * 100
				}
				this.size = this.type === "flower" ? 30 + Math.random() * 10 : 25 + Math.random() * 5
				this.windX = this.type === "flower" ? -(0.3 + Math.random() * 0.4) : -(0.6 + Math.random() * 0.8)
				this.windY = this.type === "flower" ? 0.4 + Math.random() * 0.3 : 0.8 + Math.random() * 0.4
				this.swing = Math.random() * 2 * Math.PI
				this.swingSpeed = 0.01 + Math.random() * 0.02
				this.rotation = Math.random() * 2 * Math.PI
				this.color = colors[Math.floor(Math.random() * colors.length)]
			}

			draw(ctx) {
				this.x += this.windX
				this.y += this.windY + Math.sin(this.swing) * 0.3
				this.swing += this.swingSpeed

				ctx.save()
				ctx.translate(this.x, this.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.size / 512, this.size / 512)
				ctx.fillStyle = this.color
				ctx.fill(this.type === "flower" ? flowerPath : petalPath)
				ctx.restore()

				if (this.y > canvas.height + 100 || this.x < -100) {
					this.reset()
				}
			}
		}

		for (let i = 0; i < 15; i++) items.push(new FallingItem("flower"))
		for (let i = 0; i < 72; i++) items.push(new FallingItem("petal"))

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			items.forEach((item) => item.draw(ctx))
			requestAnimationFrame(animate)
		}

		animate()

		const handleResize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
			document.body.removeChild(canvas)
		}
	}, [])

	return null
}
