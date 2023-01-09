"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(t,e,o,i){var s={init:function(e,o){var i=this;i.$elem=t(o),i.options=t.extend({},t.fn.owlCarousel.options,i.$elem.data(),e),i.userOptions=e,i.loadContent()},loadContent:function(){var e=this;if("function"==typeof e.options.beforeInit&&e.options.beforeInit.apply(this,[e.$elem]),"string"==typeof e.options.jsonPath){var o=e.options.jsonPath;t.getJSON(o,(function(t){if("function"==typeof e.options.jsonSuccess)e.options.jsonSuccess.apply(this,[t]);else{var o="";for(var i in t.owl)o+=t.owl[i].item;e.$elem.html(o)}e.logIn()}))}else e.logIn()},logIn:function(t){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible,e.setVars()},setVars:function(){var t=this;if(0===t.$elem.children().length)return!1;t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),t.onStartup()},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),!1!==t.options.transitionStyle&&t.transitionTypes(t.options.transitionStyle),!0===t.options.autoPlay&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;!0===t.options.lazyLoad&&t.lazyLoad(),!0===t.options.autoHeight&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(t){var e=this;setTimeout((function(){e.updateVars()}),0)},watchVisibility:function(){var t=this;if(!1!==t.$elem.is(":visible"))return!1;t.$elem.css({opacity:0}),clearInterval(t.autoPlayInterval),clearInterval(t.checkVisible),t.checkVisible=setInterval((function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),clearInterval(t.checkVisible))}),500)},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var e=this;if(!1===e.options.responsive)return!1;if(!0===e.options.singleItem)return e.options.items=e.orignalItems=1,e.options.itemsCustom=!1,e.options.itemsDesktop=!1,e.options.itemsDesktopSmall=!1,e.options.itemsTablet=!1,e.options.itemsTabletSmall=!1,e.options.itemsMobile=!1,!1;var o=t(e.options.responsiveBaseWidth).width();if(o>(e.options.itemsDesktop[0]||e.orignalItems)&&(e.options.items=e.orignalItems),void 0!==e.options.itemsCustom&&!1!==e.options.itemsCustom)for(var i in e.options.itemsCustom.sort((function(t,e){return t[0]-e[0]})),e.options.itemsCustom)void 0!==e.options.itemsCustom[i]&&e.options.itemsCustom[i][0]<=o&&(e.options.items=e.options.itemsCustom[i][1]);else o<=e.options.itemsDesktop[0]&&!1!==e.options.itemsDesktop&&(e.options.items=e.options.itemsDesktop[1]),o<=e.options.itemsDesktopSmall[0]&&!1!==e.options.itemsDesktopSmall&&(e.options.items=e.options.itemsDesktopSmall[1]),o<=e.options.itemsTablet[0]&&!1!==e.options.itemsTablet&&(e.options.items=e.options.itemsTablet[1]),o<=e.options.itemsTabletSmall[0]&&!1!==e.options.itemsTabletSmall&&(e.options.items=e.options.itemsTabletSmall[1]),o<=e.options.itemsMobile[0]&&!1!==e.options.itemsMobile&&(e.options.items=e.options.itemsMobile[1]);e.options.items>e.itemsAmount&&!0===e.options.itemsScaleUp&&(e.options.items=e.itemsAmount)},response:function(){var o,i=this;if(!0!==i.options.responsive)return!1;var s=t(e).width();i.resizer=function(){t(e).width()!==s&&(!1!==i.options.autoPlay&&clearInterval(i.autoPlayInterval),clearTimeout(o),o=setTimeout((function(){s=t(e).width(),i.updateVars()}),i.options.responsiveRefreshRate))},t(e).resize(i.resizer)},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),!1!==t.options.autoPlay&&t.checkAp()},appendItemsSizes:function(){var e=this,o=0,i=e.itemsAmount-e.options.items;e.$owlItems.each((function(s){var n=t(this);n.css({width:e.itemWidth}).data("owl-item",Number(s)),s%e.options.items!=0&&s!==i||s>i||(o+=1),n.data("owl-roundPages",o)}))},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,left:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(t.maximumItem=0,e=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var e=this;e.positionsInArray=[0],e.pagesInArray=[];for(var o=0,i=0,s=0;s<e.itemsAmount;s++)if(i+=e.itemWidth,e.positionsInArray.push(-i),!0===e.options.scrollPerPage){var n=t(e.$owlItems[s]).data("owl-roundPages");n!==o&&(e.pagesInArray[o]=e.positionsInArray[s],o=n)}},buildControls:function(){var e=this;!0!==e.options.navigation&&!0!==e.options.pagination||(e.owlControls=t('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)),!0===e.options.pagination&&e.buildPagination(),!0===e.options.navigation&&e.buildButtons()},buildButtons:function(){var e=this,o=t('<div class="owl-buttons"/>');e.owlControls.append(o),e.buttonPrev=t("<div/>",{class:"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=t("<div/>",{class:"owl-next",html:e.options.navigationText[1]||""}),o.append(e.buttonPrev).append(e.buttonNext),o.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',(function(t){t.preventDefault()})),o.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',(function(o){o.preventDefault(),t(this).hasClass("owl-next")?e.next():e.prev()}))},buildPagination:function(){var e=this;e.paginationWrapper=t('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",(function(o){o.preventDefault(),Number(t(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(t(this).data("owl-page")),!0)}))},updatePagination:function(){var e=this;if(!1===e.options.pagination)return!1;e.paginationWrapper.html("");for(var o=0,i=e.itemsAmount-e.itemsAmount%e.options.items,s=0;s<e.itemsAmount;s++)if(s%e.options.items==0){if(o+=1,i===s)var n=e.itemsAmount-e.options.items;var a=t("<div/>",{class:"owl-page"}),r=t("<span></span>",{text:!0===e.options.paginationNumbers?o:"",class:!0===e.options.paginationNumbers?"owl-numbers":""});a.append(r),a.data("owl-page",i===s?n:s),a.data("owl-roundPages",o),e.paginationWrapper.append(a)}e.checkPagination()},checkPagination:function(){var e=this;if(!1===e.options.pagination)return!1;e.paginationWrapper.find(".owl-page").each((function(o,i){t(this).data("owl-roundPages")===t(e.$owlItems[e.currentItem]).data("owl-roundPages")&&(e.paginationWrapper.find(".owl-page").removeClass("active"),t(this).addClass("active"))}))},checkNavigation:function(){var t=this;if(!1===t.options.navigation)return!1;!1===t.options.rewindNav&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled")))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=!0===e.options.scrollPerPage?e.options.items:1,e.currentItem>e.maximumItem+(1==e.options.scrollPerPage?e.options.items-1:0)){if(!0!==e.options.rewindNav)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(!0===e.options.scrollPerPage&&e.currentItem>0&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=!0===e.options.scrollPerPage?e.options.items:1,e.currentItem<0){if(!0!==e.options.rewindNav)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,e,o){var i=this;if(i.isTransition)return!1;if("function"==typeof i.options.beforeMove&&i.options.beforeMove.apply(this,[i.$elem]),t>=i.maximumItem?t=i.maximumItem:t<=0&&(t=0),i.currentItem=i.owl.currentItem=t,!1!==i.options.transitionStyle&&"drag"!==o&&1===i.options.items&&!0===i.browser.support3d)return i.swapSpeed(0),!0===i.browser.support3d?i.transition3d(i.positionsInArray[t]):i.css2slide(i.positionsInArray[t],1),i.afterGo(),i.singleItemTransition(),!1;var s=i.positionsInArray[t];!0===i.browser.support3d?(i.isCss3Finish=!1,!0===e?(i.swapSpeed("paginationSpeed"),setTimeout((function(){i.isCss3Finish=!0}),i.options.paginationSpeed)):"rewind"===e?(i.swapSpeed(i.options.rewindSpeed),setTimeout((function(){i.isCss3Finish=!0}),i.options.rewindSpeed)):(i.swapSpeed("slideSpeed"),setTimeout((function(){i.isCss3Finish=!0}),i.options.slideSpeed)),i.transition3d(s)):!0===e?i.css2slide(s,i.options.paginationSpeed):"rewind"===e?i.css2slide(s,i.options.rewindSpeed):i.css2slide(s,i.options.slideSpeed),i.afterGo()},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:t<=0&&(t=0),e.swapSpeed(0),!0===e.browser.support3d?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),!1!==t.options.autoPlay&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){this.apStatus="stop",clearInterval(this.autoPlayInterval)},checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var t=this;if(t.apStatus="play",!1===t.options.autoPlay)return!1;clearInterval(t.autoPlayInterval),t.autoPlayInterval=setInterval((function(){t.next(!0)}),t.options.autoPlay)},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){this.$owlWrapper.css(this.doTranslate(t))},css2move:function(t){this.$owlWrapper.css({left:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({left:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t="translate3d(0px, 0px, 0px)",i=o.createElement("div");i.style.cssText="  -moz-transform:"+t+"; -ms-transform:"+t+"; -o-transform:"+t+"; -webkit-transform:"+t+"; transform:"+t;var s=i.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),n=null!==s&&1===s.length,a="ontouchstart"in e||navigator.msMaxTouchPoints;this.browser={support3d:n,isTouch:a}},moveEvents:function(){var t=this;!1===t.options.mouseDrag&&!1===t.options.touchDrag||(t.gestures(),t.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},!0===t.options.mouseDrag&&!0===t.options.touchDrag?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===t.options.mouseDrag&&!0===t.options.touchDrag?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===t.options.mouseDrag&&!1===t.options.touchDrag&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",(function(t){t.preventDefault()})),this.$elem.on("mousedown.disableTextSelect",(function(e){return t(e.target).is("input, textarea, select, option")}))},gestures:function(){var s=this,n={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};function a(t){return t.touches?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.pageX!==i?{x:t.pageX,y:t.pageY}:{x:t.clientX,y:t.clientY}}function r(e){"on"===e?(t(o).on(s.ev_types.move,l),t(o).on(s.ev_types.end,p)):"off"===e&&(t(o).off(s.ev_types.move),t(o).off(s.ev_types.end))}function l(i){i=i.originalEvent||i||e.event;s.newPosX=a(i).x-n.offsetX,s.newPosY=a(i).y-n.offsetY,s.newRelativeX=s.newPosX-n.relativePos,"function"==typeof s.options.startDragging&&!0!==n.dragging&&0!==s.newRelativeX&&(n.dragging=!0,s.options.startDragging.apply(s,[s.$elem])),(s.newRelativeX>8||s.newRelativeX<-8&&!0===s.browser.isTouch)&&(i.preventDefault?i.preventDefault():i.returnValue=!1,n.sliding=!0),(s.newPosY>10||s.newPosY<-10)&&!1===n.sliding&&t(o).off("touchmove.owl");s.newPosX=Math.max(Math.min(s.newPosX,s.newRelativeX/5),s.maximumPixels+s.newRelativeX/5),!0===s.browser.support3d?s.transition3d(s.newPosX):s.css2move(s.newPosX)}function p(o){if((o=o.originalEvent||o||e.event).target=o.target||o.srcElement,n.dragging=!1,!0!==s.browser.isTouch&&s.$owlWrapper.removeClass("grabbing"),s.newRelativeX<0?s.dragDirection=s.owl.dragDirection="left":s.dragDirection=s.owl.dragDirection="right",0!==s.newRelativeX){var i=s.getNewPosition();if(s.goTo(i,!1,"drag"),n.targetElement===o.target&&!0!==s.browser.isTouch){t(o.target).on("click.disable",(function(e){e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),t(o.target).off("click.disable")}));var a=t._data(o.target,"events").click,l=a.pop();a.splice(0,0,l)}}r("off")}s.isCssFinish=!0,s.$elem.on(s.ev_types.start,".owl-wrapper",(function(o){if(3===(o=o.originalEvent||o||e.event).which)return!1;if(!(s.itemsAmount<=s.options.items)){if(!1===s.isCssFinish&&!s.options.dragBeforeAnimFinish)return!1;if(!1===s.isCss3Finish&&!s.options.dragBeforeAnimFinish)return!1;!1!==s.options.autoPlay&&clearInterval(s.autoPlayInterval),!0===s.browser.isTouch||s.$owlWrapper.hasClass("grabbing")||s.$owlWrapper.addClass("grabbing"),s.newPosX=0,s.newRelativeX=0,t(this).css(s.removeTransition());var i=t(this).position();n.relativePos=i.left,n.offsetX=a(o).x-i.left,n.offsetY=a(o).y-i.top,r("on"),n.sliding=!1,n.targetElement=o.target||o.srcElement}}))},getNewPosition:function(){var t,e=this;return(t=e.closestItem())>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):e.newPosX>=0&&(t=0,e.currentItem=0),t},closestItem:function(){var e=this,o=!0===e.options.scrollPerPage?e.pagesInArray:e.positionsInArray,i=e.newPosX,s=null;return t.each(o,(function(n,a){i-e.itemWidth/20>o[n+1]&&i-e.itemWidth/20<a&&"left"===e.moveDirection()?(s=a,!0===e.options.scrollPerPage?e.currentItem=t.inArray(s,e.positionsInArray):e.currentItem=n):i+e.itemWidth/20<a&&i+e.itemWidth/20>(o[n+1]||o[n]-e.itemWidth)&&"right"===e.moveDirection()&&(!0===e.options.scrollPerPage?(s=o[n+1]||o[o.length-1],e.currentItem=t.inArray(s,e.positionsInArray)):(s=o[n+1],e.currentItem=n+1))})),e.currentItem},moveDirection:function(){var t,e=this;return e.newRelativeX<0?(t="right",e.playDirection="next"):(t="left",e.playDirection="prev"),t},customEvents:function(){var t=this;t.$elem.on("owl.next",(function(){t.next()})),t.$elem.on("owl.prev",(function(){t.prev()})),t.$elem.on("owl.play",(function(e,o){t.options.autoPlay=o,t.play(),t.hoverStatus="play"})),t.$elem.on("owl.stop",(function(){t.stop(),t.hoverStatus="stop"})),t.$elem.on("owl.goTo",(function(e,o){t.goTo(o)})),t.$elem.on("owl.jumpTo",(function(e,o){t.jumpTo(o)}))},stopOnHover:function(){var t=this;!0===t.options.stopOnHover&&!0!==t.browser.isTouch&&!1!==t.options.autoPlay&&(t.$elem.on("mouseover",(function(){t.stop()})),t.$elem.on("mouseout",(function(){"stop"!==t.hoverStatus&&t.play()})))},lazyLoad:function(){var e=this;if(!1===e.options.lazyLoad)return!1;for(var o=0;o<e.itemsAmount;o++){var s=t(e.$owlItems[o]);if("loaded"!==s.data("owl-loaded")){var n=s.data("owl-item"),a=s.find(".lazyOwl");"string"==typeof a.data("src")?(s.data("owl-loaded")===i&&(a.hide(),s.addClass("loading").data("owl-loaded","checked")),(!0!==e.options.lazyFollow||n>=e.currentItem)&&n<e.currentItem+e.options.items&&a.length&&e.lazyPreload(s,a)):s.data("owl-loaded","loaded")}}},lazyPreload:function(t,e){var o=this,i=0;if("DIV"===e.prop("tagName")){e.css("background-image","url("+e.data("src")+")");var s=!0}else e[0].src=e.data("src");function n(){t.data("owl-loaded","loaded").removeClass("loading"),e.removeAttr("data-src"),"fade"===o.options.lazyEffect?e.fadeIn(400):e.show(),"function"==typeof o.options.afterLazyLoad&&o.options.afterLazyLoad.apply(this,[o.$elem])}!function t(){i+=1,o.completeImg(e.get(0))||!0===s?n():i<=100?setTimeout(t,100):n()}()},autoHeight:function(){var e=this,o=t(e.$owlItems[e.currentItem]).find("img");if(o.get(0)!==i){var s=0;!function t(){s+=1,e.completeImg(o.get(0))?n():s<=100?setTimeout(t,100):e.wrapperOuter.css("height","")}()}else n();function n(){var o=t(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",o+"px"),e.wrapperOuter.hasClass("autoHeight")||setTimeout((function(){e.wrapperOuter.addClass("autoHeight")}),0)}},completeImg:function(t){return!!t.complete&&(void 0===t.naturalWidth||0!=t.naturalWidth)},onVisibleItems:function(){var e=this;!0===e.options.addClassActive&&e.$owlItems.removeClass("active"),e.visibleItems=[];for(var o=e.currentItem;o<e.currentItem+e.options.items;o++)e.visibleItems.push(o),!0===e.options.addClassActive&&t(e.$owlItems[o]).addClass("active");e.owl.visibleItems=e.visibleItems},transitionTypes:function(t){this.outClass="owl-"+t+"-out",this.inClass="owl-"+t+"-in"},singleItemTransition:function(){var t=this;t.isTransition=!0;var e=t.outClass,o=t.inClass,i=t.$owlItems.eq(t.currentItem),s=t.$owlItems.eq(t.prevItem),n=Math.abs(t.positionsInArray[t.currentItem])+t.positionsInArray[t.prevItem],a=Math.abs(t.positionsInArray[t.currentItem])+t.itemWidth/2;t.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":a+"px","-moz-perspective-origin":a+"px","perspective-origin":a+"px"});var r="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";s.css(function(t,e){return{position:"relative",left:t+"px"}}(n)).addClass(e).on(r,(function(){t.endPrev=!0,s.off(r),t.clearTransStyle(s,e)})),i.addClass(o).on(r,(function(){t.endCurrent=!0,i.off(r),t.clearTransStyle(i,o)}))},clearTransStyle:function(t,e){var o=this;t.css({position:"",left:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect"),t(o).off(".owl owl"),t(e).off("resize",this.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr("style",t.$elem.data("owl-originalStyles")||"").attr("class",t.$elem.data("owl-originalClasses"))},destroy:function(){var t=this;t.stop(),clearInterval(t.checkVisible),t.unWrap(),t.$elem.removeData()},reinit:function(e){var o=this,i=t.extend({},o.userOptions,e);o.unWrap(),o.init(i,o.$elem)},addItem:function(t,e){var o,s=this;return!!t&&(0===s.$elem.children().length?(s.$elem.append(t),s.setVars(),!1):(s.unWrap(),(o=e===i||-1===e?-1:e)>=s.$userItems.length||-1===o?s.$userItems.eq(-1).after(t):s.$userItems.eq(o).before(t),void s.setVars()))},removeItem:function(t){var e,o=this;if(0===o.$elem.children().length)return!1;e=t===i||-1===t?-1:t,o.unWrap(),o.$userItems.eq(e).remove(),o.setVars()}};t.fn.owlCarousel=function(e){return this.each((function(){if(!0===t(this).data("owl-init"))return!1;t(this).data("owl-init",!0);var o=Object.create(s);o.init(e,this),t.data(this,"owlCarousel",o)}))},t.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:e,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document);