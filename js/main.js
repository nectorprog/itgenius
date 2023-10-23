$(document).ready(() => {

    $('.small-menu-block a, .small-menu-block .small-menu-circle').click((e) => {
        let currentElement = $(e.target)

        $('.small-menu-block a').removeClass('small-menu-active');
        currentElement.addClass('small-menu-active')

        currentElement>$('.small-menu-circle').addClass('small-menu-circle-active')
    })

    $('#small-menu-close, .small-menu-block, #small-menu-order-button').click(() => {
        $('#small-menu').hide()
        $('#small-menu-background').hide()

    })

    $('#small-menu-button').click(() => {
        $('#small-menu').show()
        $('#small-menu-background').show()
    })

    $(document).mouseup(function (e) {
        var container = $('#small-menu');
        if (!container){
            container.hide();
            $('#small-menu-background').hide()
        }
    });

    $('#products-container .slick-next, #products-container .slick-prev').click(() => {
        $('#products-container .slick-next').slick('refresh');
        $('#products-container .slick-prev').slick('refresh');
    })

    $('#products-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
    });

    $('#list-reviews').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('#name').keypress((event) => {
        let name = parseInt(event.key)

        if (!isNaN(name)){
            event.preventDefault();
        }
    })
    $('#age').keypress((event) => {
        let age = parseInt(event.key)


        if (isNaN(age)){
            event.preventDefault();
        }
    })

    $('#number').keypress((event) => {
        let number = parseInt(event.key)

        if (isNaN(number)){
            event.preventDefault();
        }
    })

    $('#second-order-form .product-button > button').click(() => {
        let name = $('#name')
        let age = $('#age')
        let number = $('#number')

        if (!name.val()) {
            name.css('border-color', 'red')
        } else {
            name.css('border-color', 'rgb(241, 207, 90)')
        }

        if (!age.val()) {
            age.css('border-color', 'red')
        } else {
            age.css('border-color', 'rgb(241, 207, 90)')
        }

        if (!number.val()) {
            number.css('border-color', 'red')
        } else {
            number.css('border-color', 'rgb(241, 207, 90)')
        }

        if (name.val() && age.val() && number.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&age=' + age.val() + '&number=' + number.val(),
                success: () => {
                    alert('Ваша заявка принята. Ожидайте звонка.')
                },
                error: () => {
                    alert('Произошла какая-то ошибка.')
                }
            })

        }
    })

    
})