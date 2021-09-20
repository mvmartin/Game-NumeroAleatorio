<script>

function pularLinha() {
        document.write("<br>");
    }

    function mostra(frase){
        document.write(frase);
        pularLinha();
    }

    var numeroPensado = Math.round(Math.random() * 10)
    var chute = parseInt(prompt("Digite seu chute!"));

    if(chute == numeroPensado){
        mostra("Você acertou!")
    }   else{
        mostra("Você Errou, o número pensado foi " + numeroPensado)
    }



</script>
