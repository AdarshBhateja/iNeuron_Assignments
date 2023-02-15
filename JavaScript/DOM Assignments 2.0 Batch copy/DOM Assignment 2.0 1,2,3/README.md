*FirstAssignment*
**Task 1**
The user needs to add new nav item "Hire Me".

![task 1 image](./firstAssignmentImage/task1Output.png)

```JavaScript
let ulist = document.querySelector('ul');
let newListItem = document.createElement('li');
newListItem.innerHTML = '<a href ="#">Hire Me</a>';
ulist.appendChild(newListItem);
```

**Task 2**
The user needs to change placeholder.

![task 1 image](./firstAssignmentImage/task2Output.png)

```JavaScript
document.querySelector('input').placeholder = 'Search My Project';
```

**Task 3**
The user needs to change third nav item.

![task 1 image](./firstAssignmentImage/task3Output.png)

```JavaScript
let parent = document.querySelector('ul');
parent.children[2].innerHTML = '<a href="./contact/contact.html">Projects</a>';
```

**Task 4**
The user needs to change hero image.

![task 1 image](./firstAssignmentImage/task4Output.png)

```JavaScript
let image = document.querySelector('img').src = 'download.jfif';
```

**Task 5**
The user needs to add 'Support Me' button.

![task 1 image](./firstAssignmentImage/task5Output.png)

```JavaScript
let parent = document.querySelector('.hero-right-section-btns');
let child = document.querySelector('.hero-right-section-btns').children[0];
let clo = child.cloneNode(true);
clo.innerText = 'Support Me'
parent.append(clo);
```


*SecondAssignment*
**Task 1**
The user needs to show display block the last two accrodian.

![task 1 image](./secondAssignmentImage/task1Output.png)

```JavaScript
window.onload = function() {
  let para = document.querySelectorAll(".accordian p");
  para[2].style.display = "block";
  para[3].style.display = "block";
}
```

**Task 2**
The user needs add new accordian and display to block.

![task 1 image](./secondAssignmentImage/task2Output.png)

```JavaScript
let wrapper = document.querySelector('.accordian-wrapper');
let bar = document.querySelector('.accordian');
let newBar = bar.cloneNode(true);
wrapper.append(newBar);
let heading = newBar.querySelector('h3').textContent = 'Skills';
let para = newBar.querySelector('p');
para.textContent = 'I possess a very Good command over the Full Stack Web Development Technologies.';
para.style.display = 'block';
```


*ThirdAssignment*
**Task 1**
The user needs to change all placeholder values.

![task 1 image](./thirdAssignmentImage/task1Output.png)

```JavaScript
let inputName = document.querySelectorAll('.enterName,.userName');
let inputMail = document.querySelectorAll('.enterMail,.userEmail');
let inputMsg = document.querySelectorAll('.enterMessage,.userMessage');
inputName.forEach(list=>list.placeholder = 'FSJS 2.0');
inputMail.forEach(list=>list.placeholder = 'fsjs@inauron.ai');
inputMsg.forEach(list=>list.placeholder = 'Hello World');
```
