var eachCssRule = require('../../eachCssRule'),
assert = require('assert'),
sprintf = require('sprintf').sprintf

exports.plugin = function(topic) {
	var batch = {};

		eachCssRule(topic, function(rule) {

			batch[sprintf('"%s" is is valid', rule.selectorText.bold)] = function(topic) {
				assert.isTrue(!!topic.$(rule.selectorText).length);
			}
		});


	return {
		'Selectors': batch
	}
}