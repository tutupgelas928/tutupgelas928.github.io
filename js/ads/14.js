(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/47/5d/ce/475dcef630aadf7fe87bf4b02cc48baa.js");

  window.atOptions={
    key:"b16147feb0ec132fc4c13a7e7e449b48",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/b16147feb0ec132fc4c13a7e7e449b48/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028580");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465451"
  });
})();