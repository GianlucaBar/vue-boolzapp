var app = new Vue(
    {
        el: '#root',

        data: {
            darkMode: false,
            currentIndex: 0,
            userFilter: '',
            newReply: '',
            chevronVisible: false,
			contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            dropDown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            dropDown: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            dropDown: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            dropDown: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            dropDown: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            dropDown: false
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
                            status: 'received',
                            dropDown: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            dropDown: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            dropDown: false
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            dropDown: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            dropDown: false
                        }
                    ],
                },
            ]
        },

        methods: {
            getAvatar(contact) {
                return 'img/avatar' + contact.avatar + '.jpg';
            },

            getMessageStatus(message){
                return 'message-' + message.status
                
            },

            getCurrentContact(index){
                this.currentIndex = index;
            },

            filterContacts(){
				this.contacts.forEach(contact => {
					if(contact.name.toLowerCase().includes(this.userFilter.toLowerCase())){
						contact.visible = true;
					} else{
						contact.visible = false;
					}
				});
			},

            addNewReply(){
                if (this.newReply.length > 0 ){
					this.contacts[this.currentIndex].messages.push(
                        {
                            date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                            text: this.newReply,
                            status: 'sent',
                            dropDown: false,
                            chevron: false
                        }
                    );

					this.newReply = '';

                    setTimeout(this.autoReply, 1000);
			    }
                
			},


            autoReply(){
                this.contacts[this.currentIndex].messages.push(
                    {
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: 'ok',
                        status: 'received',
                        dropDown: false,
                        chevron: false
                    }
                );
            },

            toggleDropdown(message){
                message.dropDown = !message.dropDown;
                
            },

            deleteMessage(index){

                this.contacts[this.currentIndex].messages.splice(index, 1);
        
            },

            getLastMsg(contact){
                if (contact.messages.length > 0){
                    let lastMsgIndex = contact.messages.length - 1;
                    let lastMsg = contact.messages[lastMsgIndex].text;
                    let trimmedMsg = lastMsg.substring(0, 30);

                    if(trimmedMsg.length > 29){
                        return (trimmedMsg + '...');
                    } else {
                        return trimmedMsg;
                    }
                } else {
                    return 'nessun messaggio';
                }
                
        
            },

            getLastDate(contact){

                if (contact.messages.length > 0){
                    let lastMsgIndex = contact.messages.length - 1;
                    let lastDate = contact.messages[lastMsgIndex].date;
    
                    return lastDate
                } else {
                    return '';
                }
            },

            toggleDarkMode(){
                this.darkMode = !this.darkMode;
            }
		}

    });

