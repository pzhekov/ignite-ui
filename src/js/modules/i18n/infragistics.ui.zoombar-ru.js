﻿/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function ($) {
$.ig = $.ig || {};

if (!$.ig.Zoombar) {
	$.ig.Zoombar = {};

	$.extend($.ig.Zoombar, {

		locale: {
			zoombarTargetNotSpecified: "Виджету igZoombar необходим целевой объект для отображения!",
			zoombarTypeNotSupported: "Целевой виджет, к которому Zoombar пытается присоединиться, не поддерживается!",
			zoombarProviderNotRecognized: "igZoombar не удалось инициализировать поставщика из указанного класса — возможно, переданное значение не является классом.",
			optionChangeNotSupported: "Изменение этой опции после создания igZoombar не поддерживается:"
		}
	});

}
})(jQuery);
