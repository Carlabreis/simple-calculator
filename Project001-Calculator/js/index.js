
let currentAnswer = []


calculatorbody = document.querySelectorAll("li")

calculatorbody.forEach((item) => {

  item.addEventListener("click", function(){
    let currentButton = item.innerText

    if (!item.classList.contains("operator")) {
      currentButton = Number(currentButton)
    }


    currentAnswer.push(currentButton)

    console.log(currentAnswer)


    if (currentButton === "=") {
      equal = (x,y,z)=> {
        x = currentAnswer[0];
        z = currentAnswer[2];

        if (y === "+") {
          a = x+z

        }
        let a = x+z
        console.log(a)

      }
      console.log(equal())
    }


  });
});
