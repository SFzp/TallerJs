const contEncabezado = document.querySelector(".encabezado")
const contBtn = document.createElement("div")
const contInput = document.createElement("input")
const contTitle = document.createElement("H2")

document.getElementById("btn1").onclick = function(){
    const contTbl = document.createElement('table')
    const contTr = document.createElement('tr')
    const contThPlaca = document.createElement('th')
    const contThColor = document.createElement('th')

    quitarBotones()
    
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

        case "3": case "4":
            return "Rosa"

        case "5": case "6":
            return "Roja"

        case "7": case "8":
            return "Verde"

        case "9": case "0":
            return "Azul"
    }    
}

document.getElementById("btn2").onclick = function(){
    var contenedor
    document.getElementsByTagName("body")[0].style.textAlign = "start"
    contEncabezado.style.padding = "200px"
    var cont=0,total,edad=[],categoria=0,categoria2=0,categoria3=0,animal
    
    quitarBotones()

    for(var i = 0;i <3; i++){
        contenedor = document.createElement("div")

        const contRadioBtn = document.createElement("input")

        const contLabel = document.createElement("label")

        contRadioBtn.setAttribute("type", "radio")  
        
        contenedor.className = "form-check"

        contRadioBtn.className = "radio"
        contRadioBtn.className = "label"
        contLabel.className = "radio form-check-label"
        contRadioBtn.id = "radio"+i
        contLabel.id = "label"+i
        contRadioBtn.required = true
        contRadioBtn.name = "animal"

        contenedor.append(contRadioBtn)
        contenedor.append(contLabel)
        contEncabezado.append(contenedor)
    }

    document.getElementById("label0").textContent = "Elefante"
    document.getElementById("radio0").value = "Elefante"
    document.getElementById("label1").textContent = "Jirafa"
    document.getElementById("radio1").value = "Jirafa"
    document.getElementById("label2").textContent = "Chimpancé"
    document.getElementById("radio2").value = "Chimpancé"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"
    contEncabezado.appendChild(contBtn)

    document.getElementById("btnEnviar").onclick = function(){
        let animal = document.querySelector('input[name="animal"]:checked').value
        const contParrafo = document.createElement("p")
        contEncabezado.style.padding = "0"
        contBtn.style.display = "block"
        switch(animal){
            case "Elefante":
                total = 20
                break
            
            case "Jirafa":
                total = 15;
                break

            case "Chimpancé":
                total = 40
                break
        }

        for(var i = 0;i <3; i++){
            document.getElementsByClassName("form-check")[i].style.display = "none"
        }
        
        if(cont <= total){
            contTitle.textContent = "¿Que edad tiene el/la "+animal+" "+((cont < total) ? cont+1 : cont)+"?"
            contInput.className = "input"
            contInput.id = "input"
            contInput.required = "true"
            edad[cont] = [contInput.value]
            cont++
            contenedor.append(contInput)
            if(cont-1 == total){
                edad.shift()
                for(var i = 0; i < edad.length; i++){
                    if(edad[i] >= 0 && edad[i] <=1){
                       categoria += 1
                    }
                    else if(edad[i] < 3){
                        categoria2 += 1
                    }
                    else{
                        categoria3 += 1
                    }
                }

                contParrafo.innerHTML = "El porcentaje de edades de: "+animal+
                "<br>"+"De 0 a 1 año: "+((categoria/total)*100)+"%"+
                "<br>"+"De mas de 1 año y menos de 3: "+((categoria2/total)*100)+"%"+
                "<br>"+"De 3 o mas años: "+((categoria3/total)*100)+"%"
                contEncabezado.append(contParrafo)
                contInput.style.display = "none"
                contTitle.style.display = "none"
                contBtn.textContent = "Volver"
                contBtn.onclick = function(){
                    location.reload()
                }
            }
        }      

        contInput.style.width = "100%"
    }
    contenedor = document.createElement("div")
    contTitle.className = "title"

    contenedor.append(contTitle)
    contEncabezado.append(contenedor)
    contEncabezado.appendChild(contBtn)
}

document.getElementById("btn3").onclick = function(){
    var horasTrabajadas, total, horasExtra

    const contParrafo = document.createElement("p")
    contTitle.textContent = "Ingrese el número de horas trabajadas"
    contInput.className = "horasTrabajadas"
    contInput.id = "horasTrabajadas"
    contInput.required = "true"
    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    quitarBotones()

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.appendChild(contBtn)

    document.getElementById("btnEnviar").onclick = function(){
        horasTrabajadas = parseFloat(contInput.value)
        contEncabezado.append(contParrafo)
        if(horasTrabajadas <= 40){
            total = horasTrabajadas*20
            contParrafo.innerHTML = "Su sueldo es de $"+total
        }
        else{
            horasExtra = horasTrabajadas-40
            total=((horasExtra*25)+(40*20))
            contParrafo.innerHTML = "Su sueldo es de $"+total
        }
        contTitle.style.display = "none"
        contInput.style.display = "none"
        contBtn.textContent = "Volver"
        contBtn.onclick = function(){
            location.reload()
        }
    }

}

function quitarBotones(){
    for(var i = 0; i<15; i++){
        document.getElementsByClassName("btn")[i].style.display = "none"
    }
}