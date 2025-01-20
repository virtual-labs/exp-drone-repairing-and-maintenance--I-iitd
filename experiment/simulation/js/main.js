import { Download, Scenes, DeveloperTools, Steps } from "./Libs.js";


document.addEventListener('DOMContentLoaded', ()=>{
  // add steps
  Scenes.steps = Steps.steps
  
  // stepcalling
  Scenes.currentStep = 4;
  Scenes.next();

  Download.init()
  DeveloperTools.updateMousePosition()
  // Download.toggleSpinner()
  // DeveloperTools.init()

  $( function() {
    // $( "img" ).draggable({
    //   drag: function(event, ui){
    //     console.log(ui.position.left, ui.position.top)
    //   }
    // });
    // $( ".temp" ).draggable();
    // $( ".video-box" ).draggable();
    // $( ".modal-box" ).draggable();
  } );
});

// setTimeout(() => {
// $(".main-container").hide();
// }, 100);

// $(document).ready(function () {
//   // TODO uncomment
//   Download.init();
//   // Download.toggleSpinner()

//   window.onbeforeprint = () => {
//     Dom.setBlinkArrowRed(-1);
//     Dom.setBlinkArrow(-1);
//   };
// });
