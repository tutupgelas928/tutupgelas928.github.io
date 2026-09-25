(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/03/b0/d4/03b0d4585ab63fb95b8023f037a2ee80.js");

  window.atOptions={
    key:"744403b9fb01299823f5c9f6d4b27378",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/744403b9fb01299823f5c9f6d4b27378/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028737");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465916"
  });
})();