// SAFE CLOUD PATCH V2
setTimeout(function(){
  if(window.saveYaad){
    var _sy = window.saveYaad;
    window.saveYaad = function(){ _sy(); if(window.cloudSave) cloudSave(); };
  }
  if(window.saveDirect){
    var _sd = window.saveDirect;
    window.saveDirect = function(a){ _sd(a); if(window.cloudSave) cloudSave(); };
  }
  if(window.saveEdited){
    var _se = window.saveEdited;
    window.saveEdited = function(){ _se(); if(window.cloudSave) cloudSave(); };
  }
  if(window.deleteYaad){
    var _dy = window.deleteYaad;
    window.deleteYaad = function(){ _dy(); if(window.cloudSave) cloudSave(); };
  }
  if(window.saveLedgerEdit){ var _sle=window.saveLedgerEdit; window.saveLedgerEdit=function(){_sle(); if(window.cloudSave) cloudSave();}; }
  if(window.deleteLedgerEntry){ var _dle=window.deleteLedgerEntry; window.deleteLedgerEntry=function(){_dle(); if(window.cloudSave) cloudSave();}; }
  if(window.clearPersonHistory){ var _cph=window.clearPersonHistory; window.clearPersonHistory=function(){_cph(); if(window.cloudSave) cloudSave();}; }
  if(window.saveNameFromInside){ var _sn=window.saveNameFromInside; window.saveNameFromInside=function(){_sn(); if(window.cloudSave) cloudSave();}; }
  if(window.deleteName){ var _dn=window.deleteName; window.deleteName=function(a){_dn(a); if(window.cloudSave) cloudSave();}; }
  if(window.saveDetailFromInside){ var _sdi=window.saveDetailFromInside; window.saveDetailFromInside=function(){_sdi(); if(window.cloudSave) cloudSave();}; }
  if(window.deleteDetail){ var _dd=window.deleteDetail; window.deleteDetail=function(a){_dd(a); if(window.cloudSave) cloudSave();}; }
  if(window.checkN){
    window.checkN = function(){
      var pp=localStorage.getItem('myPass'); if(!pp) return; if(v.length===0) return;
      if(v===pp){
        document.getElementById('lockScreen').style.display='none';v='';upd();setView('home');
        if(window.cloudLoad) setTimeout(()=>cloudLoad(), 1000);
      }else{ var e=document.getElementById('err'); e.style.display='block'; setTimeout(function(){e.style.display='none';v='';upd();},800); }
    };
  }
  console.log("Cloud Patch V2 Loaded");
}, 1500);
