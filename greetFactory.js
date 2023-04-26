function greetings(){
    let count = 0;
    let names = [];
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
        getName,
        getLanguage,
        clearCount
    }
}