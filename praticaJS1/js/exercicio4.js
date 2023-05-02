function tratadorDeCliqueExercicio4() {
    let entrada = window.prompt('Insira o número')
    entrada = parseInt(entrada)
    if (30 <= entrada && entrada <= 50) {
        console.log(entrada + ' Está no intervalo [30,50]')
    } else {
        if (60 <= entrada && entrada <= 100) {
            console.log(entrada + ' Está no intervalo [60,100]')
        } else {
            console.log("O número informado não está em nenhum dos dois intervalos.")
        }
    }

}