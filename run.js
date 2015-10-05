$("pre.alt2").each(function() {
	$(this).removeClass("alt2");
	$(this).addClass("brush: cpp");
	$(this).removeAttr("style");
	$(this).parent().css("width", "913px");
	$(this).parent().find(".smallfont").hide();
});

SyntaxHighlighter.highlight();