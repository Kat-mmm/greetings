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

let count = parseInt(localStorage.getItem('greetCount')) || 0;
let names = JSON.parse(localStorage.getItem('names')) || greetingsFactory.getNames();

greetCountEl.innerHTML = count;

function greetingsFunc(){
  let userName = greetingsFactory.getName(nameEl.value.replace(/\s/g, ''));
  let language = greetingsFactory.getLanguage(checkedVal);

  const lettersOnlyRegex = /^[A-Za-z]+$/;
  
  if(userName.trim() !== '' && !names.includes(userName) && checkedVal !== ''){

    if(lettersOnlyRegex.test(userName)){
      greetEl.textContent = greetingsFactory.greet(greetingsFactory.getName(nameEl.value), language);
      count++;
    }
    
    greetCountEl.innerHTML = count;

    localStorage.setItem('greetCount', count.toString());
    localStorage.setItem('greetNames', JSON.stringify(names));
  }
  
  nameEl.value = '';
}

greetBtn.addEventListener('click', greetingsFunc);

function clearAll(){
  localStorage.clear();
  greetCountEl.textContent = count;
  greetEl.textContent = 'Reset Successfull';
  setTimeout(()=>{
    location.reload();
  }, 1000)
  
}

resetBtn.addEventListener('click', clearAll);

