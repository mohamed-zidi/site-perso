// burger button
function menuMobile(){

    const header = document.querySelector('.header');
    const btn = document.querySelector('.burger');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {

        header.classList.toggle('show-nav');
    });

    links.forEach(link  => {

        link.addEventListener('click', () => {

            header.classList.remove('show-nav');
        })
    })
}

menuMobile();

// portfolio

function tabsFilters() {

    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projects = document.querySelectorAll('.portfolio .card');

    const resetActiveLink = () => {

        tabs.forEach(elem => {

            elem.classList.remove('active');
        })
    }

    const showProjects = (elem) => {
        console.log(elem);
        projects.forEach(project => {
            
            
            let filter = project.getAttribute('data-category');

            if(elem == 'all'){

                project.parentNode.classList.remove('hide');
                return
                // return termine l'action
            }

            filter !== elem ? project.parentNode.classList.add('hide') : project.parentNode.classList.remove('hide');
        })

        
    }

    tabs.forEach(elem => {

        elem.addEventListener('click', (event) => {
    
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjects(filter);
            resetActiveLink();
            elem.classList.add('active');
        })
    })


}

tabsFilters();

function showProjectsDetails(){

    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');

    const hideModal = () => {

        modals.forEach(modal => {

            modal.classList.remove('show');
        })

    }


    links.forEach(link => {

        link.addEventListener('click', (event) => {
           
            event.preventDefault();
            document.querySelector(`[id=${link.dataset.id}]`).classList.add('show');
        })
    })

    btns.forEach(btn => {

        btn.addEventListener('click', (event) => {
           
            hideModal();
        })
    })
}

showProjectsDetails();

// Effets

const observerIntersectionAnimation = () => {

    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {

        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem,index) => {

        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries,observer) {

        entries.forEach(entry => {

            if(entry.isIntersecting) {
                
                let elem = entry.target;
                elem.style.opacity = 1;
            }
        })
    });

    sections.forEach(section => {

        sectionObserver.observe(section);

    });

    let skillsObserver = new IntersectionObserver(function (entries,observer) {

        entries.forEach(entry => {

            if(entry.isIntersecting) {
                
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {

        skillsObserver.observe(skill);

    });
}

observerIntersectionAnimation();