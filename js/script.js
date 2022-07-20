const root = new Vue({
    el: `#root`,
    data: {
        emails: [],
        numberEmail: 10,
    },
    methods: {

        createdEmail() {
            for (let i = 0; i < this.numberEmail; i++)
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {
                        console.log(res.data.response)
                        this.emails.push(res.data.response)
                    })
            console.log(this.emails)
        }
    }
})