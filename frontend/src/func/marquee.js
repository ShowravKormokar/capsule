const gsap = require("gsap");

function setupMarqueeAnimation() {
    const marqueeItems = gsap.utils.toArray(".marquee h1");
    if (marqueeItems > 0) {
        const tl = horizontalLoop(marqueeItems, {
            repeat: -1,
            paddingRight: 30,
        });
    }
}

function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        defaults: { ease: "none" },
    });
    let length = items.length;
    let startX = items[0].offsetLeft;
    let widths = [];
    let xPercents = [];
    let pixelsPerSecond = (config.speed || 1) * 100;
    let totalWidth, cirX, distanceToStart, distanceToLoop, item, i;

    gsap.set(items, {
        xPercents: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] =
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent");
            return xPercents[i];
        }
    });

    gsap.set(items, { x: 0 });
    totalWidth =
        items[length - 1].offsetLeft + (xPercents[length - 1] / 100) * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;

        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
            item,
            {
                xPercent: ((curX - distanceToLoop) / widths[i]) * 100,
                duration: distanceToLoop / pixelsPerSecond,
            },
            0

        ).fromTo(
            item,
            {
                xPercent: ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            }, {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
        },
            distanceToLoop / pixelsPerSecond
        );
    }
    tl.progress(1, true).progress(0, true);
    return tl;
}