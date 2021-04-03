import Pokemon from "./pokemon.js"
import {randomAttack, random, generateLogs, complementLog, countClick, endRound} from "./utilits.js"



class Game {
    getPokemons = async () => {
        const responce = await fetch("https://reactmarathon-api.netlify.app/api/pokemons?");
        const body = await responce.json();
        return body;
    }

    start = async () => {
        const pokemons = await this.getPokemons();
        console.log(pokemons);
        const pikachu = pokemons[random(15)];
        const character = pokemons[random(15)]

        const player1 = new Pokemon({
        ...pikachu,
        selectors: "player1",
        });

        let player2 = new Pokemon({
            ...character,
            selectors: "player2",
        });

        const $control = document.querySelector('.control');

        player1.pokemonName.innerText = player1.name;
        player2.pokemonName.innerText = player2.name;

        player1.imgId.src = player1.img;
        player2.imgId.src = player2.img;

        player1.attacks.forEach(item => {
            const $btns = document.createElement('button');
            $btns.classList.add('button');
            let remained = item.maxCount;
            $btns.innerText = `${item.name} (${remained})`;
            const btnsClick = countClick(item.maxCount, $btns)
            $btns.addEventListener('click', () => {
                remained--;
                $btns.innerText = `${item.name} (${remained})`;
                player1.changeHP(randomAttack(player2.attacks[item.id-1].minDamage, player2.attacks[item.id-1].maxDamage ), (count) => {
                    complementLog(generateLogs(player1, player2, count, player1.hp.current, player1.hp.total));
                });
                player2.changeHP(randomAttack(item.minDamage, item.maxDamage), (count) => {
                    complementLog(generateLogs(player2, player1, count, player2.hp.current, player2.hp.total));
                    endRound();
                });

                btnsClick();
            })

            $control.appendChild($btns);
        })
    }
}

const game = new Game();

game.start();




