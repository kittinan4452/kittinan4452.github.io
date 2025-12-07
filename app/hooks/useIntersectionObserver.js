'use client';
import { useEffect, useState, useRef } from 'react';

/**
 * Modern Intersection Observer hook for scroll animations
 * @param {string} animationClass - CSS class to add when element is visible
 * @param {object} options - Intersection Observer options
 * @returns {React.Ref} - Ref to attach to the element
 */
export function useIntersectionObserver(animationClass = 'animate-fade-in', options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
        ...options
    };

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (defaultOptions.triggerOnce) {
                    observer.unobserve(element);
                }
            } else if (!defaultOptions.triggerOnce) {
                setIsVisible(false);
            }
        }, defaultOptions);

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

    useEffect(() => {
        if (isVisible && ref.current) {
            ref.current.classList.add(animationClass);
        }
    }, [isVisible, animationClass]);

    return ref;
}

/**
 * Hook for staggered animations on multiple elements
 * @param {number} count - Number of elements to animate
 * @param {string} baseAnimationClass - Base CSS animation class
 * @param {number} staggerDelay - Delay between each element (in ms)
 * @param {object} options - Intersection Observer options
 * @returns {Array<React.Ref>} - Array of refs for each element
 */
export function useStaggeredIntersection(count, baseAnimationClass = 'animate-slide-in-up', staggerDelay = 100, options = {}) {
    const [visibleElements, setVisibleElements] = useState(new Set());
    const refs = useRef([]);

    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        triggerOnce: true,
        ...options
    };

    useEffect(() => {
        refs.current = refs.current.slice(0, count);
    }, [count]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = parseInt(entry.target.dataset.index);
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setVisibleElements(prev => new Set([...prev, index]));
                        if (defaultOptions.triggerOnce) {
                            observer.unobserve(entry.target);
                        }
                    }, index * staggerDelay);
                } else if (!defaultOptions.triggerOnce) {
                    setVisibleElements(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(index);
                        return newSet;
                    });
                }
            });
        }, defaultOptions);

        refs.current.forEach((ref, index) => {
            if (ref) {
                ref.dataset.index = index;
                observer.observe(ref);
            }
        });

        return () => {
            refs.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [count, staggerDelay, defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

    useEffect(() => {
        refs.current.forEach((ref, index) => {
            if (ref && visibleElements.has(index)) {
                ref.classList.add(baseAnimationClass);
                ref.style.animationDelay = `${index * (staggerDelay / 1000)}s`;
            }
        });
    }, [visibleElements, baseAnimationClass, staggerDelay]);

    return refs.current;
}

/**
 * Hook for parallax scrolling effect
 * @param {number} speed - Parallax speed (negative = slower, positive = faster)
 * @returns {object} - Transform style object
 */
export function useParallax(speed = 0.5) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * speed);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return {
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
    };
}

/**
 * Hook for fade in/out based on scroll direction
 * @param {number} fadeThreshold - Scroll threshold for fading
 * @returns {object} - Opacity and transform styles
 */
export function useScrollFade(fadeThreshold = 100) {
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            // Fade out when scrolling down, fade in when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > fadeThreshold) {
                setOpacity(Math.max(0, 1 - (currentScrollY - fadeThreshold) / fadeThreshold));
            } else {
                setOpacity(1);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, fadeThreshold]);

    return {
        opacity,
        transform: `translateY(${scrollY * 0.1}px)`,
        transition: 'opacity 0.3s ease-out, transform 0.1s ease-out'
    };
}