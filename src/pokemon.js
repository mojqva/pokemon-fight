class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
        this.imgId = document.getElementById(`sprite-${name}`);
        this.pokemonName = document.getElementById(`name-${name}`)
    }
}


class Pokemon extends Selectors{
    constructor({name, hp, type, selectors, attacks=[], img}) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.attacks = attacks;
        this.img = img;

        this.renderHP();
    }

    renderHP = () => {
        this.renderLifeHP();
        this.renderProgressbarHP();
}

    renderLifeHP = () => {
        this.elHP.innerText = this.hp.current + ' / ' + this.hp.total;
    }

    renderProgressbarHP = () => {
        const percent = (this.hp.current * 100)/this.hp.total;
        this.elProgressbar.style.width = percent + '%';
        if(percent < 60 && percent > 20) {
            this.elProgressbar.classList.add('low');
        }
        if(percent < 25) {
            this.elProgressbar.classList.add('critical')
        }
    }

    changeHP = (count, cb) => { 
        this.hp.current -= count;


        if(this.hp.current <= 0) {
            this.hp.current = 0;
        }

        this.renderHP();
        cb && cb(count);
    }
}

export default Pokemon;