const arr1 = [2,3,4];
const arr2 = [1,2,5,6];

function Inscr(a,b){
    let res1 = []
    a.forEach((i1) => {
        b.forEach((i2) => {
            (i1 === i2) ? res1.push(i1) :''
        })
    })
    return res1;
};

console.log(Inscr(arr1,arr2));
