sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","sap/ui/core/Fragment"],function(o,e,n){"use strict";return o.extend("sap.ui.demo.walkthrough.controller.HelloPanel",{fragment:n,onInit:function(){var o=this;console.log(o)},onShowHello:function(){var o=this.getView().getModel("i18n").getResourceBundle();var n=this.getView().getModel().getProperty("/recipient/name");var t=o.getText("helloMsg",[n]);e.show(t)},onOpenDialog:function(){var o=this;if(!this.pDialog){this.pDialog=this.loadFragment({name:"sap.ui.demo.walkthrough.view.HelloDialog"});console.log(o)}this.pDialog.then(function(e){console.log("oDialog",e);e.open();console.log(o)})},onCloseDialog:function(){this.byId("helloDialog").close()},onNavLine:function(){var o=this.getOwnerComponent().getRouter();o.navTo("line")}})});