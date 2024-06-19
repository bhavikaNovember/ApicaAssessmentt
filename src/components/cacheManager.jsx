import React, { useState } from 'react';
import { getCacheValue, setCacheValue } from './api/cacheService';

const CacheManager = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [expiration, setExpiration] = useState('');
  const [fetchedValue, setFetchedValue] = useState(null);

  const handleSetCache = async (e) => {
    e.preventDefault();  
    try {
      await setCacheValue(key, value, expiration);
      alert('Cache value set successfully');
      setKey('');
      setValue('');
      setExpiration('');
    } catch (error) {
      alert('Failed to set cache value');
    }
  };

  const handleGetCache = async () => {
    try {
      const result = await getCacheValue(key);
      setFetchedValue(result);
    } catch (error) {
      alert('Failed to get cache value');
      setFetchedValue(null);
    }
  };

  return (
    <div>
      <h1>Cache Manager</h1>
      <form onSubmit={handleSetCache}>
        <div>
          <label>Key:</label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Value:</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Expiration in seconds:</label>
          <input
            type="number"
            value={expiration}
            onChange={(e) => setExpiration(e.target.value)}
            required
          />
        </div>
        <button type="submit">Set Cache</button>
      </form>
      <div>
        <button onClick={handleGetCache}>Get Cache Value</button>
        {fetchedValue && (
          <div>
            <h3>Fetched Value: {fetchedValue}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CacheManager;
