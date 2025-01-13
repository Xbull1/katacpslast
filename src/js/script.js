// document.addEventListener('DOMContentLoaded', () => {
//     const burgerButton = document.querySelector('.burger-button');
//     const burgerMenu = document.querySelector('.burger-menu');
//     const app = document.querySelector('.app');
//     const telephoneButtons = document.querySelectorAll('.telephone-button');
//     const messagesButtons = document.querySelectorAll('.messages-button'); // Получаем все кнопки .messages-button
//     const modalCall = document.querySelector('.modal-call');
//     const modalExitButton = document.querySelector('.modal-call__exit-button');
//     const modalFeedback = document.querySelector('.modal-feedback'); // Получаем modal-feedback
//     const modalFeedbackExitButton = document.querySelector('.modal-feedback__exit-button'); // Кнопка выхода из modal-feedback
//     const modalBox = document.querySelector('.modal-box'); // Получаем modal-box
//
//     // Обработчик для кнопки бургера
//     burgerButton.addEventListener('click', () => {
//         burgerMenu.classList.toggle('active');
//
//         const elementsToBlur = document.querySelectorAll('.app > *:not(.left-side,.modal-box)');
//
//         if (burgerMenu.classList.contains('active')) {
//             elementsToBlur.forEach(element => {
//                 element.classList.add('blur');
//             });
//         } else {
//             elementsToBlur.forEach(element => {
//                 element.classList.remove('blur');
//             });
//         }
//     });
//
//     // Обработчик для кнопки выхода из бургера
//     const exitButton = document.querySelector('.burger-menu__exit-button');
//     exitButton.addEventListener('click', () => {
//         burgerMenu.classList.remove('active');
//         const elementsToBlur = document.querySelectorAll('.app > *:not(.left-side)');
//         elementsToBlur.forEach(element => {
//             element.classList.remove('blur');
//         });
//     });
//
//     // Обработчик для всех кнопок telephone-button
//     telephoneButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             burgerMenu.classList.remove('active'); // Закрываем burger-menu
//             const elementsToBlur = document.querySelectorAll('.app > *:not(.modal-box)'); // Все элементы, кроме left-side
//             elementsToBlur.forEach(element => {
//                 element.classList.remove('blur'); // Убираем blur перед открытием modal-call
//             });
//             modalCall.classList.add('active'); // Открываем modal-call
//             elementsToBlur.forEach(element => {
//                 element.classList.add('blur'); // Добавляем blur к элементам, кроме modal-call и modal-box
//             });
//         });
//     });
//
//     // Обработчик для всех кнопок messages-button
//     messagesButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             burgerMenu.classList.remove('active'); // Закрываем burger-menu
//             const elementsToBlur = document.querySelectorAll('.app > *:not(.modal-box)'); // Все элементы, кроме left-side
//             elementsToBlur.forEach(element => {
//                 element.classList.remove('blur'); // Убираем blur перед открытием modal-feedback
//             });
//             modalFeedback.classList.add('active'); // Открываем modal-feedback
//             elementsToBlur.forEach(element => {
//                 element.classList.add('blur'); // Добавляем blur к элементам, кроме modal-feedback и modal-box
//             });
//         });
//     });
//
//     // Обработчик для кнопки выхода из modal-call
//     modalExitButton.addEventListener('click', () => {
//         modalCall.classList.remove('active'); // Закрываем modal-call
//         const elementsToBlur = document.querySelectorAll('.app > *:not(.modal-box)');
//         elementsToBlur.forEach(element => {
//             element.classList.remove('blur'); // Убираем blur при закрытии modal-call
//         });
//     });
//
//     // Обработчик для кнопки выхода из modal-feedback
//     modalFeedbackExitButton.addEventListener('click', () => {
//         modalFeedback.classList.remove('active'); // Закрываем modal-feedback
//         const elementsToBlur = document.querySelectorAll('.app > *:not(.modal-box)');
//         elementsToBlur.forEach(element => {
//             element.classList.remove('blur'); // Убираем blur при закрытии modal-feedback
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('.app'); // Получаем элемент .app
    const burgerButton = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.burger-menu');
    const telephoneButtons = document.querySelectorAll('.telephone-button');
    const messagesButtons = document.querySelectorAll('.messages-button');
    const modalCall = document.querySelector('.modal-call');
    const modalExitButton = document.querySelector('.modal-call__exit-button');
    const modalFeedback = document.querySelector('.modal-feedback');
    const modalFeedbackExitButton = document.querySelector('.modal-feedback__exit-button');

    // Функция для открытия модального окна и оверлея
    function openModal(modal) {
        app.classList.add('active'); // Добавляем класс active к .app
        modal.classList.add('active'); // Открываем модальное окно
        const elementsToBlur = document.querySelectorAll('.app > *:not(.modal-box)');
        elementsToBlur.forEach(element => {
            element.classList.add('blur'); // Добавляем blur к элементам
        });
    }

    // Функция для закрытия модального окна и оверлея
    function closeModal(modal) {
        app.classList.remove('active'); // Убираем класс active у .app
        modal.classList.remove('active'); // Закрываем модальное окно
        const elementsToBlur = document.querySelectorAll('.app > *:not(.modal-box)');
        elementsToBlur.forEach(element => {
            element.classList.remove('blur'); // Убираем blur при закрытии
        });
    }

    // Обработчик для кнопки бургера
    burgerButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        const elementsToBlur = document.querySelectorAll('.app > *:not(.left-side,.modal-box)');
        if (burgerMenu.classList.contains('active')) {
            elementsToBlur.forEach(element => {
                element.classList.add('blur');
            });
        } else {
            elementsToBlur.forEach(element => {
                element.classList.remove('blur');
            });
        }
    });

    // Обработчик для кнопки выхода из бургера
    const exitButton = document.querySelector('.burger-menu__exit-button');
    exitButton.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        const elementsToBlur = document.querySelectorAll('.app > *:not(.left-side)');
        elementsToBlur.forEach(element => {
            element.classList.remove('blur');
        });
    });

    // Обработчик для всех кнопок telephone-button
    telephoneButtons.forEach(button => {
        button.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            openModal(modalCall); // Открываем modal-call
        });
    });

    // Обработчик для всех кнопок messages-button
    messagesButtons.forEach(button => {
        button.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            openModal(modalFeedback); // Открываем modal-feedback
        });
    });

    // Обработчик для кнопки выхода из modal-call
    modalExitButton.addEventListener('click', () => {
        closeModal(modalCall); // Закрываем modal-call
    });

    // Обработчик для кнопки выхода из modal-feedback
    modalFeedbackExitButton.addEventListener('click', () => {
        closeModal(modalFeedback); // Закрываем modal-feedback
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.brand-menu__toggle');
    const brandMenuBody = document.querySelector('.brand-menu__body');

    let isExpanded = false;

    toggleButton.addEventListener('click', function () {
        isExpanded = !isExpanded;

        if (isExpanded) {
            brandMenuBody.style.height = 'auto';
            toggleButton.querySelector('.toggle-text').textContent = 'Скрыть';
            toggleButton.classList.add('expanded');
        } else {
            brandMenuBody.style.height = '';
            toggleButton.querySelector('.toggle-text').textContent = 'Показать все';
            toggleButton.classList.remove('expanded');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.repair-menu__toggle');
    const repairMenuBody = document.querySelector('.repair-menu__body');

    let isExpanded = false;

    toggleButton.addEventListener('click', function () {
        isExpanded = !isExpanded;

        if (isExpanded) {
            repairMenuBody.style.height = 'auto';
            toggleButton.querySelector('.toggle-text').textContent = 'Скрыть';
            toggleButton.classList.add('expanded');
        } else {
            repairMenuBody.style.height = '';
            toggleButton.querySelector('.toggle-text').textContent = 'Показать все';
            toggleButton.classList.remove('expanded');
        }
    });
});
