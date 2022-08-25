let info = {name:"Dean", gender:"M",weight:70, weightadd(p=0){ //p=0 means that the predefined value for p is 0
    console.log(`Original:${this.weight}`)
    this.weight += p
}}
info.weightadd(2)
console.log(`name:${info.name}, gender:${info.gender}, weight:${info.weight}`)