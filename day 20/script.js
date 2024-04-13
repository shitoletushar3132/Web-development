const student ={
    name:'tushar',
    age:21,
    eng :93,
    math : 99,
    phy : 95,
    getAvg(){
        let avg = (this.eng + this.math +this.phy)/3
        console.log(`${this.name} is got a avg ${avg}`)
        return avg;
    }
}
// let a = 34;
try{
    console.log(a);
}catch(err){
    console.log("this is not define");
    console.log(err);
}

// console.log('yes')

