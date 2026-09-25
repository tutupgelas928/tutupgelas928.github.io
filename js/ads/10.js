(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/a7/33/fa/a733fa5fd85e4602de20d83779cdb952.js");

  window.atOptions={
    key:"25e27d7b59b80da96163a41634568e00",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/25e27d7b59b80da96163a41634568e00/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028735");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465914"
  });
})();