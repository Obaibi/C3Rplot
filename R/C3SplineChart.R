#' <Add Title>
#'
#' <Add Description>
#'
#' @import htmlwidgets
#'
#' @export
C3SplineChart <- function(message,title=NULL,xlabel=NULL,ylabel=NULL, xLabelPos='outer-center', yLabelPos='outer-middle' ,width = NULL, height = NULL, elementId = NULL) {

  # forward options using x
  x = list(
          list(data = message),
          #options du graphique
          list(text = title, xlabel=xlabel, ylabel=ylabel, xlabelPos = xLabelPos, ylabelPos=yLabelPos)
  )
  
  # create widget
  htmlwidgets::createWidget(
    name = 'C3SplineChart',
    x, 
    width = width,
    height = height,
    package = 'C3',
    elementId = elementId
  )
}

#' Shiny bindings for C3SplineChart
#'
#' Output and render functions for using C3SplineChart within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a C3SplineChart
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name C3SplineChart-shiny
#'
#' @export
C3SplineChartOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'C3SplineChart', width, height, package = 'C3')
}

#' @rdname C3SplineChart-shiny
#' @export
renderC3SplineChart <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, C3SplineChartOutput, env, quoted = TRUE)
}
