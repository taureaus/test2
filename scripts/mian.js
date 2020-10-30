let myImage=document.querySelector('img');

myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/firefox-icon.png'){
        myImage.setAttribute('src','images/cat.jpg');

    }
    else{
        myImage.setAttribute('src','images/cat.jpg');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUsername(){
    let myName=prompt('请输入你的名字');
    localStorage.setItem('name',myName);
    myHeading.textContent='mozilla 酷毙了，'+myName;
}
    if(!localStorage.getItem('name')){
        setUsername;
    }
    else{
        let storedName=localStorage.getItem('name');
        myHeading.textContent='mozilla 酷毙了,'+storedName;
    }
    