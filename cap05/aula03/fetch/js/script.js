window.addEventListener('load', function() {
  console.log('Antes da promise');
  fetch('https://api.github.com/users/rrgomide')
    .then(res => {
      console.log('durante a promise');
      console.log('res:', res);
      res.json().then(data => {
        showData(data);
      });
    })
    .catch(erro => {
      console.log('Erro na requisição');
    });
  console.log('Depois da promise');
  executeDivisionPromiseAsyncAwait();
});

function showData(data) {
  console.log('json:', data);
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por 0');
    }

    resolve(a / b);
  });
}

function executeDivisionPromise() {
  console.log('Divisão sem Sync Await....');
  divisionPromise(12, 6).then(result => {
    console.log(result);
  });

  divisionPromise(12, 0)
    .then(result => {
      console.log(result);
    })
    .catch(errorMessage => {
      console.log('Falha na divisão: ' + errorMessage);
    });
}

async function executeDivisionPromiseAsyncAwait() {
  console.log('Divisão com Sync Await....');
  const division1 = await divisionPromise(12, 6);
  console.log(division1);
  const division2 = await divisionPromise(12, 0);
  console.log(division2);
}
