
const profiles = [
    {
        name: 'SESHADHRI SV',
        bio: 'Full-Stack Developer with a passion for front-end technologies.',
        skills: ['JavaScript', 'React', 'Node.js']
    },
    {
        name: 'PRAVEEN K',
        bio: 'Focusing on creating intuitive user experiences.',
        skills: ['Figma', 'Photoshop', 'HTML', 'CSS']
    },
    {
        name: 'RAJ KUMAR',
        bio: 'DevOps engineer with a love for automation and cloud infrastructure.',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    }
];

const searchBar = document.createElement('div');
searchBar.classList.add('search-bar');

const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Search profiles...';
searchBar.appendChild(searchInput);

const searchButton = document.createElement('button');
searchButton.innerText = 'Search';
searchBar.appendChild(searchButton);

document.body.insertBefore(searchBar, document.querySelector('.container'));

searchButton.addEventListener('click', filterProfiles);
searchInput.addEventListener('keyup', filterProfiles);

function filterProfiles() {
    const query = searchInput.value.toLowerCase();
    const filteredProfiles = profiles.filter(profile => 
        profile.name.toLowerCase().includes(query) || 
        profile.bio.toLowerCase().includes(query) || 
        profile.skills.some(skill => skill.toLowerCase().includes(query))
    );
    displayProfiles(filteredProfiles);
}

function displayProfiles(profiles) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 
    
    profiles.forEach(profile => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const nameElement = document.createElement('h2');
        nameElement.innerText = profile.name;
        card.appendChild(nameElement);

        const bioElement = document.createElement('p');
        bioElement.innerText = profile.bio;
        card.appendChild(bioElement);

        const skillsElement = document.createElement('ul');
        profile.skills.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.innerText = skill;
            skillsElement.appendChild(skillItem);
        });
        card.appendChild(skillsElement);

        container.appendChild(card);
    });
}

displayProfiles(profiles);

