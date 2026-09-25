(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/aa/67/4c/aa674c005b538e02bf81f3c45cee6410.js");

  window.atOptions={
    key:"783602cc69140ee16bdb062646c2d8bc",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/783602cc69140ee16bdb062646c2d8bc/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028665");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465701"
  });
})();