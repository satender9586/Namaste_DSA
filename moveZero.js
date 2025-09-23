

function movesZeros(arr){
    let p=0;

    for(let i=1;i<arr.length;i++){
        if(arr[p] !=0){
            arr[p]=arr[i]
            p++
        }
    }

    console.log(arr)
}
const arr =[0,1,0,4,5,0,6,0]
movesZeros(arr)