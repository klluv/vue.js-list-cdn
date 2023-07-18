new Vue({
    el: '#vue-app',
    data: {
        output:'dog'
    },
    methods: {
        readRef: function(){
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
});

