const icognitas = document.getElementsByClassName("icognita")
const ordemIcognitas = ["Q1","Q2","Q3","dQ1Q2","dQ1Q3","dQ2Q3"]
const anguloDeIcoginitas = document.getElementsByClassName("anguloDeIcognita")
const potenciaDeIcoginitas = document.getElementsByClassName("potenciaDeIcognita")
const resultadoForca = document.getElementById("resultadoForca")

            
            
            
            
            
function calcularForca(){         
            
            
    let Q1 = Number(icognitas[0].value)
    let Q1A = Number(anguloDeIcoginitas[0].value)
    let Q1P = Number(potenciaDeIcoginitas[0].value)

    let Q2 = Number(icognitas[1].value)
    let Q2A = Number(anguloDeIcoginitas[1].value)
    let Q2P = Number(potenciaDeIcoginitas[1].value)

    let Q3 = Number(icognitas[2].value)
    let Q3P = Number(potenciaDeIcoginitas[2].value)
    let Q3A = Number(anguloDeIcoginitas[2].value)
    
    let dQ1Q2 = Number(icognitas[3].value)*Number(icognitas[3].value)
    let dQ1Q2P = Number(potenciaDeIcoginitas[4].value)*2

    let dQ1Q3 = Number(icognitas[3].value)*Number(icognitas[3].value)
    let dQ1Q3P = Number(potenciaDeIcoginitas[4].value)*2

    let dQ2Q3 = Number(icognitas[5].value)*Number(icognitas[3].value)
    let dQ2Q3P = Number(potenciaDeIcoginitas[5].value)*2

    let res13 = 0
    let resP13 = 0
    res13 = (Q1*Q3*9)/dQ1Q3
    resP13 = (Q1P+Q3P+9)-dQ1Q3P

    let res23 = 0
    let resP23 = 0
    res23 = (Q2*Q3*9)/dQ2Q3
    resP23 = (Q2P+Q3P+9)-dQ2Q3P

    let res=0
    let resP=0
    
    let res13Sqr=(res13*res13)
    let resP13Sqr=resP13*2
    
    let res23Sqr=(res23*res23)
    let resP23Srq=resP23*2
    
    

    while(resP13Sqr>resP23Srq){
        resP23Srq+=1
        res23Sqr/=10
    }
    while(resP23Srq>resP13Sqr){
        resP13Sqr+=1
        res13Sqr/=10
    }
    res=res13Sqr+res23Sqr
    resP=resP13Sqr


    rad=Q3A*Math.PI/180

    let tempres=2*res13*res23*Math.cos(rad)
    let tempresP=resP13+resP23

    while(resP>tempresP){
        tempresP+=1
        tempres/=10
    }
    while(tempresP>resP){
        resP+=1
        res/=10
    }
    resP=tempresP
    res+=tempres

    res=Math.sqrt(res)
    resP/=2
    resultadoForca.textContent=`${res}*10^${resP}`

}