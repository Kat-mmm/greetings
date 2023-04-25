function greetings(){
    let count = parseInt(localStorage.getItem('greetCount')) || 0;
    let names = JSON.parse(localStorage.getItem('names')) || [];
    let theName = '';

    function getName(name){
        theName = name;
        return theName;
    }

    function getCount(){
        return count;
    }

    function getNames(){
        return names;
    }

    function setCount(){
        localStorage.setItem('greetCount', count.toString());
    }

    function setNames(){
        localStorage.setItem('greetNames', JSON.stringify(names));
    }

    function greet(name){
        return `Hello, ${name}`;
    }

    function greetInAfrikaans(name){
        return `Hallo, ${name}`;
    }

    function greetInIsiZulu(name){
        return `Sawubona, ${name}`;
    }

    function addCount(){
        if(getName(theName).trim() !== '' && !greetingsFactory.getNames().includes(getName(theName)) && checkedVal !== ''){
            count++;
        }
    }

    function addName(name){
        if(getName(theName).trim() !== '' && !greetingsFactory.getNames().includes(getName(theName)) && checkedVal !== ''){
            names.push(getName(name));
        }
    }

    return{
        greet,
        greetInAfrikaans,
        greetInIsiZulu,
        getCount,
        getNames,
        addCount,
        addName,
        setCount,
        setNames,
        getName
    }
}