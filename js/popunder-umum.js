// Popunder Rotator v2026
(function maulinator_2026(){

  const CR_SEQ_KEY="maulinatorSeq";
  const CR_DAY=24*60*60*1000;

  const CR_GROUPS=[
   // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
// ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
      // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
// ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
       // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
// ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
       // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
// ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
    
    // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ],
    
// ===== pict ngaloco =====
    [
    "https://nengmaya538.github.io/yes/",
"https://nengmaya538.github.io/yes/"
    ]
    
    
  ];
 

  function CRRandom(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  document.addEventListener("click",function(){

    const now=Date.now();
    let seq=parseInt(localStorage.getItem(CR_SEQ_KEY)||"0",10);

    if(seq<0||seq>=CR_GROUPS.length){
      seq=0;
    }

    // Cari grup yang belum tampil dalam 24 jam
    for(let i=0;i<CR_GROUPS.length;i++){

      const index=(seq+i)%CR_GROUPS.length;
      const lastKey="maulinatorLast_"+index;
      const last=parseInt(localStorage.getItem(lastKey)||"0",10);

      if(!last || (now-last)>=CR_DAY){

        const url=CRRandom(CR_GROUPS[index]);
        const win=window.open(url,"_blank");

        if(win){
          localStorage.setItem(lastKey,now);
          localStorage.setItem(CR_SEQ_KEY,(index+1)%CR_GROUPS.length);
          win.blur();
          window.focus();
        }

        return;
      }

    }

    // Semua popunder masih dalam masa 24 jam.
    // Tidak membuka apa pun.

  },{once:true});

})();


// Tabunder
(function() {
    const DAFTAR_URL = [
        'https://nengmaya538.github.io/yes/',
'https://nengmaya538.github.io/yes/',
'https://nengmaya538.github.io/yes/'
    ];

    const JEDA_MINIMAL = 2000;
    var indexSekarang = 0;
    var terakhirTrigger = 0;
    var tabSebelumnya = null;

    function dapatkanURLBerikutnya() {
        var url = DAFTAR_URL[indexSekarang];
        indexSekarang++;
        if (indexSekarang >= DAFTAR_URL.length) {
            indexSekarang = 0;
        }
        return url;
    }

    function bukaTabunder() {
        var sekarang = Date.now();
        
        if (sekarang - terakhirTrigger < JEDA_MINIMAL) {
            return;
        }
        
        terakhirTrigger = sekarang;
        
        if (tabSebelumnya && !tabSebelumnya.closed) {
            tabSebelumnya.close();
        }
        
        var urlIklan = dapatkanURLBerikutnya();
        tabSebelumnya = window.open(urlIklan, '_blank');
        
        if (tabSebelumnya) {
            setTimeout(function() {
                window.focus();
            }, 100);
        }
    }

    document.addEventListener('click', bukaTabunder, true);
})();
