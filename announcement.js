var Character = {};

var Character_Title = ["表情略帶困惑的妹妹 ", "司波深雪"];

var dialog =          "消失了兩個多月，看見回來的兄長頭髮多出幾絲灰白，加上" +
						 "略帶凝重的眼神，大概能夠看出他的生活正在經歷重大的變" +
						 "革。我能感覺到他最近在進行著什麼計劃：朦朧中我記得他" +
						 "的電腦曾經出現用 「突破研究室」、「影子經紀」和「開源程序」" +
						 "作為主題的文件，想起他的書櫃開始累積與經濟和政治學有" +
						 "關的書籍，事情好像變得有點兒複雜呢…";

//----------------------------------------------------------------------
Character =    {司波深雪: [ "https://3.bp.blogspot.com/-1WLBvcdpiaI/" +
						   "VxaimDiv4XI/AAAAAAAASqk/WiXV0YBfFiANnLS" +
						   "r2Rc6fMH8zSb8QU9WwCKgB/s1600/%25E5%258F" +
						   "%25B8%25E6%25B3%25A2%25E6%25B7%25B1%25E" +
						   "9%259B%25AA_%25E5%25BE%25AE%25E7%25AC%2" +
						   "591.png"],
				司波達也: [ "https://4.bp.blogspot.com/-RqKBzmP7EnA/" +
						   "VxUNI_rLvyI/AAAAAAAASpE/FG3bEw8kMwEFzEG" +
						   "xCo6-slyGLyHQcI6cQCLcB/s1600/%25E5%258F" +
						   "%25B8%25E6%25B3%25A2%25E9%2581%2594%25E" +
						   "4%25B9%259F_%25E5%25BE%25AE%25E7%25AC%2" +
						   "591.png"]};

//----------------------------------------------------------------------
document.write( '<img id     ='+'"announcement_icon"'                +
					'src     ='+ Character[Character_Title[1]]       +
					'padding ='+'"0px"'                              +
					'style   ='+
							  'background-color:'+'transparent'+';"' +
			   '/>');

document.write( '<div id="announcement_charname">'+ 
				  Character_Title[0] + Character_Title[1] +
			   '</div>');

document.write( '<div id="announcement_text">'+ dialog +'</div>');