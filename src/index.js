import { load_front_page } from './front_page.js';
import { load_second_page } from './second_page.js';
import { load_third_page } from './third_page.js';
import { load_fourth_page } from './fourth_page.js';



load_front_page();




const addButtons = () => {

    const btn1 = document.createElement('button');
    btn1.textContent = "Home Page"

    const btn2 = document.createElement('button');
    btn2.textContent = "second page"

    const btn3 = document.createElement('button');
    btn3.textContent = "third page"

    const btn4 = document.createElement('button');
    btn4.textContent = "fourth page"


    btn1.onclick = () => {

        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        load_front_page();
        addButtons();
    };

    btn2.onclick = () => {

        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        load_second_page();
        addButtons();
    };
    
    btn3.onclick = () => {
    
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        load_third_page();
        addButtons();
    };
    
    btn4.onclick = () => {
    
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        load_fourth_page();
        addButtons();
    };

    const div = document.querySelector('#content');
    const divBtns = document.createElement('div');
    
    divBtns.appendChild(btn1);
    divBtns.appendChild(btn2);
    divBtns.appendChild(btn3);
    divBtns.appendChild(btn4);

    div.appendChild(divBtns);
}

addButtons();