(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  window.atOptions={
    key:"cf5899f1b567f090bf4a939f6abc5d09",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/cf5899f1b567f090bf4a939f6abc5d09/invoke.js");

  load("https://publishedelegance.com/0c/4d/f8/0c4df835d086e700c1250999293781cd.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028742");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465451"
  });
})();