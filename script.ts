const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

  
  resumeOutput.classList.remove('hidden');

  
  displayName.textContent = name;
  displayEmail.textContent = email;
  displayPhone.textContent = phone;
  displayEducation.textContent = education;
  displaySkills.textContent = skills;
  displayExperience.textContent = experience;
});
