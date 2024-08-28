import { openDB } from 'idb';

// Function to initialize the database
const initdb = async () => {
  await openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      }
    },
  });
};

// Call initdb immediately to ensure the database is ready
initdb();

export const putDb = async (content) => {
  console.log('PUT to the database');

  // Open the database
  const jateDb = await openDB('jate', 1);

  // Start a new transaction
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the object store
  const store = tx.objectStore('jate');

  // Put the content into the store
  const request = store.put({ id: 1, content });

  // Wait for the transaction to complete
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

export const getDb = async () => {
  console.log('GET from the database');

  // Open the database
  const jateDb = await openDB('jate', 1);

  // Start a new transaction
  const tx = jateDb.transaction('jate', 'readonly');

  // Open the object store
  const store = tx.objectStore('jate');

  // Get the content from the store
  const request = store.get(1);

  // Wait for the request to complete
  const result = await request;
  console.log('result.value', result?.content);
  return result?.content;
};

