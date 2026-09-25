(function(){
  function load(src,attrs){
    var s=document.createElement("script");
    s.src=src;
    if(attrs)for(var k in attrs)s.setAttribute(k,attrs[k]);
    document.head.appendChild(s);
  }

  window.atOptions={
    key:"8d9ecb64ebd10b715d18b76cfce9ee7f",
    format:"iframe",
    height:250,
    width:300,
    params:{}
  };

  load("https://publishedelegance.com/8d9ecb64ebd10b715d18b76cfce9ee7f/invoke.js");

  load("https://publishedelegance.com/d3/3c/c1/d33cc1b6f44ab430bed304ab9a91da7f.js");

  var banner=document.createElement("div");
  banner.setAttribute("data-banner-id","2028738");
  document.body.appendChild(banner);

  load("https://js.mbidadm.com/static/scripts.js",{
    async:"",
    "data-admpid":"465916"
  });
})();