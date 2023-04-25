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

  if(checkedVal === ''){
    alert("Please select a language");
  }
  
  if(userName.trim() !== '' && !greetingsFactory.getNames().includes(userName) && checkedVal !== ''){
    greetingsFactory.addCount();
    greetCountEl.innerHTML = greetingsFactory.getCount();;
    greetingsFactory.addName(userName);

    greetingsFactory.setCount();
    greetingsFactory.setNames();
  }
  
  if(checkedVal === 'English' && userName !== ''){
    greetEl.textContent = greetingsFactory.greet(userName);
  }
  else if(checkedVal === 'Afrikaans' && userName !== ''){
    greetEl.textContent = greetingsFactory.greetInAfrikaans(userName);
  }
  else if(checkedVal === 'isiZulu' && userName !== ''){
    greetEl.textContent = greetingsFactory.greetInIsiZulu(userName);
  }

  nameEl.value = '';
}

greetBtn.addEventListener('click', greetingsFunc);

resetBtn.addEventListener('click', ()=>{
  localStorage.clear();
  location.reload();
});

