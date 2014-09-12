Template.timelinePost.rendered = function(){
  if ( typeof timelineMasonry === 'undefined' ) {
    timelineMasonry = new Masonry( $('#timeline .class-posts')[0], {
      gutter: 4,
      transitionDuration: 0
    });
  } else {
    timelineMasonry.reloadItems();
    timelineMasonry.layout();
  }
}