const chatWidgetSide = document.querySelector('.chat-widget__side');

const chatWidget = document.querySelector('.chat-widget');

const chatWidgetInput = document.getElementById('chat-widget__input');

const messages = document.querySelector( '.chat-widget__messages' );




chatWidgetSide.addEventListener('click', function() {

	chatWidget.classList.add('chat-widget_active');

});



chatWidget.addEventListener('keydown', function(event) {

	const time = new Date().getHours() + ":" + new Date().getMinutes();
	const message = chatWidgetInput.value;

	// здесь добавила в html разметку minlength="1" 

	if (event.key === "Enter" && chatWidgetInput.checkValidity()) {		

		messages.innerHTML += 

			`<div class="message message_client">

				<div class="message__time"> ${time} </div>

				<div class="message__text">

				  ${message}

				</div>

			</div>

			<div class="message">

				<div class="message__time"> ${time} </div>

				<div class="message__text">

				${getRandomBotAnswer()}

				</div>

			</div>`;

		chatWidgetInput.value = "";

	}

});



const botAnsweres = [

  'У вас есть еще вопросы?',

  'Вся информация есть на нашем сайте.',

  'Все операторы заняты, напишите послезавтра.',

  'Вы обратились не по адресу!',

  'Для начала подтвердите Вашу платежеспособность.'

];


function getRandomBotAnswer() {
    return botAnsweres[Math.floor(Math.random() * botAnsweres.length)];

};

