"use strict";var nuOrtho=function(e,r){var a=e.toLowerCase().replace(/ą/g,"õ").replace(/ę/g,"ẽ").replace(/ó/g,"ō").replace(/ch/g,"x").replace(/h/g,"x").replace(/l/g,"lj").replace(/ł/g,"l").replace(/rz/g,"rj").replace(/dż/g,"ḋ").replace(/ć|ci(?=[yaueo])/g,"tj").replace(/ci/g,"tji").replace(/dź|dzi(?=[yaueo])/g,"dj").replace(/ʒi/g,"dji").replace(/cz/g,"ċ").replace(/ż/g,"ġ").replace(/sz/g,"ẋ").normalize("NFD").replace(/(?<=[szn])\u0301/g,"j").replace(/c(?!\u0307)/g,"c̈").replace(/k/g,"c").replace(/dz/g,"g̈").replace(/(?<=[pbfwmtdsznlrcgx\u0308])i(?=[yaueo])/g,"j").replace(/(?<=[pbfwmtdsznlrcgx\u0308])i/g,"ji").replace(/y/g,"i");return(a=r?a.replace(/e\u0303/g,"ѧ").replace(/o\u0303/g,"ѫ").replace(/j/g,"ь").replace(/i/g,"и").replace(/e/g,"є").replace(/a/g,"а").replace(/o/g,"о").replace(/u/g,"у").replace(/d\u0307/g,"җ").replace(/c\u0307/g,"ч").replace(/g\u0307/g,"ж").replace(/x\u0307/g,"ш").replace(/c\u0308/g,"ц").replace(/g\u0308/g,"ѕ").replace(/t/g,"т").replace(/d/g,"д").replace(/s/g,"с").replace(/z/g,"з").replace(/n/g,"н").replace(/l/g,"л").replace(/r/g,"р").replace(/p/g,"п").replace(/b/g,"б").replace(/f/g,"ф").replace(/w/g,"в").replace(/m/g,"м").replace(/c/g,"к").replace(/g/g,"г").replace(/x/g,"х").replace(/h/g,"х").replace(/ьа/g,"я").replace(/ьу/g,"ю").replace(/ьє/g,"ѥ").replace(/ьо/g,"е").replace(/ьѧ/g,"ѩ").replace(/ьѫ/g,"ѭ"):a.replace(/i/g,"ı").replace(/j/g,"ȷ")).normalize("NFC")},update=function(){document.getElementById("sink-lat").value=nuOrtho(document.getElementById("source").value,!1),document.getElementById("sink-cyr").value=nuOrtho(document.getElementById("source").value,!0),document.getElementById("tweet").setAttribute("href","https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(document.getElementById("source").value+"\n"+document.getElementById("sink-lat").value+"\n"+document.getElementById("sink-cyr").value)))};document.addEventListener("DOMContentLoaded",function(){var e=!0,r=!1,a=void 0;try{for(var c,l=document.querySelectorAll(".nu td")[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var t=c.value;/.*?\{.*\}.*?/.test(t.innerHTML)?t.innerHTML=t.innerHTML.replace(/^\{(.+)\}$/g,function(e,r){return'<span class="as-is">'.concat(r,"</span>")}):t.innerHTML=nuOrtho(t.innerHTML,!1)}}catch(e){r=!0,a=e}finally{try{e||null==l.return||l.return()}finally{if(r)throw a}}document.getElementById("source").addEventListener("input",update),document.getElementsByTagName("input")[0].addEventListener("input",update),update(),document.querySelectorAll(".add-new tr").forEach(function(e){var r=e.lastElementChild;if("TD"==r.tagName)for(var a=0,c=[!1,!0];a<c.length;a++){var l=c[a],t=r.cloneNode(!0);t.innerHTML=nuOrtho(r.innerHTML,l),e.appendChild(t)}})});