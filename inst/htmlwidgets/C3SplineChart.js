HTMLWidgets.widget({

  name: 'C3SplineChart',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {
                                      
                            var chart = c3.generate({
                                                    bindto: el,
                                                   
                                                    data: {
                                                        type: 'spline', 
                                                        json: x[0]
                                                          }, 
                                                    title:{
                                                            text:x[1].text
                                                          } , 

                                                    color:{
                                                            
                                                          },
                                                    axis:{
                                                            x:{
                                                                  label:{
                                                                        text:x[1].xlabel,
                                                                        position: x[1].xLabelPos
                                                                        }

                                                              },
                                                            y:{
                                                                  label:{
                                                                      text:x[1].ylabel,
                                                                      position:x[1].yLabelPos
                                                                        }
                                                              }
                                                          }
                                                });



                              },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});