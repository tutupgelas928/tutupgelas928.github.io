// Popunder Rotator v2026
(function maulinator_2026(){

  const CR_SEQ_KEY="maulinatorSeq";
  const CR_DAY=24*60*60*1000;

  const CR_GROUPS=[

    // ===== pict ngaloco =====
    [
    "https://t.co/q7sbFqUXN6",
"https://t.co/q7sbFqUXN6"
    ],
    
    // ===== pict ngaloco =====
    [
    "https://t.co/q7sbFqUXN6",
"https://t.co/q7sbFqUXN6"
    ],
    
    // ===== pict ngaloco =====
    [
    "https://t.co/q7sbFqUXN6",
"https://t.co/q7sbFqUXN6"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://t.co/q7sbFqUXN6",
"https://t.co/q7sbFqUXN6"
    ],
    
// ===== pict ngaloco =====
    [
    "https://t.co/q7sbFqUXN6",
"https://t.co/q7sbFqUXN6"
    ],
    
    // ===== ngaloco 2 =====
    [
      "https://t.co/T6PVvpH5At",
"https://t.co/2CfMgWxyEN",
"https://t.co/mrRrosODEo",
"https://t.co/4EtAfoSVMc",
"https://t.co/lGwEXwmDo9",
"https://t.co/cINfpy9ABo",
"https://t.co/47n5bgF3jr",
"https://t.co/qatSA4wDtI",
"https://t.co/NykIehkpUj",
"https://t.co/SnmuRltVh5",
"https://t.co/itgHjMGiwu",
"https://t.co/aZbeBAEAV8",
"https://t.co/B0xTp88ChU",
"https://t.co/z5H5fvTO4m",
"https://t.co/xfLMDrLZrS",
"https://t.co/tP22FE6Izi",
"https://t.co/sn5ZkYpvxW",
"https://t.co/Y3SOJN13np",
"https://t.co/QjfrE3zpgK",
"https://t.co/x1F3CYaYip",
"https://t.co/m9dN3JhY5e"
    ],

    // ===== ngaloco 2 =====
    [
      "https://t.co/T6PVvpH5At",
"https://t.co/2CfMgWxyEN",
"https://t.co/mrRrosODEo",
"https://t.co/4EtAfoSVMc",
"https://t.co/lGwEXwmDo9",
"https://t.co/cINfpy9ABo",
"https://t.co/47n5bgF3jr",
"https://t.co/qatSA4wDtI",
"https://t.co/NykIehkpUj",
"https://t.co/SnmuRltVh5",
"https://t.co/itgHjMGiwu",
"https://t.co/aZbeBAEAV8",
"https://t.co/B0xTp88ChU",
"https://t.co/z5H5fvTO4m",
"https://t.co/xfLMDrLZrS",
"https://t.co/tP22FE6Izi",
"https://t.co/sn5ZkYpvxW",
"https://t.co/Y3SOJN13np",
"https://t.co/QjfrE3zpgK",
"https://t.co/x1F3CYaYip",
"https://t.co/m9dN3JhY5e"
    ],



    
    // ===== hilltopads =====
    [
"https://adtrailscope.blogspot.com/search/",
"https://adnestflick.blogspot.com/search/",
"https://advancedunitconverter.blogspot.com/search/",
"https://beatleakedflow.blogspot.com/search/",
"https://castlooploom.blogspot.com/search/"
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
        'https://pict.ngaloco.my.id/indo01-01/',
'https://pict.ngaloco.my.id/indo01-02/',
'https://pict.ngaloco.my.id/indo01-50/'
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
