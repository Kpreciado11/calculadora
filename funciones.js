let numero1 = document.getElementById("numero1");
        let numero2 = document.getElementById("numero2");
        let resultado = document.getElementById("resultado");

        let btn_suma = document.getElementById("btn_suma");
        let btn_resta = document.getElementById("btn_resta");
        let btn_multiplicacion = document.getElementById("btn_multiplicacion");
        let btn_division = document.getElementById("btn_division");

        btn_suma.addEventListener("click", () => {
            let res = parseInt(numero1.value) + parseInt(numero2.value);
            resultado.value = res;
        });

        btn_resta.addEventListener("click", () => {
            let res = parseInt(numero1.value) - parseInt(numero2.value);
            resultado.value = res;
        });

        btn_multiplicacion.addEventListener("click", () => {
            let res = parseInt(numero1.value) * parseInt(numero2.value);
            resultado.value = res;
        });

        btn_division.addEventListener("click", () => {
            //if (!confirm("¿Desea continuar?")) return;
            if (numero2.value == 0) {
                alert("No se puede dividir entre 0");
                return;
            }
            let res = parseInt(numero1.value) / parseInt(numero2.value);
            resultado.value = res;
        });