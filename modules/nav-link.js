export const initializeNavigation = () =>{
    const navLinks = document.querySelectorAll('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', () =>{
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const sectionId = link.dataset.section;
            switchSection(sectionId);
        });
    });
};

const switchSection = (sectionId) => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
};