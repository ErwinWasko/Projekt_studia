document.getElementById('wczytajDaneButton').addEventListener('click', function () {
    var produktValue = document.getElementById('produkt').value;
    var cenaValue = parseFloat(document.getElementById('cena').value) || 0; 

    if (produktValue !== '' && cenaValue !== '') {
      var userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

      var newRow = userTable.insertRow(userTable.rows.length);

      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);

      cell1.innerHTML = produktValue;
      cell2.innerHTML = cenaValue;

      document.getElementById('produkt').value = '';
      document.getElementById('cena').value = '';

      updateSum();
    } else {
      alert('Wypełnij oba pola przed dodaniem do tabeli.');
    }
  });

  function validateNumberInput(input) {
    input.value = input.value.replace(/\D/g, '');
  }

  function updateSum() {
    var sum = 0;

    var cenaCells = document.querySelectorAll('#userTable tbody td:nth-child(2)');

    cenaCells.forEach(function(cell) {
      sum += parseFloat(cell.textContent) || 0; 
    });

    document.getElementById('sumaCell').textContent = sum.toFixed(2); 
  }