//handling OPTION X2
let pressed;
let lastPressed;
let isDoublePress;

const handleDoublePresss = key => {
    if(key.key=="Alt")
    {
        //suggestion accept
        suggestionAccept();
    }
    
}

const timeOut = () => setTimeout(() => isDoublePress = false, 500);

const keyPress = key => {
    pressed = key.keyCode;

    if (isDoublePress && pressed === lastPressed) {
        isDoublePress = false;
        handleDoublePresss(key);
    } else {
        isDoublePress = true;
        timeOut();
    }

    lastPressed = pressed;
}

window.onkeyup = key => keyPress(key);

function changedText()
{
    let listaTestoAi = document.getElementById("messageAi").innerText.split(".");
    for (let i = 0; i < listaTestoAi.length-1; i++) {
        listaTestoAi[i]=listaTestoAi[i]+".";
      }
    console.log(listaTestoAi.length);
    var myTextList = document.getElementById("myText").value.split(/[,.]+/);
    var myText = myTextList[myTextList.length-1];
    console.log(myText);
    document.getElementById("messageAi").innerHTML="";
    let bestMatch = stringSimilarity.findBestMatch(myText,listaTestoAi)['bestMatch']['target'];
    console.log(stringSimilarity.findBestMatch(myText,listaTestoAi));

    for (let i = 0; i < listaTestoAi.length; i++) {
        const nodeli= document.createElement("p");
        // Create a text node:
        const textnode = document.createTextNode(listaTestoAi[i]);
        if(listaTestoAi[i]==bestMatch)
        {
            nodeli.id="bestMatch";
        }
        
        // Append the text node to the "li" node:
        nodeli.appendChild(textnode);
        document.getElementById("messageAi").appendChild(nodeli);
      }

}

function suggestionAccept()
{
    var myTextList = document.getElementById("myText").value.split(/[,.]+/);
    let bestMatch = document.getElementById("bestMatch");
    if(bestMatch==undefined)
    {
        //no suggestion
        return 0;
    }
    console.log("My text:"+myTextList);
    console.log("best:"+bestMatch.innerText);
    let testo="";
    let list = document.getElementById("myText").value.split(/[,.]+/);
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        if(i==list.length-1)
        {
            testo+=bestMatch.innerText;
        }
        else{
            testo+=list[i]+". ";
        }
        
      }
    
      console.log("ewd"+testo);
      document.getElementById("myText").value=testo;
}