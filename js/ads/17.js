(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/0c/ad/ec/0cadec78dc9a6d25d0c63033304bc8bf.js");

  window.atOptions={
    key:"1d7e2a00328f91c4eb1fbeb6cf07a071",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/1d7e2a00328f91c4eb1fbeb6cf07a071/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028799");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465701"
  });
})();