new Vue ({
    el:'#vue-app',
    data: {
        nama: '',
        umur:''
    },
    methods: {
       logName: function () {
        console.log('nama terisi');
       },
       logAge: function () {
        console.log('umur terisi');
    }
    }
});
