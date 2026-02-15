$(document).ready(function () {
    new WOW().init();
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });
    console.log(1)
    $('.carousel-inner').slick({
        adaptiveHeight: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    let icons = {
        heightStyle: 'content',
        header: '> .accordion-item > .accordion-header',
    };
    $("#accordion").accordion({
        icons: icons,
        collapsible: true
    });
    $("#toggle").button().on("click", function () {
        if ($("#accordion").accordion("option", "icons",)) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", "color", icons,);
        }
    });

    let resIndex = $('#index').keydown(function (e) {
        if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 27) {

        } else if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }


    })


    $('#btn').on("click", function (e) {
        if ($('#name').val() === '' || $('#name').val() === null) {
            alert('Введите Имя');
        } else if ($('#surname').val() === '' || $('#surname').val() === null) {
            alert('Введите Фамилию');
        } else if ($('#telephone').val() === '' || $('#telephone').val() === null) {
            alert('Введите Телефон');
        } else if ($('#country').val() === '' || $('#telephone').val() === null) {
            alert('Введите Страну');
        } else if ($(resIndex).val() === '' || $(resIndex).val() === null) {
            alert('Введите Индекс');
        } else if ($("#index").val().length < 6 || $("#index").val().length > 7) {
            console.log($("#index").val().length)
            alert('Индекс должен содержать 6 символов');
        } else if ($('#address').val() === '' || $('#address').val() === null) {
            alert('Введите Адрес');
        } else {
            $('.form').addClass('close')
            $('.modal-content').toggleClass('open')
        }

        console.log('1')

    })
        $('.btn-close').click(function () {
            $('.form').removeClass('close');
            $('.modal-content').removeClass('open')
            $('input').val('')
        })


});