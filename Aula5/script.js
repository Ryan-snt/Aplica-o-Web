// Arrays com informações dos estados
const siglas = ["BA", "RS", "RJ", "SP"];

const capitais = [
    "Salvador",
    "Porto Alegre",
    "Rio de Janeiro",
    "São Paulo"
];

const areas = [
    "564.760 km²",
    "495,97 km²",
    "43.750,423 km²",
    "248.219,481 km²"
];

const populacoes = [
    "14.889.472 hab.",
    "1.332.845 hab.",
    "16.054.524 hab.",
    "44.411.238 hab."
];

const bandeiras = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyzjnvtfXd4sEvlcf_6io8cGGH3qII0FvZXZdMT8CJg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsUZ_7tSB7WEJNPUMU6MNpLoN4JLWTiSXqvaGV6ANDg&s=10",
    "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg"
];

// Elementos da página
const selectEstados = document.getElementById("selectEstados");
const btnDetalhes = document.getElementById("btnDetalhes");

const divCapital = document.getElementById("divCapital");
const divArea = document.getElementById("divArea");
const divPopulacao = document.getElementById("divPopulacao");
const divBandeira = document.getElementById("divBandeira");

// Evento do botão
btnDetalhes.addEventListener("click", function () {

    // Pega o índice do estado selecionado
    const index = selectEstados.value;

    // Verifica se existe uma seleção válida
    if (index !== "") {

        // Exibe as informações
        divCapital.textContent = capitais[index];
        divArea.textContent = areas[index];
        divPopulacao.textContent = populacoes[index];

        // Exibe a bandeira
        divBandeira.innerHTML = `
            <img 
                src="${bandeiras[index]}" 
                alt="Bandeira de ${siglas[index]}"
            >
        `;
    }
});