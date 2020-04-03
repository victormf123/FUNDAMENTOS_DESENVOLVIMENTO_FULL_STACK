//function 1
const names = [
  'Greyce Riquinho',
  'Victor Matheus Freitas',
  'Gustavo Nogueira',
  'Edmar Mateini Montozo',
  'Julio Cesar Oliveira da Silva',
  'Paulo Henrique Santos',
  'Guilherme da Silva Figueiredo'
];

function getGroupMembers() {
  names.sort();
  return names;
}

//function 2
function getFullName(...name) {
  return name.join(' ');
}

const transform = array => array.map(value => value / 10 + 1);

//function
function onlyNumbersFrom(string) {
  return string.toString().replace(/[^0-9]/g, '');
}

console.log(getGroupMembers(names));
console.log(getFullName());
console.log(getFullName('Rafael', 'de', 'Souza'));
console.log(transform([10, 20, 30, 40, 50]));
console.log(transform([61, 72, 83, 94]));
console.log(onlyNumbersFrom('1.2.3 4   5.6a7_8m9'));
