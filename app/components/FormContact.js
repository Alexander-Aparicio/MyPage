const Form = ()=> {

    let $msjError = document.getElementById("mjs-error"),
        $loader = document.querySelector(".loader"),
        $msjEnvio = document.querySelector(".msj-envio"),
        $inputsForm = document.querySelectorAll(".contact-form [required]"),
        $formulario = document.querySelector(".contact-form");
       

    $inputsForm.forEach((input) => {

        const $span = document.createElement("span")
        $span.id = input.name;
        $span.textContent = input.title ;
        input.insertAdjacentElement("afterend",$span)
        $span.classList.add("contact-form-error", "none")

    })

    document.addEventListener("keyup", (e) => {

        if (e.target.matches(".contact-form [required]")){

            let $input = e.target,
                patron = $input.pattern || $input.dataset.pattern;

            if (patron && $input.value !="") {

                let regex = new RegExp(patron)
                return !regex.exec($input.value)
                ?document.getElementById($input.name).classList.add("activacion")
                :document.getElementById($input.name).classList.remove("activacion")

            }
            if (patron && $input.value ==="") {

                document.getElementById($input.name).classList.remove("activacion")

            }
        }
    })

    $formulario.addEventListener("submit" , (e)=> {

        e.preventDefault();

        $loader.classList.remove("none")

        fetch ("https://formsubmit.co/ajax/alexdel2022@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(info => info.ok?info.json():Promise.reject(info))
        .then(json => {

            $loader.classList.add("none")

            $formulario.reset()

            setTimeout(() => {

                $msjEnvio.classList.remove("none")

              }, 0)

            setTimeout(() => {

                $msjEnvio.classList.add("none")

            }, 3000);
        })
        .catch(error => {

            console.log(error)
            let mensajeDeError = 
            error.statusText || "Ocurrió un error al enviar, intenta nuevamente"
            $msjError.innerHTML= `Error ${error.status}: ${mensajeDeError}`

        });          

    })

}

export { Form }