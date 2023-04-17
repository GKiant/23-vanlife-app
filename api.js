import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCZS_grZaIIQqsSaQO4wcBZB0pWPkMGoRU",
  authDomain: "vanlife-d5594.firebaseapp.com",
  projectId: "vanlife-d5594",
  storageBucket: "vanlife-d5594.appspot.com",
  messagingSenderId: "162925767022",
  appId: "1:162925767022:web:46f8f256733d672a05b97f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export const getVans = async () => {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
};

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
};

export const getHostVans = async () => {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
};

export const loginUser = async (creds) => {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
};
