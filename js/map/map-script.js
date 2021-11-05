const offerAddress = document.getElementById('address');

const map = L.map('map')
  .on('load', () => {
    console.log('Карта инициализирована');
    const bestVar = 100;
    console.log(bestVar);
    return bestVar;
  })
  .setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

// offerAddress.value = `${mainPinMarker.lat}, ${mainPinMarker.lng}`;

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
  console.log('address' + offerAddress);
  const coordsPinMarker = evt.target.getLatLng();
  return offerAddress.value = `${coordsPinMarker.lat.toFixed(5)}, ${coordsPinMarker.lng.toFixed(5)}`;

});

mainPinMarker.addTo(map);


const bestVar2 = map.bestVar;
console.log(bestVar2, map.bestVar);

export {map, bestVar2};
