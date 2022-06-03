const atv = {
    atv1: {
        title: 'Atividade 1',
        text: 'Escreva um script que leia dois valores inteiros e os apresente em ordem crescente.'
    },
    atv2: {
        title: 'Atividade 2',
        text: 'Tendo como dados de entrada a altura e o gênero de uma pessoa, escreva um script que calcule o seu peso ideal. Para homens, utilize a fórmula (72.7 * altura) – 58. Para mulheres, e utilize a fórmula (62.1 * altura) – 44.7..'
    },
    atv3: {
        title: 'Atividade 3',
        text: 'Escreva um script que leia três valores inteiros e apresente na tela o menor deles.'
    },
    atv4: {
        title: 'Atividade 4',
        text: 'Escreva um script que leia um número inteiro e, caso este número seja positivo, apresente uma mensagem indicando se ele é par ou ímpar. Caso o número seja negativo, apresente o seu valor absoluto.'
    },
    atv5: {
        title: 'Atividade 5',
        text: 'Escreva um script que leia um número inteiro e informe se esse número é divisível por 2 e divisível por 3.'
    },
    atv6: {
        title: 'Atividade 6',
        text: 'Escreva um script que leia um número inteiro e informe se esse número é divisível por 2 ou divisível por 7.'
    },
    atv7: {
        title: 'Atividade 7',
        text: 'Escreva um script que, dado um número entre 1 e 7, informe o dia da semana correspondente. Utilize 1 para domingo, 2 para segunda-feira e assim por diante. Observação: utilize a função switch.'
    },
    atv8: {
        title: 'Atividade 8',
        text: 'Escreva um script que apresente o somatório dos valores pares existentes entre 1 e 20.'
    },
    atv9: {
        title: 'Atividade 9',
        text: 'Escreva um script que apresente a tabuada de um número lido do teclado. Ex.: Considerando que o número lido é 2, o formato da apresentação deve ser o seguinte: 2 x 1 = 2, 2 x 2 = 4, 2 x 3 = 6, ..., 2 x 10 = 20.'
    },
    atv10: {
        title: 'Atividade 10',
        text: 'Escreva um script que calcule o fatorial de um número positivo qualquer. Ex.: 5! = 5 * 4 * 3 * 2 * 1 = 120 e 0! = 1.'
    }
}

const clearPage = () => {
    let title = document.getElementById('title');
    let text = document.getElementById('text');
    let btn = document.getElementById('button');

    title.innerHTML = 'Bem Vindo!';
    text.innerHTML = 'Use o menu de navegação lateral para visualizar os exercicios.';
    btn.removeAttribute('onclick');
    btn.style.display = 'none';
}

const selectAtv = (key) => {
    let title = document.getElementById('title');
    let text = document.getElementById('text');
    let btn = document.getElementById('button');
    let keys = Object.keys(atv);

    for (i = 0; i < keys.length; i++) {
        if (key == keys[i]) {
            let obj = Object.values(atv)[i];
            title.innerHTML = Object.values(obj)[0];
            text.innerHTML = Object.values(obj)[1];
            btn.style.display = "";
            btn.setAttribute('onclick', keys[i] + '()');
        }
    }
}

const atv1 = () => {
    let n1 = parseInt(window.prompt("Digite o primeiro número"));
    let n2 = parseInt(window.prompt("Digite o segundo número"));

    if (n1 < n2) {
        alert(n1 + ", " + n2);
    }
    else {
        alert(n2 + ", " + n1);
    }
}

const atv2 = () => {
    let genero = window.prompt("Digite o seu gênero (M/F)");
    let altura = parseFloat(window.prompt("Digite a sua altura"));
    let peso = 0;

    genero.replace("m", "M");
    genero.replace("f", "F");

    if (genero = "M") {
        peso = (72.7 * altura - 58).toFixed(2);
        alert("Peso ideal: " + peso + "kg")
    }
    else if (genero = "F") {
        peso = (62.1 * altura - 44.7).toFixed(2);
        alert("Peso ideal: " + peso + "kg")
    }
    else {
        alert("Erro!");
    }
}

const atv3 = () => {
    let n = [];
    n[0] = parseInt(window.prompt("Digite o primeiro número"));
    n[1] = parseInt(window.prompt("Digite o segundo número"));
    n[2] = parseInt(window.prompt("Digite o terceiro número"));

    n = bubble(n);

    alert("Menor numero: " + n[0]);
}

const atv4 = () => {
    let n = parseInt(window.prompt("Digite o número"));

    if (n < 0) {
        n = Math.abs(n);
    }
    else {
        if (n % 2 == 0) {
            n = "Par"
        }
        else {
            n = "Impar"
        }
    }
    alert("Resultado: " + n)
}

const atv5 = () => {
    let str = "";

    let n = parseInt(window.prompt("Digite o número"));

    if (n % 2 == 0) {
        str += "O número é divisivel por 2. "
    }
    else {
        str += "O número não é divisivel por 2. "
    }
    if (n % 3 == 0) {
        str += "O número é divisivel por 3."
    }
    else {
        str += "O número não é divisivel por 3. "
    }

    alert(str);
}

const atv6 = () => {
    let str = "";

    let n = parseInt(window.prompt("Digite o número"));

    if (n % 2 == 0) {
        str += "O número é divisivel por 2. "
    }
    else {
        str += "O número não é divisivel por 2. "
    }
    if (n % 7 == 0) {
        str += "O número é divisivel por 7."
    }
    else {
        str += "O número não é divisivel por 7. "
    }

    alert(str);
}

const atv7 = () => {
    let dia = parseInt(window.prompt("Digite o dia"));
    dia = getDia(dia);
    alert(dia);
}

const atv8 = () => {
    soma = 0;
    for (i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            soma += i;
        }
    }
    alert(soma);
}

const atv9 = () => {
    let n = parseInt(window.prompt("Digite o número"));
    let str = "";

    for (i = 1; i <= 10; i++) {
        if (i < 10) {
            str += n + " x " + i + " = " + n * i + ", ";
        }
        else {
            str += n + " x " + i + " = " + n * i;
        }
    }
    alert(str);
}

const atv10 = () => {
    let n = parseInt(window.prompt("Digite o número"));
    let ini = n

    if (n > 0) {
        for (i = n - 1; i > 0; i--) {
            n = n * i;
        }
    }
    else if (n == 0) {
        n = 1;
    }
    else {
        n = "Não existe";
    }

    alert(ini + "! = " + n);
}

const getDia = (dia) => {
    let dias = {
        1: 'Domingo',
        2: 'Segunda',
        3: 'Terça',
        4: 'Quarta',
        5: 'Quinta',
        6: 'Sexta',
        7: 'Sabado',
        'default': 'Erro!'
    };

    return dias[dia] || dias['default'];
}

const swap = (n, i, j) => {
    let temp = n[i];
    n[i] = n[j];
    n[j] = temp;
    return n;
}

const bubble = (n) => {
    for (i = 0; i < n.length - 1; i++) {
        for (j = 0; j < n.length - i - 1; j++) {
            if (n[j] > n[j + 1]) {
                n = swap(n, j, j + 1);
            }
        }
    }
    return n;
}

const openCloseNav = () => {
    let sidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main");
    if (sidebar.style.width == "58px" || sidebar.style.width == '') {
        sidebar.style.width = "200px";
        main.style.marginLeft = "200px";
        sleep(500);
        document.getElementById("opencloseicon").classList.remove('mdi-menu');
        document.getElementById("opencloseicon").classList.add('mdi-close');
        document.getElementById("i").innerHTML = "Atividade 1";
        document.getElementById("ii").innerHTML = "Atividade 2";
        document.getElementById("iii").innerHTML = "Atividade 3";
        document.getElementById("iv").innerHTML = "Atividade 4";
        document.getElementById("v").innerHTML = "Atividade 5";
        document.getElementById("vi").innerHTML = "Atividade 6";
        document.getElementById("vii").innerHTML = "Atividade 7";
        document.getElementById("viii").innerHTML = "Atividade 8";
        document.getElementById("ix").innerHTML = "Atividade 9";
        document.getElementById("x").innerHTML = "Atividade 10";
    }
    else {
        sidebar.style.width = "58px";
        main.style.marginLeft = "58px";
        sleep(500);
        document.getElementById("opencloseicon").classList.remove('mdi-close');
        document.getElementById("opencloseicon").classList.add('mdi-menu');
        document.getElementById("i").innerHTML = "";
        document.getElementById("ii").innerHTML = "";
        document.getElementById("iii").innerHTML = "";
        document.getElementById("iv").innerHTML = "";
        document.getElementById("v").innerHTML = "";
        document.getElementById("vi").innerHTML = "";
        document.getElementById("vii").innerHTML = "";
        document.getElementById("viii").innerHTML = "";
        document.getElementById("ix").innerHTML = "";
        document.getElementById("x").innerHTML = "";
    }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));
