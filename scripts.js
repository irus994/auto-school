
const buttonClasses = document.querySelector('.addresses__button--classes');
const buttonMotordroms = document.querySelector('.addresses__button--motordrom');
const classesAddresses = document.querySelector('.addresses__list--classes');
const motordromsAddresses = document.querySelector('.addresses__list--motordrom');
const buttons = document.querySelectorAll('.button--request');
const popupFormBlock = document.querySelector('.popup-block');
const popupFormBackground = document.querySelector('.popup-form-background');
const successMessage = document.querySelector('.success-message');
const submitForms = document.querySelectorAll('.form')
const formPopup = popupFormBlock.ownerDocument.querySelector('.form--popup');
const closeMessageButton = successMessage.querySelector('.success-message__close-button');
const answerButtons = document.querySelectorAll('.faq__button');
const addressSlider = document.querySelector('.slider');

// Табы с адресами

const showAddresses = () => {
   if (classesAddresses.getElementsByClassName('visually-hidden')) {
       classesAddresses.classList.remove('visually-hidden');
       motordromsAddresses.classList.add('visually-hidden');
       buttonMotordroms.classList.remove('addresses__button--active')
       buttonClasses.classList.add('addresses__button--active');
   }
};

const showMotordroms = () => {
    if (motordromsAddresses.getElementsByClassName('visually-hidden')) {
        motordromsAddresses.classList.remove('visually-hidden');
        classesAddresses.classList.add('visually-hidden');
        buttonClasses.classList.remove('addresses__button--active');
        buttonMotordroms.classList.add('addresses__button--active');
    }
};

buttonClasses.addEventListener('click', showAddresses);
buttonMotordroms.addEventListener('click', showMotordroms);


//Раскрывающиеся ответы на вопросы

const showAnswerToggle = () => {

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener('click', (evt) => {
            const faqItem = evt.target.closest('.faq__item');
            const answer = faqItem.querySelector('.fag__answer');
            if (!evt.target.classList.contains('faq__button--close')) {
                evt.target.classList.add('faq__button--close');
                answer.classList.remove('visually-hidden');

            } else {
                evt.target.classList.remove('faq__button--close');
                answer.classList.add('visually-hidden');
            }
        })
    }
}

showAnswerToggle()

// Открытие выпадающего списка адресов

const changeAddressButtons = document.querySelectorAll('.change-address__button');
const addressLists = document.querySelectorAll('.change-address__list');

console.log(addressLists)

const showAddressListToddle = () => {
    for (let i = 0; i < changeAddressButtons.length; i++) {
        changeAddressButtons[i].addEventListener('click', () => {
            if (addressLists[i].classList.contains('visually-hidden')) {
                addressLists[i].classList.remove('visually-hidden');
            } else {
                addressLists[i].classList.add('visually-hidden');
            }
        })
    }
};

showAddressListToddle();

// Всплытие окна с формлй, кнопка записаться/оставить заявку

const openPopupForm = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if (!buttons[i].classList.contains('open-form')) {
                buttons[i].classList.add('open-form');
                popupFormBlock.classList.remove('visually-hidden');
            }
        })
    }
};
openPopupForm();

const closePopupBlock = () => {
    popupFormBackground.addEventListener('click', () => {
        popupFormBlock.classList.add('visually-hidden');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                if (buttons[i].classList.contains('open-form')) {
                    buttons[i].classList.remove('open-form');
                }
            })
        }

        if (!successMessage.classList.contains('visually-hidden')) {
            successMessage.classList.add('visually-hidden');
            formPopup.classList.remove('visually-hidden');

        }
        if (!addressSlider.classList.contains('visually-hidden')) {
            addressSlider.classList.add('visually-hidden');
        }
    })
};
closePopupBlock();


// Сообщение об успешной отправке

const openSuccessMessage = () => {
    for (let i = 0; i < submitForms.length; i++) {
        submitForms[i].addEventListener('submit', (evt) => {
            evt.preventDefault()
            successMessage.classList.remove('visually-hidden');
            formPopup.classList.add('visually-hidden');

            if (popupFormBlock.classList.contains('visually-hidden')) {
                popupFormBlock.classList.remove('visually-hidden');
            }
        })
    }
};
openSuccessMessage();

// Закрытие сообщения об отправке, по кнопке

closeMessageButton.addEventListener('click', () => {
    popupFormBlock.classList.add('visually-hidden');
    successMessage.classList.add('visually-hidden');
    formPopup.classList.remove('visually-hidden');
})

// Открытие слайдера с фотогравиями входов

const sliderAddressButtons = document.querySelectorAll('.change-address__button--map');

const openAddressSlider = () => {
    for (let i = 0; i < sliderAddressButtons.length; i++) {
        sliderAddressButtons[i].addEventListener('click', () => {
            console.log(sliderAddressButtons)
            popupFormBlock.classList.remove('visually-hidden');
            addressSlider.classList.remove('visually-hidden');
        })
    }
}

openAddressSlider();

// Карта

var map = L.map('map').setView([60.05102, 30.38248], 150);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaXJ1czk5NCIsImEiOiJjbDMwMmtyN2EwMDFlM2Rza3N5c2U0YWxzIn0.lJX0vQVrKJH6P5fKBoVDpg'
}).addTo(map);

var marker = L.marker([60.05102, 30.38248], {
}).addTo(map);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar

});

