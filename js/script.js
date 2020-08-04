
var botao = document.querySelector("input");
botao.addEventListener("click", clicar);

function clicar(){
    var nome = window.prompt("Qual é o nome do aluno?");
    var n1 = window.prompt(`Primeira nota de ${nome}:`);
    if (n1.indexOf(',')){
        n1 = n1.replace(',', '.');
        nota1 = Number(n1);
    }

    var n2 = window.prompt(`Segunda nota de ${nome}:`);
    if (n2.indexOf(',')){
        n2 = n2.replace(',', '.');
        nota2 = Number(n2);
    }
    
    var media = (nota1 + nota2) / 2;

    if (media > 6){
        var situacao = `Com a média acima de 6,0, o aluno está <span style="background-color: #76e070;">APROVADO</span>`;
    }else if(media >= 3){
        var situacao = `Com a média entre 3,0 e 6,0, o aluno está em <span style="background-color: #e0c670;">RECUPERAÇÃO</span>`;
    }else{
        var situacao = `Com a média abaixo de 3,0, o aluno está <span style="background-color: #d16d5a;">REPROVADO</span>`;
    }

    nota1 = nota1.toFixed(2).replace('.', ',');
    nota2 = nota2.toFixed(2).replace('.', ',');
    media = media.toFixed(2).replace('.', ',');
    
    var res = document.querySelector("div.res");
    
    res.innerHTML = `<strong>Analisando a situação de ${nome}</strong>`;

    var p = document.createElement("p");
    p.innerHTML = `Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong><br>`;
    p.innerHTML += `${situacao}`;

    res.appendChild(p);
}