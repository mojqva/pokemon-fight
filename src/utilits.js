export function randomAttack(min, max) {
    let rand = min - 0.5 + Math.random() * (max-min + 1)
    return Math.round(rand)
}

export function random(num) {
    return Math.ceil(Math.random() * num)
}

export function generateLogs(firstPerson, secondPerson, damage, hp, maxHP) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${damage} [${hp} / ${maxHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${damage} [${hp} / ${maxHP}]`
    ];

    return logs[random(logs.length) - 1]
}

export function complementLog(log) {
    const $log = document.getElementById('log');
    const $p = document.createElement('p');
    $p.innerText = log;
    
    $log.insertBefore($p, $log.children[0]);
}

export function endRound() {
    const $log = document.getElementById('log');
    const $p = document.createElement('p');

    $p.innerText = `#### The End Of The Round ####`;
    $p.style = "color: black", "text-shadow: 0";
    $log.insertBefore($p, $log.children[0]);
}

export function countClick(maxCount, btn){
    let clicks = 0;

    return function () {
        clicks += 1;

        if(clicks >= maxCount) {
            btn.disabled = true
        };

    }
}

