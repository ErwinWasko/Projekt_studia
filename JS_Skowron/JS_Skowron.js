    document.getElementById('registerButton').addEventListener('click', function () {
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var wiek = document.getElementById('wiek').value;
    var miasto = document.getElementById('miasto').value;

    document.getElementById('userTable').style.display = 'none';
    document.getElementById('registerButton').style.display = 'none';

    document.getElementById('userDataImie').textContent = 'Imię: ' + imie;
    document.getElementById('userDataNazwisko').textContent = 'Nazwisko: ' + nazwisko;
    document.getElementById('userDataWiek').textContent = 'Wiek: ' + wiek;
    document.getElementById('userDataMiasto').textContent = 'Miasto: ' + miasto;

    document.getElementById('userData').style.display = 'block';
    document.getElementById('userNavigation').style.display = 'block';
  });


  