describe('Greetings Tests', () => {
    describe('Should be able to greet a user', () => {
        it('Should return a greeting when a user inserts a name', () => {
            let greeting = new greetings();

            assert.equal('Hello, Naledi', greeting.greet('Naledi'));
            assert.equal('Hello, Daniel', greeting.greet('Daniel'));
        })
    })
    describe('Should be able to greet a user in different Languages', () => {
        it('Should return a greeting in Afrikaans when a user inserts a name', () => {
            let greeting = new greetings();

            assert.equal('Hallo, Katlego', greeting.greetInAfrikaans('Katlego'));
        })
        it('Should return a greeting in isiZulu when a user inserts a name', () => {
            let greeting = new greetings();

            assert.equal('Sawubona, Percy', greeting.greetInIsiZulu('Percy'));
        })
        it('Should return a greeting in English when a user inserts a name', () => {
            let greeting = new greetings();

            assert.equal('Hello, Scott', greeting.greet('Scott'));
        })
    })
  
})