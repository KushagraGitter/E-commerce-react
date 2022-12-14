import React, { useState, useEffect } from 'react';

export default function useEffect(options) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(options.url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return {
    data,
  };
}
