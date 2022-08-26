
let contatti = [
    {
    name: 'Sara',
    avatar: './img/myAvatar-2.png',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    message: 'Hai portato a spasso il cane?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    message: 'Ricordati di stendere i panni',
    status: 'sent'
    },
    {
    date: '10/01/2020 16:15:22',
    message: 'Tutto fatto!',
    status: 'received'
    }
    ],
    },

    {
    name: 'Fabio',
    avatar: './img/—Pngtree—user vector avatar_4830521.png',
    visible: true,
    messages: [
    {
    date: '20/03/2020 16:30:00',
    message: 'Ciao come stai?',
    status: 'sent'
    },
    {
    date: '20/03/2020 16:30:55',
    message: 'Bene grazie! Stasera ci vediamo?',
    status: 'received'
    },
    {
    date: '20/03/2020 16:35:00',
    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
    status: 'sent'
    }
    ],
    },
    {
    name: 'Marco',
    avatar: './img/avatar_5.jpg',
    visible: true,
    messages: [
    {
    date: '20/03/2020 16:30:00',
    message: 'Ciao come stai?',
    status: 'sent'
    },
    {
    date: '20/03/2020 16:30:55',
    message: 'Bene grazie! Stasera ci vediamo?',
    status: 'received'
    },
    {
    date: '20/03/2020 16:35:00',
    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
    status: 'sent'
    }
    ],
    },

]
   

const app = new Vue ({
    el: '#root',
    data: {
        contatti,
    },
    computed:{
        
    },
    methods: {
    
    },
})