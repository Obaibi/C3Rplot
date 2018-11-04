HTMLWidgets.widget({

  name: 'C3BarChart',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

                            //Mise en forme du tableau de données dans un format correct pouvant être interpreté par la lib C3
                            tableau = [];
                           
                             for(i in x[0].data.Var1)
                             {
                                tableau.push({"Var1":x[0].data.Var1[i], "Freq":x[0].data.Freq[i]})
                             } 


                            var chart = c3.generate({
                                bindto: el,
                                data: {
                                    // iris data from R
                                    type : 'bar',
                                    json: tableau,
                                    keys:{
                                            x:"Var1", 
                                            value:['Freq']
                                          }
                                  
                                }, 
                                title:
                                {
                                  text:x[1].title
                                },
                                axis:{
                                        x:{
                                              label:{
                                                        text:x[1].xlab,
                                                        position:x[1].xlabPos
                                                    },
                                              type:'category', 
                                              tick:{
                                                      rotate:x[1].rotate, 
                                                      multiline:false
                                                   }

                                          },
                                        y:{
                                              label:{
                                                      text:x[1].ylab,
                                                      position:x[1].ylabPos
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