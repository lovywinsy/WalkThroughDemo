sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/m/MessageToast","sap/ui/model/json/JSONModel"],function(e,t,n,o){"use strict";return e.extend("sap.ui.demo.walkthrough.controller.Detail",{onInit:function(){var e=new o({currency:"EUR"});this.getView().setModel(e,"view");var t=this.getOwnerComponent().getRouter();t.getRoute("detail").attachPatternMatched(this._onObjectMatched,this)},_onObjectMatched:function(e){this.byId("rating").reset();this.getView().bindElement({path:"/"+window.decodeURIComponent(e.getParameter("arguments").invoicePath),model:"invoice"})},onNavBack:function(){var e=t.getInstance();var n=e.getPreviousHash();if(n!==undefined){window.history.go(-1)}else{var o=this.getOwnerComponent().getRouter();o.navTo("overview",{},true)}},onRatingChange:function(e){console.log("oEvent when onRatingChange",e);var t=e.getParameter("value");var o=this.getView().getModel("i18n").getResourceBundle();n.show(o.getText("ratingConfirmation",[t]))}})});