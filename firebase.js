// ===== HADI KI DAIRAY - SILENT CLOUD - firebase.js =====
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
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
  const uid = getUserId();
  if(!uid || !db) return;
  const data = {
    y: localStorage.getItem('y') || '[]',
    acc: localStorage.getItem('acc') || '[]',
    savedNames: localStorage.getItem('savedNames') || '[]',
    savedDetails: localStorage.getItem('savedDetails') || '[]',
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  await db.collection('users').doc(uid).set(data, {merge:true});
  console.log("☁️ Saved:", uid);
}

async function cloudLoad(){
  const uid = getUserId();
  if(!uid || !db) return;
  const doc = await db.collection('users').doc(uid).get();
  if(!doc.exists) return;
  const d = doc.data();
  if(d.acc) localStorage.setItem('acc', d.acc);
  if(d.y) localStorage.setItem('y', d.y);
  if(d.savedNames) localStorage.setItem('savedNames', d.savedNames);
  if(d.savedDetails) localStorage.setItem('savedDetails', d.savedDetails);
  console.log("☁️ Loaded from cloud");
  if(typeof loadY==='function') loadY();
  if(typeof loadAcc==='function') loadAcc();
  if(typeof loadAccNames==='function') loadAccNames();
}
