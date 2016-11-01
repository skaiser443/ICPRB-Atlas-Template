mapboxgl.accessToken = 'pk.eyJ1Ijoic2thaXNlcmljcHJiIiwiYSI6ImNpa2U3cGN1dDAwMnl1cm0yMW94bWNxbDEifQ.pEG_X7fqCAowSN8Xr6rX8g';

var places = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "icon": "theatre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.038659, 38.931567]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "theatre"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.003168, 38.894651]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "bar"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.090372, 38.881189]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "bicycle"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.052477, 38.943951]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "music"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.031706, 38.914581]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "music"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.020945, 38.878241]
        }
    }, {
        "type": "Feature",
        "properties": {
            "icon": "music"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-77.007481, 38.876516]
        }
    }]
};

var bound = new mapboxgl.LngLatBounds(
    new mapboxgl.LngLat(-81.457, 36.945),
	new mapboxgl.LngLat(-72.49, 41.17)
);
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/skaisericprb/citvqu6qb002p2jo1ig5hnvtk',
	center: [-77.975, 39.077],
	maxBounds: bound,
	zoom: 7.45,
	attributionControl: {
		position: 'bottom-right'
	},
	minZoom: [7.0],
});

var linkGroup = document.getElementById('link-group');

map.on('load', function() {
	
  map.addSource('places', {
	  type: 'geojson',
	  data: places
  });
  
  map.addLayer({
	  id: 'places',
	  type: 'circle',
	  source: 'places',
	  paint: {
		  'circle-radius': 6,
		  'circle-color': '#fff'
	  }
  });
});

addLayer('Places', 'places');

function addLayer(name, id) {
  var link = document.createElement('input');
	  link.type = 'checkbox';
	  link.checked = true;
	  link.className = 'link-group';
	  link.textContent = name;
	  linkGroup.appendChild(link);
	
  var label = document.createElement('link-group');
	  label.setAttribute('for', id);
	  label.textContent = name;
	  linkGroup.appendChild(label);
	
  link.addEventListener('click', function(e) {
	  map.setLayoutProperty(id, 'visibility',
	    e.target.checked ? 'visible' : 'none');
  });
	
  var layer = document.getElementById('link-group');
	  layer.appendChild(link);
	
};

map.addControl(new mapboxgl.Geocoder({position: 'top-right'}));
map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

