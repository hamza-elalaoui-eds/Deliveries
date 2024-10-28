const map = L.map('map', {
    center: [46.603354, 1.888334],
    zoom: 6,
    maxZoom: 18,
    minZoom: 3
});

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}{r}.png').addTo(map);

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

const epitechLayer = L.featureGroup().addTo(map);

campuses.forEach(campus => {
    const markerIcon = L.divIcon({
        className: 'custom-icon',
        html: `<div style="text-align: center;">
                    <img src="${epitechIcon.options.iconUrl}" width="40" height="40">
                </div>`,
        iconSize: [60, 60],
        iconAnchor: [30, 50],
        popupAnchor: [0, -40]
    });

    const marker = L.marker(campus.coords, {
        icon: markerIcon
    }).addTo(epitechLayer);
    
    marker.bindPopup(`${campus.name} rocks!`);

    const label = L.marker(campus.coords, {
        icon: L.divIcon({
            className: 'label-icon',
            html: `<div>${campus.name}</div>`,
            iconSize: [60, 20],
            iconAnchor: [30, 0]
        })
    }).addTo(epitechLayer);
});

map.fitBounds(epitechLayer.getBounds());

map.on('zoomend', () => {
    if (!map.hasLayer(epitechLayer)) {
        map.addLayer(epitechLayer);
    }
});
