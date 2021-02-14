
const numero=async(data)=>{
    
    const n=[];
    const imgrl=[]; 
    let i=0;
    let a=1;
    while(n.length<3){
        if(n.length==0){
            n.push(data[data.length-1].albumId)
            imgrl.push(data[data.length-1].url)
            imgrl.push(data[data.length-2].url)
        }
        if(n[i]===data[data.length-a].albumId){
            a++;
        }else{
            i++;
            n.push(data[data.length-a].albumId)
            imgrl.push(data[data.length-a].url)
            imgrl.push(data[data.length-a-1].url)
            a++;
        }
    }
    const datac=[];
    datac.push(n);
    datac.push(imgrl);
    return datac;

}
export default numero;