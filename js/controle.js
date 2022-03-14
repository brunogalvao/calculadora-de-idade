function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1;
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    // validar a data
    if ( d1 > 31 ) {
        document
            .getElementById('age')
            .innerHTML = 'Dia Inválido';
        return false;
    }

    if ( m1 > 12 ) { 
        document
            .getElementById('age')
            .innerHTML = 'Mês Inválido';
        return false;
    }

    if( d1 > d2 ){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }

    if ( m1 > m2 ) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }


    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    const textoAge = 'Você tem <b>' + y + '</b> anos, <b>' + m + '</b> meses e <b>' + d + '</b> dias.';

    document
            .getElementById('age')
            .innerHTML = textoAge;
    setTimeout(function(){
        document
            .getElementById('age')
            .innerHTML = '';
    }, 5000)

}

function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}