// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// solve :

type Circle = {
    radious: number;
}
type Rectangle = {
    height: number;
    weight: number;
}

function calculateShapeArea(area: Circle | Rectangle) {
    if ('height' in area && 'weight' in area) {
        const result = area.height * area.weight

        // console.log(result)
        return result
    }
    else {
        const result = Math.PI * area.radious;
        // console.log(result)
        return result
    }
}

calculateShapeArea({ radious: 20, })

