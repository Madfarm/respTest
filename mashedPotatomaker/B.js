const potatoes = ["rawPotato1", "rawPotato2", "rawPotato3"];

function mashPotato(potato) {
    return "Mashed" + potato;
}

const mashedPotatoes = potatoes.map(mashPotato);

console.log(mashedPotatoes)

console.log(potatoes); 