const firePixel = []
const fireWidth = 2
const fireHeight = 3

function start(){
    createFireDataStructure()
    console.log(firePixel)
}
function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight

    for (let i=0; i < numberOfPixels; i++){
        firePixel[i]= 0
    }

}

function calculateFirePropagation(){

}

function renderFire (){

}
start ()
