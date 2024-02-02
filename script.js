      function search() {
    let filter = document.getElementById('find').value.toUpperCase();

    let item = document.querySelectorAll('.product');

    let s = document.getElementsByTagName('h3');

    for (var i = 0; i <= s.length; i++) {
        let a = item[i].getElementsByTagName('h3')[0];

        let value = a.innerHTML || a.textContent || a.innerText;

        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = '';
        }
        else {
            item[i].style.display = 'none';
        }
    }
}