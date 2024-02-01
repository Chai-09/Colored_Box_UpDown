

//For button hover, if your mouse enters the box it zooms in lol

const buttons = document.querySelectorAll('.buttons');
const changeThemeButton = document.querySelector('.darkmode');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });

  changeThemeButton.addEventListener('mouseenter', () => {
    changeThemeButton.style.transform = 'scale(1.1)';
});

changeThemeButton.addEventListener('mouseleave', () => {
    changeThemeButton.style.transform = 'scale(1)';
});


  // Darkmode cause why not XD
  function toggledm() {

    const body = document.body;
    body.classList.toggle('theme');
  }



// This is for the box to go up down weeeeeee XD / it updates the content bg color and the two boxes
let activeBox = 1;

function dropBox(day) {
    const activeBoxElement = document.getElementById(`box${activeBox}`);
    const inactiveBoxElementE = document.getElementById(`box${3 - activeBox}`);

    activeBoxElement.innerHTML = day;

    activeBoxElement.style.backgroundColor = getBackgroundColor(day);
    activeBoxElement.classList.toggle('appear');
    inactiveBoxElementE.classList.remove('appear');

    activeBox = 3 - activeBox;
}

//The color of the box is returned using this switch statement from the pressed button ( •_•)>⌐■-■
function getBackgroundColor(day) {
    switch (day) {
        case 'Monday':
            return '#FF6A49';
        case 'Tuesday':
            return '#33FF57';
        case 'Wednesday':
            return '#5733FF';
        case 'Thursday':
            return '#FF33C7';
        case 'Friday':
            return '#33C7FF';
        case 'Saturday':
            return '#C7FF33';
        case 'Sunday':
            return '#FF3333';
        default:
            return null;
    }
}


  