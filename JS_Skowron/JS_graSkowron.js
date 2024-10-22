// gra

function updateCounterRegistration(counterId, count) {
    var counterElement = document.getElementById(counterId);
    if (counterElement) {
        counterElement.textContent = "Licznik " + counterId.replace("Counter", "") + ": " + count;
    }
}

  var randomChangeCount = 0;
  var changeAnimalCount = 0;
  var changeMusicCount = 0;

  function changeAnimalRandomSkowron() {
    var animalImages = ["../IMG_Skowron/kot.jpg", "../IMG_Skowron/krowa.jpg", "../IMG_Skowron/mysz.jpg", "../IMG_Skowron/pies.jpg",
    "../IMG_Skowron/rekin.jpg", "../IMG_Skowron/delfin.jpg"];
    var randomIndex = Math.floor(Math.random() * animalImages.length);
    var randomImage = animalImages[randomIndex];
    var animalElement = document.getElementById("animal");
    animalElement.src = randomImage;
    animalElement.title = randomImage.split(".")[0];

    randomChangeCount++;
    updateCounter("randomChangeCounter", randomChangeCount);
  }

  function changeAnimalSkowron() {
    var selectElement = document.getElementById("animalList");
    var selectedValue = selectElement.value;
    var animalElement = document.getElementById("animal");
    animalElement.src = selectedValue;
    animalElement.title = selectedValue.split(".")[0];

    changeAnimalCount++;
    updateCounter("changeAnimalCounter", changeAnimalCount);
  }

  function changeMusic() {
    var musicElement = document.getElementById("music");
    var musicSources = ["../Audio_Skowron/kot.mp3", "../Audio_Skowron/pies.mp3", "../Audio_Skowron/krowa.mp3"];
    var currentSource = musicElement.getAttribute("src");
    var currentIndex = musicSources.indexOf(currentSource);

    var nextIndex = (currentIndex + 1) % musicSources.length;
    var nextSource = musicSources[nextIndex];

    musicElement.setAttribute("src", nextSource);
    musicElement.load();
    musicElement.play();

    changeMusicCount++;
    updateCounter("changeMusicCounter", changeMusicCount);
  }

  function updateCounter(counterId, count) {
    var counterElement = document.getElementById(counterId);
    counterElement.textContent = "Licznik " + counterId.replace("Counter", "") + ": " + count;
  }

  // koniec gry