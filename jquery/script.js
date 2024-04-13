$(document).ready(function () {
  console.log("we are using jQuery");

  //   console.log(jQuery);

  //   $("p").click(function () {
  //     console.log("you clicked on p");
  //     // $(this).hide();
  //   });

  //   $("p").dblclick(function () {
  //     console.log("you dbl on p");
  //     // $(this).hide();
  //   });

  //   $("p").mouseenter(function () {
  //     console.log("you enter on p");
  //     // $(this).hide();
  //   });

  //   events in jQuery
  // moouse events = click, dbclicks, mouseneter,mouseleave
  // keyboardEvent = keypress, keydown,mediakeystatusMap
  // form event = submit, change, focus, blur
  // document/window events = load, resize, scroll, unload

  $("p").on({
    click: function () {
      console.log("thank for clkcking ", this);
    },
    mouseleave: function () {
      console.log("mouseleave");
    },
  });
});

// there are three main types of selectors in jQuery
// 1.element selector
// 2.id selector
// 3.class selector

// $("#wiki").hide(1000, function(){
//     console.log("done")
// })

// $("button").click(1000, function () {
//   $("#wiki").toggle(1000);
// });

let wiki = $("#wiki");
let btn = $("button");

btn.click(function () {
  //   wiki.slideUp(1000, function () {
  //     console.log("done");
  //   });
  // wiki.slideD0wn(1000, function () {
  //     console.log("done");
  //   });

//   wiki.slideToggle(1000, function () {
//     console.log("done");
//   });
});


// animate function in jQuery

wiki.animate({
    opacity:0.3,
    height : '150px',
    width:'350px'

   
}
// btn.animate({
//     position:"bottom"
// })
)
