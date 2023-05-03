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

        if(name.replace(/\s/g, '').toLowerCase() !== '' && !getNames().includes(name.replace(/\s/g, '').toLowerCase()) && language !== ''){
            addCount();
            addName(name.replace(/\s/g, '').toLowerCase())

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
        else if(name === '' && language === ''){
            return 'Error: Enter a eunique name and language';
        }
        else if(language === ''){
            return 'Error: No language selected'
        }
        else if(name.replace(/\s/g, '').toLowerCase() === ''){
            return 'Error: No name detected'
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