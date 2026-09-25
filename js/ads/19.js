(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/0f/91/6c/0f916c21e0499d9f9e44fbd689aefefa.js");

  window.atOptions={
    key:"1c29d820a0e54906db9a62db1046cb4c",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/1c29d820a0e54906db9a62db1046cb4c/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028666");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465701"
  });
})();