###jQuery Pretty Date###


Original post by John Resig @
[his blog](http://ejohn.org/blog/javascript-pretty-date)

Some modification were made by 
V Sky Slavin @
[his blog](http://slavin.tv)

##Examples:##
simple parsing:
<code>
prettify("2011-03-17T14:23:00.1200000Z") =>
"2 weeks ago"
</code>

seamless markup parse:
<code>
html =>
  <time class="human" datetime="2011-03-17T14:23:00.1200000Z" pubdate="pubdate"></time>
</code>

jQuery plugin:
<code>
html =>
  <div class="time" datetime="2011-03-17T14:23:00.1200000Z"></div>
script =>
  $(".time").prettyDate();
</code>
