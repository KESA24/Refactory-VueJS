
  new Vue({
    el: "#bulb",

    data(){
      return{
        title: "Code the light Bulb",
        imageoff: "\Images\light-bulb-off.jpg",
        imageOn:"\Images\light-bulb-on-off.jpg",
      }},

      methods: {
        toggle: function(){
          this.signal = !this.signal;
        }
      }
  })
