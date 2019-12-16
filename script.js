document.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');
    const btnExit = document.getElementById('btn-exit');
    const blockCustomer = document.querySelector('#block-customer');
    const blockFreelancer = document.querySelector('#block-freelancer');
    const blockChoice = document.querySelector('#block-choice');
    const formCustomer = document.getElementById('form-customer');

    // массив для записи заказов от заказчика
    const orders = [];

    customer.addEventListener('click', () => {
        // console.dir(blockCustomer);
        blockChoice.style.display = 'none';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';
    });
    
    freelancer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        blockFreelancer.style.display = 'block';
        btnExit.style.display = 'block';
    });
    
    btnExit.addEventListener('click', () => {
        btnExit.style.display = 'none';
        blockFreelancer.style.display = 'none';
        blockCustomer.style.display = 'none';
        blockChoice.style.display = 'block';
        
    });

    // 
    formCustomer.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(formCustomer.elements);
        const obj = {};

        // получаем все елементы в форме
        for (const elem of formCustomer.elements) {

            // отбираем нужные елементы
            if ((elem.tagName === 'INPUT' && elem.type !== 'radio') || 
            (elem.type === 'radio' && elem.checked) || 
            elem.tagName === 'TEXTAREA') {

                // записываем в объект свойства и значения отоюранных елементов
                obj[elem.name] = elem.value;
                // console.log(elem.name);


                // if (elem.type !== 'radio') {
                //     elem.value = '';                    
                // }
            }

        }
        // console.log(obj);
        // записываем в массив полученные елементы формы
        orders.push(obj);
        // сбрасываем форму после записи данных в массив orders
        formCustomer.reset();

        // console.log(orders);
    });

});