import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

const Index = () => {
  const [date, setDate] = useState<string | null>(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Luke Hatcher</title>
      </Helmet>
      <h1>Luke Hatcher</h1>
      <h2>software engineer</h2>
      <p>this is a paragraph of text</p>
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
};

export default Index;
