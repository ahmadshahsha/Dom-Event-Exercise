// 

//  1
const button1 = document.getElementById('one');

// 1b
button1.onclick - function(){
    alert("You clicked the first button! Congrats!");
}
// 2a
const h3 = document.querySelector('h3');

// 2b
h3.addEventListener('mouseover',() => {
    alert ("You hovered over the h3 element! Congreat ")
},{once: true});

// 3a
const form = document.querySelector('form');

// 3b
form.addEventListener('submit', () => {
    alert(form.entry.value)
   
    
});

// Bunos

// 4a
const darkMode = document.getElementById('dm');

// 4b

const star = document.querySelector(`*`);
darkMode.addEventListener ('click', () => {
    darkMode.classList.toggle(`dark-mode`)

});

// 5a
const times = document.querySelector ('#times');

// 5b
// times.addEventListener(`click`, () => 
// {
//     num--
//     if (num >0 ){

//     alert ("you clicked the last button ! Congrats!");
        
//     } else if (num <= 0){
//         alert (' ON NO! This button is not Going to work anymore');
//         times.disabled = true;
//     }
//    });

// or

let num = 1;
times.addEventListener ('click', () => {
    if (num < 3){
        alert ('You clicked the last button! Congrats!');
        num++
    } else if (num === 3){
        alert('OH NO! This button is NOT going to work anymore');
        num++
    }  else {
        times.disabled = true;
    }
});




