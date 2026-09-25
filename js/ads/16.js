(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/06/bd/63/06bd63e6b1a9a1fc99bd9123d86bada1.js");

  window.atOptions={
    key:"ebfaf81da71d22e0627d876b4e1e4514",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/ebfaf81da71d22e0627d876b4e1e4514/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028800");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465701"
  });
})();