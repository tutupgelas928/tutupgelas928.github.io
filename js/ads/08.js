(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/97/ed/60/97ed602d6f15f31a52d1c9f5d74f4c3f.js");

  window.atOptions={
    key:"72a19663ba2735509cf11646a67b9296",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/72a19663ba2735509cf11646a67b9296/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028776");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465914"
  });
})();