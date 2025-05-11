import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../lib/context';
import { SectionId } from '../../lib/types';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the network grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Node class for the network
    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        
        // Use our accent color with varying opacity
        const r = 110;
        const g = 224;
        const b = 172;
        const opacity = Math.random() * 0.5 + 0.2;
        this.color = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      }

      update() {
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create nodes
    const nodeCount = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / 10000));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push(new Node(x, y));
    }

    // Draw connections between nodes
    const drawConnections = () => {
      if (!ctx) return;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw connections if nodes are close enough
          const maxDistance = 150;
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Opacity based on distance
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(110, 224, 172, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw();
      });
      
      // Draw connections
      drawConnections();
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section 
      id={SectionId.Hero} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-10"
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[rgb(110,224,172)]">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t.heroSubtitle}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-[rgb(110,224,172)] hover:bg-[rgb(90,204,152)] text-white"
              onClick={() => document.getElementById(SectionId.About)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t.heroButtonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}