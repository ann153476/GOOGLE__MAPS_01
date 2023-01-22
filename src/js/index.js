let map;

//latValue, lngValue
function initMap(latValue= 48.51029069230209,lngValue= 34.61206165767066) {
    let positionMy ={ lat: Number(latValue), lng: Number(lngValue) }
    map = new google.maps.Map(document.getElementById("map"), {
    center: positionMy,
    zoom: 15,

  });
  const image =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: positionMy,
    map,
    icon: image,
  });
}

window.initMap = initMap;

////////////////////////////////////////////
const latInput = document.querySelector('.lat');
const lngInput =  document.querySelector('.lng');
const form = document.querySelector('form');
function f (e){
  e.preventDefault();
  let latValue=Number(latInput.value);
  let lngValue=Number(lngInput.value);
  console.log(latValue,lngValue);
  initMap(latValue,lngValue);
}
form.addEventListener('submit',f);
//48.51029069230209 34.61206165767066
//50.4506564  30.5229918
//51.500638 -0.124568