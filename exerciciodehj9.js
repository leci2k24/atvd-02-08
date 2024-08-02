função  multiplica ( a ,  b )  {
    retornar  a  *  b ;
}

const  resultadoMultiplicacao  =  multiplica ( 7 ,  8 ) ;
console . log ( "Resultado da multiplicação:" ,  resultadoMultiplicação ) ;

função  quadrada ( número )  {
    retornar  numero  *  numero ;
}

const  arrayOriginal  =  [ 1 ,  2 ,  3 ,  4 ,  5 ] ;
const  arrayQuadrados  =  arrayOriginal . mapa ( quadrado ) ;
console . log ( "Array com os quadrados:" ,  arrayQuadrados ) ;