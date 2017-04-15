    var locations = [
      ['<b>Mariam Garba <br/> Course: Mathematics <br/> Time: 10:00Am - 12:00PM </b>', 52.420008, 13.404954, 4],
      ['<b>Sana Khiari <br/> Course: Mathematics <br/> Time: 10:00Am - 12:00PM </b>', 52.4200081, 13.204954, 5],
      ['<b>Zachary Brownson <br/> Course: Mathematics <br/> Time: 10:00Am - 12:00PM </b>', 52.4200081, 13.504954, 3],
      ['<b>Sana Khiari <br/> Course: Mathematics <br/> Time: 10:00Am - 12:00PM </b>', 52.4200081, 13.574954, 2],
      ['<b>Zachary Brownson <br/> Course: Mathematics <br/> Time: 10:00Am - 12:00PM </b>', 52.520008, 13.404954, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(52.520008, 13.404954),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
     var image = 'http://www.everymanministries.com/Content/shared/images/usericon.png';

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: image
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
