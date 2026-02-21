const icognitas = document.getElementsByClassName("icognita")
const ordemIcognitas = ["Q1","Q2","Q3","distanciaQ1Q2","distanciaQ1Q3","distanciaQ2Q3"]
const potenciaDeIcoginitas = document.getElementsByClassName("potenciaDeIcognita")
const resultadoEquilibrio = document.getElementById("resultadoEquilibrio")

function calcularEquilibrio(){
            let Q1 = Number(icognitas[0].value)
            let Q1P = Number(potenciaDeIcoginitas[0].value)
            let Q2 = Number(icognitas[1].value)
            let Q2P = Number(potenciaDeIcoginitas[1].value)
            let Q3 = Number(icognitas[2].value)
            let Q3P = Number(potenciaDeIcoginitas[2].value)
            let Intervalo = Number(icognitas[3].value)
            // let distanciaQ1Q2 = Number(icognitas[3].value)
            // let distanciaQ1Q2P = Number(potenciaDeIcoginitas[3].value)
            // let distanciaQ1Q3 = Number(icognitas[4].value)
            // let distanciaQ1Q3P = Number(potenciaDeIcoginitas[4].value)
            // let distanciaQ2Q3 = Number(icognitas[5].value)
            // let distanciaQ2Q3P = Number(potenciaDeIcoginitas[5].value)

            let F13 = 0
            let F13P = 0
            F13 = (Q1*Q3*9)
            F13P = (Q1P+Q3P+9)
            F13*=(Math.pow(10,F13P))

            let F23 = 0
            let F23P = 0
            F23 = (Q2*Q3*9)
            F23P = (Q2P+Q3P+9)
            F23*=(Math.pow(10,F23P))
            let x = 0
            let res = ""
            if (F13>F23){
                x = (Math.sqrt(F13/F23)+1)/Intervalo
                res = `de Q1 até Q3 ${Intervalo-x}M e de Q2 até Q3 ${x}M`
            }
            else{
                x = (Math.sqrt(F23/F13)+1)/Intervalo
                res = `de Q1 até Q3 ${x}M e de Q2 até Q3 ${Intervalo-x}M`
            }

            resultadoEquilibrio.textContent=res
}