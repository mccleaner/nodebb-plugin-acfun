; (function (bili) {
	"use strict";
	var converts = [
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?acfun\.(?:tv|cn)\/v\/ac(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe style="min-width: 500px;min-height: 300px" src="https://www.acfun.cn/player/ac$1" ' +
				'id="ACPlayer-re" '+
				'scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>'
		},
		{
			// m.acfun.cn video
			from: /<a href="(?:https?:\/\/)?(?:m\.)?acfun\.(?:tv|cn)\/v\/\?ac=(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">' +
				'<iframe style="min-width: 500px;min-height: 300px" src="https://www.acfun.cn/player/ac$1" ' +
			'id="ACPlayer-re" '+
			'scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe></div>'
		
		
		}
	];

	bili.parse = function (data, callback) {
		try {
			for (var i = 0; i < converts.length; i++)
				data.postData.content = data.postData.content.replace(converts[i].from, converts[i].to);
			callback(null, data);
		} catch (ex) {
			callback(ex, data);
		}
	};

	bili.addScripts = function (scripts, callback) {
		scripts.push('/assets/src/bilibili.js');
		callback(null, scripts);
	}
})(module.exports);
