(function() {
	var controller = {
		init: function() {

			view.init();
		},
		hd: function() {
			return jsonResume.basics;
		},
		profile: function() {
			return jsonResume.basics;
		},
		skills: function() {
			return jsonResume.skills;
		},
		work: function() {
			return jsonResume.work;
		},
		education: function() {
			return jsonResume.education;
		},
		ft: function() {
			return jsonResume.basics;
		}


	};

	var view = {
		init: function() {
			this.render();
		},

		render: function() {
			var instance = this;
			$('script[data-template]').each(function() {
				var templateName = $(this).attr("data-template");
				var template = $(this).html();
				if (!controller[templateName]) {
					console.log("No controller method " + templateName);
					return;
				}
				var items = template.match(/{{\s*[\w\.]+\s*}}/g)
					.map(function(x) {
						return x.match(/[\w\.]+/)[0];
					});
				var templateData = controller[templateName]();
				//if template data is an array render template for each item in array
				if (templateData.length > 0) {
					templateData.forEach(function(data) {
						instance.renderTemplate(items, data, template, templateName);
					});
				} else {
					instance.renderTemplate(items, templateData, template, templateName);
				}
			});
		},
		renderTemplate: function(items, templateData, template, templateName) {
			items.forEach(function(item, i) {
				var itemData = templateData[item];
				console.log(i, item, itemData);
				var regex = new RegExp('{{' + item + '}}', 'g');
				template = template.replace(regex, itemData);
			});
			$('#' + templateName).append($(template));
		}
	};

	controller.init();

})();
