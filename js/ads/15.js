(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/b8/90/3d/b8903d344932254408e0df6a4269f738.js");

  window.atOptions={
    key:"85b2facb4f88548b311ce46548337f60",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/85b2facb4f88548b311ce46548337f60/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028744");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465451"
  });
})();