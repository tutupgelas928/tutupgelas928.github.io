(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/17/4c/f0/174cf0722a55ab3ba5182c239f21d573.js");

  window.atOptions={
    key:"8bf0f103b610197a830349f5588cbef4",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/8bf0f103b610197a830349f5588cbef4/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028798");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465701"
  });
})();