const bunnyHealth = "sick"

if(bunnyHealth==="healthy"){
    console.log("bunny is healthy")
}else if(bunnyHealth==="sick"){
    console.log("bunny is sick")
}else{
console.log("bunny is neither healthy nor sick")
}




switch(bunnyHealth){
    case "healthy": console.log("bunny is healthy")
    break
    case "sick": console.log("bunny is sick")
    break
    default: console.log("bunny is neither healthy nor sick")
}


bunnyHealth==="sick"?console.log("bunny is unhealthy"):console.log("bunny is healthy")