'use strict';

hexo.extend.tag.register('note', function(args, content) {
	var className = args.shift();
	var header = '';
	var result = '';

	if(args.length) {
		header = '<strong class="note-title">' + args.join(' ') + '</strong>';
	}

	result += '<blockquote class="note ' + className + '">' + header;
	result += hexo.render.renderSync({text: content, engine: 'markdown'});
	result += '</blockquote>';

	return result;
}, true);

hexo.extend.tag.register('script', function(args, content) {
    var result = '';
    result += '<script type="text/javascript">';
    result += content;
    result += '</script>'

    return result;
}, true);

hexo.extend.tag.register('html', function(args, content) {
	var result = '';
	result += content;

	return result;
}, true);
