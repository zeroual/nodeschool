var pets=['cat', 'dog', 'rat'];

pets.forEach(function (e,i,pets) {
    pets[i] = e + 's';
});
console.log(pets);