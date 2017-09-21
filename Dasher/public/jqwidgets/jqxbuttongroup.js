/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(e){e.jqx.jqxWidget("jqxButtonGroup","",{}),e.extend(e.jqx._jqxButtonGroup.prototype,{defineInstance:function(){var t={mode:"default",roundedCorners:!0,disabled:!1,enableHover:!1,orientation:"horizontal",width:null,height:null,_eventsMap:{mousedown:e.jqx.mobile.getTouchEventName("touchstart"),mouseup:e.jqx.mobile.getTouchEventName("touchend")},_events:["selected","unselected","buttonclick"],_buttonId:{},_selected:null,_pressed:null,rtl:!1,template:"",_baseId:"group_button",aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};return this===e.jqx._jqxButtonGroup.prototype?t:(e.extend(!0,this,t),t)},createInstance:function(t){var n=this;n._isTouchDevice=e.jqx.mobile.isTouchDevice(),e.jqx.aria(n),n._baseId=n._baseId+n.element.id,n.addHandler(n.host,"selectstart",function(e){n.disabled||e.preventDefault()})},refresh:function(){var e=this;e.width&&(e.width.toString()&&e.width.toString().indexOf("%")>=0?e.element.style.width=e.width:e.host.width(e.width)),e.height&&e.host.height(e.height),e._refreshButtons()},render:function(){this.refresh()},resize:function(){this.refresh()},_getEvent:function(e){var t=this;if(t._isTouchDevice){var n=t._eventsMap[e]||e;return n+="."+t.element.id}return e+="."+t.element.id},_refreshButtons:function(){var t=this;t.lastElement&&t.lastElement.remove(),t.lastElement=e("<div style='clear: both;'></div>");var n,s=t.host.children(),r=s.length;switch(t.mode){case"radio":t.host.attr("role","radiogroup");break;case"checkbox":case"default":t.host.attr("role","group")}for(var o=new Number(100/r).toFixed(2),a=0;a<r;a+=1)n=e(s[a]),t.width&&("horizontal"===t.orientation?(n.css("width",o+"%"),n.css("box-sizing","border-box"),n.css("-moz-box-sizing","border-box"),n.css("white-space","nowrap"),n.css("text-overflow","ellipsis"),n.css("overflow","hidden")):(n.css("box-sizing","border-box"),n.css("-moz-box-sizing","border-box"),n.css("width","100%"))),t._refreshButton(n,a,r);t.lastElement.appendTo(t.host)},_refreshButton:function(e,t,n){(function(e){var s=this;e=s._render(e),s._removeStyles(e),s._addStyles(e,t,n),s._performLayout(e),s._removeButtonListeners(e),s._addButtonListeners(e),s._handleButtonId(e,t),"radio"===s.mode?e.attr("role","radio"):e.attr("role","button"),e.attr("disabled",s.disabled),s.disabled?e.addClass(s.toThemeProperty("jqx-fill-state-disabled")):e.removeClass(s.toThemeProperty("jqx-fill-state-disabled"))}).apply(this,[e])},destroy:function(t){for(var n,s=this,r=s.host.children(),o=r.length,a=0;a<o;a+=1)n=e(r[a]),s._removeStyles(n),s._removeButtonListeners(n);!1!==t&&s.host.remove()},_render:function(e){var t=this;return"button"===e[0].tagName.toLowerCase()?t._renderFromButton(e):t._renderButton(e)},_renderButton:function(e){return e.wrapInner("<div/>"),e},_removeStyles:function(e){var t=this,n=t.toThemeProperty;t.host.removeClass("jqx-widget"),t.host.removeClass("jqx-rc-all"),e.removeClass(n.call(this,"jqx-fill-state-normal")),e.removeClass(n.call(this,"jqx-group-button-normal")),e.removeClass(n.call(this,"jqx-rc-tl")),e.removeClass(n.call(this,"jqx-rc-bl")),e.removeClass(n.call(this,"jqx-rc-tr")),e.removeClass(n.call(this,"jqx-rc-br")),e.css("margin-left",0)},_addStyles:function(e,t,n){var s=this,r=this.toThemeProperty;s.host.addClass(r.call(this,"jqx-widget")),s.host.addClass(r.call(this,"jqx-rc-all")),s.host.addClass(r.call(this,"jqx-buttongroup")),e.addClass(r.call(this,"jqx-button")),e.addClass(r.call(this,"jqx-group-button-normal")),e.addClass(r.call(this,"jqx-fill-state-normal")),s.template&&e.addClass(r.call(this,"jqx-"+s.template)),s.roundedCorners&&(0===t?s._addRoundedCorners(e,!0):t===n-1&&s._addRoundedCorners(e,!1)),"horizontal"===s.orientation?e.css("margin-left",-parseInt(e.css("border-left-width"),10)):e.css("margin-top",-parseInt(e.css("border-left-width"),10))},_addRoundedCorners:function(e,t){var n=this,s=n.toThemeProperty;"horizontal"===n.orientation?t?(e.addClass(s.call(this,"jqx-rc-tl")),e.addClass(s.call(this,"jqx-rc-bl"))):(e.addClass(s.call(this,"jqx-rc-tr")),e.addClass(s.call(this,"jqx-rc-br"))):t?(e.addClass(s.call(this,"jqx-rc-tl")),e.addClass(s.call(this,"jqx-rc-tr"))):(e.addClass(s.call(this,"jqx-rc-bl")),e.addClass(s.call(this,"jqx-rc-br")))},_centerContent:function(e,t){return e.css({"margin-top":(t.height()-e.height())/2,"margin-left":(t.width()-e.width())/2}),e},_renderFromButton:function(t){var n=t.val();""===n&&(n=t.html());var s,r=t[0].id;return t.wrap("<div/>"),(s=t.parent()).attr("style",t.attr("style")),t.remove(),e.jqx.utilities.html(s,n),s[0].id=r,s},_performLayout:function(t){"horizontal"===this.orientation?this.rtl?t.css("float","right"):t.css("float","left"):t.css("float","none"),this._centerContent(e(t.children()),t)},_mouseEnterHandler:function(t){var n=t.data.self,s=e(t.currentTarget);if(!n._isDisabled(s)&&n.enableHover){var r=n.toThemeProperty;s.addClass(r.call(n,"jqx-group-button-hover")),s.addClass(r.call(n,"jqx-fill-state-hover"))}},_mouseLeaveHandler:function(t){var n=t.data.self,s=e(t.currentTarget);if(!n._isDisabled(s)&&n.enableHover){var r=n.toThemeProperty;s.removeClass(r.call(n,"jqx-group-button-hover")),s.removeClass(r.call(n,"jqx-fill-state-hover"))}},_mouseDownHandler:function(t){var n=t.data.self,s=e(t.currentTarget);if(!n._isDisabled(s)){n._pressed=s;var r=n.toThemeProperty;s.addClass(r.call(n,"jqx-group-button-pressed")),s.addClass(r.call(n,"jqx-fill-state-pressed"))}},_mouseUpHandler:function(t){var n=t.data.self,s=e(t.currentTarget);n._isDisabled(s)||(n._handleSelection(s),n._pressed=null,s=n._buttonId[s[0].id],n._raiseEvent(2,{index:s.num,button:s.btn}))},_isDisabled:function(e){return!(!e||!e[0])&&this._buttonId[e[0].id].disabled},_documentUpHandler:function(e){var t=e.data.self,n=t._pressed;n&&!t._buttonId[n[0].id].selected&&(n.removeClass(t.toThemeProperty("jqx-fill-state-pressed")),t._pressed=null)},_addButtonListeners:function(t){var n=this,s=n.addHandler,r=n._getEvent;s(t,r.call(n,"mouseenter"),n._mouseEnterHandler,{self:n}),s(t,r.call(n,"mouseleave"),n._mouseLeaveHandler,{self:n}),s(t,r.call(n,"mousedown"),n._mouseDownHandler,{self:n}),s(t,r.call(n,"mouseup"),n._mouseUpHandler,{self:n}),s(e(document),r.call(n,"mouseup"),n._documentUpHandler,{self:n})},_removeButtonListeners:function(t){var n=this,s=n.removeHandler,r=n._getEvent;s(t,r.call(n,"mouseenter"),n._mouseEnterHandler),s(t,r.call(n,"mouseleave"),n._mouseLeaveHandler),s(t,r.call(n,"mousedown"),n._mouseDownHandler),s(t,r.call(n,"mouseup"),n._mouseUpHandler),s(e(document),r.call(n,"mouseup"),n._documentUpHandler)},_handleSelection:function(e){var t=this;"radio"===t.mode?t._handleRadio(e):"checkbox"===t.mode?t._handleCheckbox(e):t._handleDefault(e)},_handleRadio:function(e){var t=this,n=t._getSelectedButton();n&&n.btn[0].id!==e[0].id&&t._unselectButton(n.btn,!0);for(var s in t._buttonId)t._buttonId[s].selected=!0,t._unselectButton(t._buttonId[s].btn,!1);t._selectButton(e,!0)},_handleCheckbox:function(e){var t=this,n=t._buttonId[e[0].id];n.selected?t._unselectButton(n.btn,!0):t._selectButton(e,!0)},_handleDefault:function(e){var t=this;t._selectButton(e,!1);for(var n in t._buttonId)t._buttonId[n].selected=!0,t._unselectButton(t._buttonId[n].btn,!1)},_getSelectedButton:function(){var e=this;for(var t in e._buttonId)if(e._buttonId[t].selected)return e._buttonId[t];return null},_getSelectedButtons:function(){var e=this,t=[];for(var n in e._buttonId)e._buttonId[n].selected&&t.push(e._buttonId[n].num);return t},_getButtonByIndex:function(e){var t=this;for(var n in t._buttonId)if(t._buttonId[n].num===e)return t._buttonId[n];return null},_selectButton:function(t,n){var s=this,r=s._buttonId[t[0].id];if(!r.selected){var o=s.toThemeProperty;r.btn.addClass(o.call(this,"jqx-group-button-pressed")),r.btn.addClass(o.call(this,"jqx-fill-state-pressed")),r.selected=!0,n&&s._raiseEvent(0,{index:r.num,button:r.btn}),e.jqx.aria(r.btn,"aria-checked",!0)}},_unselectButton:function(t,n){var s=this,r=s._buttonId[t[0].id];if(r.selected){var o=s.toThemeProperty;r.btn.removeClass(o.call(this,"jqx-group-button-pressed")),r.btn.removeClass(o.call(this,"jqx-fill-state-pressed")),r.selected=!1,n&&s._raiseEvent(1,{index:r.num,button:r.btn}),e.jqx.aria(r.btn,"aria-checked",!1)}},setSelection:function(e){var t=this;if(-1!==e)if("checkbox"===t.mode)if("number"==typeof e)t._setSelection(e);else for(var n=0;n<e.length;n+=1)t._setSelection(e[n]);else"number"==typeof e&&"radio"===t.mode&&t._setSelection(e);else t.clearSelection()},_setSelection:function(e){var t=this,n=t._getButtonByIndex(e);n&&t._handleSelection(n.btn)},getSelection:function(){var e=this;if("radio"===e.mode){if(e._getSelectedButton())return e._getSelectedButton().num}else if("checkbox"===e.mode)return e._getSelectedButtons()},disable:function(){var t=this;t.disabled=!0;var n;for(var s in t._buttonId)n=t._buttonId[s],t.disableAt(n.num);e.jqx.aria(t,"aria-disabled",!0)},enable:function(){var t=this;t.disabled=!1;var n;for(var s in t._buttonId)n=t._buttonId[s],t.enableAt(n.num);e.jqx.aria(t,"aria-disabled",!1)},disableAt:function(e){var t=this,n=t._getButtonByIndex(e);n.disabled||(n.disabled=!0,n.btn.addClass(t.toThemeProperty("jqx-fill-state-disabled")))},enableAt:function(e){var t=this,n=t._getButtonByIndex(e);n.disabled&&(n.disabled=!1,n.btn.removeClass(t.toThemeProperty("jqx-fill-state-disabled")))},_handleButtonId:function(e,t){var n=e[0].id,s={btn:e,num:t,selected:!1};return n||(n=this._baseId+e.index()),e[0].id=n,this._buttonId[n]=s,n},_raiseEvent:function(t,n){var s=e.Event(this._events[t]);return s.args=n,this.host.trigger(s)},_unselectAll:function(){for(var e in this._buttonId)this._unselectButton(this._buttonId[e].btn,!1)},clearSelection:function(){this._unselectAll()},propertyChangedHandler:function(t,n,s,r){if("theme"===n&&null!==r&&e.jqx.utilities.setTheme(s,r,t.host),"template"===n&&t.refresh(),"mode"===n)return t._unselectAll(),void t.refresh();"disabled"===n?r?t.disable():t.enable():t.refresh()}})}(jqxBaseFramework);

