let intents = [
    "Я уверен, что ты самый лучший на свете человек!",
    "Я считаю, ты словно лучик солнца!",
    "Я верю, что ты делаешь только добрые дела!"
]
document.forms.nameForm.onsubmit = (e)=>{
    e.preventDefault()
    let name = document.forms.nameForm.name.value
    let response = document.getElementById("resp")
    let text = intents[Math.floor(Math.random()*intents.length)]
    if (name===""){
        response.innerText = "Даже не зная твоего имени, "+text
    }else{
        text = name
        if(name==="Диана"){
            if (Math.round(Math.random())){
                text = "Не знаю, что придумать отдельно для тебя, Диана, так что вот: "+text
            }
        }
        response.innerText = text
    }
}
