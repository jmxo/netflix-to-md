### netflix-to-md

For language learners. Convert netflix subtitles from xml to markdown files

inspired by [netflix-to-srt](https://github.com/isaacbernat/netflix-to-srt)


### How to use

- clone the repo
- `npm install`
- download the xml subtitles from netflix into /input directory [(method)](https://github.com/isaacbernat/netflix-to-srt#from-netflix-method-1)
- `node script.js`
- the output .md files will be in /output directory with the same names and folder structure

### Example

input file:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<tt xmlns:tt="http://www.w3.org/ns/ttml" xmlns:ttm="http://www.w3.org/ns/ttml#metadata" xmlns:ttp="http://www.w3.org/ns/ttml#parameter" xmlns:tts="http://www.w3.org/ns/ttml#styling" ttp:tickRate="10000000" ttp:timeBase="media" xmlns="http://www.w3.org/ns/ttml">
<head>
<ttp:profile use="http://netflix.com/ttml/profile/dfxp-ls-sdh"/>
<styling>
<style tts:color="white" tts:fontSize="100%" tts:fontWeight="normal" xml:id="s1"/>
</styling>
<layout>
<region tts:displayAlign="after" tts:extent="80.00% 80.00%" tts:origin="10.00% 10.00%" tts:textAlign="center" xml:id="bottomCenter"/>
<region tts:displayAlign="before" tts:extent="80.00% 80.00%" tts:origin="10.00% 10.00%" tts:textAlign="center" xml:id="topCenter"/>
</layout>
</head>
<body>
<div xml:space="preserve">
<p begin="478808329t" end="507176669t" region="bottomCenter" style="s1" xml:id="subtitle0">Da gibt es nichts zu erzählen.<br/>Er ist bloß ein Typ, mit dem ich arbeite.</p>
<p begin="508838329t" end="530950419t" region="bottomCenter" style="s1" xml:id="subtitle1">Du gehst mit diesem Kerl aus.</p>
<p begin="532612079t" end="558057500t" region="bottomCenter" style="s1" xml:id="subtitle2">Irgendwas muss faul an ihm sein.</p>
<p begin="560139580t" end="578908330t" region="bottomCenter" style="s1" xml:id="subtitle3">Hat er etwa ‘nen Buckel und ein Toupet?</p>
<p begin="603933330t" end="617286670t" region="bottomCenter" style="s1" xml:id="subtitle4">Wartet. Isst er Kreide?</p>
<p begin="630630000t" end="662331670t" region="bottomCenter" style="s1" xml:id="subtitle5">Ich möchte nicht, dass sie dasselbe<br/>durchmacht, wie ich mit diesem Kerl. Oh.</p>
<p begin="663993330t" end="692361670t" region="bottomCenter" style="s1" xml:id="subtitle6">Ok, regt euch ab.<br/>Es ist kein Date, versteht ihr?</p>
<p begin="694443750t" end="724053330t" region="bottomCenter" style="s1" xml:id="subtitle7">Es sind nur 2 Menschen, die essen gehen<br/>und nicht miteinander schlafen.</p>
<p begin="726145420t" end="741570830t" region="bottomCenter" style="s1" xml:id="subtitle8">Klingt wie meine Verabredungen.</p>
</div>
</body>
</tt>
```

output file:
```md
- Da gibt es nichts zu erzählen. Er ist bloß ein Typ, mit dem ich arbeite.
- Du gehst mit diesem Kerl aus.
- Irgendwas muss faul an ihm sein.
- Hat er etwa ‘nen Buckel und ein Toupet? 
- Wartet. Isst er Kreide? 
- Ich möchte nicht, dass sie dasselbe durchmacht, wie ich mit diesem Kerl. Oh.
- Ok, regt euch ab. Es ist kein Date, versteht ihr? 
- Es sind nur 2 Menschen, die essen gehen und nicht miteinander schlafen.
- Klingt wie meine Verabredungen.
```
