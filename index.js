input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('click', function() {
        console.log('I was clicked!');
      });
}
addingEventListener();
