console.log('hello')
let keyAElement = document.getElementById("key-A")

let audioA =
    document.getElementById("audio-A")

keyAElement.onclick = () => {
    console.log("you clicked")
    audioA.play()
    
    
}
