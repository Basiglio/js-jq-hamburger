// mostrare / nascondere il menu principale

// IMPOSTO IL CLICK SULL'HAMBURGER ICON
$(".header-right > a").click(
  function () {
    // MOSTRARE IL MENU NASCOSTO
    $(".hamburger-menu").show(1500);
  }
);

// IMPOSTO IL CLICK SULL'ICONA X
$(".close").click(
  function () {
    // NASCONDERE IL MENU VISIBILE
    $(".hamburger-menu").hide(1500);
  }
);
