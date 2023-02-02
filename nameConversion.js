// Gathering all html elements using Id

let uservalue = document.getElementById("text");
let convertbtn = document.getElementById("convert-btn");

let camelCase = document.getElementById("camel-case");
let pascalCase = document.getElementById("pascal-case");
let snakeCase = document.getElementById("snake-case");
let screamingSnakeCase = document.getElementById("screaming-snake-case");
let kebabCase = document.getElementById("kebab-case");
let screamingKebabCase = document.getElementById("screaming-kebab-case");

// functions to convert userinput

// camelCase
function convertcamelCase(userinput) {
    
    return userinput.split(' ')
    .map(a => a.trim())
    .map(a => a[0].toUpperCase() + a.substring(1))
    .join("");
}

//pascalCase
function convertpascalCase(userinput) {
   userinput = userinput.toLowerCase().split(' ');
   
   for (let i = 0; i < userinput.length; i++) {
    //console.log('inside for');
    userinput[i] = userinput[i].charAt(0).toUpperCase()+userinput[i].slice(1);
   }
   return userinput.join(' ');
}

//snakeCase
function convertsnakeCase(userinput) {
    return userinput.split(' ')
    .map(str => str.toLowerCase())
    .join("_");
}

//screamingKebabCase
function convertscreamingSnakeCase(userinput) {
    userinput = userinput.toLowerCase().split(' ').join("_");
    return userinput.toUpperCase();
}

//kebabCase
function convertkebabCase(userinput) {
    return userinput = userinput.split(' ').join("-");
}

//screamingKebabCase
function convertscreamingKebabCase(userinput) {
    userinput = userinput.split(' ').join("-");
    return userinput.toUpperCase();
}

// adding event listenrr to button(convert) on click
convertbtn.addEventListener("click", () => {
   // console.log('button clicked!!!');
    camelCase.innerHTML = convertcamelCase(uservalue.value);
    pascalCase.innerHTML = convertpascalCase(uservalue.value);
    snakeCase.innerHTML = convertsnakeCase(uservalue.value);
    screamingSnakeCase.innerHTML = convertscreamingSnakeCase(uservalue.value);
    kebabCase.innerHTML = convertkebabCase(uservalue.value);
    screamingKebabCase.innerHTML = convertscreamingKebabCase(uservalue.value);
});