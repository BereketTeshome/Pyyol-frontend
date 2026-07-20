import { useEffect, useState } from "react";

export default function useMouseParallax(strength = 40) {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glowX: 50,
    glowY: 50,
  });

  useEffect(() => {
    let frame;

    const move = (e) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const centerX = mouseX - 0.5;
        const centerY = mouseY - 0.5;

        setState({
          x: centerX * strength,
          y: centerY * strength,

          rotateY: centerX * 18,
          rotateX: -centerY * 18,

          scale: 1.02,

          glowX: mouseX * 100,
          glowY: mouseY * 100,
        });
      });
    };

    const leave = () => {
      setState({
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        glowX: 50,
        glowY: 50,
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return state;
}
