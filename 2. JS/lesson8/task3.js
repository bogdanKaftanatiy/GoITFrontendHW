function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {
        firstName: {
            get: function () {
                return this.fullName.split(' ')[0];
            },
            set: function (name) {
                var names = this.fullName.split(' ');
                names[0] = name;
                this.fullName = names.join(' ');
            }
        },
        lastName: {
            get: function () {
                return this.fullName.split(' ')[1];
            },
            set: function (name) {
                var names = this.fullName.split(' ');
                names[1] = name;
                this.fullName = names.join(' ');
            }
        }
    });
}

var vasya = new User('Александр Пушкин');

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой