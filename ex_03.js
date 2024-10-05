// Animate function
function stepAnimateText(element, animation, delay) {

    var text = $(element).text();
    var curr = '';

    for (var i = 0; i < text.length; i++) {
        var character = text.charAt(i);
        $(element).html(curr + '<span class="' + animation + '" style="-webkit-animation-delay: ' + i * delay + 's; animation-delay: ' + i * delay + 's">' + character + "</span>");
        curr = $(element).html();
    }
  }

  const delay = 0.02;

  // Display function
  function displayThisText(str) {
    if (document.getElementById("out").innerHTML.length === 0)
      document.getElementById("out").innerHTML += "\n";
    document.getElementById("out").innerHTML += str;
    stepAnimateText('.fade', 'bounceInDown', delay);
  }

  // Init on load (EXERCISE 03 solution)
  $(document).ready(function() {
      displayThisText("Hello World!");
  });

  $('.fade-container').click(function() {
    stepAnimateText('.fade', 'bounceInDown', delay);
    return false;
});