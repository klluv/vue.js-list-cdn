new Vue ({
    el:'#vue-app',
    data: {
        umur: 18,
        x: 0,
        y: 0
    },
    methods: {
        tambah: function(plus) {
            this.umur +=plus;
        },
        kurang: function(min) {
            this.umur -=min;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('clicked');
        }
    }
});
