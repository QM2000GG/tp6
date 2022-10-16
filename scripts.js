window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.querySelector("#titleboi").style.color = '#111111';
    document.querySelector('#innerhtmltest').innerHTML = "김치볶음밥!"
  });

  //onclick h1, change color
  document.querySelector("titleboi").onclick = function() {
    if (document.querySelector("#titleboi").style.color == '#111111') {
      document.querySelector("#titleboi").style.color = '#1111dd';
    } else {
      document.querySelector("#titleboi").style.color = '#1111dd';
    }
  }

