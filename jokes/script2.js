
const container=document.querySelector('#joke');
const btnjks=document.querySelector('#morejks');

    const jokes= async ()=>{
        const setHeader={
            headers:{
                Accept: 'application/json'
            }
        };
        try{
            console.log('hello');
        const res= await fetch('https://icanhazdadjoke.com/',setHeader);
        const data= await res.json();
            container.innerHTML=data.joke;
        }
        catch(e){
            container.innerHTML="some error occure";
            console.log(e);
        }
    };
    
        

btnjks.addEventListener('click',jokes);
jokes();
