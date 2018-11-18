var index = require("./tests.js")
var name = "Joe"
var height = "74"


// Don't worry about this
module.exports = { name, height
}

if (index.name === "Susan") {
    console.log("The name is correct")
} else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else {
    console.log("Expected: 70, Received: "+index.height)
}