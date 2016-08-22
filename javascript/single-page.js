(function ($) {
    "use strict";
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        } else {
            return results[1] || 0;
        }
    };
    jQuery(document).on('ready', function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 50) {
                $('div#scrollup').addClass('animated flipInY').fadeIn(200);
            } else {
                $('div#scrollup').fadeOut(200);
            }
        });
        $('div#scrollup').on('click', function () {
            $("html,body").animate({scrollTop: 0}, 600);
            return false;
        });
        var portfolio = $.urlParam('portfolio');
        var source = $("#portafolio-template").html();
        var template = Handlebars.compile(source);
        var context = {
            aia: {
                images: {one: "aia1.jpg", two: "aia2.jpg", three: "aia3.jpg"},
                title: "AIA Web Site Application",
                time: "2016-06-22",
                timewritten: "July 22, 2016",
                client: "AIA Agencia de Asesoría Inmobiliaria",
                delivered: "15 August, 2016",
                linksite: "www.aia.com.pe",
                type: "Website, Application, Branding",
                projectdetail: "This project basically controls the management of agents and properties, has security and access control profiles, geolocation technology and management maps, has responsible design for multiple devices.",
                feedback: "test",
                owner: "Claudia Dávila",
                ownercharge: "General Manager",
                ownerarea: "Administrative"
            }, 
            coarkpro: {
                images: {one: "coarkpro1.jpg", two: "coarkpro2.jpg", three: "coarkpro3.jpg"},
                title: "COARKPRO Static Page",
                time: "2015-03-10",
                timewritten: "March 10, 2015",
                client: "COARKPRO E.I.R.L. Construcción y Arquitectura",
                delivered: "25 April, 2015",
                linksite: "www.coarkpro.com",
                type: "Website, Branding, Redesign",
                projectdetail: "This project has responsive design for multiple devices, information about the company was obtained and the information is organized on the website.",
                feedback: "test",
                owner: "Alfredo Augusto Sotil Astete",
                ownercharge: "General Manager",
                ownerarea: "Administrative"
            }, 
            rcdenttechnology: {
                images: {one: "rctechnologydent1.jpg", two: "rctechnologydent2.jpg", three: "rctechnologydent3.jpg"},
                title: "RCTECHNOLOGYDENT Static Page",
                time: "2016-02-15",
                timewritten: "February 15, 2016",
                client: "RC Technology Dent",
                delivered: "10 March, 2016",
                linksite: "www.rctechnologydent",
                type: "Website, Branding, Redesign",
                projectdetail: "This project has responsive design for multiple devices, information about the company was obtained and the information is organized on the website.",
                feedback: "test",
                owner: "Olga Rey Flores",
                ownercharge: "General Manager",
                ownerarea: "Administrative"
            }};
        var html = template(context[portfolio]);
        $("section.single-page").html(html);
        new Swiper('.swiper-container-portfolios', {autoplay:'2000', pagination: '.swiper-pagination-portfolios', a11y: true, keyboardControl: true, autoHeight: true, speed: 800, paginationClickable: true});
    });
    jQuery(window).on('load', function () {
        $('div#loading').fadeOut(500);
        window.sr = ScrollReveal({reset: false});
        var commonCards = '.widget-holder,.post,.disqus-comment';
        sr.reveal(commonCards, {duration: 1100});
        $('.back-button').on('click', function () {
            history.go(-1);
        });        
    });

})(jQuery);