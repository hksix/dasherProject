/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){"use strict";e.jqx.jqxWidget("jqxLayout","",{}),e.extend(e.jqx._jqxLayout.prototype,{defineInstance:function(){var t={width:null,height:null,minGroupWidth:100,minGroupHeight:100,layout:[],resizable:!0,contextMenu:!1,rtl:!1,events:["create","resize","pin","unpin","floatGroupClosed"]};return this===e.jqx._jqxLayout.prototype?t:(e.extend(!0,this,t),t)},createInstance:function(){var t=this;t._originalElement=e(t.element.cloneNode(!0)),t._coordinates=[],t._oldIE=e.jqx.browser.msie&&e.jqx.browser.version<9,t._ie7=e.jqx.browser.msie&&e.jqx.browser.version<8,t._touchDevice=e.jqx.mobile.isTouchDevice(),"none"!==t.host.css("display")&&!0===document.body.contains(t.element)?(t._initiallyHidden=!1,t._initialization=!0,t.render()):t._initiallyHidden=!0,e.jqx.utilities.resize(this.host,function(){!0!==t._suppressResizeHandler&&(!0===t._initiallyHidden&&(t._initialization=!0),t.render(),!0===t._initiallyHidden&&(t.dockingLayout&&(t.dockingLayout._createOverlay(),t.dockingLayout._createEdgeOverlays()),t._initiallyHidden=!1))})},render:function(){var t,o,i=this,n=[];if(i._tabbedGroupsList=[],i.dockingLayout&&(i._overlayGroups=[],!1===i._initialization)){t=i.dockingLayout._overlay.detach(),o=i.dockingLayout._dropOverlayHelper.detach();for(var a=0;a<i.dockingLayout._edgeOverlays.length;a++)n.push(e(i.dockingLayout._edgeOverlays[a]).detach())}if(!0===i._rendered&&i._detachContent(i.layout[0].items),i.element.innerHTML="",!i.host.jqxRibbon)throw new Error("jqxLayout: Missing reference to jqxribbon.js.");if(i._setSize(),i._addClasses(),i._removeHandlers(),!i._rendered){if("layoutGroup"!==i.layout[0].type)throw new Error('jqxLayout: Invalid layout structure. The first member of the layout array has to be with type: "layoutGroup".');var r=i.layout[0].items[0].width,d=i.layout[0].items[0].height;r&&"string"==typeof r&&"%"===r.charAt(r.length-1)||d&&"string"==typeof d&&"%"===d.charAt(d.length-1)||(i.layout[0].initialPxWidth=i.element.offsetWidth,i.layout[0].initialPxHeight=i.element.offsetHeight,i._pxToPercent(i.layout[0],!0))}if(i._createLayout(i.layout,i.host,{type:"host"},0),!0===i.resizable&&(i._addResizeFeedbacks(),i._getGroupCoordinates(),i._addHandlers()),!0===i.contextMenu&&i._initMenu(),!0===i._initialization)i._initialization=!1,i._raiseEvent("0");else if(i.dockingLayout){if(i._ie7){e("body").append(t,o);for(var l=0;l<n.length;l++)e("body").append(n[l])}else{t.appendTo(i.host),o.appendTo(i.host);for(var s=0;s<n.length;s++)n[s].appendTo(i.host)}i.dockingLayout._trackFloatGroups()}for(var u=0;u<i._tabbedGroupsList.length;u++)i._validateTabbedGroup(i._tabbedGroupsList[u]);i._rendered||(i._rendered=!0)},refresh:function(e){!0!==e&&this.render()},destroy:function(){var e=this;e._mouseupHandler=null,e._docUP=null,e._removeHandlers(),!0===e.contextMenu&&e._menu.jqxMenu("destroy"),e.host.remove()},saveLayout:function(){for(var e=this,t=[],o=0;o<e.layout.length;o++)e._copyItem(e.layout[o],t);return t},loadLayout:function(t){if(void 0!==t&&!1===e.isEmptyObject(t)){var o=this;o.layout=t,o._rendered=!1,o.render()}},propertyChangedHandler:function(t,o,i,n){if("layout"!==o){if(n!==i)switch(o){case"width":case"height":t.element.style[o]=t._toPx(n);break;case"theme":e.jqx.utilities.setTheme(i,n,t.host),t._menuInitialized&&e.jqx.utilities.setTheme(i,n,t._menu),t.dockingLayout&&e("."+t.element.id+"FloatGroup").length>0&&e("."+t.element.id+"FloatGroup").jqxWindow({theme:n});break;case"layout":case"resizable":t.render();break;case"contextMenu":!0!==n||t._menuInitialized||t.render();break;case"rtl":var a=n?"rtl":"ltr",r=n?"ltr":"rtl",d=function(o){for(var i=t._find(o,".jqx-layout-pseudo-window-title-"+r),d=t._find(o,".jqx-layout-pseudo-window-pin-background-"+r),l=t._find(o,".jqx-layout-pseudo-window-close-background-"+r),s=t._find(o,".jqx-layout-ribbon-header"),u=t._find(o,".jqx-ribbon"),c=0;c<i.length;c++){var p=e(i[c]);p.removeClass(t.toThemeProperty("jqx-layout-pseudo-window-title-"+r)),p.addClass(t.toThemeProperty("jqx-layout-pseudo-window-title-"+a))}for(var h=0;h<d.length;h++){var g=e(d[h]);g.removeClass(t.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+r)),g.addClass(t.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+a))}for(var m=0;m<l.length;m++){var y=e(l[m]);y.removeClass(t.toThemeProperty("jqx-layout-pseudo-window-close-background-"+r)),y.addClass(t.toThemeProperty("jqx-layout-pseudo-window-close-background-"+a))}for(var f=0;f<s.length;f++){var _=e(s[f]);_.removeClass(t.toThemeProperty("jqx-layout-ribbon-header-"+r)),_.addClass(t.toThemeProperty("jqx-layout-ribbon-header-"+a))}for(var v=0;v<u.length;v++)e(u[v]).jqxRibbon({rtl:n})};if(d(t.host),t.dockingLayout)for(var l=t._find(document.body,"."+t.element.id+"FloatGroup"),s=0;s<l.length;s++){var u=e(l[s]);d(u),u.jqxWindow({rtl:n})}}}else t.render()},_raiseEvent:function(t,o){void 0===o&&(o={owner:null});var i=this.events[t];o.owner=this;var n=new e.Event(i);return n.owner=this,n.args=o,n.preventDefault&&n.preventDefault(),this.host.trigger(n)},_setSize:function(){var e=this;e.element.style.width=e._toPx(e.width),e.element.style.height=e._toPx(e.height)},_addClasses:function(){var e=this;e.host.addClass(e.toThemeProperty("jqx-layout jqx-widget jqx-widget-content jqx-rc-all"))},_getPercentage:function(e,t,o){return e/t.widget[o]()*100},_addHandlers:function(){function t(e,t){for(var o=0;o<l._coordinates.length;o++){var i=l._coordinates[o];if(e>=i.x.from&&e<=i.x.to&&t>=i.y.from&&t<=i.y.to){"horizontal"===i.orientation?l.element.style.cursor="col-resize":l.element.style.cursor="row-resize",l._resize={allowed:!0,widget:i.widget,side:i.side};break}l.element.style.cursor="default",l._resize.allowed=!1}}function o(e){if(!0===l._resize.allowed){var t=l._resize.widget,o=t.current.parent,i=l._percentToPx("width",t.current.minWidth,o),n=l._percentToPx("height",t.current.minHeight,o),a=o.items[t.current.index-1],s=o.items[t.current.index+1];switch(l._resizeStartPosition={x:e.pageX,y:e.pageY},i||(i=l._percentToPx("width",l.minGroupWidth,o)),i=Math.min(i,t.width()),t.current.minWidth=i,n||(n=l._percentToPx("height",l.minGroupHeight,o)),n=Math.min(n,t.height()),t.current.minHeight=n,l._resize.side){case"left":var u=l._percentToPx("width",a.minWidth,o);u||(u=l._percentToPx("width",l.minGroupWidth,o)),r=a.widget.offset().left+u,d=t.offset().left+t.width()-i;break;case"right":var c=l._percentToPx("width",s.minWidth,o);c||(c=l._percentToPx("width",l.minGroupWidth,o)),r=t.offset().left+i,d=s.widget.offset().left+s.widget.width()-c;break;case"top":var p=l._percentToPx("height",a.minHeight,o);p||(p=l._percentToPx("height",l.minGroupHeight,o)),r=a.widget.offset().top+p,d=t.offset().top+t.height()-n;break;case"bottom":var h=l._percentToPx("height",s.minHeight,o);h||(h=l._percentToPx("height",l.minGroupHeight,o)),r=t.offset().top+n,d=s.widget.offset().top+s.widget.height()-h}var g,m=function(e,t){if(t=void 0===t?{top:0,left:0}:t,e!==top){var o=e.frameElement.getBoundingClientRect();t.left+=o.left,t.top+=o.top,t=m(e.parent,t)}return t};l._clickedToResize=!0,l._overlay[0].style.display="block","left"===l._resize.side||"right"===l._resize.side?(l._verticalFeedback[0].style.height=l._resize.widget.height()+"px",g=l._ie7?m(window).top:0,l._verticalFeedback.offset({top:l._resize.widget.offset().top-l.host.offset().top+document.body.scrollTop-g})):(l._horizontalFeedback[0].style.width=l._resize.widget.width()+"px",g=l._ie7?m(window).left:0,l._horizontalFeedback.offset({left:l._resize.widget.offset().left-l.host.offset().left+document.body.scrollLeft+1-g}))}}function i(e,t,o,i,n){var a,r,d=n.charAt(0).toUpperCase()+n.slice(1),s=t.parent;return e?(a=l._percentToPx(n,o["min"+d],s),r=parseFloat(o[n])/100*t.parent.widget[n]()-i):(a=l._percentToPx(n,t["min"+d],s),r=parseFloat(t[n])/100*t.parent.widget[n]()-i),a||(a=l._percentToPx(n,l["minGroup"+d],s)),r<a?a:r}function n(e){if(!0===l._clickedToResize){var t,o,n,a,r,d,s=function(){l._clickedToResize=!1,l._overlay[0].style.display="none",l._verticalFeedback[0].style.display="none",l._horizontalFeedback[0].style.display="none"},u=e.pageX,c=e.pageY,p=l._resize.widget.current,h=l._resize.widget.offset(),g=h.left,m=h.top;if(e.pageX===l._resizeStartPosition.x&&e.pageY===l._resizeStartPosition.y)return void s();if("left"===l._resize.side||"right"===l._resize.side){if(d=p.width,"left"===l._resize.side?(t=p.parent.items[p.index-1],n=u<(o=g)):(t=p.parent.items[p.index+1],n=u>=(o=g+p.widget.width())),0===(a=Math.abs(u-o)))return void s();if(n?(r=l._getPercentage(i(!0,p,t,a,"width"),p.parent,"width"),a=Math.abs(r-parseFloat(t.width)),t.width=r+"%",p.width=parseFloat(p.width)+a+"%"):(r=l._getPercentage(i(!1,p,t,a,"width"),p.parent,"width"),a=Math.abs(r-parseFloat(p.width)),p.width=r+"%",t.width=parseFloat(t.width)+a+"%"),p.width===d)return void s()}else{if(d=p.height,"top"===l._resize.side?(t=p.parent.items[p.index-1],n=c<(o=m)):(t=p.parent.items[p.index+1],n=c>=(o=m+p.widget.height())),0===(a=Math.abs(c-o)))return void s();if(n?(r=l._getPercentage(i(!0,p,t,a,"height"),p.parent,"height"),a=Math.abs(r-parseFloat(t.height)),t.height=r+"%",p.height=parseFloat(p.height)+a+"%"):(r=l._getPercentage(i(!1,p,t,a,"height"),p.parent,"height"),a=Math.abs(r-parseFloat(p.height)),p.height=r+"%",t.height=parseFloat(t.height)+a+"%"),p.height===d)return void s()}s(),l.render(),l._raiseEvent("1",{item:p})}}function a(e){if(!0===l._clickedToResize){var t=e.pageX,o=e.pageY;"left"===l._resize.side||"right"===l._resize.side?(l._verticalFeedback[0].style.display="block",t<r?(t=r,l._verticalFeedback.addClass(l.toThemeProperty("jqx-layout-resize-feedback-warning"))):t>d?(t=d,l._verticalFeedback.addClass(l.toThemeProperty("jqx-layout-resize-feedback-warning"))):l._verticalFeedback.removeClass(l.toThemeProperty("jqx-layout-resize-feedback-warning")),l._verticalFeedback.offset({left:t-2})):(l._horizontalFeedback[0].style.display="block",o<r?(o=r,l._horizontalFeedback.addClass(l.toThemeProperty("jqx-layout-resize-feedback-warning"))):o>d?(o=d,l._horizontalFeedback.addClass(l.toThemeProperty("jqx-layout-resize-feedback-warning"))):l._horizontalFeedback.removeClass(l.toThemeProperty("jqx-layout-resize-feedback-warning")),l._horizontalFeedback.offset({top:o-2}),l._horizontalFeedback.offset({left:l._resize.widget.offset().left+document.body.scrollLeft+1}))}}var r,d,l=this,s=l.element.id;if(l._resize={allowed:!1},l._clickedToResize=!1,l._docUP=n,l._touchDevice?(l.addHandler(e(document),"touchstart.jqxDockingLayout"+s,function(e){var i=e.originalEvent.touches[0];t(i.pageX,i.pageY),o(i)}),l.addHandler(e(document),"touchmove.jqxDockingLayout"+s,function(e){a(e.originalEvent.touches[0])}),l.addHandler(e(document),"touchend.jqxDockingLayout"+s,function(e){n(e.originalEvent.changedTouches[0])})):(l.addHandler(l.host,"mousemove.jqxLayout"+s,function(e){!1===l._clickedToResize&&(!l.dockingLayout||l.dockingLayout&&!0!==l.dockingLayout._windowDragged)&&t(e.pageX,e.pageY)}),l.addHandler(e(document),"mousemove.jqxLayout"+s,function(e){a(e)}),l.addHandler(l.host,"mousedown.jqxLayout"+s,function(e){o(e)}),l.addHandler(e(document),"mouseup.jqxLayout"+s,function(e){n(e)})),l.addHandler(e(document),"selectstart.jqxLayout"+s,function(){if(!0===l._clickedToResize)return!1}),l.dockingLayout)try{(""!==document.referrer||window.frameElement)&&(window.top.document.addEventListener?window.top.document.addEventListener("mouseup",l._mouseupHandler,!1):window.top.document.attachEvent&&window.top.document.attachEvent("onmouseup",l._mouseupHandler))}catch(e){}},_removeHandlers:function(){var t=this,o=t.element.id;if(t._touchDevice?(t.removeHandler(e(document),"touchstart.jqxLayout"+o),t.removeHandler(e(document),"touchmove.jqxLayout"+o),t.removeHandler(e(document),"touchend.jqxLayout"+o)):(t.removeHandler(t.host,"mousemove.jqxLayout"+o),t.removeHandler(e(document),"mousemove.jqxLayout"+o),t.removeHandler(t.host,"mousedown.jqxLayout"+o),t.removeHandler(e(document),"mouseup.jqxLayout"+o)),t.removeHandler(e(document),"selectstart.jqxLayout"+o),t.dockingLayout)try{(""!==document.referrer||window.frameElement)&&(window.top.document.removeEventListener?window.top.document.removeEventListener("mouseup",t._mouseupHandler,!1):window.top.document.detachEvent&&window.top.document.detachEvent("onmouseup",t._mouseupHandler))}catch(e){}if(t._oldIE)e("."+o+"FloatGroup").off("close");else for(var i=document.body.querySelectorAll("."+o+"FloatGroup"),n=0;n<i.length;n++)t.removeHandler(i[n],"close")},_createLayout:function(t,o,i){function n(e){var t=o.children(),i=t[0],n=t[1];if(i.innerHTML=e.title,e.content)p=e.content;else{var r=a._find(a._originalElement,'[data-container="'+e.contentContainer+'"]')[0];p=void 0!==r?r.innerHTML:""}void 0===p&&(p=""),n.innerHTML=p}for(var a=this,r=i.type,d=0;d<t.length;d++){var l,s,u,c,p,h,g,m,y=t[d];switch(y.type){case"layoutGroup":if(l=document.createElement("div"),u="jqx-layout-group-default","horizontal"===y.orientation&&(u+=" jqx-layout-group-default-horizontal"),"host"===r)u+=" jqx-layout-group-root";else{var f="horizontal"===i.orientation?y.width:"100%",_="horizontal"===i.orientation?"100%":y.height;l.style.width=a._toPx(f),l.style.height=a._toPx(_)}l.className=a.toThemeProperty(u),o[0].appendChild(l),s=e(l);break;case"tabbedGroup":"floatGroup"!==r?((s=document.createElement("div")).className=a.toThemeProperty("jqx-layout-group-tabbed"),s.innerHTML='<div class="jqx-layout-window-header"><div></div></div><div><div class="jqx-layout-ribbon"><ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(a.rtl?"rtl":"ltr")+'"></ul><div class="jqx-layout-ribbon-content"></div></div></div>',o[0].appendChild(s),s=e(s),a._addRightClickHandler(a._find(s,".jqx-layout-window-header")[0],s)):((s=document.createElement("div")).className="jqx-layout-ribbon",s.innerHTML='<ul class="jqx-layout-ribbon-header jqx-layout-ribbon-header-'+(a.rtl?"rtl":"ltr")+'"></ul><div class="jqx-layout-ribbon-content"></div>',o.children()[1].appendChild(s),s=e(s));break;case"documentGroup":case"autoHideGroup":l=document.createElement("div");var v="";"documentGroup"===y.type&&(v="jqx-layout-ribbon-header jqx-layout-ribbon-header-"+(a.rtl?"rtl":"ltr")),l.innerHTML='<ul class="'+v+'"></ul><div></div>',a._ie7&&"autoHideGroup"===y.type&&(l.style.zIndex=9999-500*d),o[0].appendChild(l),s=e(l);break;case"floatGroup":if(a._rendered&&!0!==y.programmaticallyAdded)continue;if(!a.dockingLayout)throw new Error("Float groups are only available in the jqxDockingLayout widget. Initialize a jqxDockingLayout (requires jqxdockinglayout.js) instead of a jqxLayout.");(s=document.createElement("div")).className=a.toThemeProperty("jqx-docking-layout-group-floating"),s.innerHTML="<div></div><div></div>",o[0].appendChild(s),s=e(s),!0===y.programmaticallyAdded&&delete y.programmaticallyAdded;break;case"layoutPanel":if(s={},"tabbedGroup"===r){var w=a._find(o,".jqx-layout-window-header")[0];if(w&&""===e(w).text()&&(w.firstChild.innerHTML=y.title),g=document.createElement("li"),g.innerHTML=y.title,a._find(o,".jqx-layout-ribbon-header")[0].appendChild(g),a._rendered||y.docked?p=y.detachedContent:(c=a._find(a._originalElement,'[data-container="'+y.contentContainer+'"]')[0],p=void 0!==c?c.innerHTML:""),h=document.createElement("div"),"string"==typeof p)h.innerHTML=p;else for(var x=0;x<p.length;x++)e(p[x]).appendTo(h);a._find(o,".jqx-layout-ribbon-content")[0].appendChild(h),a._addRightClickHandler(g,s)}else if("autoHideGroup"===r){if(m=o.children(),g=document.createElement("li"),g.innerHTML=y.title,m[0].appendChild(g),a._rendered?p=y.detachedContent:(c=a._find(a._originalElement,'[data-container="'+y.contentContainer+'"]')[0],p=void 0!==c?c.innerHTML:""),h=document.createElement("div"),"string"==typeof p)h.innerHTML=p;else for(var b=0;b<p.length;b++)p[b].appendTo(h);var j;"left"===i.alignment||"right"===i.alignment?(void 0!==i.popupContentSize&&(h.style.width=parseInt(i.popupContentSize,10)+"px"),j="jqx-layout-group-auto-hide-content-vertical"):(void 0!==i.popupContentSize&&(h.style.height=parseInt(i.popupContentSize,10)+"px"),j="jqx-layout-group-auto-hide-content-horizontal"),h.className=a.toThemeProperty(j);var q=document.createElement("div"),k=document.createElement("div");k.className="jqx-layout-window",k.innerHTML="<div><div>"+y.title+"</div></div>",k.appendChild(h),q.appendChild(k),m[1].appendChild(q),a._addRightClickHandler(k,s)}else"floatGroup"===r&&n(y);break;case"documentPanel":if(s={},"floatGroup"===r)n(y);else{if(m=o.children(),g=document.createElement("li"),g.innerHTML=y.title,m[0].appendChild(g),a._rendered||y.docked?p=y.detachedContent:(c=a._find(a._originalElement,'[data-container="'+y.contentContainer+'"]')[0],p=void 0!==c?c.innerHTML:""),h=document.createElement("div"),"string"==typeof p)h.innerHTML=p;else for(var C=0;C<p.length;C++)p[C].appendTo(h);m[1].appendChild(h),a._addRightClickHandler(g,s)}}if(y.items&&y.items.length>0){var T=s;a._createLayout(y.items,T,y)}if(a._createWidget(i,o,y,s,d),a.dockingLayout&&("documentGroup"===y.type||"tabbedGroup"===y.type||"layoutGroup"===y.type&&0===y.items.length)){var H={element:s,width:s.width(),height:s.height(),offset:s.offset(),settings:y};a._overlayGroups.push(H),"floatGroup"===y.parent.type&&(y.parent._overlayGroup=H)}}},_createWidget:function(t,o,i,n,a){function r(){for(var e=0,t=0;t<i.items.length;t++)if(!0===i.items[t].selected){e=t;break}return i.items[e].selected=!0,e}var d=this,l="horizontal"===t.orientation?i.width:"100%",s="horizontal"===t.orientation?"100%":i.height,u=!1;switch(i.parent=t,i.widget=n,i.index=a,i.widget&&(i.widget.current=i),i.type){case"tabbedGroup":var c,p;"floatGroup"!==t.type?(c=d._initWindowPanel(n,l,s,i.type),p=e(d._find(n,".jqx-layout-ribbon")[0]),d._tabbedGroupsList.push(i)):p=n,d.dockingLayout&&!1!==i.allowDrag&&(u=!0),p.jqxRibbon({theme:d.theme,width:"100%",height:"100%",position:"bottom",selectionMode:"click",animationType:"none",rtl:d.rtl,_roundedCorners:!1,initContent:function(t){var o=i.items[t];!o.initialized&&o.initContent&&(o.initContent(e(this._contentSections[t])),o.initialized=!0)},_removeByDrag:u,reorder:!0,_suppressReorder:!1}),p.on("select",function(o){if(o.stopPropagation(),o.target.id===p[0].id){o.stopPropagation();var n=o.args.selectedIndex;i.items[n].selected=!0;var a=e(e(p.children()[1]).children()[n]).text();"floatGroup"!==t.type?c[0].innerHTML=a:d._find(t.widget,".jqx-window-header")[0].firstChild.innerHTML=a}}),p.on("unselect",function(e){e.stopPropagation(),e.target.id===p[0].id&&(i.items[e.args.unselectedIndex].selected=!1)}),p.on("reorder",function(e){d._swapPanelsInLayout(i.items,e.args.newIndex,e.args.oldIndex);var t=e.args.newIndex;setTimeout(function(){i.items[t]&&d._addRightClickHandler(d._find(p,".jqx-ribbon-item")[t],i.items[t].widget)},200)}),u&&(p.on("_removeByDrag",function(e){d.dockingLayout._removeByDragHandler(e,i,p),"floatGroup"===i.parent.type&&1===i.items.length&&p.jqxRibbon({_removeByDrag:!1})}),"floatGroup"!==i.parent.type&&d.dockingLayout._addTabbedGroupHandlers(i,n)),p.jqxRibbon("selectAt",r());break;case"documentGroup":d.dockingLayout&&!1!==i.allowDrag&&(u=!0),n.jqxRibbon({theme:d.theme,width:l,height:s,_roundedCorners:!1,position:"top",selectedIndex:r(),selectionMode:"click",animationType:"none",rtl:d.rtl,initContent:function(t){var o=i.items[t];!o.initialized&&o.initContent&&(o.initContent(e(this._contentSections[t])),o.initialized=!0)},_removeByDrag:u,reorder:!0,_suppressReorder:!1}),n.on("select",function(e){e.stopPropagation(),e.target.id===n[0].id&&(i.items[e.args.selectedIndex].selected=!0)}),n.on("unselect",function(e){e.stopPropagation(),e.target.id===n[0].id&&(i.items[e.args.unselectedIndex].selected=!1)}),n.on("reorder",function(e){d._swapPanelsInLayout(i.items,e.args.newIndex,e.args.oldIndex);var t=e.args.newIndex;setTimeout(function(){d._addRightClickHandler(d._find(n,".jqx-ribbon-item")[t],i.items[t].widget)},200)}),u&&n.on("_removeByDrag",function(e){d.dockingLayout._removeByDragHandler(e,i,n)}),n.addClass(d.toThemeProperty("jqx-layout-group-document"));break;case"autoHideGroup":n.jqxRibbon({theme:d.theme,width:l,height:s,mode:"popup",popupCloseMode:"click",position:i.alignment,selectionMode:"click",animationType:"none",_roundedCorners:!1,rtl:d.rtl,initContent:function(t){var o=e(this._contentSections[t]),a=e(d._find(o,".jqx-layout-window")[0]);a.current=n.current.items[t],a[0].style.border="none",d._initWindowPanel(a,"100%","100%",i.type),!i.items[t].initialized&&i.items[t].initContent&&(i.items[t].initContent(e(a.children()[1])),i.items[t].initialized=!0)}}),n.addClass(d.toThemeProperty("jqx-layout-group-auto-hide"));break;case"floatGroup":n.addClass(d.element.id+"FloatGroup"),n.jqxWindow({theme:d.theme,width:i.width,maxWidth:null,height:i.height,maxHeight:null,position:{x:i.position.x,y:i.position.y},showCloseButton:!1!==i.allowClose,closeButtonAction:"close",rtl:d.rtl,initContent:function(){var e=this._header,t=d._touchDevice?"touchstart":"mousedown",o=".jqxLayout"+d.element.id;if(d.addHandler(e,t+o,function(){d.dockingLayout._windowDragged=!0,i._overlayGroup&&(i._overlayGroup.self=!0),d.dockingLayout._interval(),d.resizable&&(d._overlay[0].style.display="block");var e,t,o;"documentPanel"===i.items[0].type?(e={type:"documentGroup"},o=(t=i.items[0]).title):"layoutPanel"===i.items[0].type?(e={type:"tabbedGroup"},o=(t=i.items[0]).title):"tabbedGroup"===i.items[0].type&&(e=i.items[0]),d.dockingLayout._draggedWindow={fromGroup:e,fromPanel:t,title:o,element:n},d.dockingLayout._showEdgeOverlays()}),d.addHandler(e,"mouseup"+o,function(){d.dockingLayout._hideOverlays()}),"tabbedGroup"===i.items[0].type){for(var a=0,r=0;r<i.items[0].items.length;r++)if(i.items[0].items[r].selected){a=r;break}var l=i.items[0].items[a].title;n.jqxWindow("setTitle",l)}else i.items[0].initContent&&i.items[0].initContent(this._content)}}),n.on("moved",function(e){i.position.x=e.args.x,i.position.y=e.args.y,i._overlayGroup&&d.dockingLayout._updateOverlayGroup(i._overlayGroup),d.dockingLayout._windowCreate=!1,d.dockingLayout._hideOverlays(),d.dockingLayout._clearTextSelection()}),n.on("resized",function(t){i.width=t.args.width,i.height=t.args.height;var o=e(this).offset();i.position.x=o.left,i.position.y=o.top,i._overlayGroup&&d.dockingLayout._updateOverlayGroup(i._overlayGroup)}),n.on("close",function(e){e.stopPropagation(),e.target.id===n[0].id&&(d._raiseEvent("4",{element:n,floatGroup:n.current}),n.current._overlayGroup&&(n.current._overlayGroup.removed=!0,d.dockingLayout._updateOverlayGroups()),d.dockingLayout._removeFloatGroupObject(n.current))})}},_initWindowPanel:function(t,o,i,n){var a=this;if(t.addClass(a.toThemeProperty("jqx-widget jqx-widget-content jqx-window jqx-layout-pseudo-window jqx-rc-all")),a._ie7){var r=t.parent();if("tabbedGroup"===n){var d,l,s=parseInt(t.css("border-left-width"),10),u=parseInt(t.css("border-right-width"),10),c=parseInt(t.css("border-top-width"),10),p=parseInt(t.css("border-bottom-width"),10);d="100%"===o?r.width():parseFloat(o)/100*r.width(),d-=s+u,l="100%"===i?r.height():parseFloat(i)/100*r.height(),l-=c+p,t.css({width:d,height:l})}else"autoHideGroup"===n&&t.css({width:o,height:i})}else t[0].style.width=o,t[0].style.height=i;var h=a.rtl?"rtl":"ltr",g=e(t[0].firstChild),m=e(g[0].firstChild);m.addClass(a.toThemeProperty("jqx-layout-pseudo-window-title jqx-layout-pseudo-window-title-"+h)),g.addClass(a.toThemeProperty("jqx-widget-header jqx-window-header jqx-disableselect jqx-layout-pseudo-window-header")),a._ie7&&(g.css("width",g.width()-parseInt(g.css("padding-left"),10)-parseInt(g.css("padding-right"),10)),g.css("height",g.height()-parseInt(g.css("padding-top"),10)-parseInt(g.css("padding-bottom"),10)));var y,f,_=0;if((a.dockingLayout?"layoutPanel"===t.current.type?void 0===t.current.parent.allowClose||!0===t.current.parent.allowClose:void 0===t.current.allowClose||!0===t.current.allowClose:"layoutPanel"===t.current.type?!0===t.current.parent.allowClose:!0===t.current.allowClose)&&((y=document.createElement("div")).className=a.toThemeProperty("jqx-window-close-button-background jqx-layout-pseudo-window-close-background jqx-layout-pseudo-window-close-background-"+h),y.setAttribute("title","Close"),y.innerHTML='<div class="'+a.toThemeProperty("jqx-window-close-button jqx-icon-close jqx-layout-pseudo-window-close-icon")+'"></div>',g[0].appendChild(y),_+=16),"tabbedGroup"===n&&!1!==t.current.allowPin||"autoHideGroup"===n&&!1!==t.current.parent.allowUnpin){var v;switch(n){case"tabbedGroup":v="jqx-layout-pseudo-window-pin-icon",t.pinned=!1;break;case"autoHideGroup":v="jqx-layout-pseudo-window-pinned-icon",t.pinned=!0}(f=document.createElement("div")).className=a.toThemeProperty("jqx-window-close-button-background jqx-layout-pseudo-window-pin-background"),f.setAttribute("title","Auto Hide"),f.innerHTML='<div class="'+a.toThemeProperty(v)+'"></div>',y?f.className+=" "+a.toThemeProperty("jqx-layout-pseudo-window-pin-background-"+h):!1===a.rtl&&(f.style.right="0px"),g[0].appendChild(f),_+=16,a.dockingLayout&&"autoHideGroup"===n&&a.dockingLayout._addAutoHideGroupHandlers(t.current,g,t.current.title,t.children()[1])}m[0].style.maxWidth=a._toPx(g.width()-_);var w=t.children()[1];return w.style.height=a._toPx(1+t.height()-g.outerHeight()),w.style.marginLeft="-1px",w.style.marginRight="-1px",a._addWindowPanelHandlers(y,f,t),m},_addWindowPanelHandlers:function(e,t,o){var i=this,n=i.element.id,a=o.current,r=a.type;e&&i.addHandler(e,"click.jqxLayout"+n,function(){if("tabbedGroup"===r&&a.items.length>1){var e=i._find(o,".jqx-ribbon-item-selected")[0]._index;i._close(a.items[e])}else o.initAnimate&&o.initAnimate(),o.fadeOut({complete:function(){i._close(a),o.remove()}})}),t&&i.addHandler(t,"click.jqxLayout"+n,function(){"tabbedGroup"===r&&!0===a.pinValid?i._pin(a):"layoutPanel"===r&&i._unPin(a.parent)})},_getGroupCoordinates:function(){function e(e){return"layoutGroup"===e||"tabbedGroup"===e||"documentGroup"===e}function t(i){for(var n=0;n<i.length;n++){var a=i[n];if(e(a.type)){var r,d,l,s,u,c=i[n-1],p=i[n+1],h=a.widget.offset();c&&e(c.type)&&("horizontal"===a.parent.orientation?(d=(r=h.left-5)+10,s=(l=h.top-5)+a.widget.height()+10,u="left"):(d=(r=h.left-5)+a.widget.width()+10,s=(l=h.top-5)+10,u="top"),o._coordinates.push({x:{from:r,to:d},y:{from:l,to:s},widget:a.widget,side:u,orientation:a.parent.orientation})),p&&e(p.type)&&("horizontal"===a.parent.orientation?(d=(r=h.left+a.widget.width()-5)+10,s=(l=h.top-5)+a.widget.height()+10,u="right"):(d=(r=h.left-5)+a.widget.width()+10,s=(l=h.top+a.widget.height()-5)+10,u="bottom"),o._coordinates.push({x:{from:r,to:d},y:{from:l,to:s},widget:a.widget,side:u,orientation:a.parent.orientation})),a.items&&t(a.items)}}}var o=this;o._coordinates=[],t(o.layout[0].items)},_close:function(t){var o,i=this;if(t.removed=!0,"tabbedGroup"===t.type||"autoHideGroup"===t.type||"documentGroup"===t.type){if((o="tabbedGroup"===t.type?e(i._find(t.widget,".jqx-ribbon")[0]):t.widget).jqxRibbon("destroy"),t.parent.items){var n=t.parent.items[t.index-1],a=t.parent.items[t.index+1],r="vertical"===t.parent.orientation?"height":"width",d=function(e){var o=parseFloat(e[r])+parseFloat(t[r])+"%";"documentGroup"===e.type?"height"===r?e.widget.jqxRibbon({height:o}):e.widget.jqxRibbon({width:o}):"layoutGroup"!==e.type&&"tabbedGroup"!==e.type||(e.widget[0].style[r]=o),e[r]=o,i._raiseEvent("1",{item:e})};n&&"autoHideGroup"!==n.type&&"floatGroup"!==n.type?d(n):a&&"autoHideGroup"!==a.type&&"floatGroup"!==a.type&&d(a)}}else if("layoutPanel"===t.type){if("tabbedGroup"===t.parent.type)return(o=e(i._find(t.parent.widget,".jqx-ribbon")[0])).jqxRibbon("removeAt",t.index),i._updateLayout(i.layout),void(0===t.index?o.jqxRibbon("selectAt",0):o.jqxRibbon("selectAt",t.index-1));if("autoHideGroup"===t.parent.type){(o=t.parent.widget).jqxRibbon("removeAt",t.index);for(var l=o.children(),s=0,u=0;u<l.length;u++)if("ul"===l[u].nodeName.toLowerCase()){s=e(l[u]).children().length;break}0===s&&i._close(o.current)}}i._updateLayout(i.layout),i.render()},_updateLayout:function(e){for(var t=0;t<e.length;t++)if(!0===e[t].removed){e.splice(t,1);for(var o=0;o<e.length;o++)e[o].index=o}else e[t].items&&this._updateLayout(e[t].items)},_pin:function(t){var o,i,n,a=this,r=t.parent;if(t.alignment)o=t.alignment;else{var d=Math.abs(t.parent.items.length-1-t.index);o=Math.abs(0-t.index)<d?"horizontal"===t.parent.orientation?"left":"top":"horizontal"===t.parent.orientation?"right":"bottom"}var l="top"===o||"left"===o?t.index+1:t.index-1;"left"===o||"right"===o?(i="width",n=t.pinnedWidth):(i="height",n=t.pinnedHeight),"number"==typeof n&&(n=a._getPercentage(n,r,i)+"%"),n||("width"===i?n=8e3/t.parent.widget.width()+"%":"height"===i&&(n=3e3/t.parent.widget.height()+"%")),a._detachContent(t.items,!0);var s={type:"autoHideGroup",alignment:o,items:t.items};s[i]=n,s["min"+i.charAt(0).toUpperCase()+i.slice(1)]=t["min"+i.charAt(0).toUpperCase()+i.slice(1)],s["unpinned"+i.charAt(0).toUpperCase()+i.slice(1)]=t[i],s.allowDrag=t.allowDrag,s.allowDrop=t.allowDrop,s.allowClose=t.allowClose;for(var u=0;u<s.items.length;u++)s.items[u].allowClose=t.allowClose;t.popupContentSize&&(s.popupContentSize=t.popupContentSize);var c=r.items[l];c[i]=parseFloat(c[i])+parseFloat(t[i])-parseFloat(n)+"%",r.items.splice(t.index,0,s),t.removed=!0,e(a._find(t.widget,".jqx-ribbon")[0]).jqxRibbon("destroy"),t.widget.remove(),a._updateLayout(a.layout),a.render(),a._raiseEvent("1",{item:c}),a._raiseEvent("2",{item:s})},_unPin:function(e){var t,o,i,n=this,a=e.parent,r=e.alignment,d="top"===r||"left"===r?e.index+1:e.index-1,l=a.items[d];"left"===r||"right"===r?(t="width",o=e.unpinnedWidth):(t="height",o=e.unpinnedHeight),o||(o="10%"),n._detachContent(e.items,!0);var s={type:"tabbedGroup",alignment:r,items:e.items};if(s["pinned"+t.charAt(0).toUpperCase()+t.slice(1)]=e[t],s.allowDrag=e.allowDrag,s.allowDrop=e.allowDrop,s.allowClose=e.allowClose,e.popupContentSize&&(s.popupContentSize=e.popupContentSize),l){var u=parseFloat(l[t])+parseFloat(e[t])-parseFloat(o)+"%",c=l["min"+t.charAt(0).toUpperCase()+t.slice(1)];c||(c=n["minGroup"+t.charAt(0).toUpperCase()+t.slice(1)]),parseFloat(u)<n._getPercentage(c,a,t)?(o=e[t],u=n._getPercentage(c,a,t)+"%",s["min"+t.charAt(0).toUpperCase()+t.slice(1)]=e.widget.width()):s["min"+t.charAt(0).toUpperCase()+t.slice(1)]=e["min"+t.charAt(0).toUpperCase()+t.slice(1)],s[t]=o,l[t]=u,i=l}else s["min"+t.charAt(0).toUpperCase()+t.slice(1)]=e["min"+t.charAt(0).toUpperCase()+t.slice(1)],s[t]="100%",i=s;a.items.splice(e.index,0,s),e.removed=!0,e.widget.jqxRibbon("destroy"),n._updateLayout(n.layout),n.render(),n._raiseEvent("1",{item:i}),n._raiseEvent("3",{item:s})},_copyItem:function(e,t){var o={};for(var i in e)if(e.hasOwnProperty(i)&&"parent"!==i&&"widget"!==i&&"initialized"!==i)if("position"===i)o.position={x:e.position.x,y:e.position.y};else if("items"===i){for(var n=[],a=0;a<e.items.length;a++)this._copyItem(e.items[a],n);o.items=n}else o[i]=e[i];t.push(o)},_addResizeFeedbacks:function(){var t=this;t._horizontalFeedback=document.createElement("div"),t._horizontalFeedback.className=t.toThemeProperty("jqx-fill-state-normal jqx-layout-resize-feedback jqx-layout-resize-feedback-horizontal"),t._verticalFeedback=document.createElement("div"),t._verticalFeedback.className=t.toThemeProperty("jqx-fill-state-normal jqx-layout-resize-feedback jqx-layout-resize-feedback-vertical"),t._overlay=document.createElement("div"),t._overlay.className=t.toThemeProperty("jqx-layout-overlay"),t.dockingLayout&&t.dockingLayout._windowDragged&&(t._overlay.style.display="block"),t.element.appendChild(t._horizontalFeedback),t.element.appendChild(t._verticalFeedback),t.element.appendChild(t._overlay),t._horizontalFeedback=e(t._horizontalFeedback),t._verticalFeedback=e(t._verticalFeedback),t._overlay=e(t._overlay)},_detachContent:function(t,o){function i(t){if(!0===t.prevent)t.prevent=!1;else{var i=n._find(t.parent.widget,".jqx-ribbon-content-section")[t.index];r=n._detachChildNodes(i),e(i).remove(),t.detachedContent=r,!0===o&&(t.prevent=!0)}}for(var n=this,a=t.length-1;a>=0;a--){var r,d=t[a],l=d.type;if("layoutGroup"===l||"tabbedGroup"===l||"documentGroup"===l||"autoHideGroup"===l||"floatGroup"===l)d.items&&d.items.length>0&&this._detachContent(d.items);else if("layoutPanel"===l){if("tabbedGroup"===d.parent.type)i(d);else if("autoHideGroup"===d.parent.type)if(!0===d.prevent)d.prevent=!1;else{if("left"===d.parent.alignment||"right"===d.parent.alignment){var s=n._find(d.parent.widget,".jqx-layout-group-auto-hide-content-vertical")[a];r=n._detachChildNodes(s),e(s).remove()}else{var u=n._find(d.parent.widget,".jqx-layout-group-auto-hide-content-horizontal")[a];r=n._detachChildNodes(u),e(u).remove()}d.detachedContent=r,!0===o&&(d.prevent=!0)}}else"documentPanel"===l&&i(d)}},_pxToPercent:function(e,t){function o(o,n){var a;return o=parseInt(o,10),a=t?i.element["offset"+n]:e["initialPx"+n],(100*o/a).toString()+"%"}for(var i=this,n=0;n<e.items.length;n++){var a=e.items[n];void 0!==a.width?(a.initialPxWidth=a.width,a.width=o(a.width,"Width")):a.initialPxWidth=e.initialPxWidth,void 0!==a.height?(a.initialPxHeight=a.height,a.height=o(a.height,"Height")):a.initialPxHeight=e.initialPxHeight,void 0!==a.unpinnedWidth&&(a.unpinnedWidth=o(a.unpinnedWidth,"Width")),void 0!==a.pinnedWidth&&(a.pinnedWidth=o(a.pinnedWidth,"Width")),void 0!==a.unpinnedHeight&&(a.unpinnedHeight=o(a.unpinnedHeight,"Height")),void 0!==a.pinnedHeight&&(a.pinnedHeight=o(a.pinnedHeight,"Height")),"layoutGroup"===a.type&&a.items&&a.items.length>0&&i._pxToPercent(a,!1)}},_percentToPx:function(e,t,o){return void 0===t?void 0:"string"!=typeof t||"string"==typeof t&&"%"!==t.charAt(t.length-1)?parseFloat(t):parseFloat(t.slice(0,t.length-1))/100*o.widget[e]()},_swapPanelsInLayout:function(e,t,o){var i=e[t];e[t]=e[o],e[t].index=t,e[o]=i,e[o].index=o},_initMenu:function(){var t=this;if(!t._menuInitialized){var o=t.element.id,i="",n=function(e,i,n){t._menu.jqxMenu("disable","dockOption"+o,e),t._menu.jqxMenu("disable","autoHideOption"+o,i),t._menu.jqxMenu("disable","closeOption"+o,n)};if(!t.host.jqxMenu)throw new Error("jqxLayout: Missing reference to jqxmenu.js.");t.dockingLayout&&(i='<li id="floatOption'+o+'">Float</li>');var a=document.createElement("div");a.className=t.toThemeProperty("jqx-layout-context-menu jqx-layout-context-menu-"+o),a.innerHTML="<ul>"+i+'<li id="dockOption'+o+'">Dock</li><li id="autoHideOption'+o+'" style="white-space: nowrap;">Auto Hide</li><li id="closeOption'+o+'">Close</li></ul>',t._menu=e(a),document.body.appendChild(a),t._menu.jqxMenu({theme:t.theme,width:100,height:"auto",autoOpenPopup:!1,mode:"popup",popupZIndex:99999,rtl:t.rtl}),t._menuInitialized=!0,t.addHandler(t._menu,"itemclick.jqxLayout"+o,function(o){t._handleMenuItemClick(e(o.target).text())});var r=function(e){return t.dockingLayout?!1===e.allowClose:!0!==e.allowClose};t.addHandler(t._menu,"shown.jqxLayout"+o,function(){switch(t._contextMenuTarget.type){case"tabbedGroup":n(!0,!1===t._contextMenuTarget.allowPin||!1===t._contextMenuTarget.pinValid,r(t._contextMenuTarget));break;case"layoutPanel":var e=t._contextMenuTarget.parent;"tabbedGroup"===e.type?n(!0,!1===e.allowPin||t._isMiddleTabbedGroup(e),r(e)):"autoHideGroup"===e.type&&n(!1===e.allowUnpin,!0,r(t._contextMenuTarget));break;case"documentPanel":n(!0,!0,r(t._contextMenuTarget))}})}},_addRightClickHandler:function(t,o){var i=this;!0===i.contextMenu&&(i.addHandler(t,"mousedown.jqxLayout"+i.element.id,function(t){if(!0===i.contextMenu&&(t.which&&3===t.which||t.button&&2===t.button)){var n=document.body.scrollTop,a=e(window).scrollLeft();i._contextMenuTarget=o.current,i._menu.jqxMenu("open",parseInt(t.clientX,10)+5+a,parseInt(t.clientY,10)+5+n)}}),i.addHandler(t,"contextmenu.jqxLayout"+i.element.id,function(){if(!0===i.contextMenu)return!1}))},_handleMenuItemClick:function(t){var o=this,i=o._contextMenuTarget.type,n=o._contextMenuTarget.parent;switch(t){case"Float":switch(i){case"tabbedGroup":o.dockingLayout._floatTabbedGroup(o._contextMenuTarget,o._contextMenuTarget.widget);break;case"layoutPanel":if("tabbedGroup"===n.type)o.dockingLayout._removeByDragHandler(void 0,n,n.widget,o._contextMenuTarget.index,!1);else if("autoHideGroup"===n.type){var a=o._find(e(e(o._find(o._contextMenuTarget.parent.widget,".jqx-ribbon-content")[0]).children()[o._contextMenuTarget.index]),".jqx-layout-window")[0].firstChild;o.dockingLayout._floatAutoHideGroup(o._contextMenuTarget,o._contextMenuTarget.title,a)}break;case"documentPanel":o.dockingLayout._removeByDragHandler(void 0,n,n.widget,o._contextMenuTarget.index,!1)}break;case"Dock":o._unPin(o._contextMenuTarget.parent);break;case"Auto Hide":switch(i){case"tabbedGroup":o._pin(o._contextMenuTarget);break;case"layoutPanel":o._pin(o._contextMenuTarget.parent)}break;case"Close":switch(i){case"tabbedGroup":o._close(o._contextMenuTarget);break;case"layoutPanel":o._contextMenuTarget.parent.items.length>1?o._close(o._contextMenuTarget):o._close(o._contextMenuTarget.parent);break;case"documentPanel":o._closeDocumentPanel(o._contextMenuTarget.index,o._contextMenuTarget.parent.items,o._contextMenuTarget.parent,o._contextMenuTarget.parent.widget,!1)}}},_closeDocumentPanel:function(e,t,o,i,n){var a=this;if(!1===n&&i.jqxRibbon("removeAt",e),t.length>1){var r=!1;t[e].removed=!0,a._updateLayout(t);for(var d=0;d<t.length;d++)if(!0===t[d].selected){r=!0;break}setTimeout(function(){!1===r?t[e]?i.jqxRibbon("selectAt",e):i.jqxRibbon("selectAt",e-1):i.jqxRibbon("render")},0)}else a._close(o)},_isMiddleTabbedGroup:function(e){return!(0===e.index||e.index===e.parent.items.length-1)},_validateTabbedGroup:function(t){var o=this,i=!0;if((i=i&&t.parent.items.length>1)&&2===t.parent.items.length){var n=0===t.index?1:0;"autoHideGroup"===t.parent.items[n].type&&(i=!1)}i&&(i=i&&!o._isMiddleTabbedGroup(t)),t.pinValid=i,!1===i&&e(o._find(t.widget,".jqx-layout-pseudo-window-pin-background")[0]).addClass("jqx-fill-state-disabled")},_mouseupHandler:function(e){var t=this;try{t.dockingLayout&&(t._docUP(e),t.dockingLayout._windowCreate=!1,t.dockingLayout._hideOverlays())}catch(e){}},_toPx:function(e){return"number"==typeof e?e+"px":e},_find:function(e,t){return this._oldIE?e.find(t):e[0]?e[0].querySelectorAll(t):e.querySelectorAll(t)},_detachChildNodes:function(t){for(var o=[],i=t.childNodes;i.length>0;)o.push(e(i[0]).detach());return o}})}(jqxBaseFramework);

