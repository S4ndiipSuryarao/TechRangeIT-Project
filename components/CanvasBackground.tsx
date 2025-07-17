import React, { useRef, useEffect } from 'react';

const PARTICLE_RADIUS_MIN = 1;
const PARTICLE_RADIUS_MAX = 2.5;
const PARTICLE_COLOR = 'rgba(0, 167, 157, 0.7)';
const PARTICLE_SPEED_MIN = 0.2;
const PARTICLE_SPEED_MAX = 0.7;
const PARTICLE_WAVE_AMPLITUDE_MIN = 20;
const PARTICLE_WAVE_AMPLITUDE_MAX = 60;
const PARTICLE_WAVE_FREQUENCY_MIN = 0.01;
const PARTICLE_WAVE_FREQUENCY_MAX = 0.03;
const GLOW_DISTANCE_THRESHOLD = 300;
const GLOW_BASE_BLUR = 5;
const GLOW_INTENSITY_BLUR_MULTIPLIER = 15;
const GLOW_COLOR = 'rgba(0, 255, 235, 1)';
const LINE_COLOR_BASE = 'rgba(0, 167, 157, OPACITY)';
const LINE_THICKNESS = 1.5;
const MAX_CONNECT_DISTANCE = 150;
const PARTICLE_DENSITY_DIVISOR = 17000;

// ✅ Particle class outside of useEffect
class Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;
  amplitude: number;
  frequency: number;
  offset: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN) + PARTICLE_RADIUS_MIN;
    this.speed = Math.random() * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN) + PARTICLE_SPEED_MIN;
    this.angle = Math.random() * Math.PI * 2;
    this.amplitude = Math.random() * (PARTICLE_WAVE_AMPLITUDE_MAX - PARTICLE_WAVE_AMPLITUDE_MIN) + PARTICLE_WAVE_AMPLITUDE_MIN;
    this.frequency = Math.random() * (PARTICLE_WAVE_FREQUENCY_MAX - PARTICLE_WAVE_FREQUENCY_MIN) + PARTICLE_WAVE_FREQUENCY_MIN;
    this.offset = Math.random() * 1000;
  }

  update(canvasWidth: number) {
    this.x -= this.speed;
    this.y += Math.sin(this.offset + this.x * this.frequency) * 0.3;

    if (this.x < -this.radius) {
      this.x = canvasWidth + this.radius;
    }
  }

  draw(ctx: CanvasRenderingContext2D, mouse: { x: number; y: number }) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const glowIntensity = dist < GLOW_DISTANCE_THRESHOLD ? 1 - dist / GLOW_DISTANCE_THRESHOLD : 0;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = PARTICLE_COLOR;

    if (glowIntensity > 0) {
      ctx.shadowColor = GLOW_COLOR;
      ctx.shadowBlur = GLOW_BASE_BLUR + glowIntensity * GLOW_INTENSITY_BLUR_MULTIPLIER;
    }

    ctx.fill();
    ctx.closePath();
    ctx.shadowBlur = 0;
  }
}

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

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const init = () => {
      particles = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / PARTICLE_DENSITY_DIVISOR);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
          if (dist < MAX_CONNECT_DISTANCE) {
            const opacity = 1 - dist / MAX_CONNECT_DISTANCE;
            ctx.strokeStyle = LINE_COLOR_BASE.replace('OPACITY', `${opacity * 0.5}`);
            ctx.lineWidth = LINE_THICKNESS;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
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
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: '#0d2240',
      }}
    />
  );
};

export default CanvasBackground;
