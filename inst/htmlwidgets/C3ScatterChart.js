HTMLWidgets.widget({

  name: 'C3ScatterChart',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
                                
                                  var chart = c3.generate({
                                      bindto:el,
                                      data: {
                                          xs: {
                                              setosa: 'setosa_x',
                                              versicolor: 'versicolor_x',
                                          },
                                          // iris data from R
                                          columns: [
                                              ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
                                              ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2]
                                          ],
                                          type: 'scatter'
                                      },
                                      axis: {
                                          x: {
                                              label: 'Sepal.Width',
                                              tick: {
                                                  fit: false
                                              }
                                          },
                                          y: {
                                              label: 'Petal.Width'
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