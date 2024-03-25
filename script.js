const themeBtn = document.getElementById('themeBtn');
const navbar = document.getElementsByTagName('nav')[0];
const navigations = document.getElementById('navigations')
.getElementsByTagName('a');
const intro = document.getElementById('intro');
const about = document.getElementById('about');
const skills = document.querySelectorAll('.skill');
const portfolio = document.getElementById('portfolio');
const projects = document.querySelectorAll('.project');

let dark = true;

// light mode
themeBtn.addEventListener('click', () => {
    if(dark){
        dark = false;

        navbar.style.background = 'white';
        navbar.getElementsByTagName('header')[0]
        .getElementsByTagName('button')[0].style.backgroundColor = '#f0f0f0';
        
        themeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#daa520" viewBox="0 0 256 256"><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path></svg>';
        
        document.body.style.background = 'white';
        document.body.style.color = 'rgb(65, 65, 65)';

        for(let  i = 0; i < navigations.length; i++){
            navigations[i].style.color = 'rgb(65, 65, 65)';
            navigations[i].addEventListener('mouseover', () => {
                navigations[i].style.color = 'gold';
            });
            navigations[i].addEventListener('mouseleave', () => {
                navigations[i].style.color = 'rgb(65, 65, 65)';
            });
        }

        intro.getElementsByTagName('h2')[0].style.color = 'rgb(65, 65, 65)';
        intro.getElementsByTagName('p')[0].style.color = 'rgb(65, 65, 65)';
        intro.style.background = 'url("https://cdn.pixabay.com/photo/2023/09/15/14/50/sky-8254928_1280.jpg")';
        intro.style.backgroundRepeat = 'no-repeat';
        intro.style.backgroundSize = 'cover';
        intro.style.backgroundPosition = 'center';
        intro.style.backgroundAttachment = 'fixed';

        about.style.backgroundColor = 'whitesmoke';
        document.getElementById('full-name').style.color = 'gray';
        document.getElementById('github').style.color = 'steelblue';

        for(let i = 0; i < skills.length; i++){
            skills[i].style.backgroundColor = 'whitesmoke';
        }

        portfolio.style.backgroundColor = 'whitesmoke';

        for(let i = 0; i < projects.length; i++){
            projects[i].style.backgroundColor = 'white';
            projects[i].getElementsByTagName('a')[0].style.color = 'rgb(65, 65, 65)';
        }
    }else{
        // restore to dark/night mode theme
        dark = true;
        location.reload();
    }
});