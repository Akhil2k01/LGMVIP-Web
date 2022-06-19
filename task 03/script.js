function digit(num) {
    var a = document.form.textview;
    a.value += num;
}
function operator(op) {
    var v = document.form.textview;
    if (v.value != "") {
        v.value += op;
    }
}
function zero() {
    var v = document.form.textview;
    if (v.value != "") {
        v.value += '0';
    }
}
function twozero() {
    var v = document.form.textview;
    if (v.value != "") {
        v.value += '00';
    }
}
function equal() {
    var button = document.getElementsByClassName('none');
    var a = document.form.textview;
    var exp = a.value;

    if (exp) {
        try { a.value = eval(exp); }
        catch (e) {
            alert("Syntax Error!");
            document.form.textview.value = '';
        }
    }
    if (a.value == 0) {
        a.value = "";
    }
    if (a.value == 'Infinity') {
        alert("Can't divide by Zero!");
        document.form.textview.value = "";
    }
}

function remove() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function none() {
    alert('Press the Clear button!');
}

function del(){
    document.form.textview.value = '';
}