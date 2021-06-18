function setup() {
  canvas = createCanvas(500, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded(){
  console.log(" Model is Loaded ");
}

function draw(){
  image(video,0,0,500, 400);
  classifier.classify(video,gotResult);
}

function gotResult(error,results){
if (error){
  console.error(error);
}
else {
  console.log(results);
  document.getElementById("Object_name").innerHTML=results[0].label;
  document.getElementById("RTN").innerHTML=results[0].confidence.toFixed(3);
}

}






