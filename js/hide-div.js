function myFunction() {
    var x = document.getElementById('content_text_editID');
    var y = document.getElementById('btn_copy')
    if ((x.style.display === 'none') && (y.style.display === 'none')){
      (x.style.display = 'block') &&
      (y.style.display = 'block')
    } else {
      (x.style.display = 'none') &&
      (y.style.display = 'none')
    }
  }

