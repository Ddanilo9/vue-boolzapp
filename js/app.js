
let contatti = [
    {
    name: 'Sara',
    avatar: './img/myAvatar-2.png',
    visible: true,
    id: 0,
    classe: false,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Ciao,hai portato a spasso il cane?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'ah,dopo ricordati anche di stendere i panni',
    status: 'sent'
    },
    {
    date: '10/01/2020 16:15:22',
    message: 'Ook,appena torno a casa lo farò!',
    status: 'received'
    }
    ],
    },

    {
    name: 'Fabio',
    avatar: './img/—Pngtree—user vector avatar_4830521.png',
    visible: true,
    id: 1,
    classe: false,
    messages: [
    {
    date: '20/03/2020 16:30:00',
    message: 'Ciao come stai Fabio?',
    status: 'sent'
    },
    {
    date: '20/03/2020 16:30:55',
    message: 'Bene grazie! Magari stasera possiamo vederci per un aperitivo, cosa dici??',
    status: 'received'
    },
    {
    date: '20/03/2020 16:35:00',
    message: 'Mi piacerebbe ma questa sera proprio non posso, magari sabato sera..',
    status: 'sent'
    }
    ],
    },
    {
    name: 'Marco',
    avatar: './img/avatar_5.jpg',
    visible: true,
    id: 2,
    messages: [
    {
    date: '20/03/2020 16:30:00',
    message: 'Ehi allora come è stato?',
    status: 'sent'
    },
    {
    date: '20/03/2020 16:30:55',
    message: 'Bene, dai pensavo fossero più complicate le domande però tutto bene!',
    status: 'received'
    },
    {
    date: '20/03/2020 16:35:00',
    message: 'Ottimo, meglio così allora!',
    status: 'sent'
    }
    ],
    },

]
   
// console.log(contatti[0].messages[0])
const app = new Vue ({
    el: '#root',
    data: {
        contatti,
        active: 0,
        newMessage: '',
        search: ''
    },
    computed:{
        getMessages: function(){
            return this.contatti[this.active].messages
        },
        filteredList() {
            return this.contatti.filter(el => {
              return el.name.toLowerCase().includes(this.search.toLowerCase())
            })
          }
    },
    methods: {
        selectContact(index){
            this.active = index; 
            this.contatti[this.active].classe = true
        },
        addNewMessage(){
            if (this.newMessage != this.newMessage.length<0)
            this.getMessages.push({
            date: '10/01/2020 15:30:55',
            message: this.newMessage,
            status: 'sent'
                })
            this.newMessage = ''
            this.AutomaticAnswer()          
           },
        AutomaticAnswer(){
            setTimeout(() => {
                this.getMessages.push({
                    date: '10/01/2020 15:30:56',
                    message: 'ok',
                    status: 'received'
                        })
             }, 1000);
        }    
    },
})