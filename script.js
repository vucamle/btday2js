// bt1

// let a = 2;
// if(a%2==0)
// {
//     console.log('a la so chan');
// }
// else{
//     console.log('a la so le')
// }

//bt2

// let a = 3;
// let b = 8;
// let c = 12;

// if(a>b && a > c)
// {console.log('a la so lon nhat');
// }
// else if(b>a && b >c)
// {
// console.log("b la so lon nhat");

// }
// else{
//     console.log('c la so lon nhat')
// }

// bt3
"bai 3 e chưa làm được -.-"
// function giaithua(){
//     let a = 5;
//     let giaithuaResult =1;
//     for(let i = 1; i<=a; i++){
//         giaithuaResult *= i;
//     }
//     document.getElementById("result-2").innerHTML = giaithuaResult;
// }

// function giaithua(){
//     var num = prompt('nhap a')
//     var giaithuaResult = 1;

// for( var i =1; i<=5;i++)
// {
//     console.log("giai" +i);
// }
// }


// bt4
// let n = 1;
// while(n<=8){
//     if (n%2==0)
//     console.log(n);
//     n++
// }

// bt5



"bai 5 e chi tính đc tổng ko tính được tổng dương :))"




function sumArray(mang){
    let sum = 0;
    for (let i = 0; i < mang.length; i++){
        
        sum = sum + mang[i] ;
    }
    
    return sum;
}

let mang = [-1, 5, 9, 10];
console.log(sumArray(mang));