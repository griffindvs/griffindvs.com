window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};

$(document).ready(() => {
  var particles = Particles.init({
    selector: '.background',
    color: '#ffffff',
    connectParticles: true,
    maxParticles: 75,

    responsive: [
      {
        breakpoint: 768,
        options: {
          connectParticles: false
        }
      }
    ]
  })

  var paused = false;

  $("#toggleParticles").click(function() {
    if(!paused) {
      paused = true;
      Particles.pauseAnimation();
    } else {
      paused = false;
      Particles.resumeAnimation();
    }
  })
});
