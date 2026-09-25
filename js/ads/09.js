(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/89/46/ce/8946cea68aa5e0f037f19b6cccf881e0.js");

  window.atOptions={
    key:"d8a0b6dfc328549d3ce71787e05ba6b6",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/d8a0b6dfc328549d3ce71787e05ba6b6/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028736");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465914"
  });
})();