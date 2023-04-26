function greetings(){
    let count = parseInt(localStorage.getItem('greetCount')) || 0;
    let names = JSON.parse(localStorage.getItem('names')) || [];
    let theName = '';
    let theLanguage = '';

    function getName(name){
        theName = name;
        return theName;
    }

    function getLanguage(language){
        theLanguage = language;
        return theLanguage;
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

    function greet(name, language){
        language = theLanguage;

        if(name !== '' && !getNames().includes(name) && language !== ''){
            addCount();
            addName(name)
        }
        
       if(name !== ''){
            if(language === 'English'){
                return `Hello, ${name}`;
            }
            else if(language === 'Afrikaans'){
                return `Hallo, ${name}`;
            }
            else if(language === 'isiZulu'){
                return `Sawubona, ${name}`;
            }
       }
    }

    function addCount(){
        count++;
    }

    function addName(name){
        names.push(getName(name));
    }

    function clearCount(){
        count = 0;
        localStorage.clear();
    }

    return{
        greet,
        getCount,
        getNames,
        addCount,
        addName,
        setCount,
        setNames,
        getName,
        getLanguage,
        clearCount
    }
}