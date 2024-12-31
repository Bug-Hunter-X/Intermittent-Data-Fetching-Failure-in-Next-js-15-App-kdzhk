```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js
function handler(req, res) {
  // Simulate a potential delay or error
  //  setTimeout(() => {
  //   res.status(200).json({text: 'Hello!'});
  // }, Math.random() * 2000);
  res.status(200).json({ text: 'Hello!' });
}
export default handler;
```