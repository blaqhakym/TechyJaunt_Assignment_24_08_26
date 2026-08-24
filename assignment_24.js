const sumBunnies = (blackBunnies, whiteBunnies)=>{
if(typeof blackBunnies !== "number" || typeof whiteBunnies !== "number"){
    throw Error("Both arguments must be numbers")
}
}


try {
    sumBunnies(10, 'Twenty')
} catch (error) {
    console.log(error.message)
}