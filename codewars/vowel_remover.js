function vowelRemover(s){
    let result = '';
    (s.split("")).forEach((n) => {
        if (("aeouiAEOUI".split("")).includes(n) == false){
            result += n
        }
    })
    return s.split("")
}


console.log(vowelRemover("Hello wOrld"));