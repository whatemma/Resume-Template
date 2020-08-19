show = document.querySelectorAll('.job-text-block');
show.forEach(function(event) {
    let count = 0;
    event.addEventListener('click', function(e){
        e.preventDefault();
        list = event.nextElementSibling;
        if(count === 0){
            list.style.display = "block";
            event.innerHTML = 'SHOW LESS <i class="fas fa-chevron-down"></i>';
            count = 1;
        }else{
            list.style.display = "none";
            event.innerHTML = 'SHOW MORE <i class="fas fa-chevron-right"></i>';
            count = 0;
        };
    });
});

document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();

    const formInput = document.querySelector('form');
    const formData = new FormData(formInput);

    const info = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("contact-reason")
    }

    if (info.firstname !== '' && info.lastname !== '' && info.email !== '' && info.phone !== '' && info.message !== '') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '#', true);
        xhr.send(info);
    }

    document.querySelector(".wrapper").innerHTML = '<h1 class = "confirmation">Thank you for your submission</h1>'
});