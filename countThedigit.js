function nbDig(n,d) {
    let subsequence = [];
    let count = 0;
    for(let i = 0;i<n+1; i++ ){
        subsequence.push(...`${i**2}`);
    }
    for(let i = 0;i<subsequence.length;i++){
        (Number(subsequence[i]) == d) ? (count++):(count)
    };
    return count
}

console.log(nbDig(11011,2))