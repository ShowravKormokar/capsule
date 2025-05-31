import { gsap } from "gsap";

// Horizontal loop helper function
function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    const tl = gsap.timeline({
        repeat: config.repeat,
        defaults: { ease: "none" },
        paused: config.paused
    });

    const length = items.length;
    const startX = items[0].offsetLeft;
    const widths = [];
    const xPercents = [];
    const pixelsPerSecond = (config.speed || 1) * 100;
    let totalWidth;

    // Get initial positions
    gsap.set(items, {
        xPercent: (i, el) => {
            const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent");
            return xPercents[i];
        }
    });

    gsap.set(items, { x: 0 });

    // Calculate total width
    totalWidth = items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);

    // Create animation
    for (let i = 0; i < length; i++) {
        const item = items[i];
        const curX = (xPercents[i] / 100) * widths[i];
        const distanceToStart = item.offsetLeft + curX - startX;
        const distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

        tl.to(
            item,
            {
                xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
                duration: distanceToLoop / pixelsPerSecond
            },
            0
        ).fromTo(
            item,
            {
                xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            },
            {
                xPercent: xPercents[i],
                duration: (totalWidth - distanceToLoop) / pixelsPerSecond,
                immediateRender: false
            },
            distanceToLoop / pixelsPerSecond
        );
    }

    return tl;
}

// Marquee setup function
export function setupMarqueeAnimation() {
    const marqueeItems = gsap.utils.toArray(".marquee h1");

    if (marqueeItems.length > 0) {
        return horizontalLoop(marqueeItems, {
            repeat: -1,
            paddingRight: 30,
            speed: 1
        });
    }
    return null;
}

// React hook version
export function useMarqueeAnimation() {
    useEffect(() => {
        const animation = setupMarqueeAnimation();
        return () => animation?.kill(); // Cleanup
    }, []);
}