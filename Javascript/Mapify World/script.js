new Autocomplete("search", {
  selectFirst: true,
  insertToInput: true,
  cache: true,
  howManyCharacters: 2,

  onSearch: ({ currentValue }) => {

    const api = `https://nominatim.openstreetmap.org/search?format=geojson&limit=5&city=${encodeURI(
      currentValue
    )}`;



    return new Promise((resolve) => {
      fetch(api)
        .then((response) => response.json())
        .then((data) => {

          resolve(data.features);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },

  onResults: ({ currentValue, matches, template }) => {
    const regex = new RegExp(currentValue, "gi");


    return matches === 0
      ? template
      : matches
        .map((element) => {
          return `
                <li>
                  <p>
                    ${element.properties.display_name.replace(
            regex,
            (str) => `<b>${str}</b>`
          )}
                  </p>
                </li> `;
        })
        .join("");
  },

  onSubmit: ({ object }) => {

    map.eachLayer(function (layer) {
      if (!!layer.toGeoJSON) {
        map.removeLayer(layer);
      }
    });
    console.log(object)
    const { display_name } = object.properties;
    const [lng, lat] = object.geometry.coordinates;







    const marker = L.marker([lat, lng], {
      title: "display_name",
      draggable: true

    });

    // function onMapClick(e) {
    //   alert("You clicked the map at " + e.latlng);
    //   // marker.addTo(map).bindPopup(e.latlng);
    // };
    var popup = L.popup();
    // marker.addTo(map).bindPopup(e.latlng.toString());

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
      marker = L.marker((e.latlng), { draggable: true }).addTo(map);

    }

    // map.on('click', onMapClick);

    map.on('click', onMapClick);
    marker.addTo(map).bindPopup(display_name);
    map.setView([lat, lng], 8);




  },




  //marker on click






  noResults: ({ currentValue, template }) =>
    template(`<li>No results found: "${currentValue}"</li>`),
});

// --------------------------------------------------
//this is used for default map
// MAP PART
const config = {
  minZoom: 4,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 5;
// coordinates
const lat = 52.22977;
const lng = 21.01178;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);



const data = fetch('https://nominatim.openstreetmap.org/reverse.php?lat=73&lon=73&zoom=18&format=jsonv2').then(data => {
  data.json()
  console.log(data)
})


