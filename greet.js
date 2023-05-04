let nameEl = document.querySelector('.name');
const greetBtn = document.querySelector('.greet-btn');
const resetBtn = document.querySelector('.reset-btn');
let greetEl = document.querySelector('.greet-text');
const langRadioBtns = document.querySelectorAll('.lang-radio');
let greetCountEl = document.querySelector('.greet-count');
let errorEl = document.querySelector('.errors');

let checkedVal = '';
langRadioBtns.forEach((item) => {
    item.addEventListener('change', () =>{
        checkedVal = item.value;
    });
});

const greetingsFactory = new Greetings();

let count = parseInt(localStorage.getItem('greetCount')) || 0;
let names = JSON.parse(localStorage.getItem('names')) || greetingsFactory.getNames();

greetCountEl.innerHTML = count;

function greetingsFunc(){
  let userName = greetingsFactory.getName(nameEl.value);
  let language = greetingsFactory.getLanguage(checkedVal);

  const lettersOnlyRegex = /^[A-Za-z]+$/;
  if(language === ''){
    errorEl.textContent = greetingsFactory.greet(userName, '');
    errorEl.classList.add('error');
    setTimeout(()=>{
      errorEl.textContent = '';
    }, 2000)
    
  }
  else if(userName === ''){
    errorEl.textContent = greetingsFactory.greet('', language);
    errorEl.classList.add('error');
    setTimeout(()=>{
      errorEl.textContent = '';
    }, 2000)
  }
  else if(language === '' && userName === ''){
    errorEl.textContent = greetingsFactory.greet('', '');
    errorEl.classList.add('error');
    setTimeout(function(){
      errorEl.textContent = '';
    }, 2000)
  }
  else{
    errorEl.textContent = '';
  }
  
  if(userName.replace(/\s/g, '').toLowerCase() !== '' && !names.includes(userName.replace(/\s/g, '').toLowerCase()) && checkedVal !== ''){
    if(lettersOnlyRegex.test(userName.replace(/\s/g, '').toLowerCase())){
      greetEl.textContent = greetingsFactory.greet(userName, language);
      setTimeout(()=>{
        greetEl.textContent = '';
      }, 2500)
      count++;
    }
    else{
      errorEl.textContent = 'Enter Letters only for name';
      errorEl.classList.add('error');
    }
    greetCountEl.innerHTML = count;

    localStorage.setItem('greetCount', count.toString());
    localStorage.setItem('greetNames', JSON.stringify(names));
  }
  
  nameEl.value = '';
}

greetBtn.addEventListener('click', greetingsFunc);

function clearAll(){
  greetCountEl.textContent = 0;
  if(count > 0 || names.length > 0 ){
    localStorage.clear();
    greetEl.textContent = 'Reset Successfull';
    greetEl.classList.add('success');
    setTimeout(()=>{
      location.reload();
    }, 1000)
  }
  
}

resetBtn.addEventListener('click', clearAll);

