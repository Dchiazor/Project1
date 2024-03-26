document.getElementById('showFormButton').addEventListener('click', function() {
    var formDiv = document.getElementById('hiddenForm');
    if (formDiv.style.display === 'none') {
      formDiv.style.display = 'block'; // Show the form
    } else {
      formDiv.style.display = 'none'; // Hide the form
    }
  });
  