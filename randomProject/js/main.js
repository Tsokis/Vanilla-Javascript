const div = document.createElement("div");
const span = document.createElement("span");
const secondDiv = document.createElement("div");
const li = document.createElement("li");


const mySkills = {
  name: "Nik",
  born: 1990,
  majorEducation: "Computers Science/Networks,IT engineering",
  addEducation: "Data analysis/Web,android Development",
  languages: ["HTML", "CSS", "PHP", "\nJAVASCRIPT", "PYTHON", "JAVA"],
  forgLanguages: ["C", "C++"],
  learningNow: ["React", "Vue", "Kotlin"],
  experience: [
    "Computers and Networks Technician",
    "Systems Administrator",
    "Freelance Wordpress Dev",
    "Freelance fullStack web,android Dev"
  ],
  summary: () => {
    return (
      mySkills.name +
      " is Hard Working,Fast Learner developer with " +
      mySkills.majorEducation +
      " major and also " +
      mySkills.addEducation + " skills");

  }
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let info = document.getElementById("infOutput");
  if (info.style.display == "none") {
    info.style.display = "block";
    button.textContent = "Hide Info";
    info.setAttribute("class", "card");
    //info.textContent = 'Display info';
    info.innerHTML = `<h2>${mySkills.name} was born in ${mySkills.born}</h2>
                      <h3>Skills: ${mySkills.languages}</h3>
                      <h3>Learning right now: ${mySkills.learningNow}
                      <p>Experience: ${mySkills.experience}</p>
                      <p>Summary: ${mySkills.summary()}</p>`;
  } else if (info.style.display == 'block') {
    info.style.display = "none";
    button.textContent = "Show info";
  } else {
    info.style.display = 'none';
    button.textContent = 'Click one more time please';
  }
});

// 1rst div
div.textContent = "Sup, y'all?";
div.setAttribute("class", "note");
document.body.appendChild(div);
span.textContent = "Hello!";
div.appendChild(span);
// 2cond div
secondDiv.textContent = "I am the Second Div displayed by JS";
secondDiv.setAttribute("class", "note");
document.body.appendChild(secondDiv);
// li element displayed as the above elements 
li.textContent = "Displayed by JS";
li.setAttribute("class", "note");
document.body.appendChild(li);


//change text function on mouse hover
function changeText(text) {
  let display = document.getElementById('changeText');
  display.innerHTML = '';
  display.innerHTML = text;
}

function changeBack(text) {
  let display = document.getElementById('changeText');
  display.innerHTML = '';
  display.innerHTML = text;
}