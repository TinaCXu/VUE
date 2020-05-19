new Vue({
    el:'#app',
    data: {
        title:'check the mouse coords',
        coords: {
            x: 0,
            y: 0
        },
        name: 'Ryan',
        showName: true,
    },
    methods:{
        logEvent(e){
            // this e means event itself
            console.log(e)
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        },
        toggleName(){
            this.showName = !this.showName
        }
        // updateName(e){
        //     this.name = e.target.value
        // }
    }
})