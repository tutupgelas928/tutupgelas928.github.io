(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/e6/6d/06/e66d067174a7e0421e7ddbcc6973471c.js");

  window.atOptions={
    key:"f9dac2ccac0d9cd33abeb39262d3b100",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/f9dac2ccac0d9cd33abeb39262d3b100/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028734");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465451"
  });
})();