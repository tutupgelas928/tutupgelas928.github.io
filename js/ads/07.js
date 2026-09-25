(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/5f/2f/41/5f2f41b415536f06db57600c00389a66.js");

  window.atOptions={
    key:"867b24bd965a2146c65188baa68e46f6",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/867b24bd965a2146c65188baa68e46f6/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028777");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465914"
  });
})();