"use strict";
// home work 1

let progress = document.querySelector(".main-progress");
document.querySelector(".btn-1").onclick = function () {
    let progressInterval = setInterval(() => {
        let a = (parseFloat(getComputedStyle(document.querySelector(".progress-2")).width) + 55.5);
        let l = document.querySelector(".progress-2").style.width = a + "px";
        document.querySelector(".progress-2").innerHTML = a + "px";
        console.log(l)
        if (l == "1110px") {
            clearInterval(progressInterval)
            document.querySelector(".main-progress").classList.add("d-none")
            document.querySelector(".succes").classList.remove("d-none")
            document.querySelector(".succes").classList.add("d-block")

        }
    }, 1000)

    // home work 2

    progress.onmouseover = function () {
        clearInterval(progressInterval)
        document.querySelector(".main-progress").classList.remove("d-block")
        document.querySelector(".main-progress").classList.add("d-none")
        document.querySelector(".mouseover").classList.remove("d-none")
        document.querySelector(".mouseover").classList.add("d-block")


    }

    document.querySelector(".mouseover").onmouseout = function () {
        progressInterval = setInterval(() => {
            let a = (parseFloat(getComputedStyle(document.querySelector(".progress-2")).width) + 55.5);
            let l = document.querySelector(".progress-2").style.width = a + "px";
            document.querySelector(".progress-2").innerHTML = a + "px";
            console.log(l)

            document.querySelector(".main-progress").classList.remove("d-none")
            document.querySelector(".main-progress").classList.add("d-block")

            document.querySelector(".mouseover").classList.remove("d-block")
            document.querySelector(".mouseover").classList.add("d-none")

            if (l == "1110px") {
                clearInterval(progressInterval)
                document.querySelector(".main-progress").classList.remove("d-block")
                document.querySelector(".main-progress").classList.add("d-none")

                document.querySelector(".succes").classList.remove("d-none")
                document.querySelector(".succes").classList.add("d-block")
            }


        }, 1000)


    }

    //    home work 3
    document.querySelector(".mouseover").onclick = function () {
        clearInterval(progressInterval)
        document.querySelector(".mouseover").onmouseout = function () {
            clearInterval(progressInterval)
        }
    }

};



// home work 4

[...document.querySelectorAll(".main-ul li.item")].map(li => {
    li.onclick = function () {
        document.querySelector(".main-ul li.active").classList.remove("active");
        this.classList.add("active");

        document.querySelector(".big-images img").src = document.querySelector(".main-ul li.active img").src
        document.querySelector(".big-images").classList.remove("d-none")
        document.querySelector(".big-images").classList.add("d-block")
        document.querySelector(".images").classList.add("d-none")
    }
})

document.querySelector(".left").onclick = function () {
    let activeLI = document.querySelector(".main-ul li.active");
    if (activeLI.previousElementSibling !== null) {
        activeLI.classList.remove("active");
        activeLI.previousElementSibling.classList.add("active");
        document.querySelector(".big-images img").src = document.querySelector(".main-ul li.active img").src
    } else {
        activeLI.classList.remove("active")
        activeLI = document.querySelector(".main-ul li:last-child");
        activeLI.classList.add("active")
        document.querySelector(".big-images img").src = document.querySelector(".main-ul li.active img").src
    }
}



document.querySelector(".right").onclick = function () {
    let activeLI = document.querySelector(".main-ul li.active");
    if (activeLI.nextElementSibling !== null) {
        activeLI.classList.remove("active");
        activeLI.nextElementSibling.classList.add("active");
        document.querySelector(".big-images img").src = document.querySelector(".main-ul li.active img").src
    }
    else {
        activeLI.classList.remove("active");
        activeLI = document.querySelector(".main-ul li:first-child");
        activeLI.classList.add("active")
        document.querySelector(".big-images img").src = document.querySelector(".main-ul li.active img").src
    }
}
document.querySelector(".close").onclick = function () {
    document.querySelector(".big-images").classList.remove("d-block");
    document.querySelector(".big-images").classList.add("d-none");
    document.querySelector(".images").classList.remove("d-none");
    document.querySelector(".images").classList.remove("d-block");
}

// home work 5

// name
let warningName = document.querySelector(".warning-name");
let NameValue = document.querySelector(".name");
NameValue.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        let value = NameValue.value;
        console.log(value)
        if (value.length <= 3) {
            warningName.classList.remove("d-none");
            warningName.classList.add("d-block");
        }
        else if (value == value.toLowerCase()) {
            warningName.classList.remove("d-none");
            warningName.classList.add("d-block");
        }
        else {
            warningName.classList.remove("d-block");
            warningName.classList.add("d-none");
        }


        NameValue.value = ""

    }

})

// surname

let warningSurname = document.querySelector(".warning-surname")
let surnameValue = document.querySelector(".surname")
surnameValue.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        let value = surnameValue.value;
        if (value.length <= 3) {
            warningSurname.classList.remove("d-none");
            warningSurname.classList.add("d-block");
        }
        else if (value == value.toLowerCase()) {
            warningSurname.classList.remove("d-none");
            warningSurname.classList.add("d-block");
        }
        else {
            warningSurname.classList.remove("d-block");
            warningSurname.classList.add("d-none");
            console.log(value)
        }
        surnameValue.value = ""
    }
})




let warningPassword = document.querySelector(".warning-password")
let passwordValue = document.querySelector(".password")
passwordValue.addEventListener("keydown", function (e) {
    // if-1
    if (e.keyCode == 13) {
        let value = passwordValue.value;
            if (value.length >= 8 && value === passwordValue.value.toUpperCase() && (value.indexOf("@") !== -1 || value.indexOf("#")
                !== -1 || value.indexOf("!") !== -1 || value.indexOf("_") !== -1) && !isNaN(value)) {
                warningPassword.classList.remove("d-block");
                warningPassword.classList.add("d-none");
                console.log(value)
            } else {
            warningPassword.classList.remove("d-none");
            warningPassword.classList.add("d-block");
            console.log(value)
        }
        passwordValue.value = ""
    }
})


// if-2
// if (value.length >= 8) {
//     //    if-3
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] == value[i].toUpperCase()) {
//             if (value.indexOf("@") !== -1 || value.indexOf("#") !== -1 || value.indexOf("!") !== -1 || value.indexOf("_") !== -1) {
//                 // if-4
//                 warningPassword.classList.remove("d-block");
//                 warningPassword.classList.add("d-none");
//                 console.log(value)
//             }
//            break

//         }


//         else {

//             warningPassword.classList.remove("d-none");
//             warningPassword.classList.add("d-block");
//             console.log(value)
//             break
//         }

//         console.log("if" + value)
//     }
// }

// else {
//     warningPassword.classList.remove("d-none");
//     warningPassword.classList.add("d-block");
//     console.log("else " + value)
// }




//home work 6
let country = ["Azerbaijan", "Turkey", "Russia"];

let city = [
    {
        name: "baku",
        country: "Azerbaijan"
    },
    {
        name: "barda",
        country: "Azerbaijan"
    },
    {
        name: "istanbul",
        country: "Turkey"
    },

    {
        name: "ankara",
        country: "Turkey"
    },
    {
        name: "Moskva",
        country: "Russia"
    },

    {
        name: "Kuban",
        country: "Russia"
    },

]

let firstUl = document.querySelector(".first-ul");
for (let i = 0; i < country.length; i++) {
    let li = document.createElement("li");
    li.classList.add("r-country");
    li.innerHTML = country[i];

    let cityUl = document.createElement("ul");
    cityUl.classList.add("city-ul","d-none");
    let cityLi = document.createElement("li");
    cityUl.appendChild(cityLi);
    for (let j = 0; j < city.length; j++) {
        if (city[j].country == country[i]) {
            cityLi.innerText = city[j].name;
            cityUl.appendChild(cityLi);
            console.log(cityUl)
        }
    }
    li.appendChild(cityUl)
    firstUl.appendChild(li)
};

[...document.querySelectorAll(".first-ul .r-country")].map((a) => 
    {
        a.onclick=function(){
            console.log("s")
        document.querySelector(".first-ul li     .city-ul").classList.remove("d-none")
    }


})









