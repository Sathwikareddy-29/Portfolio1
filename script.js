/* =========================================================
   SATHWIKA REDDY - DEVELOPER PORTFOLIO
   Main JavaScript
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (loader) {
                loader.classList.add("hidden");
            }
        }, 700);
    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {
                icon.className = "fas fa-times";
            } else {
                icon.className = "fas fa-bars";
            }

        });


        document.querySelectorAll(".nav-link").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                if (icon) {
                    icon.className = "fas fa-bars";
                }

            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    const typingElement =
        document.getElementById("typingText");

    if (typingElement) {

        const words = [
            "Frontend Developer",
            "ECE Student",
            "Web Developer",
            "Problem Solver",
            "Creative Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord =
                words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (
                    charIndex ===
                    currentWord.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1600
                    );

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 55 : 90
            );

        }

        typeEffect();

    }


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    const themeIcon =
        document.getElementById("themeIcon");

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        if (themeIcon) {
            themeIcon.className =
                "fas fa-moon";
        }

    }

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light-mode"
                );

                const isLight =
                    document.body.classList.contains(
                        "light-mode"
                    );

                localStorage.setItem(
                    "portfolio-theme",
                    isLight
                        ? "light"
                        : "dark"
                );

                if (themeIcon) {

                    themeIcon.className =
                        isLight
                            ? "fas fa-moon"
                            : "fas fa-sun";

                }

            }
        );

    }


    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-btn"
        );

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );

    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(btn => {
                    btn.classList.remove(
                        "active"
                    );
                });

                button.classList.add(
                    "active"
                );

                const filter =
                    button.dataset.filter;

                projectCards.forEach(card => {

                    const category =
                        card.dataset.category;

                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove(
                            "hidden"
                        );

                    } else {

                        card.classList.add(
                            "hidden"
                        );

                    }

                });

            }
        );

    });


    /* =====================================================
       PROJECT MODAL
    ===================================================== */

    const modal =
        document.getElementById("projectModal");

    const modalClose =
        document.getElementById("modalClose");

    const projectButtons =
        document.querySelectorAll(
            ".project-details-btn"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const modalDescription =
        document.getElementById(
            "modalDescription"
        );

    const modalIcon =
        document.getElementById(
            "modalIcon"
        );

    const modalFeatures =
        document.getElementById(
            "modalFeatures"
        );

    const modalTech =
        document.getElementById(
            "modalTech"
        );

    const modalGithub =
        document.getElementById(
            "modalGithub"
        );

    const modalLive =
        document.getElementById(
            "modalLive"
        );


    const projectData = {

        navmind: {

            title:
                "NavMind AI - Smart Route Finder",

            icon:
                "fas fa-route",

            description:
                "An AI-powered route finding web application that demonstrates intelligent search algorithms for finding efficient paths between locations.",

            features: [
                "Interactive route visualization",
                "A* search algorithm",
                "Breadth First Search",
                "Depth First Search",
                "Uniform Cost Search",
                "Responsive React interface"
            ],

            technologies: [
                "React.js",
                "JavaScript",
                "Leaflet.js",
                "OpenStreetMap",
                "AI Search Algorithms"
            ],

            github:
                "https://github.com/",

            live:
                "#"

        },


        movie: {

            title:
                "Movie Discovery Platform",

            icon:
                "fas fa-film",

            description:
                "A responsive movie discovery platform where users can explore movies, filter by genre, view ratings and maintain a personal watchlist.",

            features: [
                "Movie search",
                "Genre filtering",
                "Rating display",
                "Movie details",
                "Watchlist functionality",
                "Responsive interface"
            ],

            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "LocalStorage",
                "Movie API"
            ],

            github:
                "https://github.com/",

            live:
                "#"

        },


        news: {

            title:
                "News Aggregation Platform",

            icon:
                "fas fa-newspaper",

            description:
                "A modern news reading platform that organizes news articles into an easy-to-use interface with category navigation and responsive design.",

            features: [
                "News categories",
                "Article cards",
                "Responsive design",
                "Search interface",
                "API integration",
                "Modern UI"
            ],

            technologies: [
                "React.js",
                "JavaScript",
                "CSS",
                "REST API"
            ],

            github:
                "https://github.com/",

            live:
                "#"

        }

    };


    function openProject(projectName) {

        const project =
            projectData[projectName];

        if (!project || !modal) return;

        if (modalTitle) {
            modalTitle.textContent =
                project.title;
        }

        if (modalDescription) {
            modalDescription.textContent =
                project.description;
        }

        if (modalIcon) {
            modalIcon.className =
                project.icon;
        }

        if (modalFeatures) {

            modalFeatures.innerHTML =
                project.features
                    .map(
                        feature =>
                            `<li>${feature}</li>`
                    )
                    .join("");

        }

        if (modalTech) {

            modalTech.innerHTML =
                project.technologies
                    .map(
                        tech =>
                            `<span>${tech}</span>`
                    )
                    .join("");

        }

        if (modalGithub) {
            modalGithub.href =
                project.github;
        }

        if (modalLive) {
            modalLive.href =
                project.live;
        }

        modal.classList.add("active");

        document.body.classList.add(
            "no-scroll"
        );

    }


    projectButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const projectName =
                    button.dataset.project;

                openProject(
                    projectName
                );

            }
        );

    });


    function closeModal() {

        if (!modal) return;

        modal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    const modalOverlay =
        document.querySelector(
            ".modal-overlay"
        );

    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {
                closeModal();
            }

        }
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {
            revealObserver.observe(
                element
            );
        }
    );


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );

    window.addEventListener(
        "scroll",
        () => {

            if (!backToTop) return;

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const name =
                    document.getElementById(
                        "name"
                    )?.value;

                showToast(
                    `Thank you${name ? " " + name : ""}! Your message has been received.`
                );

                contactForm.reset();

            }
        );

    }


    /* =====================================================
       TOAST MESSAGE
    ===================================================== */

    const toast =
        document.getElementById(
            "toast"
        );

    const toastMessage =
        document.getElementById(
            "toastMessage"
        );


    function showToast(message) {

        if (!toast) return;

        if (toastMessage) {
            toastMessage.textContent =
                message;
        }

        toast.classList.add(
            "show"
        );

        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3500
        );

    }


    /* =====================================================
       GITHUB API
    ===================================================== */

    const githubUsername =
        "Sathwikareddy-29";

    const githubRepos =
        document.getElementById(
            "githubRepositories"
        );

    const githubStars =
        document.getElementById(
            "githubStars"
        );

    const githubFollowers =
        document.getElementById(
            "githubFollowers"
        );

    const githubRepoCount =
        document.getElementById(
            "githubRepoCount"
        );


    async function loadGithubData() {

        if (!githubRepos) return;

        try {

            const userResponse =
                await fetch(
                    `https://api.github.com/users/${githubUsername}`
                );

            if (!userResponse.ok) {
                throw new Error(
                    "GitHub user not found"
                );
            }

            const user =
                await userResponse.json();


            const reposResponse =
                await fetch(
                    `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
                );

            const repos =
                await reposResponse.json();


            if (githubFollowers) {

                githubFollowers.textContent =
                    user.followers;

            }

            if (githubRepoCount) {

                githubRepoCount.textContent =
                    user.public_repos;

            }


            let totalStars = 0;

            repos.forEach(repo => {

                totalStars +=
                    repo.stargazers_count || 0;

            });


            if (githubStars) {

                githubStars.textContent =
                    totalStars;

            }


            if (
                Array.isArray(repos) &&
                repos.length > 0
            ) {

                githubRepos.innerHTML =
                    repos
                        .map(repo => {

                            return `

                            <div class="github-repo reveal visible">

                                <h3>
                                    ${escapeHTML(
                                        repo.name
                                    )}
                                </h3>

                                <p>
                                    ${
                                        escapeHTML(
                                            repo.description ||
                                            "No description available."
                                        )
                                    }
                                </p>

                                <div class="repo-meta">

                                    <span>
                                        <i class="fas fa-star"></i>
                                        ${repo.stargazers_count}
                                    </span>

                                    <span>
                                        <i class="fas fa-code-branch"></i>
                                        ${repo.forks_count}
                                    </span>

                                    <span>
                                        ${
                                            escapeHTML(
                                                repo.language ||
                                                "Code"
                                            )
                                        }
                                    </span>

                                </div>

                                <a
                                    class="repo-link"
                                    href="${repo.html_url}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Repository
                                    <i class="fas fa-arrow-right"></i>
                                </a>

                            </div>

                            `;

                        })
                        .join("");

            } else {

                githubRepos.innerHTML = `
                    <div class="github-loading">
                        <div>
                            <i class="fab fa-github"></i>
                            <p>No public repositories found.</p>
                        </div>
                    </div>
                `;

            }

        } catch (error) {

            console.error(
                "GitHub API Error:",
                error
            );

            githubRepos.innerHTML = `
                <div class="github-loading">
                    <div>
                        <i class="fas fa-exclamation-circle"></i>
                        <p>
                            GitHub projects could not be loaded right now.
                        </p>
                    </div>
                </div>
            `;

        }

    }


    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    loadGithubData();


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       INITIAL NAVIGATION CHECK
    ===================================================== */

    updateActiveNavigation();

});
