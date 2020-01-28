/*
By John Resig
*/

	// Empty Elements - HTML 4.01
	var empty = new Set("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed".split(','));

	// Block Elements - HTML 4.01
	var block = new Set("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul".split(','));

	// Inline Elements - HTML 4.01
	var inline = new Set("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var".split(','));

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = new Set("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr".split(','));

	// Attributes that have their values filled in disabled="disabled"
	var fillAttrs = new Set("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected".split(','));

	// Special Elements (can contain anything)
	var special = new Set("script,style".split(','));
	
module.exports = {
	empty,
	block,
	inline,
	closeSelf,
	fillAttrs,
	special
};