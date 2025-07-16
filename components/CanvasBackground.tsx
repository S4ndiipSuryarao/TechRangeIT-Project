import React, { useRef, useEffect } from 'react';

const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.current = { x: canvas.width / 2, y: canvas.height / 2 };
      init();
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (event: MouseEvent) => {
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
      waveAmplitude: number;
      waveFrequency: number;

      constructor(width: number, height: number) {
        this.baseX = Math.random() * width;
        this.x = this.baseX;
        this.y = Math.random() * height;
        this.baseY = this.y;
        this.radius = Math.random() * 1.5 + 1; // Decreased node size from original
        this.color = 'rgba(0, 167, 157, 0.7)';
        this.speed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.waveAmplitude = Math.random() * 40 + 20;
        this.waveFrequency = Math.random() * 0.02 + 0.01;
      }

      update(width: number) {
        // Move horizontally
        this.baseX += this.speed;
        if (this.baseX > width + this.radius) {
            this.baseX = -this.radius;
        }

        // Apply wave motion
        this.angle += this.waveFrequency;
        this.x = this.baseX;
        this.y = this.baseY + Math.sin(this.angle) * this.waveAmplitude;
      }

      draw(context: CanvasRenderingContext2D, mousePos: { x: number, y: number }) {
        const distToMouse = Math.hypot(this.x - mousePos.x, this.y - mousePos.y);
        const glowIntensity = Math.max(0, 1 - distToMouse / 300);

        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        
        context.shadowBlur = 5;
        context.shadowColor = 'rgba(0, 167, 157, 0.5)';

        if (glowIntensity > 0) {
            context.shadowColor = 'rgba(0, 255, 235, 1)';
            context.shadowBlur = 5 + glowIntensity * 15;
        }
        
        context.fill();
        context.closePath();
        
        // Reset shadow for next particle/line
        context.shadowBlur = 0;
      }
    }

    const init = () => {
        particles = [];
        // Decreased particle count by another 20% by increasing the divisor
        const numberOfParticles = Math.floor((canvas.width * canvas.height) / 17000); 
        for (let i = 0; i < numberOfParticles; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }
    };
    
    const connect = (context: CanvasRenderingContext2D) => {
        const maxDistance = 150;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
                if (dist < maxDistance) {
                    const opacity = 1 - (dist / maxDistance);
                    context.strokeStyle = `rgba(0, 167, 157, ${opacity * 0.5})`; // Increased line opacity
                    context.lineWidth = 1.5; // Increased line thickness
                    context.beginPath();
                    context.moveTo(particles[a].x, particles[a].y);
                    context.lineTo(particles[b].x, particles[b].y);
                    context.stroke();
                }
            }
        }
    };
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update(canvas.width);
            p.draw(ctx, mouse.current);
        });

        connect(ctx);

        animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas-background" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#0d2240' }} />;
};

export default CanvasBackground;