/*
Script collects all experience items from skills grid
HTML exp-items are parsed then coerced into an array
array of exp-items are chunked into arrays of 5
event listeners for A-Z and Category buttons will change what is displayed
Category: Displays value of #skills-grid on page load
A-Z: sorts array values and outputs in alphabatized order
*/
window.onload = function(){
    let skillsGrid = document.getElementById('skills-grid');
    const skillsGridValueOnLoad = skillsGrid.innerHTML;
    let aToZ = document.getElementById('aToZ');
    let category = document.getElementById('category');
    category.classList.add('active');

    let skillItems = document.querySelectorAll('.exp-item') //get all exp items from document
    let skills = []; 
    skillItems.forEach(item => { //loop through exp items and push to skills array
        skills.push(item.innerHTML)
        skills.sort();
    });

    let newSkillsArr = new Array();

    //chunk skills array into groups of 5
    for (var i=0; i<skills.length; i=i+5) {
        newSkillsArr.push(skills.slice(i,i+5));
    }

    aToZ.addEventListener('click', function(e) {
        if(e.target && e.target.nodeName == 'A') {
        console.log('List item ', e.target.textContent, ' was clicked!');  // "List item Item 2 was clicked!"
        }
        if (e.currentTarget == document.getElementById('aToZ')) {
            aToZ.classList.toggle('active');
            category.classList.toggle('active');
            skillsGrid.innerText = '';
            newSkillsArr.sort();
            for (let i = 0; i < newSkillsArr.length; i++) {
                for (let j = 0; j < newSkillsArr[i].length; j++) {
                    skillsGrid.innerHTML += `<p>${newSkillsArr[i][j]}</p>`;
                }
            }
        }
    });

    category.addEventListener('click', function(e) {
        if(e.target && e.target.nodeName == 'A') {
        console.log('List item ', e.target.textContent, ' was clicked!');  // "List item Item 2 was clicked!"
        }
        if (e.currentTarget == category) {
            category.classList.toggle('active');
            aToZ.classList.toggle('active');
            skillsGrid.innerHTML = skillsGridValueOnLoad;
        }
    });
}
