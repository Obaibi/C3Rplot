#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3table <- function(message,title="",position="top",color="#3c8dbc", width = NULL, height = NULL, elementId = NULL) {

  
  
  if(is.table(message)){
                            titre = names(message)
                            
                            x = data.frame("test"=0)
                            
                            for(i in 1:length(titre)){
                              x[titre[i]] = message[i]
                            }
                            
                            message = x[,2:(length(titre)+1)]
                            
                         
                            
                          }
  
  # forward options using x
  x = list(
    message = message, 
    title = title, 
    position = position,
    color = color
  )

  # create widget
  htmlwidgets::createWidget(
    name = 'C3table',
    x,
    width = width,
    height = height,
    package = 'C3',
    elementId = elementId
  )
}

#' Shiny bindings for C3table
#'
#' Output and render functions for using C3table within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3table
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3table-shiny
#'
#' @export
C3tableOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3table', width, height, package = 'C3')
}

#' @rdname C3table-shiny
#' @export
renderC3table <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3tableOutput, env, quoted = TRUE)
}
