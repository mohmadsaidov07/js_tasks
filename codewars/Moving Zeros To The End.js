function moveZeros(arr) {
    let arrWithoutZero = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arrWithoutZero.push(arr[i])
        }
    }
    let result = [... arrWithoutZero]
    for (let i = 0; i < (arr.length - arrWithoutZero.length); i++) {
        result.push(0)
    }
    return result
  }

console.log(moveZeros([false,'a',1,2,3,4,5,6,7,0,8,9]));