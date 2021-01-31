/*
Script collects all experience items from skills grid
HTML exp-items are parsed then coerced into an array
array of exp-items are chunked into arrays of 5
event listeners for A-Z and Category buttons will change what is displayed
Category: Displays value of #skills-grid on page load
A-Z: sorts array values and outputs in alphabatized order
*/
window.onload = function(){
    const skillsGridValueOnLoad = document.getElementById('skills-grid').innerHTML;

    let skillItems = document.querySelectorAll('.exp-item') //get all exp items from document
    let skills = []; 
    skillItems.forEach(item => { //loop through exp items and push to skills array
        skills.push(item.innerHTML)
        console.log(skills)
    });

    let newSkillsArr = new Array();

    //chunk skills array into groups of 5
    for (var i=0; i<skills.length; i=i+5) {
        newSkillsArr.push(skills.slice(i,i+5));
    }

    document.getElementById('aToZ').addEventListener('click', function(e) {
        if(e.target && e.target.nodeName == 'A') {
        console.log('List item ', e.target.textContent, ' was clicked!');  // "List item Item 2 was clicked!"
        }
        if (e.currentTarget == document.getElementById('aToZ')) {
            document.getElementById('skills-grid').innerText = '';
            newSkillsArr.sort();
            for (let i = 0; i < newSkillsArr.length; i++) {
                for (let j = 0; j < newSkillsArr[i].length; j++) {
                    document.getElementById('skills-grid').innerHTML += `<p>${newSkillsArr[i][j]}</p>`;
                }
            }
        }
    });

    document.getElementById('category').addEventListener('click', function(e) {
        if(e.target && e.target.nodeName == 'A') {
        console.log('List item ', e.target.textContent, ' was clicked!');  // "List item Item 2 was clicked!"
        }
        if (e.currentTarget == document.getElementById('category')) {
            document.getElementById('skills-grid').innerHTML = skillsGridValueOnLoad;
        }
    });
}
