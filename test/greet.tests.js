describe('Greetings Tests', () => {
    describe('Should be able to greet a user', () => {
        it('Should return a greeting when a user inserts a name', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('English');

            assert.equal('Hello, Naledi', greeting.greet('Naledi', language));
            assert.equal('Hello, Daniel', greeting.greet('Daniel', language));
        })

        it('When a user does not insert a name there should be no greeting', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('English');

            assert.equal(undefined, greeting.greet('', language));
        })
    })
    describe('Should be able to greet a user in different Languages', () => {
        it('Should return a greeting in Afrikaans when a user inserts a name', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('Afrikaans');

            assert.equal('Hallo, Katlego', greeting.greet('Katlego', language));
        })
        it('Should return a greeting in isiZulu when a user inserts a name', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('isiZulu');

            assert.equal('Sawubona, Percy', greeting.greet('Percy', language));
        })
        it('Should return a greeting in English when a user inserts a name', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('English');

            assert.equal('Hello, Scott', greeting.greet('Scott', language));
        })
    })

    describe('Should be able to keep a count of the number of people greeted', () => {
        it('When you greet user the count should increase', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('English');
            greeting.greet('Naledi', language);
            greeting.greet('Daniel', language);

            assert.equal(2, greeting.getCount());
        })
        it('When you greet 3 users the count should be 3', () => {
            const greeting = new greetings();
            const language = greeting.getLanguage('English');

            greeting.greet('Naledi', language);
            greeting.greet('Daniel', language);
            greeting.greet('Cole', language);
            

            assert.equal(3, greeting.getCount());
        })
    })

    describe('Should be able to check if the user has been greeted before increasing the count', () => {
        it('When you greet the same user 2 times, the count should be 1', () => {
            const greeting = new greetings();

            const language = greeting.getLanguage('English');

            greeting.greet('Naledi', language);
            greeting.greet('Naledi', language);

            assert.equal(1, greeting.getCount());
        })
        it('When you greet the same user again the counter should not increase', () => {
            const greeting = new greetings();

            const language = greeting.getLanguage('English');

            greeting.greet('Daniel', language);
            greeting.greet('Daniel', language);
            greeting.greet('Cole', language);
            

            assert.equal(2, greeting.getCount());
        })
    })

    describe('Should clear the greeting count when a user chooses to reset', ()=>{
        it('When a user resets after people are greeted the count should be 0', () => {
            const greeting = new greetings();

            const language = greeting.getLanguage('English');

            greeting.greet('Daniel', language);
            greeting.greet('Perry', language);
            greeting.greet('Cole', language);
            greeting.clearCount();
            

            assert.equal(0, greeting.getCount());
        })
    })
  
})