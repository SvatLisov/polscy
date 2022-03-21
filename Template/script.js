function sizePic()
{
        size = document.getElementById("size").value;
        img = document.getElementById("cola");
        img.width = 200 + 20*size;
        img.height = 200 + 20*size;
}

function onChecked(div, checkbox) 
{
    if (document.getElementById(checkbox).checked) {
        document.getElementById(div).style.display = "block";
    } else {
        document.getElementById(div).style.display = "none";
    }
}

function onColorChanged() {
    document.getElementById('win').style.color = document.getElementById('color').value;
}


function mainFunс()
{ 
    let name = document.getElementById('user').value;
    let surname = document.getElementById('surname').value;
    let drink = document.getElementById('drink').value;
    let check = "";

    if (document.getElementById("checkbox").checked) {
        check = "Ваш любимый вкус сока:" + document.querySelector('input[name="radio1"]:checked').value + "<br>";
    }
  
    document.getElementById('answer').innerHTML =  "Имя: " + name + "<br>"+ "Фамилия: " + surname + "<br>" + "Ваш любимый лимонад: " + drink + "<br>" + check + "<br>" + "Спасибо за участие!";
    document.getElementById('win').style.display = "block";

     event.preventDefault();
}