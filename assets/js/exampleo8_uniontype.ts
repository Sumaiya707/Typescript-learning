type Rectangle ={
    height:number;
    width:number;
}
type Circle={
    radius:number;
}

type Square ={
    length:number;
}

function calculateArea(shape:Rectangle | Circle |Square):number {
    if("radius" in shape)
    {
        return Math.PI *shape.radius * shape.radius;
    }
    else if("length" in shape)
    {
        return shape.length* shape.length;
    }
    
    return shape.height * shape.width;

}