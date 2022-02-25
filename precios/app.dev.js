"use strict";

// Sticky Header
$(window).scroll(function () {
  console.log($(window).scrollTop());

  if ($(window).scrollTop() >= 50) {
    $('.main_h').addClass('sticky');
  } else {
    $('.main_h').removeClass('sticky');
  }
}); // Mobile Navigation

$('.mobile-toggle').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.main_h').removeClass('open-nav');
  } else {
    $('.main_h').addClass('open-nav');
  }
});
$('.main_h li a').click(function () {
  if ($('.main_h').hasClass('open-nav')) {
    $('.navigation').removeClass('open-nav');
    $('.main_h').removeClass('open-nav');
  }
}); // Navigation Scroll - ljepo radi materem

$('nav a').click(function (event) {
  var id = $(this).attr("href");
  var offset = 70;
  var target = $(id).offset().top - offset;
  $('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
}); // swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var mediaqueryList = window.matchMedia("(max-width: 500px)"); //swiper

if (mediaqueryList.matches) {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
} // dropdown


$(document).ready(function () {
  $('#dropDown').click(function () {
    $('.drop-down').toggleClass('drop-down--active');
  });
});
var datas = [["./../assets/icons/clean-svgrepo-com.svg", "Deep clean if the area or equipment requires it.", "caracteristica do"], ["./../assets/icons/disinfection.png", "Eliminates microorganisms, fungi and viruses.", "It acts by immersion of the objects."], ["./../assets/icons/ozonemolecule.svg", "High disinfection power.", " Eliminates bacteria and viruses."]]; // llamada ajax

var three = document.querySelector('.servicios');
var url = "https://deevi-backend.herokuapp.com/api/user/get_precios";
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data[0]['valores'][0][0]);

  for (var i = 0; i < datas.length; i++) {
    three.innerHTML += "\n            <div class=\"item\">\n                        <div class=\"img\">\n\n                            <img src=\"".concat(datas[i][0], "\" alt=\"\">\n                        </div>\n                        <h3>").concat(data[0]['valores'][i][0], "</h3>\n                        <div class=\"caracteristicas\">\n                            <p>").concat(datas[i][1], "</p>\n                            <p>").concat(datas[i][2], "</p>\n\n                        </div>\n                        <div class=\"precios_hora\">\n                            <h4>prices per hour</h4>\n                            <div class=\"precios\">\n                                <div>\n                                    <p>weekly</p>\n                                    <p>$").concat(data[1]['valores'][i][1], "</p>\n                                </div>\n                                <div>\n                                    <p>Daily</p>\n                                    <p>$").concat(data[0]['valores'][i][1], "</p>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n        ");
  }
  /*three.innerHTML += `
      <div class="item">
                  <div class="img">
                        <img src="${}" alt="">
                  </div>
                  <h3>${data[0]['valores'][1][0]}</h3>
                  <div class="caracteristicas">
                      <p>a_</p>
                      <p>b__</p>
                  </div>
                  <div class="precios_hora">
                      <h4>prices por hora</h4>
                      <div class="precios">
                          <div>
                              <p>semanalmente</p>
                              <p>$${data[1]['valores'][1][1]}</p>
                          </div>
                          <div>
                              <p>Diariamente</p>
                              <p>$${data[0]['valores'][1][1]}</p>
                          </div>
                      </div>
                  </div>
              </div>
  `;
  three.innerHTML += `
      <div class="item">
                  <div class="img">
                        <img src="./../assets/icons/clean-svgrepo-com.svg" alt="">
                  </div>
                  <h3>${data[0]['valores'][2][0]}</h3>
                  <div class="caracteristicas">
                      <p>a_</p>
                      <p>b__</p>
                  </div>
                  <div class="precios_hora">
                      <h4>prices por hora</h4>
                      <div class="precios">
                          <div>
                              <p>semanalmente</p>
                              <p>$${data[1]['valores'][2][1]}</p>
                          </div>
                          <div>
                              <p>Diariamente</p>
                              <p>$${data[0]['valores'][2][1]}</p>
                          </div>
                      </div>
                  </div>
              </div>
  `;*/

  /*for (let index = 0; index < data.length; index++) {
      three.innerHTML += `
          <p>${data[index]['name']}</p>
          
          `
      for (let indexa = 0; indexa < data[index]['valores'].length; indexa++) {
          three.innerHTML += `
          <p>${data[index]['valores'][indexa][0]}</p>
          <p>${data[index]['valores'][indexa][1]}</p>
            `
        }
    }*/

});