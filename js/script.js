(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });


    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });


})(jQuery);

var rest=[
    {
        title: 'Humus Shamsia',
        address: '',
        Lat: 32.921421,
        Long:  35.070087,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
     {
        title: 'Abu Hassan',
        address: '1 Dolphin Street, Yafo',
         Lat:  32.050146 ,
        Long:  34.750712 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
     {
        title: 'Sa’eed',
        address: 'Kfar Yassif',
         Lat:  32.952032 ,
         Long:   35.159996 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
   {
        title: 'Hummus Ashkara',
        address: 'Yermiyahu 45, Tel Aviv',
       Lat: 32.095106 ,
         Long:  34.777922 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
      {
        title: 'The Jingee',
        address: 'Kibbutz Einat ',
          Lat:  32.081948 ,
         Long:   34.937514 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
    {
        title: 'Hummus Bahadonas',
        address: '138 Bialik Street, Ramat Gan',
        Lat:  32.088806 ,
         Long:  34.802591 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
     {
        title: 'Pinati',
        address: '13 King George Street, Jerusalem',
         Lat:  31.781918 ,
         Long:  35.216803 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
      {
        title: 'Halil',
        address: '6 Kehilat Detroit, Ramle',
          Lat:  31.925988 ,
         Long:  34.873099 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    },
    Hummus_Lina= {
        title: 'Hummus Lina',
        address: '65 Derekh HaShalom, Abu Gosh',
        Lat :  32.067534 ,
         Long:  34.80272 ,
        time_work: 'Sunday - Saturday 06:30 - 17:00'
    }

]




function myMap() {
    var myCenter = new google.maps.LatLng(32.085300, 34.781768);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        animation: google.maps.Animation.BOUNCE

    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    for (var i = 0; i < rest.length; i++) {
        var myLatlng = new google.maps.LatLng(rest[i].Lat, rest[i].Long);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: rest[i].title,
            icon:'img/icons.png'
        });
        var infoWindow = new google.maps.InfoWindow();
        /* google.maps.event.addListener(marker, "click", (function(marker, data) {

         // Attaching a click event to the current marker
         google.maps.event.addListener(marker, "click", function(e) {
         infoWindow.setContent(data.title);
         infoWindow.open(map, marker);
         });
         marker.setMap(map);

         })(marker, rest[i]));*/
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
             infoWindow.setContent("<div style = 'width:10vw;min-height:2vh;font-size: 1.5rem;color:black;text-align: center'>" +'<h3>'+data.title+'</h3>'+'<br>'+ data.address + "</div>");

                infoWindow.open(map, marker);
            });
        })(marker, rest[i]);
    }





}


