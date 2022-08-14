const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    // user input split, reversed, & joined in single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        //return console.log("Not Palindrome !");
        return infoTxt.innerHTML = `No, <span> '${txtInput.value}' </span> isn't a Palindrome!`;
    }
    infoTxt.innerHTML = `Yes, <span> '${txtInput.value}' </span> is a Palindrome!`;
    //console.log("Palindrome");
});

txtInput.addEventListener("keyup", () => {
    // spaces & sp chars removed
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    // console.log(filterInput);
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});
