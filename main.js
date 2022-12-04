Webcam.set({
    width:400, height:400, 
    image_format:"png", png_quality:90 
});

Webcam.attach("#Webcamm")

function capture(){
    Webcam.snap(function(e){
        document.getElementById("image_result").innerHTML = "<img id='result_image' src=' " + e +"'>"
    })
}

clasifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JOYL6xR8H/model.json", modelloaded)





