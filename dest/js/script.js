document.addEventListener('DOMContentLoaded', function(e){
    // e.preventDefault();
    // modal
    const btn = document.querySelector('.header-log-js');
    const modal = document.querySelector('.overlay-js');
    const agree = document.querySelector('.agree-js');

    const auth = document.querySelector('.agree-js');
    const log = document.querySelector('#log-js').value;
    const password = document.querySelector('#pass-js').value;
    const user = document.querySelector('.persona');
    const checked = document.querySelector('check-js');

    
    
    const person = {
        login: log.value,
        pass: password.value
    }

    user.textContent = localStorage.getItem(person.login);
    // user.innerHTML = localStorage.getItem(person.login);

    ;function modalShow(trigger, modal, agree) {
        trigger.addEventListener('click', function (e) {
            if (e.target) {
                e.preventDefault();
            }
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            agree.addEventListener('click', function () {
                modal.style.display = 'none';
                document.body.style.overflow = 'visible';
            })

            modal.addEventListener('click', function (e) {
                if (e.target === modal) {
                    modal.style.display = 'none'
                    document.body.style.overflow = 'visible';
                }
            })
        })
    }

    modalShow(btn, modal, agree);

    // tabs

    ; document.querySelectorAll('[data-category]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.dataset.category;
            // console.log(id);
            document.querySelectorAll('.menu-link-js').forEach(item => {
                item.classList.remove('active-link-js');
                this.classList.add('active-link-js');
            })

            document.querySelectorAll('.tab-cat').forEach(item => {
                item.classList.add('hide-tab-block');
            })
            document.getElementById(tabId).classList.toggle('hide-tab-block');
        })

    });

    // scrollBar

    new SimpleBar(document.querySelector('.scrollTv'), {
        autoHide: false,
        scrollbarMinSize: 350,
    });

    // form


    auth.addEventListener('click', function () {
        
        // log[0].toUpperCase() + log.substring(1);
        
        // localStorage.setItem('person', JSON.stringify('person', person.login));
        localStorage.setItem('person', person);

    })

    // document.addEventListener('storage', function () {
         // localStorage.getItem(a);
         // user.textContent = a + " " + b[0].toUpperCase() + ".";
         // console.log('2');
         // let out = document.querySelector('.out').textContent = localStorage.getItem('a');
    // })

    

})

