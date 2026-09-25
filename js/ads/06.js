(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/30/50/2d/30502d5177fc689c3b7f77f0f1a2e100.js");

  window.atOptions={
    key:"465dce4a01c1df2fbe1d077443d33288",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/465dce4a01c1df2fbe1d077443d33288/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028778");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465914"
  });
})();