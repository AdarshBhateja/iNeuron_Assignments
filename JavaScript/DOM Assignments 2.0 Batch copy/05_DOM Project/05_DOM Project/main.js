let btnDiv = document.querySelector('.nav-center').children[2];
let newbtn = document.createElement('a');
newbtn.textContent = 'Pro Subscription';
newbtn.classList.add('btn');
newbtn.href="index.html";
btnDiv.append(newbtn);


let detail = document.querySelectorAll('.recipe-text');
detail.forEach(color => color.style.color = '#551AA0')