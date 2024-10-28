new Vue({
    el: '#app',
    data: {
        pet: 'Cat',
        number1: 6,
        number2: 7,
        sentence1: 'Be or not to be in uppercase that is the question.',
        sentence2: 'txet siht daer nac I',
        sentence3: 'I am not in lowercase and certainly not reversed',
    },
    methods: {
        dividedBy2 (number) {
            return number / 2;
        },
        pow3 (number) {
            return Math.pow(number, 3);
        }
    },
    filters: {
        capitalize (string) {
            return string.toUpperCase();
        },
        reverse (string) {
            return string.split('').reverse().join('');
        }
    },
})
