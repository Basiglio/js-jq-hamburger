// mostrare / nascondere il menu principale

// IMPOSTO IL CLICK SULL'HAMBURGER ICON
$(".fas.fa-bars").click(
  function () {
    // CALLBACK PER MOSTRARE IL MENU NASCOSTO
    $(".hamburger-menu").show(1500);
  }
);

// IMPOSTO IL CLICK SULL'ICONA X
$(".close").click(
  function () {
    // CALLBACK PER NASCONDERE IL MENU VISIBILE
    $(".hamburger-menu").hide(1500);
  }
);
