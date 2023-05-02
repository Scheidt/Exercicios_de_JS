function tratadorDeCliqueExercicio2() {
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
    var horario = new Date();
    var horas = horario.getHours();
    var ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12
    horas = horas ? horas : 12 // se horas(for diferente de 0, pois zero é False) então mantém o valor de horas, se não muda pra 12
    var minutos = horario.getMinutes();
    minutos = minutos < 10 ? '0'+ minutos : minutos
    var segundos = horario.getSeconds();
    var outputString = horas + ampm + ':' + minutos + 'm' + ':' + segundos + 's'
    alert(outputString)
}