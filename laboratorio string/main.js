document.addEventListener('DOMContentLoaded', () => {
    const inputTexto = document.getElementById('inputTexto');
    const botaoExaminar = document.getElementById('botaoExaminar');
    const resultadoTexto = document.getElementById('resultadoTexto');
    const inputRealcar = document.getElementById('inputRealcar');
    const botaoRealcar = document.getElementById('botaoRealcar');
    const inputSubstituir = document.getElementById('inputSubstituir');
    const botaoSubstituir = document.getElementById('botaoSubstituir');

    botaoExaminar.addEventListener('click', () => {
        const texto = inputTexto.innerText;

        const palavras = texto.split(/\s+/).filter(word => word.length > 0);
        const numPalavras = palavras.length;
        const numLetras = palavras.join('').length;

        const contagemPalavras = contarOcorrencias(palavras);

        resultadoTexto.innerHTML = `
            <p>A quantidade de palavras é: ${numPalavras}</p>
            <p>A quantidade de letras é: ${numLetras}</p>
            <p>Ocorrências de palavras:</p>
            <pre>${JSON.stringify(contagemPalavras, null, 2)}</pre>
        `;
    });

    botaoRealcar.addEventListener('click', () => {
        const palavraBuscar = inputRealcar.value;
        realcarPalavra(palavraBuscar);
    });

    botaoSubstituir.addEventListener('click', () => {
        const palavraBuscar = inputRealcar.value;
        const palavraSubstituir = inputSubstituir.value;
        substituirPalavra(palavraBuscar, palavraSubstituir);
    });

    function contarOcorrencias(palavras) {
        const contagem = {};
        palavras.forEach(palavra => {
            const palavraMinuscula = palavra.toLowerCase();
            if (!contagem[palavraMinuscula]) {
                contagem[palavraMinuscula] = 0;
            }
            contagem[palavraMinuscula]++;
        });
        return contagem;
    }

    function realcarPalavra(palavraBuscar) {
        const textoOriginal = inputTexto.innerHTML;
        const palavraRegex = new RegExp(`(${palavraBuscar})`, 'gi');
        const textoRealçado = textoOriginal.replace(palavraRegex, `<span class="highlighted">$1</span>`);
        inputTexto.innerHTML = textoRealçado;
    }

    function substituirPalavra(palavraBuscar, palavraSubstituir) {
        const textoOriginal = inputTexto.innerHTML;
        const palavraRegex = new RegExp(`\\b(${palavraBuscar})\\b`, 'gi');
        const textoSubstituído = textoOriginal.replace(palavraRegex, palavraSubstituir);
        inputTexto.innerHTML = textoSubstituído;
    }
});
