
$(document).ready(function () {
  function adjustPopoverTrigger() {
    /* ---------------------- */
    /* ativador de transicoes */
    /* ---------------------- */

    ScrollReveal({
      duration: 1000,
      delay: 500,
      origin: "left",
      distance: "100px",
      mobile: false,
    });

    ScrollReveal().reveal(".scrollreveal-1t", {
      origin: "top",
      delay: 0,
      duration: 500,
    });

    ScrollReveal().reveal(".scrollreveal-1l", { origin: "left" });
    ScrollReveal().reveal(".scrollreveal-2l", { delay: 750, origin: "left" });
    ScrollReveal().reveal(".scrollreveal-3l", { delay: 1000, origin: "left" });

    ScrollReveal().reveal(".scrollreveal-1r", { origin: "right" });
    ScrollReveal().reveal(".scrollreveal-2r", { delay: 1000, origin: "right" });
    ScrollReveal().reveal(".scrollreveal-3r", { delay: 1500, origin: "right" });

    /* ------------------ */
    /* ativador de popups */
    /* ------------------ */

    var width = $(window).width();

    var choose = width < 768 ? "focus" : "hover"; //operador ternario que escolhe o atributo

    //aplica para todos os popovers as seguintes coisas:
    $('[data-bs-toggle="popover"]').each(function () {
      var elemento = $(this);
      //remove o popover antigo
      var triggerChoose = choose;

      if(elemento.hasClass("copyFocus")){
        triggerChoose = "focus";    
      }

      elemento.popover("dispose");
      //escolhe o trigger do popover novo
      elemento.popover({
        trigger: triggerChoose,
      });
    });
    //log
    console.log("Ajuste popover acionado");



    /* -------------------- */
    /* ativador botao copia */
    /* -------------------- */



    let copyBtns = document.querySelectorAll(".copyToClipboard-btn");

    copyBtns.forEach((e) => {
      e.addEventListener("click", function (e) {
        copyToClipboard(e);
      });
    });

    async function copyToClipboard(e) {
      try {
        const btn = e.currentTarget;
        const irm = btn.parentElement.previousElementSibling;
        await navigator.clipboard.writeText(irm.textContent);
        console.log(`Texto copiado! : '${irm.textContent}'`)
      } catch (error) {
        console.error("Falha em copiar texto:", error);
      }
    }
  }

  //ajusta o trigger ao carregar a pagina
  adjustPopoverTrigger();

  //eventlistener que ajusta o trigger quando a janela é redimensionada
  $(window).resize(adjustPopoverTrigger);
});
