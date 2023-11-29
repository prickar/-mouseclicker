export const handleMouseMove = (e) => {
    let x = e.clientX;
    let y = e.clientY

     document.getElementById("coor").innerHTML = `Coordinates: ${x}, ${y}`;

}

