
document.getElementById("btn1").onclick = function(){
    const contInput = document.createElement("input")
    const contEncabezado = document.querySelector(".encabezado")
    const contBtn = document.createElement("div")
    const contTitle = document.createElement("H2")
    const contTbl = document.createElement('table')
    const contTr = document.createElement('tr')
    const contThPlaca = document.createElement('th')
    const contThColor = document.createElement('th')
    for(var i = 0; i<15; i++){
        document.getElementsByClassName("btn")[i].style.display = "none"
    }
    
    contTitle.textContent = "Ingrese la cantidad de autos a evaluar"

    contInput.className = "NumAutos"
    contInput.id = "NumAutos"
    contInput.required = "true"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"

    contThPlaca.className = "th"
    contThColor.className = "th"

    contBtn.textContent = "Enviar"

    contTbl.append(contTr)

    contTr.append(contThPlaca, contThColor)    

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)
    contEncabezado.append(contTbl)

    

    document.getElementById("btnEnviar").onclick = function(){
        var NumAutos = parseInt(document.getElementById("NumAutos").value);
        let placas = new Map();
        if(NumAutos > 0 && NumAutos <= 9){                   
            contBtn.id = "btnEnviar_NumPlacas"
            contInput.id = "placa"
            document.getElementById("placa").value = "";
            var cont = 1

            contTitle.textContent = "Ingrese la placa del automovil "+(cont)
            document.getElementById("btnEnviar_NumPlacas").onclick = function(){
                if(cont <= NumAutos){
                    var placa = document.getElementById("placa").value
                    var caracterFinal = placa.charAt(placa.length - 1)
                    if(caracterFinal >= 0){
                        placas.set(document.getElementById("placa").value, colorCalcomania(caracterFinal))
                        cont++
                        contTitle.textContent = "Ingrese la placa del automovil "+((cont <= NumAutos) ? cont : cont-1)
                        document.getElementById("placa").value = "";
                        if(cont-1 == NumAutos){
                            contTbl.className = "table table-bordered"
                            contThPlaca.textContent = "Placa"
                            contThColor.textContent = "Color"
                            placas.forEach((valor,clave) => {
                                const contTblTr = document.createElement("tr");
                                for(var j = 0; j < 2; j++){
                                    const contTbltd = document.createElement("td")
                                    console.log('La clave es: ' + clave + ' y el valor es ' + valor)
                                    contTbltd.textContent = (j == 0 ? clave:valor)
                                    contTblTr.append(contTbltd)
                                }
                                contTbl.append(contTblTr)
                            })
                            contTitle.style.display = "none"
                            contInput.style.display = "none"
                            contBtn.textContent = "Volver"
                            contBtn.onclick = function(){
                                location.reload()
                            }
                        }

                    }
                    else{
                        alert("La placa debe tener un numero al final del 0 al 9")
                    }  
                }
            }
        }
        else{
            alert("Ingrese un caracter valido o mayor a 0")
        }
    }
}

function colorCalcomania(caracter){
    switch(caracter){
        case "1": case "2":
            return "Amarilla"
            break;

        case "3": case "4":
            return "Rosa"
            break;

        case "5": case "6":
            return "Roja"
            break;

        case "7": case "8":
            return "Verde"
            break;

        case "9": case "0":
            return "Azul"
            break;
    }    
}