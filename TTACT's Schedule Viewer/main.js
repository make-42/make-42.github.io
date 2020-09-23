$(document).ready(function(){
mdc.ripple.MDCRipple.attachTo(document.querySelector('.rippleeffect'));
tabbar = new mdc.tabBar.MDCTabBar(document.getElementsByClassName("mdc-tab-bar")[0])
topappbar = new mdc.topAppBar.MDCTopAppBar(document.getElementsByClassName("mdc-top-app-bar")[0])
iconbutton = new mdc.iconButton.MDCIconButtonToggle(document.getElementsByClassName("mdc-icon-button")[0])

});
