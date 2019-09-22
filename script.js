$(function () {

  $('.scrollspy').scrollSpy({
    scrollOffset: 10
  });

  // Tooltip
  $('.tooltipped').tooltip();

  // Nav Animation
  $('.nav-elem').each(function () {
    var $this = $(this);
    let n = parseInt($(this).attr('n'))
    del = n * 100
    $(this).css('animation-delay', del + 'ms')
  })

  //Popanim

  $(window).on('scroll', function () {

    var pos = $(window).scrollTop();
    var wh = $(window).height();
    console.log(wh)

    $('.slideanim').each(function () {
      let t = $(this).offset().top;
      if (t < pos + 0.62 * wh) {
        if (!$(this).hasClass('animated')) {
          $(this).css('visibility', 'visible');
          $(this).addClass('animated slideInRight');

          console.log('class added')
        }
      }
    })

    $('.contactanim').each(function () {
      let t = $('#contact').offset().top;
      if (t < pos + 0.62 * wh) {
        let a = parseInt($(this).attr('a'));
        let anim = $(this).attr('anim');
        if (!$(this).hasClass('animated')) {
          $(this).css('visibility', 'visible');
          $(this).css('animation-delay', a * 200 + 'ms');
          $(this).addClass('animated ' + anim);
        }
      }
    })

    $('.skillsanim').each(function () {
      let t = $('#skills').offset().top;
      if (t < pos + 0.62 * wh) {
        if ($(this).attr('a') == 'r') {
          let a = 3 + Math.floor(Math.random() * Math.floor(3));
          let anim = $(this).attr('anim');
          if (!$(this).hasClass('animated')) {
            $(this).css('visibility', 'visible');
            $(this).css('animation-delay', a * 500 + 'ms');
            $(this).addClass('animated ' + anim);
          }
        }
        else {
          console.log('else')
          let a = parseInt($(this).attr('a'));
          let anim = $(this).attr('anim');
          if (!$(this).hasClass('animated')) {
            $(this).css('visibility', 'visible');
            $(this).css('animation-delay', a * 500 + 'ms');
            $(this).addClass('animated ' + anim);
          }
        }
      }

    });

    $('.projectsanim').each(function () {
      let t = $('#projects').offset().top;
      if (t < pos + 0.62 * wh) {
        let a = parseInt($(this).attr('a'));
        let anim = $(this).attr('anim');
        if (!$(this).hasClass('animated')) {
          $(this).css('visibility', 'visible');
          $(this).css('animation-delay', a * 200 + 'ms');
          $(this).addClass('animated ' + anim);
        }
      }
    })

    $('.aboutanim').each(function () {
      let t = $('#about').offset().top;
      if (t < pos + 0.62 * wh) {
        let a = parseInt($(this).attr('a'));
        let anim = $(this).attr('anim');
        if (!$(this).hasClass('animated')) {
          $(this).css('visibility', 'visible');
          $(this).css('animation-delay', a * 200 + 'ms');
          $(this).addClass('animated ' + anim);
        }
      }
    })



  })






})



