Vue.config.devtools = true;
new Vue (
     {
        el: "#app",
        data:{
            photos: [
                "img/photo 1.jpg",
                "img/photo 2.jpg",
                "img/photo 3.jpg",
                "img/photo 4.jpg",
            ],
            pictureIndex: 0,
        },
        methods: {
            next: function () {
                if(this.pictureIndex === (this.photos.length - 1)){
                    this.pictureIndex = 0;
                } else {
                    this.pictureIndex++; 
                }
                
            },
            prev: function () {
                if(this.pictureIndex === 0){
                    this.pictureIndex = this.photos.length - 1;
                } else {
                    this.pictureIndex--; 
                }
            
            }
        }
     }
)