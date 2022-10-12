const contEncabezado = document.querySelector(".encabezado")
const contBtn = document.createElement("div")
const contInput = document.createElement("input")
const contTitle = document.createElement("H2")
const contBtnCal = document.createElement("div")
const contParrafo = document.createElement("p")

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
                final()
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
        final()
    }

}

document.getElementById("btn4").onclick = function(){
    var hombres = [], mujeres = [], cont = 0
    const contInputM = document.createElement("input")
    contTitle.textContent = "Ingrese la edad del hombre y la mujer 1"
    contInput.className = "NHombres"
    contInput.id = "NHombres"
    contInput.required = "true"
    contInput.placeholder ="Hombre"

    contInputM.className = "NMujeres"
    contInputM.id = "NMujeres"
    contInputM.required = "true"
    contInputM.placeholder ="Mujer"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contBtnCal.className = "btn btn-primary"
    contBtnCal.id = "btnCalcular"
    contBtnCal.textContent = "Calcular"

    contBtnCal.style.display = "block"

    quitarBotones()
    
    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contInputM)
    contEncabezado.append(contBtn)
    contEncabezado.appendChild(contBtnCal)

    document.getElementById("btnEnviar").onclick = function(){
        contTitle.textContent = "Ingrese la edad del hombre y la mujer "+ (cont+2)
        hombres[cont] = [parseInt(contInput.value)]

        mujeres[cont] = [parseInt(contInputM.value)]

        cont++
    }

    document.getElementById("btnCalcular").onclick = function(){
        var edad_mujeres = 0, edad_hombres = 0, promedio_general = 0
        for(var i = 0; i < cont;i++){
            edad_mujeres += parseInt(mujeres[i])
            edad_hombres += parseInt(hombres[i])
            promedio_general = parseInt(edad_hombres + edad_mujeres)
        }        

        contParrafo.innerHTML = "El promedio de mujeres es: " + (edad_mujeres/cont)
        +"<br>El promedio de hombres es: " + (edad_hombres/cont)
        +"<br>El promedio general es: " + (promedio_general/(cont*2))
        console.log((cont*2))
        contEncabezado.append(contParrafo)

        contInputM.style.display = "none"
        contBtnCal.style.display = "none"
        final()
    }

}

document.getElementById("btn5").onclick = function(){
    var num = [], cont = 0
    const contBtnNumMenor = document.createElement("div")
    contTitle.textContent = "Ingrese un numero - #"+1
    contInput.className = "Numero"
    contInput.id = "Numero"
    contInput.required = "true"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contBtnNumMenor.className = "btn btn-primary"
    contBtnNumMenor.id = "btnNumMenor"
    contBtnNumMenor.textContent = "Encontrar el menor numero"

    quitarBotones()

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)
    contEncabezado.appendChild(contBtnNumMenor)

    contBtnNumMenor.style.display = "block"

    document.getElementById("btnEnviar").onclick = function(){
        contTitle.textContent = "Ingrese un numero - #"+(cont+2)
        num[cont] = parseInt(contInput.value)
        cont++
        for (var k = 1; k < cont; k++) {
            for (var i = 0; i < (cont - k); i++) {
                if (num[i] > num[i + 1]) {
                    let aux = num[i];
                    num[i] = num[i + 1];
                    num[i + 1] = aux;
                }
            }
        }
    }
    document.getElementById("btnNumMenor").onclick = function(){
        contBtnNumMenor.style.display = "none"
        final()
        contParrafo.innerHTML = "El menor numero es: "+num[0]
        contEncabezado.append(contParrafo)
    }
    
}

document.getElementById("btn6").onclick = function(){
    var peso_anterior = [], suma = [], contPersonas = 0, contPeso = 0, DifPeso = []
    const contBtnNPeso = document.createElement("div")
    contTitle.textContent = "Ingrese el peso anterior de la persona #"+1
    contInput.className = "Peso"
    contInput.id = "Peso"
    contInput.required = "true"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contBtnNPeso.className = "btn btn-success"
    contBtnNPeso.id = "btnNPeso"
    contBtnNPeso.textContent = "Enviar"
    contBtnNPeso.style.display = "none"

    quitarBotones()

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtnNPeso)
    contEncabezado.appendChild(contBtn)

    document.getElementById("btnEnviar").onclick = function(){
        if(contPersonas < 5){
            console.log("a")
            contPeso = 0
            contTitle.textContent = "Ingrese el peso anterior de la persona #"+(contPersonas+1)
            peso_anterior[contPersonas] = parseInt(contInput.value)
            contPersonas++
            contBtn.style.display = "none"
            contTitle.textContent = "Ingrese el peso de la bácula #"+(contPeso+1)
            contBtnNPeso.style.display = "inline"
        }
    }

    contBtnNPeso.onclick = function(){
        if(contPeso < 10){
            contTitle.textContent = "Ingrese el peso de la bácula #"+((contPeso < 9) ? contPeso+2 : contPeso+1)
            suma[contPersonas-1] = (contPeso <= 0 ) ? parseInt(contInput.value) : suma[contPersonas-1] + parseInt(contInput.value)
            DifPeso[contPersonas-1] = (contPeso <= 0 ) ? (parseInt(contInput.value) - (peso_anterior[contPersonas-1])) : DifPeso[contPersonas-1] 
                                        + (parseInt(contInput.value) - (peso_anterior[contPersonas-1]))
            contPeso++
            console.log(DifPeso)
            if(contPeso > 9){
                contBtnNPeso.style.display = "none"
                contBtn.style.display = "inline"
                if(contPersonas < 5){
                    contTitle.textContent = "Ingrese el peso anterior de la persona #"+ (contPersonas+1)
                }else{
                    for(var i = 0; i < contPersonas;i++){
                        if((suma[i]/10) == peso_anterior[i]){
                            contParrafo.innerHTML += "La persona "+(i+1)+ " mantiene su mismo peso de "+peso_anterior[i]+"kg<br>"
                        }
                        else if((suma[i]/10) > peso_anterior[i]){
                            contParrafo.innerHTML += "La persona "+(i+1)+ " subio "+ (DifPeso[i])+"kg<br>"
                        }
                        else{
                            contParrafo.innerHTML += "La persona "+(i+1)+ " bajo "+ (DifPeso[i])+"kg<br>"
                        }
                    }
                    contEncabezado.append(contParrafo)
                    console.log(DifPeso)
                    final()
                }
                
            }
        }
    }

}

document.getElementById("btn7").onclick = function(){
    var contArticulos = 0, precioArticulo, total = 0
    contTitle.textContent = "Ingrese el articulo #"+1
    contInput.className = "Articulo"
    contInput.id = "Articulo"
    contInput.required = "true"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contBtnCal.className = "btn btn-primary"
    contBtnCal.id = "btnCalcular"
    contBtnCal.textContent = "Calcular"
    contBtnCal.style.display = "block"

    quitarBotones()

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)
    contEncabezado.append(contBtnCal)

    document.getElementById("btnEnviar").onclick = function(){        
        contTitle.textContent = "Ingrese el articulo #"+(contArticulos+2)
        contArticulos++
        precioArticulo = parseFloat(contInput.value)
        total += precioArticulo

        contBtnCal.onclick = function(){
            contParrafo.innerHTML = "El valor total de los articulos es: $"+total
            contBtnCal.style.display = "none"
            final()
            contEncabezado.append(contParrafo)
        }
    }
}

document.getElementById("btn8").onclick = function(){
    const contInputPF = document.createElement("input")
    var descuento, descuentoCategoria1 = 0, descuentoCategoria2 = 0, descuentoCategoria3 = 0,
    descuentoCategoria4 = 0, descuentoCategoria5 = 0, edad = [], precio = [], cont = 0

    contTitle.textContent = "Ingrese los datos #"+1
    contInput.className = "Edad"
    contInput.id = "Edad"
    contInput.required = "true"
    contInput.placeholder = "Edad"

    contInputPF.className = "precioFijo"
    contInputPF.id = "precioFijo"
    contInputPF.required = "true"
    contInputPF.placeholder ="Precio fijo"

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contBtnCal.className = "btn btn-primary"
    contBtnCal.id = "btnCalcular"
    contBtnCal.textContent = "Calcular"
    contBtnCal.style.display = "block"

    quitarBotones()

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contInputPF)
    contEncabezado.append(contBtn)
    contEncabezado.append(contBtnCal)

    document.getElementById("btnEnviar").onclick = function(){  
        if(contInput.value >= 5){
            edad[cont] = contInput.value
            precio[cont] = contInputPF.value
            cont++
            contTitle.textContent = "Ingrese los datos #"+(cont+1)
        }else{
            alert("No puede entrar al teatro")
        }
    }

    contBtnCal.onclick = function(){
        for(var i = 0; i< edad.length; i++){
            if(edad[i] >= 5 && edad[i] < 15){
                descuento = precio[i]*0.35
                descuentoCategoria1 += descuento
                contParrafo.innerHTML += "Por la categoria 1 deja de recibir $"+descuentoCategoria1+"<br>"
            }
        
            if(edad[i] >= 15 && edad[i] < 20){
                descuento = precio[i]*0.25
                descuentoCategoria2 += descuento
                contParrafo.innerHTML += "Por la categoria 2 deja de recibir $"+descuentoCategoria2+"<br>"
            }
        
            if(edad[i] >= 20 && edad[i] < 46){
                descuento = precio[i]*0.1
                descuentoCategoria3 += descuento
                contParrafo.innerHTML += "Por la categoria 3 deja de recibir $"+descuentoCategoria3+"<br>"
            }
        
            if(edad[i] >= 46 && edad[i] <66){
                descuento = precio[i]*0.25
                descuentoCategoria4 += descuento
                contParrafo.innerHTML += "Por la categoria 4 deja de recibir $"+descuentoCategoria4+"<br>"
            }
        
            if(edad[i] >=66){
                descuento = precio[i]*0.35
                descuentoCategoria5 += descuento
                contParrafo.innerHTML += "Por la categoria 5 deja de recibir $"+descuentoCategoria5+"<br>"
            }
        }
        contBtnCal.style.display = "none"
        contInputPF.style.display = "none"
        final()
        contEncabezado.append(contParrafo)
    }
}

document.getElementById("btn9").onclick = function(){
    var cont = 0, ventas, comision
    contTitle.textContent = "Ingrese cuando vendio el vendedor #"+1
    contInput.className = "Vendio"
    contInput.id = "Vendio"
    contInput.required = "true"

    quitarBotones()

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)

    document.getElementById("btnEnviar").onclick = function(){  
        if(cont < 100){
            cont++
            contTitle.textContent = "Ingrese cuando vendio el vendedor #"+(cont+1)
            ventas = parseFloat(contInput.value)
            if(ventas <= 20000000){
                comision = ventas*0.1
            }

            if(ventas > 20000000 && ventas < 40000000){
                comision = ventas*0.15
            }

            if(ventas >= 40000000 && ventas < 80000000){
                comision = ventas*0.2
            }

            if(ventas >= 80000000 && ventas < 160000000){
                comision = ventas*0.25
            }

            if(ventas >= 160000000){
                comision = ventas*0.3
            }
            contParrafo.innerHTML = "El total vendido del trabajador "+(cont)+" es: $"+ventas+"<br>"+
                                    "Y la comision del trabajador es: $"+comision
        }
        else{
            contParrafo.innerHTML = "Ya ha revisado los 100 trabajadores"
            final()
        }
        contEncabezado.append(contParrafo)
    }
}

document.getElementById("btn10").onclick = function(){
    var candidato1 = 0, candidato2 = 0, candidato3 = 0, cont = 0
    contTitle.textContent = "Presione el boton para iniciar el conteo de votos"

    quitarBotones()

    contBtn.className = "btn btn-success"
    contBtn.id = "btnIniciar"
    contBtn.textContent = "Iniciar"

    contEncabezado.append(contTitle)
    contEncabezado.append(contBtn)

    contBtn.onclick = function(){
        while(cont < 50000){
            let random = Math.floor(Math.random() * (4 - 1) + 1)
            switch(random){
                case 1:
                    candidato1++
                    break
                
                case 2:
                    candidato2++
                    break
                
                case 3:
                    candidato3++
                
            }
            cont++
        }
        
        contParrafo.innerHTML = "El candidato 1 tiene un total de votos de: "+candidato1+"<br>"
        contParrafo.innerHTML += "El candidato 2 tiene un total de votos de: "+candidato2+"<br>"
        contParrafo.innerHTML += "El candidato 3 tiene un total de votos de: "+candidato3+"<br>"
    
            
        if(candidato1 == candidato2 && candidato1 == candidato3 && candidato2 == candidato3){
            contParrafo.innerHTML += "los 3 candidatos tienen el mismo numero de votos"
        }
        else{
            if(candidato1 == candidato2){
                contParrafo.innerHTML += "los candidatos 1 y 2 tienen el mismo numero de votos"
            }
            else{
                if(candidato1 == candidato3){
                    contParrafo.innerHTML += "los candidatos 1 y 3 tienen el mismo numero de votos"
                }
                else{
                    if(candidato2 == candidato3){
                        contParrafo.innerHTML += "los candidatos 2 y 3 tienen el mismo numero de votos"
                    }
                    else{
                        if(candidato1 > candidato2){
                            if(candidato1 > candidato3){
                                contParrafo.innerHTML += "El candidatos 1 tiene mas votos"
                            }
                            else{
                                contParrafo.innerHTML += "El candidatos 3 tiene mas votos"
                            }
                        }
                        else{
                            if(candidato2 > candidato3){
                                contParrafo.innerHTML += "El candidatos 2 tiene mas votos"
                            }
                            else{
                                contParrafo.innerHTML += "El candidatos 3 tiene mas votos"
                            }
                        }
                    }
                }
            }
        }
        contParrafo.innerHTML += "<br>Total de votos: "+cont
        final()
    }
    contEncabezado.append(contParrafo)
    
}

document.getElementById("btn11").onclick = function(){
    var sumatoria, promedio, productoria = 0, num, tam = 0
    contTitle.textContent = "Ingrese hasta que numero quiere llegar"
    contInput.className = "Num"
    contInput.id = "Num"
    contInput.required = "true"

    quitarBotones()

    contBtn.className = "btn btn-success"
    contBtn.id = "btnIniciar"
    contBtn.textContent = "Iniciar"

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)    

    contBtn.onclick = function(){
        num = contInput.value
        sumatoria = 0
        productoria = 1
        for (let i=0;i<=num;i++) {
            if (esPrimo(i)){
                tam++
                sumatoria += i
                productoria *= i
                promedio = (sumatoria/tam)
                console.log("primo: "+i)
                console.log("tam :"+tam)
            }
        }
        contParrafo.innerHTML = "La sumatoria es: "+sumatoria
        contParrafo.innerHTML += "<br>La productoria es: "+productoria
        contParrafo.innerHTML += "<br>El promedio es: "+promedio
        final()
    }

    function esPrimo(numero) {    
        for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++){
            if(numero % i === 0) return false
        }
        return numero > 1
    }
    contEncabezado.append(contParrafo)
}

document.getElementById("btn12").onclick = function(){
    var sumatoria = 0, promedio = 0, productoria = 1, num = [], cont = 0
    contTitle.textContent = "Ingrese un numero entero - #1"
    contInput.className = "Num"
    contInput.id = "Num"
    contInput.required = "true"

    quitarBotones()

    contBtn.className = "btn btn-success"
    contBtn.id = "btnEnviar"
    contBtn.textContent = "Enviar"

    contBtnCal.className = "btn btn-primary"
    contBtnCal.id = "btnCalcular"
    contBtnCal.textContent = "Calcular"
    contBtnCal.style.display = "block"

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)
    contEncabezado.append(contBtnCal)

    contBtn.onclick = function(){
        num[cont] = parseInt(contInput.value)
        cont++
        contTitle.textContent = "Ingrese un numero entero - #"+(cont+1)
        console.log(num)
    }

    contBtnCal.onclick = function(){
        for (let i=0;i<=num.length-1;i++) {
            console.log(num[i])
            sumatoria += num[i]
            productoria *= num[i]
            promedio = (sumatoria/num.length)
        }
        console.log(sumatoria)
        contParrafo.innerHTML = "La sumatoria es: "+sumatoria
        contParrafo.innerHTML += "<br>La productoria es: "+productoria
        contParrafo.innerHTML += "<br>El promedio es: "+promedio
        contEncabezado.append(contParrafo)
        contBtnCal.style.display = "none"
        final()
    }
}

document.getElementById("btn13").onclick = function(){
    var limit, par = 0, impar = 0, ceros = 0
    contTitle.textContent = "Ingrese cuantos elementos desea de la serie de fibonacc"
    contInput.className = "Num"
    contInput.id = "Num"
    contInput.required = "true"

    quitarBotones()

    contBtn.className = "btn btn-success"
    contBtn.id = "btnIniciar"
    contBtn.textContent = "Iniciar"

    contEncabezado.append(contTitle)
    contEncabezado.append(contInput)
    contEncabezado.append(contBtn)

    contBtn.onclick = function(){
        limit = parseInt(contInput.value)

        const fib = [0,1]
        for(let i = 2; i < limit; i++){
            fib[i] = fib[i-1] + fib[i-2]
        }

        for(let i = 0; i < fib.length;i++){
            if(fib[i] % 2 == 0){
                par++
                if(fib[i] == 0){
                    ceros++
                }
            }
            else{
                impar++
            }
        }

        contParrafo.innerHTML = par+" son par<br>"
        contParrafo.innerHTML += impar+" son impar<br>"
        contParrafo.innerHTML += ceros+" son cero"
        contEncabezado.append(contParrafo)
        final()
    }
}

function quitarBotones(){
    for(var i = 0; i<15; i++){
        document.getElementsByClassName("btn")[i].style.display = "none"
    }
}

function final(){
    contTitle.style.display = "none"
    contInput.style.display = "none"
    contBtn.textContent = "Volver"
    contBtn.onclick = function(){
        location.reload()
    }
}