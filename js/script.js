Vue.config.devtools = true;
new Vue (
     {
        el: "#app",
        data:{
            myPhotos: [
                {foto:"img/photo1.jpg", oscar: "Miglior film e miglior regista, Milos Forman."},
                {foto:"img/photo2.jpg", oscar: "Migliore attore protagonista, Jack Nicholson."},
                {foto:"img/photo3.jpg", oscar: "Migliore attrice protagonista, Louise Fletcher."},
                {foto:"img/photo4.jpg", oscar: "Migliore sceneggiatura non originale."},
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