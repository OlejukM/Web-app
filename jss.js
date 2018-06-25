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

art.add('2017-04-25', 2, 'USD', 'Jogurt');
art.add('2017-04-25', 3, 'USD', 'French fries');
art.add('2017-04-27', 4.75, 'USD', 'Beer');

art.clear('2017-04-27');

console.log(art.list());

console.log(art.total());


// class Art {
//     constructor() {
//         this.values = Array();
//         this.totals = Object.create(null);
//     }
//     add(date, amount, currency, product) {
//         this.totals[currency] = this.totals[currency] || 0;
//         this.totals[currency] += amount;
//         this.values.push([date, amount, currency, product]); //.toString());
//     }
//     list() {
//         return this.values;
//     }
//     clear(date) {
//         var amount, currency;
//         for (let i = this.values.length - 1; i >= 0; --i) {
//             if (this.values[i][0] == date) {
//                 [, amount, currency] = this.values.splice(i, 1)[0]
//                 this.totals[currency] -= amount;
//             }
//         }
//     }
//     total() {
//         return this.totals;
//     }
// }

// const art = new Art();

// art.add('2017-04-25', 2, 'USD', 'Jogurt');
// art.add('2017-04-25', 3, 'USD', 'French fries');
// art.add('2017-04-27', 4.75, 'USD', 'Beer');

// art.clear('2017-04-27');

// console.log(art.list());

// console.log(art.total());