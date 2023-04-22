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

let names = JSON.parse(localStorage.getItem('names')) || [];
let count = parseInt(localStorage.getItem('greetCount')) || 0;
greetCountEl.innerHTML = count;

greetBtn.addEventListener('click', () => {
  // greetEl.textContent = `Hello, ${nameEl.value}`;
  // nameEl.value = '';
  if(checkedVal === ''){
    alert("Please select a language");
  }
  
  if(nameEl.value.trim() !== '' && !names.includes(nameEl.value.trim()) && checkedVal !== ''){
    count++;
    greetCountEl.innerHTML = count;
    names.push(nameEl.value);

    localStorage.setItem('greetCount', count.toString());
    localStorage.setItem('greetNames', JSON.stringify(names));
  }
  
  if(checkedVal === 'English' && nameEl.value !== ''){
    greetEl.textContent = `Hello, ${nameEl.value}`;
  }
  else if(checkedVal === 'Afrikaans' && nameEl.value !== ''){
    greetEl.textContent = `Hallo, ${nameEl.value}`;
  }
  else if(checkedVal === 'isiZulu' && nameEl.value !== ''){
    greetEl.textContent = `Sawubona, ${nameEl.value}`;
  }

  nameEl.value = '';
});

resetBtn.addEventListener('click', ()=>{
  localStorage.clear();
  location.reload();
});

