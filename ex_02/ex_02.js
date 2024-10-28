const map = L.map('map').setView([46.603354, 1.888334], 6); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

const campuses = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Lyon", coords: [45.7640, 4.8357] },
    { name: "Nantes", coords: [47.2184, -1.5536] },
    { name: "Bordeaux", coords: [44.8378, -0.5792] },
    { name: "Toulouse", coords: [43.6047, 1.4442] }
];

const epitechIcon = L.icon({
    iconUrl: 'https://www.pngkit.com/png/full/459-4596239_epitech-epitech-logo-transparent.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

campuses.forEach(campus => {
    L.marker(campus.coords, { icon: epitechIcon })
        .addTo(map)
        .bindPopup(`${campus.name} rocks!`);
});
