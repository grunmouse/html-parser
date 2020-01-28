/*
<
</
/>
>
=
"
name
space

*/

const sym = require('./lex-symbols.js');

const START = 60;
const SLASH = 47;
const END = 47;
const EQUAL = 61;
const QUOTE = 34;
const AMP = 38;


function *lexer(code){
	const len = code.length;
	let index = 0;
	while(index < len){
		let current = code.charCodeAt(index);
		if(current === START){ '<'
			if(code.charCodeAt(index+1) === SLASH){
				yield [sym.StartClose, index, 2];
				index+=2;
			}
			else{
				yield [sym.StartOpen, index, 1];
				index+=1;
			}
		}
		else if(current === SLASH && code.charCodeAt(index+1) === END){
			yield [sym.EndSelfclose, index, 2];
			index+=2;
		}
		else if(current === END){
			yield [sym.End, index, 1];
			index+=1;
		}
		else if(current === EQUAL){
			yield [sym.Equal, index, 1];
			index+=1;
		}
		else if(current === QUOTE){
			yield [sym.Quote, index, 1];
			index+=1;
		}
		else if(current === AMP){
			let reg = /&[^;]+;/;
			reg.lastIndex = index;
			let m = code.match(reg);
			if(m.index !== index){
				throw new Error('Invalid matching char');
			}
			let value = m[0];
			yield [sym.Char, index, value.length, value];
			index+=value.length;			
		}
		else if(/\s/.text(code.charAt(index)){
			let reg = /\s+/;
			reg.lastIndex = index;
			let m = code.match(reg);
			if(m.index !== index){
				throw new Error('Invalid matching space');
			}
			let value = m[0];
			yield [sym.Space, index, value.length, value];
			index+=value.length;
		}
		else{
			let reg = /\S+/;
			reg.lastIndex = index;
			let m = code.match(reg);
			if(m.index !== index){
				throw new Error('Invalid matching name');
			}
			let value = m[0];
			yield [sym.Name, index, value.length, value];
			index+=value.length;
		}
	}
};

module.exports = lexer;