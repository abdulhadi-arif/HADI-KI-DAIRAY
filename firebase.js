// ===== HADI KI DAIRAY - SILENT CLOUD - FINAL firebase.js =====
const firebaseConfig = {
  apiKey: "AIzaSyAhG5mO1X-5z2DFMgpoip6p0erYyOZe6Sc",
  authDomain: "hadi-ki-dairay.firebaseapp.com",
  projectId: "hadi-ki-dairay",
  storageBucket: "hadi-ki-dairay.firebasestorage.app",
  messagingSenderId: "821495126488",
  appId: "1:821495126488:web:c60cb90763982b72da3aad"
};

let db = null;
try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  console.log("✅ Firebase Connected");
} catch(e) {
  console.error("Firebase Error:", e);
}

function getUserId(){
  const m = localStorage.getItem('myMobile');
  if(!m) return null;
  return m.replace(/[^0-9]/g,'');
}

async function cloudSave(){
  try{
    const uid = getUserId();
    if(!uid || !db) return;
    const payload = {
      y: localStorage.getItem('y') || '[]',
      acc: localStorage.getItem('acc') || '[]',
      savedNames: localStorage.getItem('savedNames') || '[]',
      savedDetails: localStorage.getItem('savedDetails') || '[]',
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await db.collection('users').doc(uid).set(payload, {merge:true});
    console.log("☁️ Saved:", uid);
  }catch(err){ console.error("cloudSave fail", err); }
}

async function cloudLoad(){
  try{
    const uid = getUserId();
    if(!uid || !db) return;
    const doc = await db.collection('users').doc(uid).get();
    if(!doc.exists) return;
    const d = doc.data();
    if(d.y) localStorage.setItem('y', d.y);
    if(d.acc) localStorage.setItem('acc', d.acc);
    if(d.savedNames) localStorage.setItem('savedNames', d.savedNames);
    if(d.savedDetails) localStorage.setItem('savedDetails', d.savedDetails);
    console.log("☁️ Loaded");
    if(typeof renderHome === 'function') renderHome();
  }catch(err){ console.error("cloudLoad fail", err); }
}
