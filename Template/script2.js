function result() {
    var mark = 0;
    var answer = "Плохо";
    if (document.getElementById('radio-2').checked) {
        mark += 1;
    }
    if (document.getElementById('checkbox-1').checked && document.getElementById('checkbox-4').checked && !document.getElementById('checkbox-2').checked && !document.getElementById('checkbox-3').checked) {
        mark += 1;
    }

    if (document.getElementById('word').value.toLowerCase() == "фанта" || document.getElementById('word').value.toLowerCase() == "fanta") {
        mark += 1;
    }
    if (document.getElementById('number').value == "330") {
        mark += 1;
    }

    if (document.getElementById('select-1').value == 1 && document.getElementById('select-2').value == 1 && document.getElementById('select-3').value == 1) {
        mark += 1;
    }
    

    if (mark < 2) {
        answer = "Плохо";
    } else {
        if (mark < 3) {
        answer = "Сойдет";
        } else {
            if (mark <= 4) {
            answer = "Нормально";
            } else {
                if (mark == 5) {
                    answer = "Круто";
                }
            }
        }
    }

    document.getElementById('mark').value = mark;
    document.getElementById('answer').value = answer;
}

function reset(){
    document.getElementById('myform').reset();
}