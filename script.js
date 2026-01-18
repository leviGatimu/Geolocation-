function MyLocation(){
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition((pos) => {
            document.getElementById('lat1').value = pos.coords.latitude.toFixed(4);
            document.getElementById('long1').value = pos.coords.latitude.toFixed(4);
       })
    }
} () => alert("Enable your GPS feature for this to work");

// This is for our button

function getcalculate(){
    //grab the ids set in html
    const lat1 = parseFloat(document.getElementById('lat1').value);
    const long1 = parseFloat(document.getElementById('long1').value);
    const lat2 = parseFloat(document.getElementById('lat1').value);
    const long2 = parseFloat(document.getElementById('long2').value);

    if(isNaN(lat1) || isNaN(long1)|| isNaN(lat2) || isNaN(long2)){
        document.getElementById('results').innerHTML = "Please input values error 101";
        return;
    }

    const dist = harvesin(lat1 , long1, lat2 , long2 )

    function harvesin(lat1 , long1, lat2 , long2 ){
        const R= 6381

        const toRad = (deg) =>  deg * Math.PI / 180;

        const Dlat = toRad(lat2 - lat1);
        const Dlong = toRad(long2 - long1);


        const a= Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLong / 2) * Math.sin(dLong / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Angular distance
    return R * c;


    }
}