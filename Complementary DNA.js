const dnaStrand = (dna) => {
    const dna_arr = (dna.toUpperCase()).split("")
    let result = []
    for(let i = 0; i < dna_arr.length; i++){
    switch (dna_arr[i]) {
    case 'C':
        result.push('G');
        break;
    case 'G':
        result.push('C');
        break;
    case 'A':
        result.push('T');
        break;
    case 'T':
        result.push('A');
        break;
    }}
    return result.join("")
  }

console.log(dnaStrand("cata"));