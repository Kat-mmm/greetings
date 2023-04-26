let nameEl = document.querySelector('.name');
const greetBtn = document.querySelector('.greet-btn');
const resetBtn = document.querySelector('.reset-btn');
let greetEl = document.querySelector('.greet-text');
const langRadioBtns = document.querySelectorAll('.lang-radio');
let greetCountEl = document.querySelector('.greet-count');

let checkedVal = '';
langRadioBtns.forEach((item) => {
    item.addEventListener('change', () =>{
        checkedVal = item.value;
    });
});

const greetingsFactory = new greetings();


greetCountEl.innerHTML = greetingsFactory.getCount();

function greetingsFunc(){
  let userName = greetingsFactory.getName(nameEl.value);
  let language = greetingsFactory.getLanguage(checkedVal);

  if(checkedVal === ''){
    alert("Please select a language");
  }
  
  if(userName.trim() !== '' && !greetingsFactory.getNames().includes(userName) && checkedVal !== ''){
    // greetingsFactory.addCount();
    greetEl.textContent = greetingsFactory.greet(userName, language);
    greetCountEl.innerHTML = greetingsFactory.getCount();;
    // greetingsFactory.addName(userName);

    

    greetingsFactory.setCount();
    greetingsFactory.setNames();
  }
  
  

  nameEl.value = '';
}

greetBtn.addEventListener('click', greetingsFunc);

function clearAll(){
  greetingsFactory.clearCount();
  location.reload();
}

resetBtn.addEventListener('click', clearAll);

