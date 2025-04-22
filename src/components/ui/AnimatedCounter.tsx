import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  format?: (value: number) => string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  duration = 2,
  format = (value) => Math.round(value).toLocaleString(),
  className = '',
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.3 });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  
  useEffect(() => {
    if (inView) {
      motionValue.set(to);
    }
  }, [inView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = format(latest);
      }
    });
    return unsubscribe;
  }, [springValue, format]);

  return <span ref={nodeRef} className={className}>{format(from)}</span>;
};

export default AnimatedCounter;