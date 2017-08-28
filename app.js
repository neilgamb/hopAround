(function ($) {

    // Mapbox API access token
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVpbGdhbWIiLCJhIjoiY2o2cDV3cTlnMGN6MDMybndpam9wdmtldiJ9.PLcezh7shxb0_ppK3RGAdA';

    // Initiate Map and default values
    const map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/light-v9', //hosted style id
        center: [-80.8700, 35.2070], // starting position
        zoom: 8, // starting zoom
        maxZoom: 18,
        minZoom: 8,
        pitch: 0,
        bearing: 0,
    });

    // zoom();

    function zoom() {
        setTimeout(function () {

            map.flyTo({
                // These options control the ending camera position: centered at
                // the target, at zoom level 9, and north up.
                center: [-80.8700, 35.2070],
                zoom: 11,
                pitch: 50,
                bearing: 0,

                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                curve: 1, // change the speed at which it zooms out

                // This can be any easing function: it takes a number between
                // 0 and 1 and returns another number between 0 and 1.
                easing: function (t) {
                    return t;
                }
            });

        }, 2500);
    }

    $(function () {
        $('.toggle-overlay').click(function () {
            $('aside').toggleClass('open');
        });
    });


})(jQuery);


