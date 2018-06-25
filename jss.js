class Art {
    constructor() {
        this.values = Array();
        this.amount = 0;
    }
    add(date, amount, currency, product) {
        this.amount += amount;
        this.currency = currency;
        this.values.push([date, amount, currency, product]);
    }
    list() {
        return this.values;
    }
    clear(date) {
        for (let i = this.values.length - 1; i >= 0; --i) {
            if (this.values[i][0] == date) {
                this.amount -= this.values.splice(i, 1)[0][1];
            }
        }
    }
    total() {
        return [this.amount + [' '] + this.currency];
    }
}

const art = new Art();

art.add('2017-04-25', 2, 'USD', 'Jogurt'); // add expenses to list
art.add('2017-04-25', 3, 'USD', 'French fries'); // add expenses to list
art.add('2017-04-27', 4.75, 'USD', 'Beer'); // add expenses to list

art.clear('2017-04-27'); // removes all expenses for specified date,

console.log(art.list()); //output expenses list

console.log(art.total()); //output expenses total
