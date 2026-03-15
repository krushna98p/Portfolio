import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { toast } from 'react-toastify';

const KonamiCode = () => {
    const [inputSequence, setInputSequence] = useState([]);
    // Konami code: up up down down left right left right b a
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            setInputSequence(prev => {
                const newSequence = [...prev, key];
                if (newSequence.length > konamiCode.length) {
                    newSequence.shift();
                }
                
                // Check if sequence matches
                if (newSequence.join(',').toLowerCase() === konamiCode.join(',').toLowerCase()) {
                    triggerEasterEgg();
                    return []; // Reset after trigger
                }
                
                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const triggerEasterEgg = () => {
        toast.success("🎮 Konami Code Activated! Easter Egg Unlocked!", {
            position: "top-center",
            theme: "colored"
        });
        
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#3b82f6', '#8b5cf6', '#06b6d4']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#3b82f6', '#8b5cf6', '#06b6d4']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    return null; // This component doesn't render anything visible
};

export default KonamiCode;
