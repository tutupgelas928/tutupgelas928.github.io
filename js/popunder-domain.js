// Popunder Rotator v2026
(function maulinator_2026(){

  const CR_SEQ_KEY="maulinatorSeq";
  const CR_DAY=24*60*60*1000;

  const CR_GROUPS=[

    // ===== pict ngaloco =====
    [
    "https://bearbraid.com/f8e1w0ciu0?key=56b6affb417e84dd86d445bc1179a330",
"https://bearbraid.com/pnxaba3eq?key=096574321ea3bb888dff9eda77e36d7a"
    ],
    
    // ===== pict ngaloco =====
    [
    "https://bearbraid.com/mpsv82ff2e?key=4f36d7506a76b61a58ea909ec5e16e0d",
"https://bearbraid.com/j6enqp1527?key=c5e811d4388add25614250fe03cf0b23"
    ],
    
    // ===== pict ngaloco =====
    [
    "https://bearbraid.com/z0v7kg685q?key=ab459ef5d5d6c38b10b8aa303c2efae0",
"https://bearbraid.com/z28vy3ckm?key=2f0d627aa4f50c81e6ce185ac16ef5d6"
    ],
    
        // ===== pict ngaloco =====
    [
    "https://bearbraid.com/ybnghywy9?key=6eff96ca455b28e045be2d4e3cf745e2",
"https://bearbraid.com/ic2x9w6t?key=c3148eaba673bc476d25399a52c21742"
    ],
    
// ===== pict ngaloco =====
    [
    "https://bearbraid.com/t67evu5cs?key=62050428c70001534a0564d2388f9ad2",
"https://bearbraid.com/kdw1i3qcq3?key=293808c68aeebe7b100de802eb26a495"
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
        'https://bearbraid.com/kdw1i3qcq3?key=293808c68aeebe7b100de802eb26a495',
'https://bearbraid.com/t67evu5cs?key=62050428c70001534a0564d2388f9ad2',
'https://bearbraid.com/ic2x9w6t?key=c3148eaba673bc476d25399a52c21742'
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
