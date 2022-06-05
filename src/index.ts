let nro1: number = Number(prompt("ingrese el primer numero entero"));
let nro2: number = Number(prompt("ingrese el segundo numero entero"));
let suma: number = 0;

if (Number.isInteger(nro1 && nro2)) {
      for (let i: number = nro1; i <= nro2; i++) {
      suma = suma + i;
    }
    console.log("la suma es: " + suma);
  } else 
  console.log("los numeros a sumar deben ser enteros");
}
