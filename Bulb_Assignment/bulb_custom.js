
  new Vue({
    el: "#bulb",

    data(){
      return{
        title: "Code the light Bulb",
        imageoff: "/Images/bulbOff",
        imageOn:"/Images/bulbOn",
      }},

      methods: {
        toggle: function(){
          this.signal = !this.signal;
        }
      }
  })
