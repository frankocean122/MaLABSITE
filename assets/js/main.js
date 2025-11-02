// Combined inline scripts extracted from uploaded HTML files
// placeholder main js

document.addEventListener('DOMContentLoaded', function(){

// --- extracted script ---
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a5276', // Deep blue - representing science and trust
                        secondary: '#f4d03f', // Golden yellow - representing intelligence
                        accent: '#1abc9c', // Turquoise - representing life and biology
                        dark: '#1d1d1d',
                        light: '#f8f9fa',
                        neutral: '#e0e0e0',
                    },
                    fontFamily: {
                        display: ['Playfair Display', 'serif'],
                        sans: ['Raleway', 'sans-serif'],
                    },
                }
            }
        }

// --- extracted script ---
// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
            
            // Shrink Header on Scroll
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-4');
            } else {
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    let count = 0;
                    const speed = 200; // Lower is faster
                    
                    const updateCount = () => {
                        const increment = target / speed;
                        if (count < target) {
                            count += increment;
                            counter.innerText = Math.ceil(count);
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
        
        // Research Impact Chart
        const ctx = document.getElementById('researchChart').getContext('2d');
        const researchChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Publications',
                    data: [5, 8, 12, 18, 25, 28],
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Citations',
                    data: [25, 60, 150, 320, 650, 980],
                    borderColor: '#f4d03f',
                    backgroundColor: 'rgba(244, 208, 63, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#1a5276',
                        bodyColor: '#1a5276',
                        borderColor: '#1a5276',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: true
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

// --- extracted script ---
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a5276', // Deep blue - representing science and trust
                        secondary: '#f4d03f', // Golden yellow - representing intelligence
                        accent: '#1abc9c', // Turquoise - representing life and biology
                        dark: '#1d1d1d',
                        light: '#f8f9fa',
                        neutral: '#e0e0e0',
                    },
                    fontFamily: {
                        display: ['Playfair Display', 'serif'],
                        sans: ['Raleway', 'sans-serif'],
                    },
                }
            }
        }

// --- extracted script ---
// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenuButton.innerHTML = '<i class="fa fa-times text-xl"></i>';
            } else {
                mobileMenuButton.innerHTML = '<i class="fa fa-bars text-xl"></i>';
            }
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Diversity Chart
        const ctx = document.getElementById('diversityChart');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Asian', 'White', 'Hispanic/Latino', 'Black/African American', 'Middle Eastern', 'Mixed/Other'],
                datasets: [{
                    data: [35, 25, 15, 10, 10, 5],
                    backgroundColor: [
                        '#1abc9c',
                        '#f4d03f',
                        '#3498db',
                        '#e74c3c',
                        '#9b59b6',
                        '#95a5a6'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Ethnic Diversity',
                        color: '#ffffff',
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            bottom: 20
                        }
                    }
                },
                cutout: '70%'
            }
        });
        
        // Sticky Header
        const header = document.querySelector('header');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scroll down
                header.classList.add('py-2');
                header.classList.remove('py-4');
            } else {
                // Scroll up
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            });
        });

// --- extracted script ---
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a5276', // Deep blue - representing science and trust
                        secondary: '#f4d03f', // Golden yellow - representing intelligence
                        accent: '#1abc9c', // Turquoise - representing life and biology
                        dark: '#1d1d1d',
                        light: '#f8f9fa',
                        neutral: '#e0e0e0',
                    },
                    fontFamily: {
                        display: ['Playfair Display', 'serif'],
                        sans: ['Raleway', 'sans-serif'],
                    },
                }
            }
        }

// --- extracted script ---
// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
            
            // Shrink Header on Scroll
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-4');
            } else {
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Funding Chart
        const ctx = document.getElementById('fundingChart').getContext('2d');
        const fundingChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['National Science Foundation', 'Department of Defense', 'Department of Agriculture', 'Industry Partnerships', 'Other'],
                datasets: [{
                    data: [45, 25, 15, 10, 5],
                    backgroundColor: [
                        '#1a5276',
                        '#1abc9c',
                        '#f4d03f',
                        '#3498db',
                        '#9b59b6'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(29, 29, 29, 0.9)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#1a5276',
                        borderWidth: 1,
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = Math.round((value / total) * 100);
                                return `${label}: ${percentage}%`;
                            }
                        }
                    }
                },
                cutout: '65%'
            }
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });

// --- extracted script ---
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a5276', // Deep blue - representing science and trust
                        secondary: '#f4d03f', // Golden yellow - representing intelligence
                        accent: '#1abc9c', // Turquoise - representing life and biology
                        dark: '#1d1d1d',
                        light: '#f8f9fa',
                        neutral: '#e0e0e0',
                    },
                    fontFamily: {
                        display: ['Playfair Display', 'serif'],
                        sans: ['Raleway', 'sans-serif'],
                    },
                }
            }
        }

// --- extracted script ---
// Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
            
            // Sticky Header
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('py-2', 'shadow-lg');
                header.classList.remove('py-4', 'shadow-md');
            } else {
                header.classList.add('py-4', 'shadow-md');
                header.classList.remove('py-2', 'shadow-lg');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Publications Chart
        const publicationsCtx = document.getElementById('publicationsChart').getContext('2d');
        new Chart(publicationsCtx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Publications',
                    data: [15, 25, 35, 42, 56, 65],
                    borderColor: '#1a5276',
                    backgroundColor: 'rgba(26, 82, 118, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Citations',
                    data: [120, 350, 780, 1340, 2650, 5000],
                    borderColor: '#1abc9c',
                    backgroundColor: 'rgba(26, 188, 156, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

        // Citations Chart
        const citationsCtx = document.getElementById('citationsChart').getContext('2d');
        new Chart(citationsCtx, {
            type: 'bar',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                datasets: [{
                    label: 'Citations',
                    data: [120, 350, 780, 1340, 2650, 5000],
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 0.7)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                }
            }
        });

        // Field Impact Chart
        const fieldImpactCtx = document.getElementById('fieldImpactChart').getContext('2d');
        new Chart(fieldImpactCtx, {
            type: 'radar',
            data: {
                labels: ['AI Protein Design', 'Synthetic Gene Circuits', 'Microbiome Engineering', 'Genome Editing', 'Computational Biology', 'Drug Discovery'],
                datasets: [{
                    label: 'Field Impact Score',
                    data: [9.2, 8.7, 7.9, 8.5, 9.0, 8.3],
                    backgroundColor: 'rgba(244, 208, 63, 0.2)',
                    borderColor: 'rgba(244, 208, 63, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(244, 208, 63, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.6)'
                        }
                    }
                }
            }
        });

        // Load More Publications (Simulated)
        document.getElementById('load-more').addEventListener('click', function() {
            const button = this;
            const publicationList = document.getElementById('publication-list');
            
            // Show loading state
            button.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
            button.disabled = true;
            
            // Simulate loading delay
            setTimeout(function() {
                // Create new publication items
                const newPublications = [
                    {
                        year: '2021',
                        journal: 'Nature Communications',
                        title: 'Computational Design of Synthetic Transcription Factors with Programmable DNA Binding Specificity',
                        authors: 'Chen M., Wilson J., Rodriguez E., Hassan A., Lin M., Johnson S.',
                        citations: '76'
                    },
                    {
                        year: '2021',
                        journal: 'Science Advances',
                        title: 'Machine Learning Approaches for Predicting Metabolic Fluxes in Engineered Microorganisms',
                        authors: 'Rodriguez E., Hassan A., Petrova A., Wilson J., Johnson S., Chen M.',
                        citations: '98'
                    },
                    {
                        year: '2021',
                        journal: 'Nature Biotechnology',
                        title: 'High-Throughput Screening of Engineered Enzymes Using AI-Enhanced Microfluidics',
                        authors: 'Lin M., Hassan A., Petrova A., Chen K., Wilson J., Johnson S., et al.',
                        citations: '317'
                    },
                    {
                        year: '2020',
                        journal: 'PNAS',
                        title: 'AI-Driven Prediction of Protein-Protein Interaction Networks for Synthetic Biology Applications',
                        authors: 'Johnson S., Chen K., Wilson J., Rodriguez E., Lin M., Hassan A., et al.',
                        citations: '156'
                    }
                ];
                
                // Add new publications to the list
                newPublications.forEach(pub => {
                    const pubItem = document.createElement('div');
                    pubItem.className = 'publication-card bg-light rounded-xl p-6 border border-neutral';
                    pubItem.innerHTML = `
                        <div class="flex flex-wrap gap-3 mb-3">
                            <span class="year-badge">${pub.year}</span>
                            <span class="journal-badge">${pub.journal}</span>
                        </div>
                        <h3 class="text-lg font-bold text-primary mb-3">${pub.title}</h3>
                        <p class="text-gray-600 text-sm mb-4">
                            ${pub.authors}
                        </p>
                        <div class="flex flex-wrap gap-3 justify-between items-center">
                            <div class="flex gap-2">
                                <a href="#" class="text-primary hover:text-accent transition-colors" title="PDF"><i class="fa fa-file-pdf-o"></i></a>
                                <a href="#" class="text-primary hover:text-accent transition-colors" title="Publisher"><i class="fa fa-external-link"></i></a>
                                <a href="#" class="text-primary hover:text-accent transition-colors" title="Share"><i class="fa fa-share-alt"></i></a>
                            </div>
                            <div class="text-sm text-gray-500">${pub.citations} citations</div>
                        </div>
                    `;
                    publicationList.appendChild(pubItem);
                });
                
                // Reset button
                button.innerHTML = 'Load More Publications <i class="fa fa-refresh"></i>';
                button.disabled = false;
                
                // After loading, hide button if no more publications
                if (publicationList.children.length >= 16) {
                    button.innerHTML = 'No More Publications';
                    button.classList.add('bg-gray-500');
                    button.classList.remove('bg-primary', 'hover:bg-primary/90', 'hover-lift');
                    button.disabled = true;
                }
            }, 1500);
        });

        // Publication Filters (Simulated)
        const filters = ['year-filter', 'journal-filter', 'topic-filter', 'author-filter'];
        
        filters.forEach(filterId => {
            const filter = document.getElementById(filterId);
            filter.addEventListener('change', function() {
                // Simulate filtering effect
                const publicationList = document.getElementById('publication-list');
                const publications = publicationList.querySelectorAll('.publication-card');
                
                // Show loading effect
                publications.forEach(pub => {
                    pub.style.opacity = '0.6';
                });
                
                setTimeout(function() {
                    // Reset opacity
                    publications.forEach(pub => {
                        pub.style.opacity = '1';
                    });
                    
                    // In a real implementation, you would filter the publications here
                    // based on the selected filter values
                }, 500);
            });
        });

// --- extracted script ---
tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#1a5276', // Deep blue - representing science and trust
                        secondary: '#f4d03f', // Golden yellow - representing intelligence
                        accent: '#1abc9c', // Turquoise - representing life and biology
                        dark: '#1d1d1d',
                        light: '#f8f9fa',
                        neutral: '#e0e0e0',
                    },
                    fontFamily: {
                        display: ['Playfair Display', 'serif'],
                        sans: ['Raleway', 'sans-serif'],
                    },
                }
            }
        }

// --- extracted script ---
// Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });
        
        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
            
            // Sticky Header
            const header = document.querySelector('header');
            if (window.pageYOffset > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-4');
            } else {
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Job Details Toggle
        const jobDetailsToggles = document.querySelectorAll('.job-details-toggle');
        
        jobDetailsToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const jobDetails = this.closest('.job-card').querySelector('.job-details');
                const icon = this.querySelector('i');
                
                jobDetails.classList.toggle('hidden');
                if (jobDetails.classList.contains('hidden')) {
                    this.innerHTML = 'View More Details <i class="fa fa-chevron-down"></i>';
                } else {
                    this.innerHTML = 'View Less Details <i class="fa fa-chevron-up"></i>';
                }
            });
        });
        
        // Diversity Chart
        const ctx = document.getElementById('diversityChart').getContext('2d');
        const diversityChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Female', 'Male', 'Non-Binary', 'Other'],
                datasets: [{
                    data: [45, 40, 10, 5],
                    backgroundColor: [
                        '#1a5276',
                        '#1abc9c',
                        '#f4d03f',
                        '#9b59b6'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: 'white',
                            font: {
                                size: 12
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Gender Diversity',
                        color: 'white',
                        font: {
                            size: 16
                        }
                    }
                }
            }
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form Submission Handling
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...';
                
                setTimeout(() => {
                    // Simulate successful submission
                    submitButton.innerHTML = '<i class="fa fa-check"></i> Submitted Successfully!';
                    submitButton.classList.remove('bg-primary');
                    submitButton.classList.add('bg-green-600');
                    
                    // Reset form after submission
                    this.reset();
                    
                    // Restore button after delay
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalText;
                        submitButton.classList.add('bg-primary');
                        submitButton.classList.remove('bg-green-600');
                    }, 3000);
                }, 2000);
            });
        });
});
