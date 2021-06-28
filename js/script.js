Vue.config.devtools = true;
new Vue (
     {
        el: "#app",
        data:{
            myPhotos: [
                "img/photo 1.jpg",
                "img/photo 2.jpg",
                "img/photo 3.jpg",
                "img/photo 4.jpg",
            ],
            pictureIndex: 0,
        },
        created() {
           setInterval(() => {
               this.next();
           }, 3000);            //indica che app è pronto, qui vedrai il set interval, che altrimenti non vedi 
        },                          //se messo fuori. Non è un methods.
        methods: {
            next: function () {
                if(this.pictureIndex === (this.myPhotos.length - 1)){
                    this.pictureIndex = 0;
                } else {
                    this.pictureIndex++; 
                }
                
            },
            prev: function () {
                if(this.pictureIndex === 0){
                    this.pictureIndex = this.myPhotos.length - 1;
                } else {
                    this.pictureIndex--; 
                }
                
            
            },
            setNewIndex: function(index){
                this.pictureIndex = index;
            },

            exactlyDot: function(index){
                if(index === this.pictureIndex){
                    return 'current';
                } else {
                    return '';
                }
            }
        }
     }
);