HTMLWidgets.widget({

  name: 'C3PieChart',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {
                
                console.log(x[0].data.Var1);

                tableauData = {};

                for(i in x[0].data.Var1)
                                        {
                                          tableauData[x[0].data.Var1[i]] = x[0].data.Freq[i];
                                        }  

                console.log(tableauData);
                var chart = c3.generate({
                                            bindto:el,
                                            data: {
                                                // iris data from R
                                                json: [
                                                          tableauData
                                                      ],
                                                type : 'pie', 
                                                keys:{
                                                        
                                                        value: x[0].data.Var1
                                                      }
                                                    }, 
                                            title:{
                                                      text:x[1].title
                                                  }
                                        });
      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});