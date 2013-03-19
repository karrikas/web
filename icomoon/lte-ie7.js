/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-phone' : '&#x21;',
			'icon-envelop' : '&#x22;',
			'icon-location' : '&#x23;',
			'icon-grin' : '&#x24;',
			'icon-checkmark' : '&#x25;',
			'icon-menu' : '&#x26;',
			'icon-twitter' : '&#x27;',
			'icon-facebook' : '&#x28;',
			'icon-google-plus' : '&#x29;',
			'icon-github' : '&#x2a;',
			'icon-wordpress' : '&#x2b;',
			'icon-linkedin' : '&#x2c;',
			'icon-menu-2' : '&#x2d;',
			'icon-rocket' : '&#x2e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};