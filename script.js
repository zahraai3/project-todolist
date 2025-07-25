const ItemList = document.getElementsByClassName('list')[0];
const inputBox = document.getElementsByClassName('tasks')[0];
const secondItemList = document.getElementById('important');

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    ItemList.appendChild(li);
    inputBox.value = '';

    saveData(); // وحدة فقط بعد كلشي
  }
}

function importantTask(){
  if(inputBox.value === ''){
    alert("You must write something")
  }
  else{
    let li = document.createElement('li');
    li.innerHTML=inputBox.value;

        let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    secondItemList.appendChild(li);
    inputBox.value='';

    saveData();
  }
}


ItemList.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

secondItemList.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function changeTheme(){
    document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}


function saveData() {
  localStorage.setItem("data", ItemList.innerHTML);
  localStorage.setItem("important-Data", secondItemList.innerHTML);
}

function show() {
  ItemList.innerHTML = localStorage.getItem("data");
  secondItemList.innerHTML = localStorage.getItem("important-Data");
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

show();