let valor = prompt('Ingrese el valor')
let cuotas = prompt('Ingrese la cantidad de cuotas que prefiera 3, 6 o 12')

if ( cuotas == 3 ) {
    alert ( 'El monto a pagar en 3 cuotas es de: ' + valor * 1.15 / 3 )

} else if ( cuotas == 6 ) {
    
    alert ( 'El monto a pagar en 6 cuotas es de: ' + valor * 1.20 / 6)
} else ( cuotas == 12 ) [
   
    alert ( 'El monto a pagar en 12 cuotas es de: ' + valor * 1.35 / 12)
]

