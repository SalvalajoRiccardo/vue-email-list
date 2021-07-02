var app = new Vue({
    el: '#app',
    data: {
        emailz: []
    },

    beforeCreate() {
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(email=>{
                this.emailz.push(email.data.response);
                console.log(this.emailz);
            })
          }
    }
  })