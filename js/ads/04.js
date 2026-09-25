(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  load("https://publishedelegance.com/ec/97/19/ec9719569277b86221d2f556a37e0343.js");

  window.atOptions={
    key:"8c587ddcf9d6feb5d1e48dd334a9bc33",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/8c587ddcf9d6feb5d1e48dd334a9bc33/invoke.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028763");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465916"
  });
})();