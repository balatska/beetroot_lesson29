// Создать HTML-страницу с кнопкой "Открыть" и модальным окном. 
// На модальном окне должен быть текст и кнопка "Закрыть". 
// Изначально модальное окно не отображается. 
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. 

let open = document.getElementById(`open`);
let modal = document.getElementById(`modal`);
let close = document.getElementById(`close`);

open.onclick = function() {
    open.style.display = "none";
    modal.style.display = "block";
};

close.onclick = function() {
    modal.style.display = "none";
    open.style.display = "block";
};
