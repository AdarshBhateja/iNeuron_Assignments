let links = document.querySelectorAll('.main__languages a');
for(let i = 0; i<links.length; i++){
    if(i%2!==0){
        links[i].remove();
    }
    else
    continue;
}

document.querySelector('.main__form-input').placeholder = 'iNeuron';