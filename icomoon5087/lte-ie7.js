/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-phone' : '&#xe000;',
			'icon-envelop' : '&#xe001;',
			'icon-location' : '&#xe002;',
			'icon-rocket' : '&#xe003;',
			'icon-user' : '&#xe004;',
			'icon-bullhorn' : '&#xe005;',
			'icon-cogs' : '&#xe006;',
			'icon-lab' : '&#xe007;',
			'icon-google-plus' : '&#xe008;',
			'icon-twitter' : '&#xe009;',
			'icon-facebook' : '&#xe00a;',
			'icon-github' : '&#xe00b;',
			'icon-wordpress' : '&#xe00c;',
			'icon-linkedin' : '&#xe00d;'
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