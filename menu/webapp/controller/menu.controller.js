sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller"
], function(jquery, Controller) {
	"use strict";

	return Controller.extend("scc.menu.controller.menu", {

		onCollapseExpandPress: function () {
			var oSideNavigation = this.getView().byId('sideNavigation');
			var bExpanded = oSideNavigation.getExpanded();

			oSideNavigation.setExpanded(!bExpanded);
		},

		onHideShowSubItemPress: function () {
			var navListItem = this.getView().byId('subItemThree');

			navListItem.setVisible(!navListItem.getVisible());
		}
		
	});
});