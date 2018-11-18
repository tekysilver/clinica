/* ==============================================
GOOGLE MAP
=============================================== */

$(document).ready(function () {

    'use strict';

    // Map Coordination

    var latlng = new google.maps.LatLng(40.56607804315652, -3.5063902000000553);

    // Map Options
    var myOptions = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        // Google Map Color Styles
        styles: [{
            featureType: "landscape",
            stylers: [{
                saturation: -100
            }, {
                lightness: 65
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "poi",
            stylers: [{
                saturation: -100
            }, {
                lightness: 51
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road.highway",
            stylers: [{
                    saturation: -100
                },
                {
                    visibility: "simplified"
                }]
        }, {
            featureType: "road.arterial",
            stylers: [{
                saturation: -100
            }, {
                lightness: 30
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "road.local",
            stylers: [{
                saturation: -100
            }, {
                lightness: 40
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "transit",
            stylers: [{
                    saturation: -100
                },
                {
                    visibility: "simplified"
                }]
        }, {
            featureType: "administrative.province",
            stylers: [{
                visibility: "off"
            }] /**/
        }, {
            featureType: "administrative.locality",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.neighborhood",
            stylers: [{
                    visibility: "on"
                }
				] /**/
        }, {
            featureType: "water",
            elementType: "labels",
            stylers: [{
                visibility: "on"
            }, {
                lightness: -25
            }, {
                saturation: -100
            }]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                hue: "#ffff00"
            }, {
                lightness: -25
            }, {
                saturation: -97
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById('google-map'), myOptions);

    // Marker Image
    var image = 'assets/images/marker.png';

    /* ========= First Marker ========= */

    // First Marker Coordination

    var myLatlng = new google.maps.LatLng(40.56607804315652, -3.5063902000000553);

    // Your Texts 

    var contentString = '<div id="content" style="display:block!important;">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h5 class="main-marker-title">' +

        'Gesticlinic Asesores.' +

        '</h5>' +
        '<p class="secondary-marker-title">' +

        'Cobeña' +

        '</p>' +
        '</div>';


    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Gesticlinic Asesores!',
        icon: image
    });


    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    /*
			 google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			  });*/
    google.maps.event.addListener(marker, 'click', function () {
        //infowindow.open(map,marker);
        window.open('https://www.google.es/maps/place/28863+Cobe%C3%B1a,+Madrid/@40.5144001,-3.6703699,12z/data=!4m5!3m4!1s0xd42335975a07d25:0x4e2c55f8a240ea0b!8m2!3d40.5683393!4d-3.5040753',
          '_blank' // <- This is what makes it open in a new window.
        );
    });

    infowindow.open(map, marker);

    /* ========= End First Marker ========= */

});
