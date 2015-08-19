$('document').ready(function() {

  // on click of li
    // if no iframe is displayed below
      //  insert embed iframe after li - set size dynamically (.width, set height to be 73% width)
    //  else
      //  toggle visibility of iframe

  $('.slidesList, .pairing').click(function(event) {
    var target = event.target;
    var next = $(target).next()[0];
    if ((next && next.localName !== 'iframe') || next === undefined) {
      var embedURL = $(target).data('embedurl');
      $(target).after('<iframe src=' + embedURL + ' width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    } else {
      $(next).toggle();
    }
  });

});