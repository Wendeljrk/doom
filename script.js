const firePixelArray = []
const fireWidth = 10
const fireHeight = 10


function start(){
    createFireDataStructure()
    renderFire()
}
function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight

    for (let i=0; i < numberOfPixels; i++){
        firePixelArray[i]= 0
    }

}

function calculateFirePropagation(){

}

function renderFire (){
    let html = '<table cellpadding=0 cellspacing=0'
    for (let row =0; row < fireHeight; row++){
        html += '<tr>'
        for (let column = 0; column < fireWidth; column++){
            const pixelIndex = column + (fireWidth * row)
            const fireIntensity = firePixelArray[pixelIndex]
            html +='<td>'
            html +=`<div class="pixel-index">${pixelIndex}</div>`
            html += fireIntensity
            html +='</td>'
            
        }
        html += '</tr>'
    }
    html += '</table>'
    document.querySelector('#fireCanvas').innerHTML = html
}

function createFire(){
    for (let column = 0; column <= fireWidth; column++){
        const overflowPixelIndex = fireWidth *fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
        
        firePixelArray[pixelIndex] = 36
    }
}
start ()

