function start_classifacation(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1pC-Ux63o/model.json",modelready)
}
function modelready(){
    classifier.classify(gotResult)
}
function gotResult(error,results){
if (error) {
    console.log(error)

} else {
    console.log(results)
    document.getElementById("label_result").innerHTML = "I can hear:" + results[0].label
    document.getElementById("label_accuracy").innerHTML = "accuracy:" + (results[0].confidence).toFixed(2)*100+"%"
    img1 = document.getElementById("alien1")
    img2 = document.getElementById("alien2")
    img3 = document.getElementById("alien3")
    img4 = document.getElementById("alien4")
    if (results[0].label=="Clap") {
        img1.src = "aliens-01.gif"
        img2.src = "aliens-02.png"
        img3.src = "aliens-03.png"
        img4.src = "aliens-04.png"
    }
    else if (results[0].label=="Snap") {
        img1.src = "aliens-01.png"
        img2.src = "aliens-02.gif"
        img3.src = "aliens-03.png"
        img4.src = "aliens-04.png"
    }
    else if (results[0].label=="Bell") {
        img1.src = "aliens-01.png"
        img2.src = "aliens-02.png"
        img3.src = "aliens-03.gif"
        img4.src = "aliens-04.png"
    }
    else {
        img1.src = "aliens-01.png"
        img2.src = "aliens-02.png"
        img3.src = "aliens-03.png"
        img4.src = "aliens-04.gif"
    }
}
}