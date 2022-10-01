import { collection, getDocs, query } from 'firebase/firestore/lite';
import { db, storage } from '../../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import { Product } from '../../components/DisplayItem';

export async function fetchMen() {
  const gamesCol = collection(db, 'men');
  const q = query(gamesCol);
  const gameSnap = await getDocs(q);
  const gameDoc = gameSnap.docs.map(doc => doc.data()) as Product[];
  return gameDoc;
}

export async function getMenImages( gameDoc: Product) {
  return getDownloadURL(ref(storage, '/Men/' + gameDoc.displayImages[0]));
}