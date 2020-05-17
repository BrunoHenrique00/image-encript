var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image()
const positionsArray = []


image.onload = function(){
    ctx.drawImage(image,0,0,canvas.scrollWidth,canvas.scrollHeight)

    var pixels = ctx.getImageData(0,0,canvas.scrollWidth,canvas.scrollHeight)

    //This function get random pixel spots in the image to switch from the original
    function randomPixels(){
        const number = (Math.floor(Math.random() * pixels.data.length))
        return (Math.round(number/4) * 4)
    }

    //A loop to "encript" the image 
    for(var i = 0;i < pixels.data.length ; i+=4 ){

        var position = randomPixels()

        positionsArray[i]     = pixels.data[i + 0]
        positionsArray[i + 1] = pixels.data[i + 1]
        positionsArray[i + 2] = pixels.data[i + 2]
        positionsArray[i + 3] = pixels.data[i + 3]

        pixels.data[i + 0] = pixels.data[position  + 0]
        pixels.data[i + 1] = pixels.data[position  + 1]
        pixels.data[i + 2] = pixels.data[position  + 2]
        pixels.data[i + 3] = pixels.data[position  + 3]

    }

    //This loop makes the reverse pixel, so you can vizualize the image
    //The originals pixel position is stored in the positionsArrays variable

    /*for(var i = 0;i < pixels.data.length ; i+=4 ){

        pixels.data[i + 0] = positionsArray[i]
        pixels.data[i + 1] = positionsArray[i + 1]
        pixels.data[i + 2] = positionsArray[i + 2]
        pixels.data[i + 3] = positionsArray[i + 3]
    }*/
    

    ctx.putImageData(pixels,0,0)
}

// Put your image here...      
image.src = '/jamstack.png'