//let name = "my name"
//const interest_rate = 8.5

let person = 
{
    name: 'Dave',
    age: 30
};

console.log(person);
console.log(person['name']);

let selected_colors = ['red', 'blue'];
console.log(selected_colors[1]);

//console.log(Date())

function sum(a = 1, b = 8)
{
    return a + b;
}

console.log(sum(3, 2));
//document.write(Date())
let i = 0;
function btnclick()
{
    i++;
    console.log("btn clicked..");
}

function btnclick2()
{
    i++;
    document.getElementById("demo").innerHTML= `content changed  ${i}`;
}

let list_of_colors = ['DarkGoldenRod', 'BurlyWood', 'AntiqueWhite', 'Bisque', 
'CadetBlue', 'DarkCyan', 'DarkGrey', 'DarkCyan', 'DarkSalmon', 'DarkSeaGreen', 
'DodgerBlue', 'LightGreen', 'LightSeaGreen', 'OliveDrab'];

color_num = Math.floor(Math.random() * list_of_colors.length);
color_change = list_of_colors[color_num];
console.log(color_change);

function btnclick3()
{
    let date = new Date();
    document.getElementById('para2').innerHTML = date.getFullYear();
}

document.body.style.backgroundColor = list_of_colors[color_num];