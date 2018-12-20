if (Sys && Sys.Application) {
    Sys.Application.add_init(function () {
        if (Telerik && Telerik.Web && Telerik.Web.UI.Widgets && Telerik.Web.UI.Widgets.ImageProperties) {
            Telerik.Web.UI.Widgets.ImageProperties.prototype._setClass = function (element, cssClassHolder) {
                if (cssClassHolder.get_value() === "") {
                    element.removeAttribute("class");
                }
                else {
                    element.className = cssClassHolder.get_value();
                }
            }
        }
    });
}