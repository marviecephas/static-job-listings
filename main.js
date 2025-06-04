const data = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "photosnap.svg",
    "newj": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "manage.svg",
    "newj": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "account.svg",
    "newj": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "myhome.svg",
    "newj": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "loop-studios.svg",
    "newj": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Ruby"],
    "tools": ["Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "faceit.svg",
    "newj": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "shortly.svg",
    "newj": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "insure.svg",
    "newj": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "eyecam-co.svg",
    "newj": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "the-air-filter-company.svg",
    "newj": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]
document.addEventListener('DOMContentLoaded', () => {
    let jobs = document.querySelectorAll('.job-main');
    let clr = document.querySelector('.clear-lngs');
    let lngs = document.querySelector('.lngs-listings');
    let mlngs = document.querySelector('.lngs-main');
    let selngs = []
    lngs.innerHTML = '';
    
    clr.addEventListener('click', () => {
  mlngs.style.display = 'none';
  lngs.innerHTML = '';
  selngs.length = 0;
  filterJobs();
});
    data.forEach( (value, index) => {
        let job = jobs[index];
        job.querySelector('.c-img').src = value.logo;
        job.querySelector('.c-name').innerHTML = value.company;
        if(!value.newj && job.querySelector('.j-duration')){job.querySelector('.j-duration').style.display = 'none';}
        if(!value.featured && job.querySelector('.j-class')){job.querySelector('.j-class').style.display = 'none';}
        let jobDes = job.querySelector('.job-desc');
        let pos = document.createElement('p');
        pos.className = 'j-pos';
        pos.innerHTML = value.position;
        let det = document.createElement('p');
        det.className = 'j-det';
        det.innerHTML = `${value.postedAt} • ${value.contract} • ${value.location}`;
        jobDes.appendChild(pos);
        jobDes.appendChild(det);
        let skills = [value.role, ...value.languages, ...value.tools];
        let jobLngs = job.querySelector('.job-lngs');
        jobLngs.innerHTML = '';
        skills.forEach(value => {
            let skill = document.createElement('p');
            skill.className = 'lng'
            skill.innerHTML = value;
            skill.addEventListener('click', () => {
                    const matchingLng = Array.from(lngs.querySelectorAll('.lng')).find(lng => lng.innerHTML === skill.innerHTML);
if (matchingLng) return;
                    mlngs.style.display = 'flex';
                    selngs.push(skill.innerHTML);
                    let subLng = document.createElement('div');
                    let lang = document.createElement('p');
                    let remLng = document.createElement('img');
                    subLng.className = 'sub-lngs';
                    lang.className = 'lng listings';
                    lang.innerHTML = skill.innerHTML;
                    remLng.className = 'rmv-lng';
                    remLng.src = 'icon-remove.svg';
                    remLng.addEventListener('click', () => {
  selngs = selngs.filter(l => l !== lang.innerText);
  subLng.remove();
  mlngs.style.display = selngs.length === 0 ? 'none' : 'flex';
  filterJobs(); // ✅ call reusable filter
});           subLng.appendChild(lang);
                    subLng.appendChild(remLng);
                    lngs.appendChild(subLng);
                    filterJobs();
       }); jobLngs.appendChild(skill);
        })
    });
    function filterJobs() {
      jobs.forEach((job) => {
        let jobSkills =         Array.from(job.querySelectorAll('.lng')).map(skill => skill.innerHTML);
        let showJob = selngs.every(selng => jobSkills.includes(selng));
        job.style.display = (selngs.length === 0 || showJob) ? 'flex' : 'none';
  });
}
})
