function init() {
  let map = new ymaps.Map('map', {
    center: [59.93857382731505,30.323246246032653],
    zoom: 14
  });

  let placemarkSmall = new ymaps.Placemark([59.93863506417266,30.323117499999945], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/placemark.png',
    iconImageSize: [57, 53],
    iconImageOffset: [-30, -50]
  })

  let placemarkBig = new ymaps.Placemark([59.93863506417266,30.323117499999945], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/placemark.png',
    iconImageSize: [113, 106],
    iconImageOffset: [-55, -100]
  })

  if (window.matchMedia("(max-width: 767px)").matches) {
    map.geoObjects.add(placemarkSmall);
  }

  if (window.matchMedia("(min-width: 768px)").matches) {
    map.setZoom(15);
    map.geoObjects.add(placemarkBig);
  }

  if (window.matchMedia("(min-width: 1440px)").matches) {
    map.setZoom(17);
    map.setCenter([59.93855969571643,30.31949115341181]);
  }

  map.behaviors.disable('scrollZoom');
}

ymaps.ready(init);
