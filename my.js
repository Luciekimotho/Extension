function returnFunctions (e) {
	// body...
	var t;
	if(window.atob(e) == "jheneknights"){
		t = [{
			host = "amazon.com",
			name = "Amazon",
			title = "clothes",
			logo = "icon.jpg",
			home = "http://www.amazon.com/",
			parser: function(e, next_page){
				var d = document.implementation.createHTMLDocument("Amazon");
				d.documentElement.innerHTML = e;
				var e = d.querySelectorAll(".cart-item-list .cart-item"),
				   n = [],
				   morepages = [];

				var e = d.querySelectorAll("#sc-active-cart .sc-list-body .sc-list-item")
				Array.prototype.forEach.call(e, function(e){
					if(e.querySelector('.sc-action-move-to-cart') == null){
						var t = {};
						t.id = e.getAttribute("data-itemid");

						if(e.querySelector('span.a-dropdown-prompt') !== null){
							t.quantity = parseInt(e.querySelector('.a-dropdown-prompt').textContent.trim(), 10);
						}else if(e.querySelector('.sc-non-editable-quantity-right') !== null){
							 t.quantity = parseInt(e.querySelector('.sc-non-editable-quantity-right').textContent.trim(), 10);
						}else{
							 t.quantity = parseInt(a.querySelector("select.quantity").options[a.querySelector("select.quantity").selectedIndex].text, 10);

						}
					}
				});
			}

		}]
	}
	return t;

}
