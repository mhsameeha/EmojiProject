let myemojiArray = ["📚 ", "💻 ", "🔥 "]
let myEmoji = document.getElementById("emoji-container")
let inputValue = document.getElementById("emoji-input")


for(let i = 0; i<myemojiArray.length; i++){
    myEmoji.textContent += myemojiArray[i]
}

let pushbtn = document.getElementById("push-btn")
pushbtn.addEventListener("click", function(){
    if (inputValue.value){
        myemojiArray.push(inputValue.value)
        inputValue.value = ""
        myNewArray()
    }
})
function myNewArray(){
    myEmoji.textContent = ""
for(let i = 0; i<myemojiArray.length; i++){
    myEmoji.textContent += myemojiArray[i]
}
}

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    myemojiArray.pop()
    myNewArray()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    myemojiArray.shift()
    myNewArray()
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    myemojiArray.unshift(inputValue.value)
    inputValue.value = ""
    myNewArray()
})


