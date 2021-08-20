const bulb=document.querySelector('#imgBulb');
const btnOn=document.querySelector('#btnOn');
const btnOff=document.querySelector('#btnOff');
btnOn.addEventListener('click',()=>{
    bulb.src='bulb_on.png';
});

btnOff.addEventListener('click',()=>{
    bulb.src='bulb_off.png';
});
