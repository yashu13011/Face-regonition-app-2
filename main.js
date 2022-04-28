Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML = '<img src="'+data_uri+'" id="captured_img">'
    });
}

console.log('ml5 version: ' , ml5 version);
classifier = ml5.imageClasifier('https://teachablemachine.withgoogle.com/models/SxWBw9usJ/model.json' , modelLoaded);