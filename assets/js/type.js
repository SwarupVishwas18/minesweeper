document.body.onload = init;

var typeText
var typer, ch, submitBtn, typeArr

function init(){
     typer = document.getElementById('title');
 ch = 0
    typeText = typer.textContent;

    typer.textContent = ""
    setTimeout(start, 100)

}

function start(){
    if(ch<typeText.length){
    typer.textContent += typeText.charAt(ch)
    ch++
    setTimeout(start, 200)
    }
    else{
        console.log('out of bounds')
        typeArr = typeText.split('');
        console.log(typeArr)

        setTimeout(erase, 200)

    }
}


function erase(){
    if(ch>=0){
        typeArr.pop()
        typer.textContent = typeArr.join('')
        console.log(typeArr)
        ch--
        setTimeout(erase, 200)
    }
else{
    console.log("Bounds Again..!!")
    setTimeout(start, 0)

}
}

