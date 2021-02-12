
const numero=(data)=>{

    const n=[];
    let i=0;
    let a=1;
    while(n.length<3){
        if(n.length==0){
            n.push(data[data.length-1].albumId)
        }
        if(n[i]===data[data.length-a].albumId){
            a++;
        }else{
            i++;
            n.push(data[data.length-a].albumId)
            a++;
        }
    }
    console.log(n[1])
    return n

}
export default numero;