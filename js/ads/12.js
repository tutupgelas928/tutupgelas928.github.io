(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  window.atOptions={
    key:"8306e5d2100abe9ed7c4eeceeed67b23",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/8306e5d2100abe9ed7c4eeceeed67b23/invoke.js");

  load("https://publishedelegance.com/65/d0/fa/65d0fad04b910c0d4be806e124bf43b6.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028743");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465451"
  });
})();