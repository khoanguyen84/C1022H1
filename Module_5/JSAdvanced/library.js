function sum(...rest){
    let total = 0;
    for(let i = 0; i < rest.length; i++){
        total += rest[i]
    }

    return total;
}

export function times(...rest){
    let result = 1;
    for(let i = 0; i < rest.length; i++){
        result *= rest[i]
    }

    return result;
}

export function subtract(...rest){
    let result = 0;
    for(let i = 0; i < rest.length; i++){
        result -= rest[i]
    }

    return result;
}

export const jobs = ["java", "react", "angular"];

export default sum;