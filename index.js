const icognitas = document.getElementsByClassName("icognita")
const ordemIcognitas = ["F","Q1","Q2","d"]
const potenciaDeIcoginitas = document.getElementsByClassName("potenciaDeIcognita")
const resultadoForca = document.getElementById("resultadoForca")






function calcularForca(){
    let output = ""
    for(let i = 0; i < icognitas.length; i++){
        if(!icognitas[i].value){
            let F = Number(icognitas[0].value)
            let FP = Number(potenciaDeIcoginitas[0].value)
            let Q1 = Number(icognitas[1].value)
            let Q1P = Number(potenciaDeIcoginitas[1].value)
            let Q2 = Number(icognitas[2].value)
            let Q2P = Number(potenciaDeIcoginitas[2].value)
            let d = Number(icognitas[3].value)*Number(icognitas[3].value)
            let dP = Number(potenciaDeIcoginitas[3].value)*2
            let res = 0
            let resP = 0
            switch (ordemIcognitas[i]){
                case "F":
                    res = (Q1*Q2*9)/d
                    console.log((Q1P+Q2P+9)-dP)
                    resP = (Q1P+Q2P+9)-dP
                    output = `F=${res}*10^${resP}N`
                    break;
                case "Q1":
                    res = (F*d)/Q2*9
                    resp = (FP+dP)-(Q2P+9)
                    output = `Q1=${res}*10^${resP}C`
                    break;
                case "Q2":
                    res = (F*d)/Q1*9
                    resp = (FP+dP)-(Q1P+9)
                    output = `Q2=${res}*10^${resP}C`
                    break;
                case "d":
                    res = (Q1*Q2*9)/F
                    resP = (Q1P+Q2P+9)-FP
                    output = `d=${res}*10^${resP}M`
                    break;

            }

        }
    }
    resultadoForca.textContent=output

    

}