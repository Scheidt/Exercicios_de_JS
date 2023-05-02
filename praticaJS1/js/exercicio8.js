function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
    //edite esta função!
    let regiaoFiscal = undefined
    let numeroRegiao = String(cpfInformado)
    numeroRegiao = cpfInformado.slice(8,9)
    console.log(cpfInformado)
    //console.log(numeroRegiao)
    numeroRegiao = parseInt(numeroRegiao)
    const regiao = numeroRegiao;
    switch(regiao){
            case 0: regiaoFiscal = 'RS'
            break;
            case 1: regiaoFiscal = 'DF, GO, MT, MS e TO'
            break;
            case 2: regiaoFiscal = 'AC, AP, AM, PA, RO e RR'
            break;
            case 3: regiaoFiscal = 'CE, MA e PI'
            break;
            case 4: regiaoFiscal = 'AL, PB, PE e RN'
            break;
            case 5: regiaoFiscal = "BA e SE"
            break;
            case 6: regiaoFiscal = "MG"
            break;
            case 7: regiaoFiscal = "ES e RJ"
            break;
            case 8: regiaoFiscal = "SP"
            break;
            case 9: regiaoFiscal = "PR e SC"
            break;
    }

    //----------------------------
    //
    //1 DF, GO, MT, MS e TO;
    //2 AC, AP, AM, PA, RO e RR;
    //3 CE, MA e PI;
    //4 AL, PB, PE e RN;
    //5 BA e SE;
    //6 MG;
    //7 ES e RJ;
    //8 SP;
    //9 PR e SC;
    //0 RS.
    return regiaoFiscal
}



function tratadorDeCliqueExercicio8() {
    let textCPF = document.getElementById("textCPF")
	let textRegiao = document.getElementById("regiaoFiscal")

    const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
    textRegiao.textContent = "Região fiscal: "+regiaoFiscal
}
