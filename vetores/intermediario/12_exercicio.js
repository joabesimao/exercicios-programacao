/**
 * Intermediário 12. Leia 3 vetores de 9 posições 
 * e crie outro com o 1º terço do primeiro,
 *  o 2º.terco do segundo 
 * e o ultimo terço do 3º.
 *  Escrever o vetor resultante ao final.
 * 
 * [1,2,3,4,5,6,7,8,9]
 * [10,20,30,40,50,60,70,80,90]
 * [100,200,300,400,500,600,700,800,900]
 * 
 * 
 * expect => [1,2,3,40,50,60,700,800,900]
 * 
 * 
 */


const array = [1,2,3,4,5,6,7,8,9]
const segundoArray = [10,20,30,40,50,60,70,80,90]
const terceiroArray = [100,200,300,400,500,600,700,800,900]


const separaNumeros = (array,inicioPosicao,fimPosicao) =>{
    const pegaTerco = array.slice(inicioPosicao,fimPosicao)
    return pegaTerco
    
    
    

}

const insereNoArray = (result,arrayParaInserir)=>{
    arrayParaInserir.push(...result)
}

let arrayNovo = []
const inserirPrimeirosNumeros = separaNumeros(array,0,3)
const inserirSegundosNumeros = separaNumeros(segundoArray,3,6)
const inserirTerceiros = separaNumeros(terceiroArray,6,9)

insereNoArray(inserirPrimeirosNumeros,arrayNovo)
insereNoArray(inserirSegundosNumeros,arrayNovo)
insereNoArray(inserirTerceiros,arrayNovo)





console.log(arrayNovo)
