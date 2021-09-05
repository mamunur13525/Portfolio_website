export  const   runActive = () => {
   document.querySelector('#myCanvas').tagcanvas({
        textColour : '#FFFFFF',
        outlineThickness : 0.5,
        outlineColour : '#fe0853',
        maxSpeed : 0.06,
        freezeActive:true,
        shuffleTags:true,
        shape:'sphere',
        zoom:0.9,
        noSelect:true,
        textFont:null,
        pinchZoom:true,
        freezeDecel:true,
        fadeIn:3000,
        initial: [0.3,-0.1],
        depth : 0.8
    });
  }