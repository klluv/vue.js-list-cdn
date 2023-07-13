new Vue ({
    el:'#vue-app',
    data: {
        age: 10,
        a: 0,
        b: 0
    },
    //dengan method, console log akan berjalan semuanya (dua button akan run)
    methods: {
       /*ageMinA: function() {
        console.log('ageMinA');
        return this.age - this.a;  
       },
       ageMinB: function() {
        console.log(ageMinB);
        return this.age - this.b;
       }*/
    },

    //dengan computed, console log hanya akan berjalan satu button. Maka, csistem akan berjalan lebih efektif
    computed: {
        ageMinA: function() {
            console.log('ageMinA');
            return this.age - this.a;  
           },
           ageMinB: function() {
            console.log('ageMinB');
            return this.age - this.b;
           }
    }
});
