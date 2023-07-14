let one = new Vue ({
    el:'#vue-app-one',
    data: {
        title: 'vue app pertama'
    },
    methods: {
        gantiJudul: function() {
            two.title = 'vue kedua berubah'
        }
    },
    computed: {
        salam: function() {
            return  'hai semuanya ini salam dari vue pertama'
        }
    }
})

let two = new Vue ({
    el:'#vue-app-two',
    data: {
        title:'vue app kedua'
    },
    methods: {
        
    },
    computed: {
        salam: function() {
            return 'hallo semua ini salam dari vue kedua'
        }
    }
})

