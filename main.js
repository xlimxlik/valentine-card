$(document).ready(function() {
  $("body").removeClass("container");

  const envelope = $("#envelope");
  let isOpen = false;

  envelope.on('click', function() {
    if (isOpen) {
      envelope.addClass("close").removeClass("open");
    } else {
      envelope.addClass("open").removeClass("close");
    }
    isOpen = !isOpen;
  });
});



