/*!
 * Archion Sitepackage v1.0.0 (https://www.speedpartner.de)
 * Copyright 2017-2023 Dennis Donzelmann
 * Licensed under the GPL-2.0-or-later license
 */

/* Functions */
(function($) {
  $.fn.clickToggle = function(func1, func2) {
      var funcs = [func1, func2];
      this.data('toggleclicked', 0);
      this.click(function() {
          var data = $(this).data();
          var tc = data.toggleclicked;
          $.proxy(funcs[tc], this)();
          data.toggleclicked = (tc + 1) % 2;
      });
      return this;
  };

  $.fn.visibleHeight = function() {
    var elBottom, elTop, scrollBot, scrollTop, visibleBottom, visibleTop;
    scrollTop = $(window).scrollTop();
    scrollBot = scrollTop + $(window).height();
    elTop = this.offset().top;
    elBottom = elTop + this.outerHeight();
    visibleTop = elTop < scrollTop ? scrollTop : elTop;
    visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
    return visibleBottom - visibleTop
  };

  $.fn.sortSelectByText = function(){
    this.each(function(){
        var selected = $(this).val(); 
        var opts_list = $(this).find('option');
        opts_list.sort(function(a, b) { return $(a).text() > $(b).text() ? 1 : -1; });
        $(this).html('').append(opts_list);
        $(this).val(selected); 
    })
    return this;        
  }
  $.fn.sortSelectByValue = function(){
    this.each(function(){
        var selected = $(this).val(); 
        var opts_list = $(this).find('option');
        opts_list.sort(function(a, b) { return $(a).val() > $(b).val() ? 1 : -1; });
        $(this).html('').append(opts_list);
        $(this).val(selected); 
    })
    return this;        
  }
}(jQuery));


if (window.location.href.indexOf('/de/') > -1) {
  Cookies.set('sys_language', 'de', { sameSite: 'lax' });
}
else if (window.location.href.indexOf('/en/') > -1) {
  Cookies.set('sys_language', 'en', { sameSite: 'lax' });
}


/* Parsley FE Validation for FELogin */
// Validation errors messages for Parsley
// Load this after Parsley
Parsley.addMessages('de', {
  defaultMessage: "Die Eingabe scheint nicht korrekt zu sein.",
  type: {
    email:        "Die Eingabe muss eine gültige E-Mail-Adresse sein.",
    url:          "Die Eingabe muss eine gültige URL sein.",
    number:       "Die Eingabe muss eine Zahl sein.",
    integer:      "Die Eingabe muss eine Zahl sein.",
    digits:       "Die Eingabe darf nur Ziffern enthalten.",
    alphanum:     "Die Eingabe muss alphanumerisch sein."
  },
  notblank:       "Die Eingabe darf nicht leer sein.",
  required:       "Pflichtfeld",
  pattern:        "Die Eingabe scheint ungültig zu sein.",
  min:            "Die Eingabe muss größer oder gleich %s sein.",
  max:            "Die Eingabe muss kleiner oder gleich %s sein.",
  range:          "Die Eingabe muss zwischen %s und %s liegen.",
  minlength:      "Die Eingabe ist zu kurz. Es müssen mindestens %s Zeichen eingegeben werden.",
  maxlength:      "Die Eingabe ist zu lang. Es dürfen höchstens %s Zeichen eingegeben werden.",
  length:         "Die Länge der Eingabe ist ungültig. Es müssen zwischen %s und %s Zeichen eingegeben werden.",
  mincheck:       "Wählen Sie mindestens %s Angaben aus.",
  maxcheck:       "Wählen Sie maximal %s Angaben aus.",
  check:          "Wählen Sie zwischen %s und %s Angaben.",
  equalto:        "Dieses Feld muss dem anderen entsprechen."
});

Parsley.addMessages('en', {
  required:       "Required field",
});


if(Cookies.get('sys_language') == 'de') {
  Parsley.setLocale('de');
}
else if(Cookies.get('sys_language') == 'en') {
  Parsley.setLocale('en');
}


if ($('.feloginform').length > 0) {

  $('.feloginform').parsley({
    trigger:      'change',
    successClass: 'success',
    errorClass: 'error',
    errorsWrapper: '<div class="error-messages alert"></div>',
    errorTemplate: '<span></span>',
  });

  $('.feloginform').parsley().on('field:error', function() {
    this.$element.closest('.password-wrap').removeClass('has-success').addClass('has-error');
  });

  $('.feloginform').parsley().on('field:success', function() {
    this.$element.closest('.password-wrap').removeClass('has-error').addClass('has-success');
  });

}

if ($('.powermail_form').length > 0) {

  $('.powermail_form').parsley({
    trigger:      'change',
    successClass: 'success',
    errorClass: 'error',
    errorsWrapper: '<div class="error-messages alert"></div>',
    errorTemplate: '<span></span>',
  });
  
}

if ($('.feManagerValidation').length > 0) {

  $('.feManagerValidation').parsley({
    trigger:      'change',
    successClass: 'success',
    errorClass: 'error',
    errorsWrapper: '<div class="error-messages alert"></div>',
    errorTemplate: '<span></span>',
  });
  
}

if ($('.checkoutRegValidation').length > 0) {

  $('.checkoutRegValidation').parsley({
    trigger:      'change',
    successClass: 'success',
    errorClass: 'error',
    errorsWrapper: '<div class="error-messages alert"></div>',
    errorTemplate: '<span></span>',
  });
  
}

jQuery('[data-bs-toggle="tooltip"]').each(function (i,el) {
  new bootstrap.Tooltip(el);
});

// Remove Margin Bottom Class from Navbar, if Banner is direct Sibling!
if($('nav.navbar, nav.mobile-nav').next('div.bg-banner').length > 0) {
  $('nav.navbar, nav.mobile-nav').removeClass('no-breadcrumb');
}

lightbox.init();

$(window).on('load resize', function () {
  if($(window).innerWidth() < 768) {
    $('body#page-2806 #subpages-nav .nav-item:first-of-type .nav-link').removeClass('active');
    $('body#page-2806 #faq-wrapper, #c11294').hide();
    $('body:not(#page-2806) #c11294').parent().parent().hide();
  }
  else {
    $('body#page-2806 #subpages-nav .nav-item:first-of-type .nav-link').addClass('active');
    $('body#page-2806 #faq-wrapper, #c11294').show();
  }
});



if(Cookies.get('sys_language') == 'de') {
  $('.showpasswordlink').text('einblenden');
}
else if(Cookies.get('sys_language') == 'en') {
  $('.showpasswordlink').text('show');
}

$(document).on('click', '.showpasswordlink', function(e){
    e.preventDefault();
    
    // femanager_field_password_repeat | femanager_field_password

    if($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        // $('#userpassword').attr('type', 'password');
        $(this).parent().find('input').attr('type', 'password');
        $(this).parent().find('input').removeClass('show-password');
        // $('.icontoggle').removeClass('fa-eye').addClass('fa-eye-slash');

        if(Cookies.get('sys_language') == 'de') {
          $(this).text('einblenden');
        }
        else if(Cookies.get('sys_language') == 'en') {
          $(this).text('show');
        }
        
      }
    else {
      $(this).attr('data-click-state', 1);
      // $('#userpassword').attr('type', 'text');
      $(this).parent().find('input').attr('type', 'text');
      $(this).parent().find('input').addClass('show-password');

      // $('.icontoggle').removeClass('fa-eye-slash').addClass('fa-eye');

      if(Cookies.get('sys_language') == 'de') {
        $(this).text('ausblenden');
      }
      else if(Cookies.get('sys_language') == 'en') {
        $(this).text('hide');
      }
      
    }
});



$('.slider').slick({
  infinite: false,
  dots: true,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
});

$('.card-slider').slick({
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  variableWidth: false,

  // 576px / 992px
  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
          }
      },
      {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: true,
            prevArrow: $('.prev-arrow'),
            nextArrow: $('.next-arrow'),
          }
      },
      {
          // breakpoint: 768,
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '20px',
              dots: true,
              customPaging : function(slider, i) {
                var title = $(slider.$slides[i]).find('[data-title]').data('title');
                return '<a class="pager__item"> '+title+' </a>';
              },
          }
      }
  ]
});


$('nav.modal-navigation li a').on('click', function(){
		
  var parentLevel = $(this).parents('ul').length -1;
  var currentMenu = $(this).closest('ul');
  var currentListItem = $(this).parent('li');
  var parentMenu = $('.level-' + parentLevel);
  var subMenu = $(this).next('ul');

  if(currentListItem.hasClass('back')) {
    // back button hit	
    currentMenu.removeClass('active');
    parentMenu.removeClass('hidden');
  } else if (currentListItem.children('ul').length > 0) {
    // menu item has children - expand the menu
    subMenu.toggleClass('active');
    currentMenu.addClass('hidden');
  }
});


var back_to_top_button = ['<a href="#top" class="back-to-top"><img src="/typo3conf/ext/archion_sitepackage/Resources/Public/Icons/Arrow_totop.svg" width="15" height="9" /></a>'].join("");

$('body').append(back_to_top_button);

$('.back-to-top').hide();

$(function () {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});

		$('.back-to-top').click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
});


$('#federalselect').on('change', function() {
  var $option = $(this).find('option:selected');
  var selectedFederal = $option.val();

  $('#archive-search').val('');
  $('#federal-nav div').removeClass('search-area');
  $('#federal-nav div, #federal-nav div li').show();

  if(selectedFederal === 'all') {
    $('#federal-nav').find('div').show();
    $('#federalselect').val('all').prop('selected', true);
  }
  else {
    $('#federal-nav').find('div').not('#'+selectedFederal).hide();
    $('#federal-nav').find('div#'+selectedFederal).show();
    $('#federalselect').val(selectedFederal).prop('selected', true);
  }
}).trigger('change');


$('#archive-search').on('keyup', function() {
  var value = $(this).val().toLowerCase();

  // hide all div and li
  $('#federal-nav div, #federal-nav li, #archive-nav ul, #archive-nav li').hide();

  let selectedFederal = $('#federalselect').find('option:selected').val();
  if(selectedFederal != 'all') {
    $('#federal-nav div').removeClass('search-area');
    $('#federal-nav').find('div#'+selectedFederal).addClass('search-area');
  } else {
    $('#federal-nav div').addClass('search-area');
  }
  
  if(value.length > 0) {
    // show div and li with matches
    $('#federal-nav div.search-area li, #archive-nav li').filter(function() {
      var found = $(this).text().toLowerCase().indexOf(value)!=-1;

      if(found) { // show subparent if child matches
        $(this).parents('#federal-nav div, #archive-nav ul').show();
      }

      return found;
    }).show();
  } else {
    $('#federal-nav div.search-area, #federal-nav div.search-area li, #archive-nav ul, #archive-nav li').show();
  }
});


if($(window).innerWidth() < 468) {
  $('#archive-search').focus(function () {
    $('html, body').animate({
        scrollTop: $('.archive-search-container').offset().top + 'px'
    }, 'fast');

  });

}



$('#archives .card-nav .card-body').bind('scroll', function () {
  if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    $('.gradient').fadeOut();
  }
  else {
    $('.gradient').fadeIn();
  }
});

if($(window).innerWidth() > 992) {
  $(window).on('load', function(){
    var searchContH = $('.archive-search-container').height() + 58;

    if ($('.item.active').position()) {
      $('#archives .card-nav .card-body').animate({
        scrollTop: $('.item.active').position().top - searchContH
      }, 0);
    }

  });
}



if($(window).innerWidth() < 992) {
  // Mobile Device Content "Shortener"

  if($('#archive-content').hasClass('enableshortener')) {

      var h = $('#archive-content.enableshortener')[0].scrollHeight;

      $('#more').on('click', function(e){
        e.preventDefault();
      });

      if(Cookies.get('sys_language') == 'de') {
        $('#more span').text('Details anzeigen');
      }
      else if(Cookies.get('sys_language') == 'en') {
        $('#more span').text('Show details');
      }

      $('#more').clickToggle(function() {
        $('#archive-content.enableshortener').animate({
          'height': h
        }, 1000);
        
        setTimeout(function() {
          $('#more i').removeClass('fa-chevron-down').addClass('fa-chevron-up');

          if(Cookies.get('sys_language') == 'de') {
            $('#more span').text('weniger anzeigen');
          }
          else if(Cookies.get('sys_language') == 'en') {
            $('#more span').text('Hide details');
          }
          
          $('.whitegradient').css({ opacity: 0 });
        }, 1100);
      },
      function() {
          $('#archive-content.enableshortener').animate({
            'height': '200px'
          }, 1000);
          setTimeout(function() {
            $('#more i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            
            if(Cookies.get('sys_language') == 'de') {
              $('#more span').text('Details anzeigen');
            }
            else if(Cookies.get('sys_language') == 'en') {
              $('#more span').text('Show details');
            }

            $('.whitegradient').css({ opacity: 1 });
          }, 1000);
      });
  }

  var emptyCol0 = $.trim($('.content-colpos-0').html())=='',
      emptyCol3 = $.trim($('.content-colpos-3').html())=='',
      emptyCol4 = $.trim($('.content-colpos-4').html())=='',
      contentH = $('.contentH').height(),
      maxContentH = 150;

  if (emptyCol0 && emptyCol3 && emptyCol4) {
    $('#archive-content').removeClass('enableshortener');
    $('.gradient.whitegradient, .more-btn').remove();
  }
  else if (contentH < maxContentH) {
    $('#archive-content').removeClass('enableshortener');
    $('.gradient.whitegradient, .more-btn').remove();
    $('.contentH').addClass('pb-3');
  }
  
}

// Stretch-Verhalten (Höhe) der Archiv-Navigation - macht Zicken und stört auch Mobile Nutzung des Suchfeldes
// $(window).on('load resize scroll', function () {
//   if($(window).innerWidth() >= 992 && $('#archive-content').length) {
//     var archiveContentH = $('#archive-content').height(),
//         navHeight = $('#archives .card-nav').innerHeight(),
//         rowHeight = $('#archives .archive-row').height(),
//         navVisibleHeight = $('#nav-col').visibleHeight(),
//         navOffsetTop = $('#nav-col').offset().top,
//         vpScrollTop = $(window).scrollTop(),
//         vpHeight = $(window).innerHeight();
      
//       if(vpScrollTop <= navOffsetTop) {
//         var heightToSet = vpHeight - navOffsetTop + vpScrollTop;
//       }
//       else {
//         var heightToSet = vpHeight - navOffsetTop + vpScrollTop;
//       }

//       if(heightToSet <= archiveContentH) {
//         $('#archives .card-nav').css({
//           'height': heightToSet+'px',
//           'max-height': archiveContentH+'px'
//         });
//       }

//   }
// });


var showId = $('span#bookidforactiveextnavi').text();

$('#archive-nav li').each(function(i, li) {
  var navItem = $(li);  
  
  if(navItem.attr('id') == showId) {
    $(this).addClass('active');
  }
  else {
    $(this).addClass('inact');
  }

});

var archNavPrevLink = $('#archive-nav li.active a').parent().prev().find('a').attr('href'),
    archNavNextLink = $('#archive-nav li.active a').parent().next().find('a').attr('href');

if(archNavPrevLink) {
  $('.churchbook-arrownav #prev-link').attr('href', archNavPrevLink);
}
else {
  $('.churchbook-arrownav #prev-link').hide();
}

if(archNavNextLink) {
  $('.churchbook-arrownav #next-link').attr('href', archNavNextLink);
}
else {
  $('.churchbook-arrownav #next-link').hide();
}


$(window).on('load resize', function () {
  if(Cookies.get('sys_language') == 'de') {
    $('#showhide span').text('einblenden');
  }
  else if(Cookies.get('sys_language') == 'en') {
    $('#showhide span').text('show');
  }

  $('#showhide').clickToggle(function(){
    setTimeout(function() {
      $('#showhide i').removeClass('fa-chevron-down').addClass('fa-chevron-up');

      if(Cookies.get('sys_language') == 'de') {
        $('#showhide span').text('ausblenden');
      }
      else if(Cookies.get('sys_language') == 'en') {
        $('#showhide span').text('hide');
      }
      $('#showhide').addClass('text-green');

    }, 500);
  },
  function(){
    setTimeout(function() {
      $('#showhide i').removeClass('fa-chevron-up').addClass('fa-chevron-down');

      if(Cookies.get('sys_language') == 'de') {
        $('#showhide span').text('einblenden');
      }
      else if(Cookies.get('sys_language') == 'en') {
        $('#showhide span').text('show');
      }
      $('#showhide').addClass('text-green');

    }, 500);
  });
});




$(window).on('load resize', function () {
  if($(window).innerWidth() < 768) {
    $('.result-content-wrapper button.dropdown-toggle').removeAttr('data-bs-auto-close');
  }
  else {
    $('.result-content-wrapper button.dropdown-toggle').attr('data-bs-auto-close', 'false');
  }
});

$('.filter .form-check-input').on('change', function(){
  var filterCount = $('.filter .form-check-input:checkbox:checked').length;

  $('.filter-counter').text(filterCount);
});

$('.resetfilter').on('click', function(e){
  e.preventDefault();

  $('.filter .form-check-input:checkbox').each(function() {
    this.checked = false;
  });
  $('.filter-counter').text('0');
});
$('.resetresultfilter').on('click', function(e){
  e.preventDefault();

  $('.resultfilter .form-check-input:checkbox').each(function() {
    this.checked = false;
  });
});


// Muss ebenfalls für die Englische Version hinzugefügt werden!!!
// if (window.location.href.indexOf('bearbeiten') > -1) {
//   var anchorHash = window.location.hash.split('#').pop();

//   $('#'+anchorHash).show();
// }

$('a.anchorlinks').on('click', function(e) {
  e.preventDefault();
  var anchorHash = $(this).attr('href').split('#').pop();
  //console.log(anchorHash);
  $('#target-div').empty();

  if(Cookies.get('sys_language') == 'de') {
    $('#target-div').load('/de/account/mein-konto/benutzerdaten/bearbeiten #' + anchorHash, function(){
      if ($('.feManagerValidation').length > 0) {

        $('.feManagerValidation').parsley({
          trigger:      'change',
          successClass: 'success',
          errorClass: 'error',
          errorsWrapper: '<div class="error-messages alert"></div>',
          errorTemplate: '<span></span>',
        });

        $('#femanager_field_submit11259').addClass('disabled');
        
        window.Parsley.on('field:error', function() {
          this.$element.closest('.password-wrap').removeClass('has-success').addClass('has-error');
          $('#femanager_field_submit11259').addClass('disabled');
        });
        window.Parsley.on('field:success', function() {
          this.$element.closest('.password-wrap').removeClass('has-error').addClass('has-success');
        });

        $('#femanager_field_password_repeat').parsley().on('field:error', function() {
          this.$element.closest('.password-wrap').removeClass('has-success').addClass('has-error');
          $('#femanager_field_submit11259').addClass('disabled');
        });
        $('#femanager_field_password_repeat').parsley().on('field:success', function() {
          this.$element.closest('.password-wrap').removeClass('has-error').addClass('has-success');
          $('#femanager_field_submit11259').removeClass('disabled');
        });

        
      }

    });
  }
  else if(Cookies.get('sys_language') == 'en') {
    $('#target-div').load('/en/account/profile/user-information/edit #' + anchorHash, function() {
      $('.showpasswordlink').text('show');

      if ($('.feManagerValidation').length > 0) {

        $('.feManagerValidation').parsley({
          trigger:      'change',
          successClass: 'success',
          errorClass: 'error',
          errorsWrapper: '<div class="error-messages alert"></div>',
          errorTemplate: '<span></span>',
        });

        $('#femanager_field_submit11259').addClass('disabled');
        
        window.Parsley.on('field:error', function() {
          this.$element.closest('.password-wrap').removeClass('has-success').addClass('has-error');
          $('#femanager_field_submit11259').addClass('disabled');
        });
        window.Parsley.on('field:success', function() {
          this.$element.closest('.password-wrap').removeClass('has-error').addClass('has-success');
        });

        $('#femanager_field_password_repeat').parsley().on('field:error', function() {
          this.$element.closest('.password-wrap').removeClass('has-success').addClass('has-error');
          $('#femanager_field_submit11259').addClass('disabled');
        });
        $('#femanager_field_password_repeat').parsley().on('field:success', function() {
          this.$element.closest('.password-wrap').removeClass('has-error').addClass('has-success');
          $('#femanager_field_submit11259').removeClass('disabled');
        });

      }
    });
  }
  
  setTimeout(function() {
    jQuery('[data-bs-toggle="tooltip"]').each(function (i,el) {
      new bootstrap.Tooltip(el);
    });
    $('#profileEditModal').modal('show');
  }, 500);
});

$('a.anchorlinks_image').on('click', function(e) {
  e.preventDefault();
  var anchorHash = $(this).attr('href').split('#').pop();
  //console.log(anchorHash);
  $('#target-div').empty();

  if(Cookies.get('sys_language') == 'de') {
    $('#target-div').load('/de/account/mein-konto/benutzerdaten/bearbeiten/bild #' + anchorHash);
  }
  else if(Cookies.get('sys_language') == 'en') {
    $('#target-div').load('/en/account/profile/user-information/edit/image #' + anchorHash);
  }
  
  setTimeout(function() {
    jQuery('[data-bs-toggle="tooltip"]').each(function (i,el) {
      new bootstrap.Tooltip(el);
    });
    $('#profileEditModal').modal('show');
  }, 500);
});

if(Cookies.get('sys_language') == 'de') {
  $('#target-div-delete').load('/de/account/mein-konto/benutzerdaten/konto-loeschen #c11263');
}
else if(Cookies.get('sys_language') == 'en') {
  $('#target-div-delete').load('/en/account/profile/user-information/delete-account #c12447');
}



$('#researchInterest-undo').hide();
$(function() {
  if(Cookies.get('sys_language') == 'de') {
    setTimeout(function() {
      $('#target-researchinterest').load('/de/account/mein-konto/benutzerdaten/bearbeiten #c11261', function() {
  
        var triggered,
            submitBtn = $('#femanager_field_submit11261'),
            resetBtn = $('#researchInterest-undo'),
            defaultVal = $('#femanager_field_researchInterest').val();
  
        submitBtn.hide();
  
        triggered = 0;
  
        $('#femanager_field_researchInterest').keyup(function() {
  
          var actVal = $('#femanager_field_researchInterest').val();
  
          if (defaultVal != actVal) {
            submitBtn.fadeIn();
            resetBtn.removeClass('d-none').fadeIn().insertAfter(submitBtn);
            
  
            if(event.keyCode == 8) {
              triggered--;
            }
            else {
              triggered++;
            }
            
            if((triggered == 1 || triggered == -1) && !$('#researchInterest-undo').is(':visible')) {
                // $(submitBtn).after('');
            }
     
          }
          else {
            triggered = 0;
            $('#femanager_field_submit11261, #researchInterest-undo').fadeOut();
          }
  
          
  
        });
        
        resetBtn.on('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          $('#femanager_field_researchInterest').val(defaultVal);
          $('#femanager_field_submit11261, #researchInterest-undo').fadeOut();
        });
  
      });
    }, 250);
  }
  else if(Cookies.get('sys_language') == 'en') {
    setTimeout(function() {
      $('#target-researchinterest').load('/en/account/profile/user-information/edit #c11261', function() {
  
        var triggered,
            submitBtn = $('#femanager_field_submit11261'),
            resetBtn = $('#researchInterest-undo'),
            defaultVal = $('#femanager_field_researchInterest').val();
  
        submitBtn.hide();
  
        triggered = 0;
  
        $('#femanager_field_researchInterest').keyup(function() {
  
          var actVal = $('#femanager_field_researchInterest').val();
  
          if (defaultVal != actVal) {
            submitBtn.fadeIn();
            resetBtn.removeClass('d-none').fadeIn().insertAfter(submitBtn);
            
  
            if(event.keyCode == 8) {
              triggered--;
            }
            else {
              triggered++;
            }
            
            if((triggered == 1 || triggered == -1) && !$('#researchInterest-undo').is(':visible')) {
                // $(submitBtn).after('');
            }
     
          }
          else {
            triggered = 0;
            $('#femanager_field_submit11261, #researchInterest-undo').fadeOut();
          }
  
          
  
        });
        
        resetBtn.on('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          $('#femanager_field_researchInterest').val(defaultVal);
          $('#femanager_field_submit11261, #researchInterest-undo').fadeOut();
        });
  
      });
    }, 250);
  }

});



$(document).on('click', '#image-delete', function(e) {
  e.preventDefault();
  e.stopPropagation();

  $.ajax
    ({ 
        url: $(this).attr('href'),
        type: 'post',
        success: function(result)
        {
          $('#profileEditModal').modal('toggle');
          location.reload();
        }
    });

  
});



/* Bookmarks */
$('.edit-bookmark').click(function() {
  var entry = $(this).closest('li'),
      entryid = entry.data('id'),
      entrytitleElement = entry.find('.title'),
      entrytitle = entrytitleElement.text(),
      entryCrdate = entry.find('.crdate'),
      entryTagTitles = entry.find('span.tag span.tag-title')
        .map(function() { return $(this).text(); }).get().join(' '),
      editform = $('.bookmark-edit');

  editform.find('.id').val(entryid);
  editform.find('.title').val('').focus();
  editform.find('.title').val(entrytitle);
  editform.find('.bookmark-title').text(entrytitle);
  editform.find('.bookmark-createdate').text(entryCrdate.text());
  editform.find('.tags').val(entryTagTitles);

  return false;
});

$('.delete-bookmark').click(function(e) {
  e.preventDefault();
  $('.bookmark-delete .deletelink-modal').attr('href', $(this).attr('href'));
  
  return false;
});


if (location.hash !== null && location.hash !== '') {
  var anchorId = location.hash.split('#').pop();
  $('#collapse-' + anchorId + '.collapse').addClass('show');
}


$('.femanager_company, .femanager_ustidnr').hide();
$('#femanager_field_privateorbusiness').on('change', function() {
  if(this.value == 'business') {
    $('.femanager_company, .femanager_ustidnr').show();
  }
  else {
    $('.femanager_company, .femanager_ustidnr').hide();
  }
});
$('#femanager_field_privateorbusiness').trigger('change');

if($(window).innerWidth() < 768) {
  $('.step .number .fa-sharp').removeClass('fa-xl');
} else {
  $('.step .number .fa-sharp').addClass('fa-xl');
}

if(Cookies.get('sys_language') == 'de') {
  $('.infoarea .btn').first().text('Neues Konto erstellen');
}
else if(Cookies.get('sys_language') == 'en') {
  $('.infoarea .btn').first().text('Create a new account');
}

if($('.orderisvoucher').length > 0) {
  $('.infoarea .btn').first().removeClass('btn-outline-primary').addClass('btn-primary');
}

$('select#billingCountry').sortSelectByValue();

$(window).on('load resize', function () {
  if($(window).innerWidth() < 468) {
    $('.checkout.success .icon').removeClass('icon').addClass('mb-2');
    $('img.bubblebg').css('opacity', '0');
  }
});

/* Copy to CLipboard ;) */
// if(Cookies.get('sys_language') == 'de') {
//   $('.copytoclipboard').text('Permalink kopieren');
// }
// else if(Cookies.get('sys_language') == 'en') {
//   $('.copytoclipboard').text('Copy permalink');
// }

$(document).on('click', '.copytoclipboard', function(e){
  e.preventDefault();

  var copyText = $(this).data('link');
  
  navigator.clipboard.writeText(copyText);

  //console.log(copyText);
});

if($(window).innerWidth() < 468) {
  $('input#location_name').on('focus', function(e){
    $('html, body').animate({
      scrollTop: $('input#location_name').offset().top
  }, 100);
  });

  $(window).on('load resize', function () {
    if($('#locSearchResults').length > 0) {
      $('html, body').animate({
        scrollTop: $('#locSearchResults').offset().top
      }, 100);
    }
  });

  $('.accordion-body .ce-textpic').removeClass('ce-nowrap');
  $('.accordion-body .ce-textpic .ce-gallery').addClass('w-100');
}


$('.toolbarTopRight .infos').clickToggle(function() {
  $('.toolbarTopRight .feedback, .toolbarTopRight .ugc').removeClass('active');
  $(this).addClass('active');
}, function() {
  $(this).removeClass('active');
});
$('.toolbarTopRight .feedback').clickToggle(function() {
  $('.toolbarTopRight .infos, .toolbarTopRight .ugc').removeClass('active');
  $(this).addClass('active');
}, function() {
  $(this).removeClass('active');
});
$('.toolbarTopRight .ugc').clickToggle(function() {
  $('.toolbarTopRight .feedback, .toolbarTopRight .infos').removeClass('active');
  $(this).addClass('active');
}, function() {
  $(this).removeClass('active');
});

$(document).on('click', 'a.brightness-more', function(){
  console.log('heller');
});



// Wartungsseite Relaunch - Liveschaltung
$('#c21792 .row').children().eq(0).addClass('order-lg-first');
$('#c21792 .row').children().eq(1).addClass('order-first');
$('#c21792 .row').children().eq(2).addClass('order-last');
