const tl = gsap.timeline({ defaults: { duration: 0.8, opacity: 0 } });

tl.from('.nav', { y: -40, delay: 1.5 }).from('.headline', { x: '50%' }).from('.img', { y: '50%' });
