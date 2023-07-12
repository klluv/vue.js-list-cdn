new Vue ({
    el:'#vue-app',
    data: {
        nama: 'kaka',
        jurusan: 'sija',
        situs: 'https://www.youtube.com',
        situsTag: '<a href="www.google.com">situs google</a>'
    },
    methods: {
        title: function(lokasi){
            return 'ainosi ' + lokasi +' ' + this.nama;
        }
    }
});