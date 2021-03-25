var root = new Vue ({
    el: "#root",

    data: {
        imgPath: "img/avatar",
        formatJpg: ".jpg",
        user: {
            name: "Angelo Lama",
            avatar: "_io"
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        newMessage:"",
        counter: 0,
        keyword:"",
        activePopup: "",  
        
    },

    methods: {
        formatted_date() {
            function addZero(i) {
                if (i < 10) {
                  i = "0" + i;
                }
                return i;
            };

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            var h = addZero(today.getHours());
            var m = addZero(today.getMinutes());
            var s = addZero(today.getSeconds());

            today = dd + '/' + mm + '/' + yyyy + " " + h + ":" + m + ":" + s;
            return today;
        },
        
        sendMessage() {

            this.contacts[this.counter].messages.push({date: this.formatted_date(), text: this.newMessage, status: "sent"});
            this.newMessage="";
            
            setTimeout(()=>{ 
                this.contacts[this.counter].messages.push({date: this.formatted_date(), text: "Ok", status: "received"}); 
            }, 1000);
        },

        clickPopup(index) {
            console.log(index);
             
            if (this.activePopup == "active") {
                this.activePopup = "";
            } else {
                this.activePopup = "active";
            }     
        },

        deleteMessage(index) {
            this.contacts[this.counter].messages.splice(index, 1);
            this.activePopup = "";
        },

    },


});