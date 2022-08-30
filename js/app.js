
let contatti = [
    {
    name: 'Sara',
    avatar: './img/myAvatar-2.png',
    messages: [
    {
    date: '15:30',
    message: 'Ciao,hai portato a spasso il cane?',
    status: 'sent'
    },
    {
    date: '15:50',
    message: 'ah,dopo ricordati anche di stendere i panni 😅',
    status: 'sent'
    },
    {
    date: '16:15',
    message: 'Ook,appena torno a casa lo farò! 😎',
    status: 'received'
    },
    {
    date: '15:50',
    message: 'Tu dove sei adesso?',
    status: 'sent'
    },
    {
    date: '16:15',
    message: 'Sono in città',
    status: 'received'
    },
    {
    date: '15:50',
    message: 'ok fammi sapere a che ora torni',
    status: 'sent'
    },
    {
    date: '16:15',
    message: 'tra 30 min circa',
    status: 'received'
    },
    {
    date: '16:15',
    message: 'Prima ho incontrato anche Marco, mi ha detto che ti saluta 😁',
    status: 'received'
    },
    {
    date: '16:15',
    message: 'è da tanto che non lo vedo, magari gli scrivo la prossima volta 😁',
    status: 'sent'
    },
    ],
    },

    {
    name: 'Fabio',
    avatar: './img/—Pngtree—user vector avatar_4830521.png',
    id: 1,
    messages: [
    {
    date: '16:10',
    message: 'Ciao come stai Fabio?',
    status: 'sent'
    },
    {
    date: '16:11',
    message: 'Bene grazie! Magari stasera possiamo vederci per un aperitivo, cosa dici??',
    status: 'received'
    },
    {
    date: '16:23',
    message: 'Mi piacerebbe ma questa sera proprio non posso, magari sabato sera..',
    status: 'sent'
    }
    ],
    },
    {
    name: 'Marco',
    avatar: './img/avatar_5.jpg',
    messages: [
    {
    date: '16:10',
    message: 'Ehi allora come è stato?',
    status: 'sent'
    },
    {
    date: '16:20',
    message: 'Bene, dai pensavo fossero più complicate le domande però tutto bene!',
    status: 'received'
    },
    {
    date: '16:35',
    message: 'Ottimo, meglio così allora!',
    status: 'sent'
    }
    ],
    },
    {
    name: 'Paolo',
    avatar: './img/avatar_8.jpg',
    messages: [
    {
    date: '16:29',
    message: 'Ehi allora come è stato?',
    status: 'sent'
    },
    {
    date: '16:30',
    message: 'Bene, dai pensavo fossero più complicate le domande però tutto bene!',
    status: 'received'
    },
    {
    date: '16:36',
    message: 'Ottimo, meglio così allora!',
    status: 'sent'
    }
    ],
    },

]
   
const app = new Vue ({
    el: '#root',
    data: {
        contatti,
        active: 0,
        newMessage: '',
        search: '',
        timestamp: '',
    },
    computed:{
        getMessages: function(){
            return this.contatti[this.active].messages
        },
        filteredList() {
            return this.contatti.filter(el => {
              return el.name.toLowerCase().includes(this.search.toLowerCase())
            })
          },
    },
    methods: {
        getLastMessage(contact) {
            return contact.messages[contact.messages.length -1]
        },
        selectContact(index){
            this.active = index; 
        },
        addNewMessage(){
            if (this.newMessage != this.newMessage.length<0) {
            this.getMessages.push({
            date: this.currentDate(),
            message: this.newMessage,
            status: 'sent',
            })
            this.newMessage = ''
            this.AutomaticAnswer()      
            }
        },
        AutomaticAnswer(){
            setTimeout(() => {
                this.getMessages.push({
                    date: this.currentDate(),
                    message: 'ok',
                    status: 'received'
                        })
             }, 1000);
        }, 
        currentDate() {
            const current = new Date();
            const date = `${current.getHours()}:${current.getMinutes()}`;
            return date
        },
        autoScrolling() {
        const autoScroll = document.querySelector('.box-chat')
        autoScroll.scrollTo(0,autoScroll.scrollHeight);
        
        },
    },  
    mounted() {
        this.autoScrolling()
    },
    
})

