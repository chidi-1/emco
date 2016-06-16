/**
 * appName - http://chidi-frontend.esy.es/
 * @version v0.1.0
 * @author bev-olga@yandex.ru
 */
(function() {


}).call(this);

/*! device.js 0.1.57 */
(function(){var a,b,c,d,e,f,g,h,i;window.device={},b=window.document.documentElement,i=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return c("iphone")},device.ipod=function(){return c("ipod")},device.ipad=function(){return c("ipad")},device.android=function(){return c("android")},device.androidPhone=function(){return device.android()&&c("mobile")},device.androidTablet=function(){return device.android()&&!c("mobile")},device.blackberry=function(){return c("blackberry")||c("bb10")||c("rim")},device.blackberryPhone=function(){return device.blackberry()&&!c("tablet")},device.blackberryTablet=function(){return device.blackberry()&&c("tablet")},device.windows=function(){return c("windows")},device.windowsPhone=function(){return device.windows()&&c("phone")},device.windowsTablet=function(){return device.windows()&&c("touch")},device.fxos=function(){return c("(mobile; rv:")||c("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&c("mobile")},device.fxosTablet=function(){return device.fxos()&&c("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},c=function(a){return-1!==i.indexOf(a)},e=function(a){var c;return c=new RegExp(a,"i"),b.className.match(c)},a=function(a){return e(a)?void 0:b.className+=" "+a},g=function(a){return e(a)?b.className=b.className.replace(a,""):void 0},device.ios()?device.ipad()?a("ios ipad tablet"):device.iphone()?a("ios iphone mobile"):device.ipod()&&a("ios ipod mobile"):device.android()?device.androidTablet()?a("android tablet"):a("android mobile"):device.blackberry()?device.blackberryTablet()?a("blackberry tablet"):a("blackberry mobile"):device.windows()?device.windowsTablet()?a("windows tablet"):device.windowsPhone()?a("windows mobile"):a("desktop"):device.fxos()?device.fxosTablet()?a("fxos tablet"):a("fxos mobile"):a("desktop"),d=function(){return device.landscape()?(g("portrait"),a("landscape")):(g("landscape"),a("portrait"))},h="onorientationchange"in window,f=h?"orientationchange":"resize",window.addEventListener?window.addEventListener(f,d,!1):window.attachEvent?window.attachEvent(f,d):window[f]=d,d()}).call(this);

(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

$(document).ready(function(){

    if($('.case-slider').length){
        $('.case-slider').owlCarousel({
            center: true,
            items:1,
            loop:true,
            margin:0,
            autoWidth:true,
            nav: true,
            navText: [ , ],
            responsive:{
                480:{
                    loop:true,
                    items:3,
                    center: false
                }
            }
        })
    }

    $('.js--page-slide').click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500
        });
        return false;
    })

    if($('.fancy').length){
        $('.fancy').fancybox();
    }

    //Set default open/close settings
    $('.acc_container').hide(); //Hide/close all containers
    $('.acc_trigger:first').addClass('active').next().show(); //Add "active" class to first trigger, then show/open the immediate next container

    //On Click
    $('.acc_trigger').click(function(){
        if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
            $('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
            $(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
        }
        return false; //Prevent the browser jump to the link anchor
    });

    // мобильное меню
    $('.container').hide();
    $('.js--show-menu').click(function(){
        $('.container').slideToggle();
        $(this).toggleClass('open');
        return false;
    })

     //форма
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('.inp-phone').mask('+7(999)999-99-99');

    // фокус поля
    $(document).on('focus', '.inp', function(){
        $(this).removeClass('error');
    });

    // отправка формы
    $(document).on('click', '.js-form-submit', function () {
        var block = $(this);
        var form =  block.parents('.main-form');
        var errors = false;

        $(form).find('.required').each(function(){
            var val=$(this).prop('value');
            if(val==''){
                $(this).addClass('error');
                errors=true;
            }
            else{
                if($(this).hasClass('input-mail')){
                    if(validateEmail(val) == false){
                        $(this).addClass('error');
                        errors=true;
                    }
                }
            }
        });

        if(errors == false){
            var button_value = $(form).find('.js-form-submit').text();
            $(form).find('.js-form-submit').text('Wait...');

            var method = form.attr('method');
            var action = form.attr('action');
            var data = form.serialize();
            $.ajax({
                type: method,
                url: action,
                data: data,
                success: function(data) {
                    form.find('.form-input').each(function(){
                        $(this).prop('value','')
                    });
                    $(form).find('.js-form-submit').text(button_value);
                    $('.js--form-ok').trigger('click')
                },
                error: function(data) {
                    $(form).find('.js-form-submit').text('Error');
                    setTimeout(function() {
                        $(form).find('.js-form-submit').text(button_value);
                    }, 2000);
                }
            });
        }

        return false;
    });

    setTimeout(function(){
        $('.index .primary').addClass('animate');
        $('.index .primary').trigger('animateIn');
    },300)

    $('.animate-wrap').each(function () {
        var block = $(this);
        var height_block = block.height();
        var gap = 300;
        var botom_gap = 300;

        $(window).scroll(function() {
            console.log('Log this');

            var top = block.offset().top;
            var bottom = block.height() + top + $(window).height()/2;
            if(device.mobile() == true){
                top = top - $(window).height()- gap;
            }
            else{
                top = top - $(window).height() + gap;
            }
            var scroll_top = $(this).scrollTop();
            if ((scroll_top > top) && (scroll_top < bottom)) {
                if (!block.hasClass('animate')) {
                    block.addClass('animate');
                    block.trigger('animateIn');
                }
            }
        });
    });

    $('.animate-wrap').on('animateIn', function() {
        var block = $(this);
        var inter = 0;
        var timer = 500;

        block.find('.animate-el').each(function() {
            var item = $(this);
            setTimeout(function () {
                item.addClass('animated fadeInLeft')
            }, inter * timer);
            inter++;
        });
    });

    $('.header--nav a').hover(
      function() {
        var block = $(this);
        block.addClass('enter');
      }, function() {
        var block = $(this);
        block.removeClass('enter');
        block.addClass('leave');
        setTimeout(function(){
            block.removeClass('leave');
        }, 400)
      }
    );
})