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
  let userName = greetingsFactory.getName(nameEl.value);
  let language = greetingsFactory.getLanguage(checkedVal);

  const lettersOnlyRegex = /^[A-Za-z]+$/;
  if(language === ''){
    greetEl.textContent = greetingsFactory.greet(userName, language);
  }
  else if(userName === ''){
    greetEl.textContent = greetingsFactory.greet(userName, language);
  }
  else if(language === '' && userName === ''){
    greetEl.textContent = greetingsFactory.greet(userName, language);
  }
  
  if(userName.replace(/\s/g, '').toLowerCase() !== '' && !names.includes(userName.replace(/\s/g, '').toLowerCase()) && checkedVal !== ''){
    if(lettersOnlyRegex.test(userName.replace(/\s/g, '').toLowerCase())){
      greetEl.textContent = greetingsFactory.greet(userName, language);
      count++;
    }
    else{
      greetEl.textContent = 'Error: Enter Letters only for name';
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

