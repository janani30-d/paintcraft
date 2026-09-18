/* =========================================================
   PAINTCRAFT
   PART 4 — SCRIPT.JS
   HEADER FUNCTIONALITY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       01. ELEMENTS
    ========================================================= */

    const body = document.body;
    const html = document.documentElement;


    /* ---------------------------------------------------------
       HAMBURGER
    --------------------------------------------------------- */

    const hamburgerButton =
        document.getElementById("hamburgerButton");

    const mobileNavigation =
        document.getElementById("mobileNavigation");

    const mobileMenuClose =
        document.getElementById("mobileMenuClose");


    /* ---------------------------------------------------------
       DESKTOP CONTROLS
    --------------------------------------------------------- */

    const rtlToggle =
        document.getElementById("rtlToggle");

    const darkModeToggle =
        document.getElementById("darkModeToggle");


    /* ---------------------------------------------------------
       MOBILE / TABLET CONTROLS
    --------------------------------------------------------- */

    const mobileRtlToggle =
        document.getElementById("mobileRtlToggle");

    const mobileDarkModeToggle =
        document.getElementById("mobileDarkModeToggle");


    /* =========================================================
       02. MOBILE HAMBURGER MENU
    ========================================================= */

    function openMobileMenu() {

        if (!hamburgerButton || !mobileNavigation) {
            return;
        }


        hamburgerButton.classList.add("active");

        mobileNavigation.classList.add("active");

        body.classList.add("menu-open");


        hamburgerButton.setAttribute(
            "aria-expanded",
            "true"
        );

        hamburgerButton.setAttribute(
            "aria-label",
            "Close menu"
        );

        mobileNavigation.setAttribute(
            "aria-hidden",
            "false"
        );
    }


    function closeMobileMenu() {

        if (!hamburgerButton || !mobileNavigation) {
            return;
        }


        hamburgerButton.classList.remove("active");

        mobileNavigation.classList.remove("active");

        body.classList.remove("menu-open");


        hamburgerButton.setAttribute(
            "aria-expanded",
            "false"
        );

        hamburgerButton.setAttribute(
            "aria-label",
            "Open menu"
        );

        mobileNavigation.setAttribute(
            "aria-hidden",
            "true"
        );
    }


    function toggleMobileMenu() {

        if (
            mobileNavigation &&
            mobileNavigation.classList.contains("active")
        ) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }
    }


    /* ---------------------------------------------------------
       HAMBURGER CLICK
    --------------------------------------------------------- */

    if (hamburgerButton) {

        hamburgerButton.addEventListener(
            "click",
            toggleMobileMenu
        );

    }


    /* ---------------------------------------------------------
       CLOSE BUTTON
    --------------------------------------------------------- */

    if (mobileMenuClose) {

        mobileMenuClose.addEventListener(
            "click",
            closeMobileMenu
        );

    }


    /* =========================================================
       03. MOBILE DROPDOWNS
       HOME / SERVICES / PROJECTS
    ========================================================= */

    const mobileDropdownToggles =
        document.querySelectorAll(
            ".mobile-dropdown-toggle"
        );


    mobileDropdownToggles.forEach(function (toggle) {

        toggle.addEventListener(
            "click",
            function () {


                const parent =
                    toggle.closest(
                        ".has-mobile-dropdown"
                    );


                if (!parent) {
                    return;
                }


                const isOpen =
                    parent.classList.contains(
                        "active"
                    );


                /* -------------------------------------------------
                   CLOSE OTHER MOBILE DROPDOWNS
                ------------------------------------------------- */

                document
                    .querySelectorAll(
                        ".has-mobile-dropdown.active"
                    )
                    .forEach(function (item) {

                        if (item !== parent) {

                            item.classList.remove(
                                "active"
                            );


                            const otherToggle =
                                item.querySelector(
                                    ".mobile-dropdown-toggle"
                                );


                            if (otherToggle) {

                                otherToggle.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            }

                        }

                    });


                /* -------------------------------------------------
                   CURRENT DROPDOWN
                ------------------------------------------------- */

                if (isOpen) {

                    parent.classList.remove(
                        "active"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                } else {

                    parent.classList.add(
                        "active"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                }

            }
        );

    });


    /* =========================================================
       04. DESKTOP DROPDOWNS
       HOME / SERVICES / PROJECTS
    ========================================================= */

    const desktopDropdownToggles =
        document.querySelectorAll(
            ".desktop-navigation .dropdown-toggle"
        );


    desktopDropdownToggles.forEach(function (toggle) {

        toggle.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const parent =
                    toggle.closest(
                        ".has-dropdown"
                    );


                if (!parent) {
                    return;
                }


                const isOpen =
                    toggle.getAttribute(
                        "aria-expanded"
                    ) === "true";


                /* -------------------------------------------------
                   CLOSE OTHER DROPDOWNS
                ------------------------------------------------- */

                desktopDropdownToggles.forEach(
                    function (otherToggle) {

                        if (otherToggle !== toggle) {

                            otherToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }
                );


                /* -------------------------------------------------
                   OPEN / CLOSE CURRENT
                ------------------------------------------------- */

                toggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "false" : "true"
                );

            }
        );

    });


    /* =========================================================
       05. CLOSE DESKTOP DROPDOWNS
       WHEN CLICKING OUTSIDE
    ========================================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(
                    ".desktop-navigation"
                )
            ) {

                desktopDropdownToggles.forEach(
                    function (toggle) {

                        toggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }

        }
    );


    /* =========================================================
       06. DARK MODE
    ========================================================= */

    function updateDarkModeIcons() {

        const darkModeIsActive =
            body.classList.contains(
                "dark-mode"
            );


        /* ---------------------------------------------------------
           DESKTOP DARK MODE BUTTON
        --------------------------------------------------------- */

        if (darkModeToggle) {

            const icon =
                darkModeToggle.querySelector("i");


            if (icon) {

                icon.className =
                    darkModeIsActive
                        ? "fa-solid fa-sun"
                        : "fa-solid fa-moon";

            }


            darkModeToggle.setAttribute(
                "aria-label",
                darkModeIsActive
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            darkModeToggle.setAttribute(
                "aria-pressed",
                String(darkModeIsActive)
            );

        }


        /* ---------------------------------------------------------
           MOBILE / TABLET DARK MODE BUTTON
        --------------------------------------------------------- */

        if (mobileDarkModeToggle) {

            const mobileIcon =
                mobileDarkModeToggle.querySelector("i");


            if (mobileIcon) {

                mobileIcon.className =
                    darkModeIsActive
                        ? "fa-solid fa-sun"
                        : "fa-solid fa-moon";

            }


            mobileDarkModeToggle.setAttribute(
                "aria-label",
                darkModeIsActive
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            mobileDarkModeToggle.setAttribute(
                "aria-pressed",
                String(darkModeIsActive)
            );

        }

    }


    function toggleDarkMode() {

        const currentlyDark =
            body.classList.contains(
                "dark-mode"
            );


        if (currentlyDark) {

            body.classList.remove(
                "dark-mode"
            );

            localStorage.setItem(
                "paintcraft-dark-mode",
                "false"
            );

        } else {

            body.classList.add(
                "dark-mode"
            );

            localStorage.setItem(
                "paintcraft-dark-mode",
                "true"
            );

        }


        updateDarkModeIcons();

    }


    /* ---------------------------------------------------------
       DESKTOP DARK MODE
    --------------------------------------------------------- */

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            toggleDarkMode
        );

    }


    /* ---------------------------------------------------------
       MOBILE / TABLET DARK MODE
    --------------------------------------------------------- */

    if (mobileDarkModeToggle) {

        mobileDarkModeToggle.addEventListener(
            "click",
            toggleDarkMode
        );

    }


    /* =========================================================
       07. LOAD SAVED DARK MODE
    ========================================================= */

    const savedDarkMode =
        localStorage.getItem(
            "paintcraft-dark-mode"
        );


    if (savedDarkMode === "true") {

        body.classList.add(
            "dark-mode"
        );

    } else if (savedDarkMode === "false") {

        body.classList.remove(
            "dark-mode"
        );

    }


    updateDarkModeIcons();


    /* =========================================================
       08. RTL
    ========================================================= */

    function updateRTLState() {

        const rtlIsActive =
            html.getAttribute("dir") === "rtl";


        /* ---------------------------------------------------------
           DESKTOP RTL BUTTON
        --------------------------------------------------------- */

        if (rtlToggle) {

            rtlToggle.setAttribute(
                "aria-label",
                rtlIsActive
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );


            rtlToggle.setAttribute(
                "aria-pressed",
                String(rtlIsActive)
            );

        }


        /* ---------------------------------------------------------
           MOBILE / TABLET RTL BUTTON
        --------------------------------------------------------- */

        if (mobileRtlToggle) {

            mobileRtlToggle.setAttribute(
                "aria-label",
                rtlIsActive
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );


            mobileRtlToggle.setAttribute(
                "aria-pressed",
                String(rtlIsActive)
            );

        }

    }


    function toggleRTL() {

        const currentlyRTL =
            html.getAttribute("dir") === "rtl";


        if (currentlyRTL) {

            html.setAttribute(
                "dir",
                "ltr"
            );

            localStorage.setItem(
                "paintcraft-direction",
                "ltr"
            );

        } else {

            html.setAttribute(
                "dir",
                "rtl"
            );

            localStorage.setItem(
                "paintcraft-direction",
                "rtl"
            );

        }


        updateRTLState();

    }


    /* ---------------------------------------------------------
       DESKTOP RTL
    --------------------------------------------------------- */

    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            toggleRTL
        );

    }


    /* ---------------------------------------------------------
       MOBILE / TABLET RTL
    --------------------------------------------------------- */

    if (mobileRtlToggle) {

        mobileRtlToggle.addEventListener(
            "click",
            toggleRTL
        );

    }


    /* =========================================================
       09. LOAD SAVED RTL
    ========================================================= */

    const savedDirection =
        localStorage.getItem(
            "paintcraft-direction"
        );


    if (savedDirection === "rtl") {

        html.setAttribute(
            "dir",
            "rtl"
        );

    } else {

        html.setAttribute(
            "dir",
            "ltr"
        );

    }


    updateRTLState();


    /* =========================================================
       10. CLOSE MOBILE MENU
       WHEN NORMAL LINK IS CLICKED
    ========================================================= */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-navigation a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );

    });


    /* =========================================================
       11. ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            /* -------------------------------------------------
               CLOSE MOBILE MENU
            ------------------------------------------------- */

            closeMobileMenu();


            /* -------------------------------------------------
               CLOSE MOBILE DROPDOWNS
            ------------------------------------------------- */

            document
                .querySelectorAll(
                    ".has-mobile-dropdown.active"
                )
                .forEach(function (item) {

                    item.classList.remove(
                        "active"
                    );


                    const toggle =
                        item.querySelector(
                            ".mobile-dropdown-toggle"
                        );


                    if (toggle) {

                        toggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                });


            /* -------------------------------------------------
               CLOSE DESKTOP DROPDOWNS
            ------------------------------------------------- */

            desktopDropdownToggles.forEach(
                function (toggle) {

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


    /* =========================================================
       12. RESIZE
       CLOSE MOBILE MENU ON DESKTOP
    ========================================================= */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth >= 1200) {

                closeMobileMenu();


                /* -------------------------------------------------
                   CLOSE MOBILE DROPDOWNS
                ------------------------------------------------- */

                document
                    .querySelectorAll(
                        ".has-mobile-dropdown.active"
                    )
                    .forEach(function (item) {

                        item.classList.remove(
                            "active"
                        );


                        const toggle =
                            item.querySelector(
                                ".mobile-dropdown-toggle"
                            );


                        if (toggle) {

                            toggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    });

            }

        }
    );


    /* =========================================================
       13. INITIAL ACCESSIBILITY STATES
    ========================================================= */

    if (hamburgerButton) {

        hamburgerButton.setAttribute(
            "aria-expanded",
            "false"
        );

        hamburgerButton.setAttribute(
            "aria-label",
            "Open menu"
        );

    }


    if (mobileNavigation) {

        mobileNavigation.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    mobileDropdownToggles.forEach(
        function (toggle) {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    desktopDropdownToggles.forEach(
        function (toggle) {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );


    /* =========================================================
       END OF SCRIPT
    ========================================================= */

});








/*****HOME-1********/

/* =========================================================
   HOME 1
   HERO SECTION
   PART 4 — AUTO SLIDER JAVASCRIPT
========================================================= */


/* =========================================================
   HERO SLIDER
========================================================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const heroIndicators = document.querySelectorAll(".hero-indicator");

let currentHeroSlide = 0;
let heroSlideInterval;


/* =========================================================
   SHOW HERO SLIDE
========================================================= */

function showHeroSlide(index) {

    if (!heroSlides.length) {
        return;
    }

    /* Keep index within available slides */
    if (index >= heroSlides.length) {
        index = 0;
    }

    if (index < 0) {
        index = heroSlides.length - 1;
    }

    currentHeroSlide = index;


    /* Remove active class from all slides */

    heroSlides.forEach((slide) => {
        slide.classList.remove("active");
    });


    /* Remove active class from all indicators */

    heroIndicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });


    /* Activate current slide */

    heroSlides[currentHeroSlide].classList.add("active");


    /* Activate current indicator */

    if (heroIndicators[currentHeroSlide]) {
        heroIndicators[currentHeroSlide].classList.add("active");
    }

}


/* =========================================================
   NEXT HERO SLIDE
========================================================= */

function nextHeroSlide() {

    const nextSlide =
        (currentHeroSlide + 1) % heroSlides.length;

    showHeroSlide(nextSlide);

}


/* =========================================================
   START AUTO SLIDER
========================================================= */

function startHeroSlider() {

    if (heroSlides.length <= 1) {
        return;
    }

    clearInterval(heroSlideInterval);

    heroSlideInterval = setInterval(() => {
        nextHeroSlide();
    }, 5000);

}


/* =========================================================
   INDICATOR CLICK
========================================================= */

heroIndicators.forEach((indicator) => {

    indicator.addEventListener("click", () => {

        const slideIndex =
            Number(indicator.dataset.slide);

        showHeroSlide(slideIndex);

        /* Restart timer after manual selection */

        startHeroSlider();

    });

});


/* =========================================================
   INITIALIZE HERO
========================================================= */

if (heroSlides.length) {

    showHeroSlide(0);

    startHeroSlider();

}










/* =========================================================
   HOME 1
   SECTION 2 — TRUST / COUNTER
   PART 4 — COUNTER ANIMATION
========================================================= */


/* =========================================================
   COUNTER ELEMENTS
========================================================= */

const counterSection = document.querySelector("#trustCounter");
const counterValues = document.querySelectorAll(".counter-value");


/* =========================================================
   COUNTER ANIMATION
========================================================= */

function animateCounter(counter) {

    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix || "";

    const duration = 1800;
    const startTime = performance.now();


    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;

        const progress = Math.min(
            elapsed / duration,
            1
        );


        /* Smooth ease-out animation */

        const easedProgress =
            1 - Math.pow(1 - progress, 3);


        const currentValue = Math.floor(
            easedProgress * target
        );


        counter.textContent =
            currentValue.toLocaleString() + suffix;


        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent =
                target.toLocaleString() + suffix;

        }

    }


    requestAnimationFrame(updateCounter);
}


/* =========================================================
   START COUNTERS ON SCROLL
========================================================= */

if (counterSection && counterValues.length) {

    let counterStarted = false;


    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting &&
                    !counterStarted
                ) {

                    counterStarted = true;


                    counterValues.forEach((counter) => {

                        animateCounter(counter);

                    });


                    observer.unobserve(counterSection);

                }

            });

        },
        {
            threshold: 0.35
        }
    );


    counterObserver.observe(counterSection);

}



/* =========================================================
   TESTIMONIALS SLIDER
   SECTION 10 - PART 4: JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const testimonialsSlider =
        document.querySelector(".testimonials-slider");

    const testimonialsTrack =
        document.querySelector(".testimonials-track");

    const testimonialCards =
        document.querySelectorAll(".testimonial-card");

    const testimonialPrev =
        document.querySelector(".testimonial-prev");

    const testimonialNext =
        document.querySelector(".testimonial-next");

    const testimonialDots =
        document.querySelectorAll(".testimonial-dot");


    /* ---------------------------------------------------------
       SAFETY CHECK
    --------------------------------------------------------- */

    if (
        !testimonialsSlider ||
        !testimonialsTrack ||
        !testimonialCards.length
    ) {
        return;
    }


    /* ---------------------------------------------------------
       VARIABLES
    --------------------------------------------------------- */

    let currentSlide = 0;
    let visibleCards = 2;
    let totalSlides = 1;

    let autoSlideTimer = null;

    let touchStartX = 0;
    let touchEndX = 0;

    let isDragging = false;


    /* ---------------------------------------------------------
       GET VISIBLE CARD COUNT
    --------------------------------------------------------- */

    function getVisibleCards() {

        const width = window.innerWidth;

        /*
         * Desktop
         * iPad Pro
         * iPad Mini
         */
        if (width >= 768) {
            return 2;
        }

        /*
         * Mobile
         */
        return 1;
    }


    /* ---------------------------------------------------------
       GET TOTAL SLIDES
    --------------------------------------------------------- */

    function updateSliderValues() {

        visibleCards = getVisibleCards();

        totalSlides = Math.max(
            1,
            Math.ceil(testimonialCards.length / visibleCards)
        );

        /*
         * Prevent current slide from exceeding
         * available slides after resizing.
         */
        if (currentSlide >= totalSlides) {
            currentSlide = totalSlides - 1;
        }
    }


    /* ---------------------------------------------------------
       UPDATE DOTS
    --------------------------------------------------------- */

    function updateDots() {

        testimonialDots.forEach(function (dot, index) {

            const isActive = index === currentSlide;

            dot.classList.toggle("active", isActive);

            if (isActive) {
                dot.setAttribute("aria-current", "true");
            } else {
                dot.removeAttribute("aria-current");
            }
        });
    }


    /* ---------------------------------------------------------
       UPDATE ARROWS
    --------------------------------------------------------- */

    function updateArrows() {

        /*
         * Keep arrows available because this is a carousel.
         * Disable them only when there is actually
         * nothing to slide.
         */
        if (totalSlides <= 1) {

            testimonialPrev.disabled = true;
            testimonialNext.disabled = true;

        } else {

            testimonialPrev.disabled = false;
            testimonialNext.disabled = false;
        }
    }


    /* ---------------------------------------------------------
       MOVE SLIDER
    --------------------------------------------------------- */

    function moveSlider() {

        if (!testimonialCards.length) {
            return;
        }


        /*
         * Get the actual card width including
         * the spacing between cards.
         */
        const firstCard = testimonialCards[0];

        const cardWidth = firstCard.getBoundingClientRect().width;

        const cardStyles =
            window.getComputedStyle(firstCard);


        let marginRight =
            parseFloat(cardStyles.marginRight) || 0;

        let marginLeft =
            parseFloat(cardStyles.marginLeft) || 0;


        /*
         * LTR uses margin-right.
         * RTL uses margin-left.
         */
        const isRTL =
            document.documentElement.dir === "rtl";


        let cardStep;

        if (isRTL) {

            cardStep = cardWidth + marginLeft;

        } else {

            cardStep = cardWidth + marginRight;
        }


        const translateAmount =
            currentSlide * cardStep * visibleCards;


        /*
         * RTL moves in the opposite direction.
         */
        if (isRTL) {

            testimonialsTrack.style.transform =
                `translateX(${translateAmount}px)`;

        } else {

            testimonialsTrack.style.transform =
                `translateX(-${translateAmount}px)`;
        }


        updateDots();
        updateArrows();
    }


    /* ---------------------------------------------------------
       GO TO SLIDE
    --------------------------------------------------------- */

    function goToSlide(index) {

        if (totalSlides <= 1) {
            currentSlide = 0;
            moveSlider();
            return;
        }


        /*
         * Loop from last to first.
         */
        if (index < 0) {
            currentSlide = totalSlides - 1;

        } else if (index >= totalSlides) {
            currentSlide = 0;

        } else {
            currentSlide = index;
        }


        moveSlider();
    }


    /* ---------------------------------------------------------
       NEXT SLIDE
    --------------------------------------------------------- */

    function nextTestimonial() {
        goToSlide(currentSlide + 1);
    }


    /* ---------------------------------------------------------
       PREVIOUS SLIDE
    --------------------------------------------------------- */

    function previousTestimonial() {
        goToSlide(currentSlide - 1);
    }


    /* ---------------------------------------------------------
       BUTTON EVENTS
    --------------------------------------------------------- */

    if (testimonialNext) {

        testimonialNext.addEventListener(
            "click",
            function () {

                nextTestimonial();

                restartAutoSlide();
            }
        );
    }


    if (testimonialPrev) {

        testimonialPrev.addEventListener(
            "click",
            function () {

                previousTestimonial();

                restartAutoSlide();
            }
        );
    }


    /* ---------------------------------------------------------
       DOT EVENTS
    --------------------------------------------------------- */

    testimonialDots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                /*
                 * Only use dots that represent
                 * an available slide.
                 */
                if (index < totalSlides) {

                    goToSlide(index);

                    restartAutoSlide();
                }
            }
        );
    });


    /* ---------------------------------------------------------
       AUTO SLIDE
    --------------------------------------------------------- */

    function startAutoSlide() {

        stopAutoSlide();


        if (totalSlides <= 1) {
            return;
        }


        autoSlideTimer = setInterval(
            function () {

                nextTestimonial();

            },
            5000
        );
    }


    function stopAutoSlide() {

        if (autoSlideTimer) {

            clearInterval(autoSlideTimer);

            autoSlideTimer = null;
        }
    }


    function restartAutoSlide() {

        stopAutoSlide();
        startAutoSlide();
    }


    /* ---------------------------------------------------------
       PAUSE ON HOVER
    --------------------------------------------------------- */

    testimonialsSlider.addEventListener(
        "mouseenter",
        function () {

            stopAutoSlide();
        }
    );


    testimonialsSlider.addEventListener(
        "mouseleave",
        function () {

            startAutoSlide();
        }
    );


    /* ---------------------------------------------------------
       TOUCH / SWIPE
    --------------------------------------------------------- */

    testimonialsSlider.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) {
                return;
            }

            touchStartX =
                event.touches[0].clientX;

            touchEndX =
                touchStartX;

            isDragging = true;

            stopAutoSlide();

        },
        { passive: true }
    );


    testimonialsSlider.addEventListener(
        "touchmove",
        function (event) {

            if (!isDragging || !event.touches.length) {
                return;
            }

            touchEndX =
                event.touches[0].clientX;

        },
        { passive: true }
    );


    testimonialsSlider.addEventListener(
        "touchend",
        function () {

            if (!isDragging) {
                return;
            }

            isDragging = false;


            const swipeDistance =
                touchStartX - touchEndX;


            const minimumSwipeDistance = 50;


            if (
                Math.abs(swipeDistance) >=
                minimumSwipeDistance
            ) {

                const isRTL =
                    document.documentElement.dir === "rtl";


                if (isRTL) {

                    if (swipeDistance > 0) {
                        previousTestimonial();
                    } else {
                        nextTestimonial();
                    }

                } else {

                    if (swipeDistance > 0) {
                        nextTestimonial();
                    } else {
                        previousTestimonial();
                    }
                }
            }


            restartAutoSlide();

        },
        { passive: true }
    );


    /* ---------------------------------------------------------
       KEYBOARD ACCESSIBILITY
    --------------------------------------------------------- */

    testimonialsSlider.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "ArrowRight") {

                nextTestimonial();

                restartAutoSlide();

            } else if (event.key === "ArrowLeft") {

                previousTestimonial();

                restartAutoSlide();
            }
        }
    );


    /* ---------------------------------------------------------
       RESIZE
    --------------------------------------------------------- */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);


            resizeTimer = setTimeout(
                function () {

                    updateSliderValues();

                    moveSlider();

                    restartAutoSlide();

                },
                150
            );
        }
    );


    /* ---------------------------------------------------------
       RTL DIRECTION CHANGE SUPPORT
    --------------------------------------------------------- */

    const directionObserver =
        new MutationObserver(
            function () {

                updateSliderValues();

                moveSlider();

                restartAutoSlide();

            }
        );


    directionObserver.observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: ["dir"]
        }
    );


    /* ---------------------------------------------------------
       INITIALIZE
    --------------------------------------------------------- */

    updateSliderValues();

    moveSlider();

    startAutoSlide();

});



/* =========================================================
   HOME 2
   SECTION 8: FAQ
   PART 4 - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const faqSection = document.querySelector("#home2Faq");

    if (!faqSection) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const faqTabs = faqSection.querySelectorAll(".home2-faq-tab");
    const faqItems = faqSection.querySelectorAll(".home2-faq-item");


    /* =====================================================
       UPDATE FAQ ICON
    ===================================================== */

    function updateFaqIcon(item, isOpen) {

        const icon = item.querySelector(".home2-faq-icon i");

        if (!icon) return;

        if (isOpen) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
    }


    /* =====================================================
       OPEN FAQ
    ===================================================== */

    function openFaq(item) {

        item.classList.add("active");

        const question = item.querySelector(".home2-faq-question");

        if (question) {
            question.setAttribute("aria-expanded", "true");
        }

        updateFaqIcon(item, true);
    }


    /* =====================================================
       CLOSE FAQ
    ===================================================== */

    function closeFaq(item) {

        item.classList.remove("active");

        const question = item.querySelector(".home2-faq-question");

        if (question) {
            question.setAttribute("aria-expanded", "false");
        }

        updateFaqIcon(item, false);
    }


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    faqItems.forEach(function (item) {

        const question = item.querySelector(".home2-faq-question");

        if (!question) return;

        question.addEventListener("click", function () {

            const isCurrentlyOpen =
                item.classList.contains("active");


            /* ---------------------------------------------
               Close all visible FAQ items
            --------------------------------------------- */

            faqItems.forEach(function (otherItem) {

                if (
                    otherItem !== item &&
                    otherItem.style.display !== "none"
                ) {
                    closeFaq(otherItem);
                }

            });


            /* ---------------------------------------------
               Toggle clicked item
            --------------------------------------------- */

            if (isCurrentlyOpen) {
                closeFaq(item);
            } else {
                openFaq(item);
            }

        });

    });


    /* =====================================================
       FAQ CATEGORY FILTER
    ===================================================== */

    faqTabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const selectedCategory =
                tab.getAttribute("data-faq-category");


            /* ---------------------------------------------
               Update active tab
            --------------------------------------------- */

            faqTabs.forEach(function (otherTab) {

                otherTab.classList.remove("active");
                otherTab.setAttribute(
                    "aria-selected",
                    "false"
                );

            });

            tab.classList.add("active");

            tab.setAttribute(
                "aria-selected",
                "true"
            );


            /* ---------------------------------------------
               Filter FAQ items
            --------------------------------------------- */

            let firstVisibleItem = null;

            faqItems.forEach(function (item) {

                const itemCategory =
                    item.getAttribute("data-faq-item");


                if (itemCategory === selectedCategory) {

                    item.style.display = "block";

                    if (!firstVisibleItem) {
                        firstVisibleItem = item;
                    }

                } else {

                    item.style.display = "none";
                    closeFaq(item);

                }

            });


            /* ---------------------------------------------
               Open first FAQ in selected category
            --------------------------------------------- */

            if (firstVisibleItem) {
                openFaq(firstVisibleItem);
            }

        });

    });


    /* =====================================================
       INITIAL FAQ STATE
    ===================================================== */

    faqItems.forEach(function (item) {

        if (item.classList.contains("active")) {
            openFaq(item);
        } else {
            closeFaq(item);
        }

    });


    /* =====================================================
       KEYBOARD ACCESSIBILITY FOR TABS
    ===================================================== */

    faqTabs.forEach(function (tab, index) {

        tab.addEventListener("keydown", function (event) {

            let nextIndex = null;


            if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % faqTabs.length;
            }

            if (event.key === "ArrowLeft") {
                nextIndex =
                    (index - 1 + faqTabs.length) %
                    faqTabs.length;
            }


            if (event.key === "Home") {
                nextIndex = 0;
            }

            if (event.key === "End") {
                nextIndex = faqTabs.length - 1;
            }


            if (nextIndex !== null) {

                event.preventDefault();

                faqTabs[nextIndex].focus();
                faqTabs[nextIndex].click();

            }

        });

    });


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") return;

        faqItems.forEach(function (item) {

            if (
                item.classList.contains("active") &&
                item.style.display !== "none"
            ) {
                closeFaq(item);
            }

        });

    });

});









/* =========================================================
   ABOUT US
   SECTION 8: OUR IMPACT
   PART 4 - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const impactSection = document.getElementById("aboutOurImpact");

    if (!impactSection) return;

    const impactNumbers = impactSection.querySelectorAll(
        ".about-impact-number"
    );

    if (!impactNumbers.length) return;


    /* =====================================================
       COUNTING FUNCTION
    ===================================================== */

    function animateImpactNumber(element) {

        const target = Number(element.dataset.target);
        const suffix = element.dataset.suffix || "";

        if (isNaN(target)) return;

        const duration = 1800;
        const startTime = performance.now();

        function updateNumber(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            /* Smooth ease-out animation */
            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(
                easedProgress * target
            );

            element.textContent =
                currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent =
                    target.toLocaleString() + suffix;
            }
        }

        requestAnimationFrame(updateNumber);
    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (prefersReducedMotion) {

        impactNumbers.forEach(function (element) {

            const target = Number(element.dataset.target);
            const suffix = element.dataset.suffix || "";

            element.textContent =
                target.toLocaleString() + suffix;
        });

        return;
    }


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    let hasAnimated = false;

    const impactObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (
                    entry.isIntersecting &&
                    !hasAnimated
                ) {

                    hasAnimated = true;

                    impactNumbers.forEach(function (element) {
                        animateImpactNumber(element);
                    });

                    observer.unobserve(impactSection);
                }
            });

        },
        {
            threshold: 0.25
        }
    );


    impactObserver.observe(impactSection);

});





// =========================================================
// PAINTING PAGE
// SECTION 02: PAINTING SERVICES INTRODUCTION
// PART 4 - JAVASCRIPT
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const paintingIntroSection =
        document.getElementById("paintingIntroduction");

    if (!paintingIntroSection) {
        return;
    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const slides =
        paintingIntroSection.querySelectorAll(
            ".painting-intro-slide"
        );

    const nextButton =
        paintingIntroSection.querySelector(
            ".painting-intro-next"
        );

    const prevButton =
        paintingIntroSection.querySelector(
            ".painting-intro-prev"
        );

    const dots =
        paintingIntroSection.querySelectorAll(
            ".painting-intro-slider-dot"
        );

    const slider =
        paintingIntroSection.querySelector(
            ".painting-intro-slider"
        );


    if (!slides.length) {
        return;
    }


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentSlide = 0;
    let autoplayTimer = null;

    const autoplayDelay = 5000;

    let touchStartX = 0;
    let touchEndX = 0;


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* =====================================================
       RTL CHECK
    ===================================================== */

    function isRTL() {

        return (
            document.documentElement.getAttribute("dir") === "rtl"
        );

    }


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }

        currentSlide = index;


        /* -----------------------------------------------
           UPDATE SLIDES
        ------------------------------------------------ */

        slides.forEach(function (slide, slideIndex) {

            slide.classList.toggle(
                "active",
                slideIndex === currentSlide
            );

        });


        /* -----------------------------------------------
           UPDATE DOTS
        ------------------------------------------------ */

        dots.forEach(function (dot, dotIndex) {

            dot.classList.toggle(
                "active",
                dotIndex === currentSlide
            );

            dot.setAttribute(
                "aria-current",
                dotIndex === currentSlide
                    ? "true"
                    : "false"
            );

        });

    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextSlide() {

        /*
         * RTL keeps the visual direction natural.
         * The image order still remains predictable.
         */

        if (isRTL()) {

            showSlide(currentSlide - 1);

        } else {

            showSlide(currentSlide + 1);

        }

    }


    /* =====================================================
       PREVIOUS SLIDE
    ===================================================== */

    function previousSlide() {

        if (isRTL()) {

            showSlide(currentSlide + 1);

        } else {

            showSlide(currentSlide - 1);

        }

    }


    /* =====================================================
       BUTTON EVENTS
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                nextSlide();

                restartAutoplay();

            }
        );

    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            function () {

                previousSlide();

                restartAutoplay();

            }
        );

    }


    /* =====================================================
       DOT EVENTS
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                showSlide(index);

                restartAutoplay();

            }
        );

    });


    /* =====================================================
       AUTOPLAY
    ===================================================== */

    function startAutoplay() {

        if (prefersReducedMotion) {
            return;
        }

        stopAutoplay();

        autoplayTimer = setInterval(
            function () {

                nextSlide();

            },
            autoplayDelay
        );

    }


    function stopAutoplay() {

        if (autoplayTimer) {

            clearInterval(autoplayTimer);

            autoplayTimer = null;

        }

    }


    function restartAutoplay() {

        if (prefersReducedMotion) {
            return;
        }

        startAutoplay();

    }


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    slider.addEventListener(
        "mouseenter",
        function () {

            stopAutoplay();

        }
    );


    slider.addEventListener(
        "mouseleave",
        function () {

            startAutoplay();

        }
    );


    /* =====================================================
       TOUCH / SWIPE
    ===================================================== */

    slider.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) {
                return;
            }

            touchStartX =
                event.touches[0].clientX;

            touchEndX = touchStartX;

            stopAutoplay();

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchmove",
        function (event) {

            if (!event.touches.length) {
                return;
            }

            touchEndX =
                event.touches[0].clientX;

        },
        { passive: true }
    );


    slider.addEventListener(
        "touchend",
        function () {

            const swipeDistance =
                touchEndX - touchStartX;

            const minimumSwipeDistance = 50;


            if (
                Math.abs(swipeDistance) >=
                minimumSwipeDistance
            ) {

                if (swipeDistance < 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            }

            startAutoplay();

        }
    );


    /* =====================================================
       KEYBOARD CONTROL
    ===================================================== */

    paintingIntroSection.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "ArrowLeft" &&
                event.key !== "ArrowRight"
            ) {
                return;
            }


            event.preventDefault();


            if (event.key === "ArrowRight") {

                nextSlide();

            }


            if (event.key === "ArrowLeft") {

                previousSlide();

            }


            restartAutoplay();

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    showSlide(0);

    startAutoplay();


    /* =====================================================
       HANDLE RTL CHANGES
    ===================================================== */

    const directionObserver =
        new MutationObserver(function () {

            restartAutoplay();

        });


    directionObserver.observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: ["dir"]
        }
    );


});







/* =========================================================
   PAINTING PAGE
   SECTION 07: RECENT PAINTING PROJECTS
   PART 4 - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".painting-projects-slider");
    const track = document.querySelector(".painting-projects-track");
    const cards = document.querySelectorAll(".painting-project-card");
    const prevButton = document.querySelector(".painting-projects-prev");
    const nextButton = document.querySelector(".painting-projects-next");
    const dotsContainer = document.querySelector(".painting-projects-dots");

    if (!slider || !track || !cards.length) {
        return;
    }


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentIndex = 0;
    let autoplayTimer = null;
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;


    /* =====================================================
       GET VISIBLE CARDS
    ===================================================== */

    function getVisibleCards() {

        const width = window.innerWidth;

        if (width <= 767) {
            return 1;
        }

        if (width <= 1023) {
            return 2;
        }

        return 3;
    }


    /* =====================================================
       GET MAXIMUM SLIDE INDEX
    ===================================================== */

    function getMaxIndex() {

        const visibleCards = getVisibleCards();

        return Math.max(
            0,
            cards.length - visibleCards
        );
    }


    /* =====================================================
       CREATE DOTS
    ===================================================== */

    function createDots() {

        if (!dotsContainer) {
            return;
        }

        dotsContainer.innerHTML = "";

        const maxIndex = getMaxIndex();

        for (let i = 0; i <= maxIndex; i++) {

            const dot = document.createElement("button");

            dot.type = "button";
            dot.className = "painting-projects-dot";

            if (i === currentIndex) {
                dot.classList.add("active");
            }

            dot.setAttribute(
                "aria-label",
                "Show project slide " + (i + 1)
            );

            dot.dataset.slide = i;

            dot.addEventListener("click", function () {

                currentIndex = Number(this.dataset.slide);

                updateSlider();
                restartAutoplay();

            });

            dotsContainer.appendChild(dot);
        }
    }


    /* =====================================================
       UPDATE DOTS
    ===================================================== */

    function updateDots() {

        if (!dotsContainer) {
            return;
        }

        const dots = dotsContainer.querySelectorAll(
            ".painting-projects-dot"
        );

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === currentIndex
            );

        });
    }


    /* =====================================================
       UPDATE SLIDER
    ===================================================== */

    function updateSlider() {

        const targetCard = cards[currentIndex];

        if (!targetCard) {
            return;
        }

        /*
         * Use the actual card position instead of a fixed
         * percentage so the slider remains accurate when
         * the gap changes at different breakpoints.
         */

        const offset = targetCard.offsetLeft;

        const isRTL =
            document.documentElement.getAttribute("dir") === "rtl";

        if (isRTL) {

            track.style.transform =
                "translateX(" + offset + "px)";

        } else {

            track.style.transform =
                "translateX(-" + offset + "px)";
        }

        updateDots();
        updateArrowState();
    }


    /* =====================================================
       ARROW STATE
    ===================================================== */

    function updateArrowState() {

        const maxIndex = getMaxIndex();

        if (prevButton) {
            prevButton.disabled = currentIndex <= 0;
            prevButton.setAttribute(
                "aria-disabled",
                currentIndex <= 0 ? "true" : "false"
            );
        }

        if (nextButton) {
            nextButton.disabled = currentIndex >= maxIndex;
            nextButton.setAttribute(
                "aria-disabled",
                currentIndex >= maxIndex ? "true" : "false"
            );
        }
    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex < maxIndex) {

            currentIndex++;

        } else {

            currentIndex = 0;
        }

        updateSlider();
    }


    /* =====================================================
       PREVIOUS SLIDE
    ===================================================== */

    function previousSlide() {

        const maxIndex = getMaxIndex();

        if (currentIndex > 0) {

            currentIndex--;

        } else {

            currentIndex = maxIndex;
        }

        updateSlider();
    }


    /* =====================================================
       ARROW EVENTS
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener("click", function () {

            nextSlide();
            restartAutoplay();

        });

    }


    if (prevButton) {

        prevButton.addEventListener("click", function () {

            previousSlide();
            restartAutoplay();

        });

    }


    /* =====================================================
       AUTOPLAY
    ===================================================== */

    function startAutoplay() {

        stopAutoplay();

        autoplayTimer = setInterval(function () {

            nextSlide();

        }, 5000);
    }


    function stopAutoplay() {

        if (autoplayTimer) {

            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }


    function restartAutoplay() {

        startAutoplay();
    }


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    slider.addEventListener("mouseenter", function () {

        stopAutoplay();

    });


    slider.addEventListener("mouseleave", function () {

        startAutoplay();

    });


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    slider.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) {
                return;
            }

            touchStartX = event.touches[0].clientX;
            touchEndX = touchStartX;
            isDragging = true;

            stopAutoplay();

        },
        {
            passive: true
        }
    );


    slider.addEventListener(
        "touchmove",
        function (event) {

            if (!isDragging || !event.touches.length) {
                return;
            }

            touchEndX = event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    slider.addEventListener(
        "touchend",
        function () {

            if (!isDragging) {
                return;
            }

            const swipeDistance =
                touchStartX - touchEndX;

            const minimumSwipe = 50;

            if (Math.abs(swipeDistance) >= minimumSwipe) {

                const isRTL =
                    document.documentElement.getAttribute("dir") === "rtl";

                if (swipeDistance > 0) {

                    if (isRTL) {
                        previousSlide();
                    } else {
                        nextSlide();
                    }

                } else {

                    if (isRTL) {
                        nextSlide();
                    } else {
                        previousSlide();
                    }
                }
            }

            isDragging = false;
            startAutoplay();

        }
    );


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    slider.setAttribute("tabindex", "0");

    slider.addEventListener("keydown", function (event) {

        if (event.key === "ArrowRight") {

            event.preventDefault();

            const isRTL =
                document.documentElement.getAttribute("dir") === "rtl";

            if (isRTL) {
                previousSlide();
            } else {
                nextSlide();
            }

            restartAutoplay();
        }


        if (event.key === "ArrowLeft") {

            event.preventDefault();

            const isRTL =
                document.documentElement.getAttribute("dir") === "rtl";

            if (isRTL) {
                nextSlide();
            } else {
                previousSlide();
            }

            restartAutoplay();
        }

    });


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;

    window.addEventListener("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {

            const maxIndex = getMaxIndex();

            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            createDots();
            updateSlider();

        }, 150);

    });


    /* =====================================================
       RTL OBSERVER
    ===================================================== */

    const directionObserver = new MutationObserver(function () {

        updateSlider();

    });


    directionObserver.observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: ["dir"]
        }
    );


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

    function handleReducedMotion() {

        if (reducedMotion.matches) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    }


    if (reducedMotion.addEventListener) {

        reducedMotion.addEventListener(
            "change",
            handleReducedMotion
        );

    } else if (reducedMotion.addListener) {

        reducedMotion.addListener(
            handleReducedMotion
        );
    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    createDots();
    updateSlider();
    handleReducedMotion();


});










/* =========================================================
   EXTERIOR PAINTING PROJECT
   SECTION 04: EXTERIOR PAINTING SERVICES
   PART 4 - JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const servicesSection = document.getElementById(
        "exteriorProjectServices"
    );

    if (!servicesSection) return;


    const track = servicesSection.querySelector(
        ".exterior-project-services-track"
    );

    const cards = servicesSection.querySelectorAll(
        ".exterior-project-service-card"
    );

    const nextButton = document.getElementById(
        "exteriorProjectServicesNext"
    );

    const dots = servicesSection.querySelectorAll(
        ".exterior-project-services-dot"
    );


    if (!track || !cards.length) return;


    let currentIndex = 0;


    /* =====================================================
       GET CURRENT VISIBLE CARD COUNT
    ===================================================== */

    function getVisibleCards() {

        const width = window.innerWidth;

        if (width >= 1200) {
            return 4;
        }

        if (width >= 1024) {
            return 3;
        }

        if (width >= 768) {
            return 2;
        }

        return 1;
    }


    /* =====================================================
       GET MAXIMUM INDEX
    ===================================================== */

    function getMaxIndex() {

        const visibleCards = getVisibleCards();

        return Math.max(
            0,
            cards.length - visibleCards
        );
    }


    /* =====================================================
       UPDATE DOTS
    ===================================================== */

    function updateDots() {

        if (!dots.length) return;

        const visibleCards = getVisibleCards();

        let activeDot = 0;

        if (visibleCards >= 4) {
            activeDot = 0;
        } else if (visibleCards === 3) {
            activeDot = Math.min(
                currentIndex,
                dots.length - 1
            );
        } else if (visibleCards === 2) {
            activeDot = Math.floor(
                currentIndex / 2
            );
        } else {
            activeDot = currentIndex;
        }

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === activeDot
            );

        });
    }


    /* =====================================================
       MOVE TO CARD
    ===================================================== */

    function moveToCard(index) {

        const maxIndex = getMaxIndex();

        currentIndex = Math.max(
            0,
            Math.min(index, maxIndex)
        );


        /*
         * On desktop all four cards are visible,
         * so no movement is required.
         */
        if (getVisibleCards() >= 4) {

            currentIndex = 0;

            track.style.transform = "translateX(0)";

            updateDots();

            return;
        }


        const targetCard = cards[currentIndex];

        if (targetCard) {

            targetCard.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });

        }


        updateDots();
    }


    /* =====================================================
       NEXT BUTTON
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                const maxIndex = getMaxIndex();

                if (maxIndex <= 0) {

                    /*
                     * Desktop:
                     * keep the button visually active
                     * without moving the layout.
                     */
                    updateDots();

                    return;
                }


                if (currentIndex >= maxIndex) {

                    /*
                     * Loop back to the first card.
                     */
                    moveToCard(0);

                } else {

                    moveToCard(
                        currentIndex + 1
                    );

                }

            }
        );

    }


    /* =====================================================
       PAGINATION DOTS
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                const visibleCards = getVisibleCards();

                let targetIndex = index;


                /*
                 * 2 cards visible:
                 * each dot represents a group.
                 */
                if (visibleCards === 2) {

                    targetIndex = index * 2;

                }


                /*
                 * 3 cards visible:
                 * each dot moves one card.
                 */
                if (visibleCards === 3) {

                    targetIndex = index;

                }


                /*
                 * Mobile:
                 * each dot represents one card.
                 */
                if (visibleCards === 1) {

                    targetIndex = index;

                }


                moveToCard(targetIndex);

            }
        );

    });


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();
                    nextButton.click();

                }

            }
        );

    }


    /* =====================================================
       TOUCH SWIPE
    ===================================================== */

    let touchStartX = 0;
    let touchEndX = 0;


    track.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) return;

            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    track.addEventListener(
        "touchend",
        function (event) {

            if (!event.changedTouches.length) return;

            touchEndX =
                event.changedTouches[0].clientX;

            const difference =
                touchStartX - touchEndX;


            /*
             * Minimum swipe distance
             */
            if (Math.abs(difference) < 50) {
                return;
            }


            /*
             * LTR:
             * Swipe left = next
             * Swipe right = previous
             */
            if (difference > 0) {

                const maxIndex = getMaxIndex();

                if (currentIndex >= maxIndex) {
                    moveToCard(0);
                } else {
                    moveToCard(currentIndex + 1);
                }

            } else {

                if (currentIndex <= 0) {
                    moveToCard(getMaxIndex());
                } else {
                    moveToCard(currentIndex - 1);
                }

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       RTL SWIPE SUPPORT
    ===================================================== */

    function isRTL() {

        return document.documentElement.dir === "rtl";

    }


    track.addEventListener(
        "touchend",
        function () {

            /*
             * RTL handling is intentionally kept
             * separate from the normal visual layout.
             */
            if (!isRTL()) return;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    let resizeTimer;

    window.addEventListener(
        "resize",
        function () {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(
                function () {

                    const maxIndex = getMaxIndex();

                    if (currentIndex > maxIndex) {
                        currentIndex = maxIndex;
                    }

                    updateDots();

                },
                150
            );

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    currentIndex = 0;

    updateDots();


    /* =====================================================
       DARK MODE COMPATIBILITY
    ===================================================== */

    const darkModeObserver =
        new MutationObserver(function () {

            updateDots();

        });


    darkModeObserver.observe(
        document.documentElement,
        {
            attributes: true,
            attributeFilter: [
                "class",
                "dir"
            ]
        }
    );

});













/* =========================================================
   CONSULTATION FAQ ACCORDION
========================================================= */

document.addEventListener("click", function (event) {

    const question = event.target.closest(
        ".consultation-faq-question"
    );

    if (!question) return;

    const item = question.closest(
        ".consultation-faq-item"
    );

    if (!item) return;

    const answerId = question.getAttribute(
        "aria-controls"
    );

    const answer = document.getElementById(answerId);

    if (!answer) return;


    /* =====================================================
       CLOSE ALL OTHER FAQ ITEMS
    ===================================================== */

    document
        .querySelectorAll(".consultation-faq-item")
        .forEach(function (otherItem) {

            if (otherItem === item) return;

            const otherQuestion =
                otherItem.querySelector(
                    ".consultation-faq-question"
                );

            const otherAnswer =
                otherItem.querySelector(
                    ".consultation-faq-answer"
                );

            const otherIcon =
                otherItem.querySelector(
                    ".consultation-faq-question-icon i"
                );

            if (otherQuestion) {
                otherQuestion.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

            if (otherAnswer) {
                otherAnswer.hidden = true;
            }

            otherItem.classList.remove("active");

            if (otherIcon) {
                otherIcon.classList.remove("fa-minus");
                otherIcon.classList.add("fa-plus");
            }

        });


    /* =====================================================
       TOGGLE CLICKED FAQ
    ===================================================== */

    const currentlyOpen =
        question.getAttribute("aria-expanded") === "true";


    if (currentlyOpen) {

        question.setAttribute(
            "aria-expanded",
            "false"
        );

        answer.hidden = true;

        item.classList.remove("active");

        const icon =
            question.querySelector(
                ".consultation-faq-question-icon i"
            );

        if (icon) {
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
        }

    } else {

        question.setAttribute(
            "aria-expanded",
            "true"
        );

        answer.hidden = false;

        item.classList.add("active");

        const icon =
            question.querySelector(
                ".consultation-faq-question-icon i"
            );

        if (icon) {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
        }

    }

});


















/* =========================================================
   PAINTCRAFT
   GLOBAL DARK MODE + RTL
   ALL PAGES
========================================================= */

(function () {

    "use strict";


    /* =====================================================
       STORAGE
    ===================================================== */

    const THEME_KEY = "paintcraft-theme";
    const RTL_KEY   = "paintcraft-rtl";


    /* =====================================================
       ALL DARK MODE BUTTONS
    ===================================================== */

    const darkModeSelectors = [
        "#darkModeToggle",
        "#mobileDarkModeToggle",
        "#paintcraftDarkModeBtn",
        "#paintcraftRegisterDarkModeBtn",
        "#quoteDarkModeBtn"
    ];


    /* =====================================================
       ALL RTL BUTTONS
    ===================================================== */

    const rtlSelectors = [
        "#rtlToggle",
        "#mobileRtlToggle",
        "#paintcraftRtlBtn",
        "#paintcraftRegisterRtlBtn",
        "#quoteRtlBtn"
    ];


    /* =====================================================
       GET ALL EXISTING BUTTONS
    ===================================================== */

    function getDarkButtons() {

        return darkModeSelectors
            .map(function (selector) {
                return document.querySelector(selector);
            })
            .filter(Boolean);

    }


    function getRtlButtons() {

        return rtlSelectors
            .map(function (selector) {
                return document.querySelector(selector);
            })
            .filter(Boolean);

    }


    /* =====================================================
       APPLY DARK MODE
    ===================================================== */

    function applyDarkMode(isDark) {

        const html = document.documentElement;
        const body = document.body;


        if (isDark) {

            html.classList.add("dark-mode");
            body.classList.add("dark-mode");

            html.setAttribute("data-theme", "dark");
            body.setAttribute("data-theme", "dark");

        } else {

            html.classList.remove("dark-mode");
            body.classList.remove("dark-mode");

            html.setAttribute("data-theme", "light");
            body.setAttribute("data-theme", "light");

        }


        /* Update every Dark Mode button */

        getDarkButtons().forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(isDark)
            );


            button.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            button.setAttribute(
                "title",
                isDark
                    ? "Light mode"
                    : "Dark mode"
            );


            const icon = button.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-moon");
                icon.classList.remove("fa-sun");

                icon.classList.add(
                    isDark
                        ? "fa-sun"
                        : "fa-moon"
                );

            }

        });

    }


    /* =====================================================
       APPLY RTL
    ===================================================== */

    function applyRTL(isRTL) {

        const html = document.documentElement;
        const body = document.body;


        if (isRTL) {

            html.setAttribute("dir", "rtl");
            body.setAttribute("dir", "rtl");

            html.classList.add("rtl-mode");
            body.classList.add("rtl-mode");

        } else {

            html.setAttribute("dir", "ltr");
            body.setAttribute("dir", "ltr");

            html.classList.remove("rtl-mode");
            body.classList.remove("rtl-mode");

        }


        /* Update every RTL button */

        getRtlButtons().forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(isRTL)
            );


            button.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );


            button.setAttribute(
                "title",
                isRTL
                    ? "Switch to LTR"
                    : "RTL mode"
            );

        });

    }


    /* =====================================================
       LOAD SAVED SETTINGS
    ===================================================== */

    function loadSavedSettings() {

        const savedTheme =
            localStorage.getItem(THEME_KEY);

        const savedRTL =
            localStorage.getItem(RTL_KEY);


        applyDarkMode(
            savedTheme === "dark"
        );


        applyRTL(
            savedRTL === "rtl"
        );

    }


    /* =====================================================
       DARK MODE CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    darkModeSelectors.join(",")
                );


            if (!button) {
                return;
            }


            event.preventDefault();
            event.stopPropagation();


            const currentState =
                document.documentElement.classList.contains(
                    "dark-mode"
                );


            const newState =
                !currentState;


            applyDarkMode(newState);


            localStorage.setItem(
                THEME_KEY,
                newState
                    ? "dark"
                    : "light"
            );

        },
        true
    );


    /* =====================================================
       RTL CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    rtlSelectors.join(",")
                );


            if (!button) {
                return;
            }


            event.preventDefault();
            event.stopPropagation();


            const currentState =
                document.documentElement.getAttribute(
                    "dir"
                ) === "rtl";


            const newState =
                !currentState;


            applyRTL(newState);


            localStorage.setItem(
                RTL_KEY,
                newState
                    ? "rtl"
                    : "ltr"
            );

        },
        true
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            loadSavedSettings
        );

    } else {

        loadSavedSettings();

    }


})();