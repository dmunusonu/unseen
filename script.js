const content = document.getElementById('content1');
const popup = document.getElementById('popup1');

content.addEventListener('mouseover', () => {
  popup.classList.add('active');
});

content.addEventListener('mouseout', () => {
  popup.classList.remove('active');
});


function loadPage(page) {
    // Use window.location to navigate to the specified page
    window.location.href = page;
}
