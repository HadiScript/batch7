import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(1);

  const fetchingData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${next}`);

      setData(res.data);
    } catch (setData) {
      console.log("problem!!!");
    } finally {
      setLoading(false);
    }
  }, [next]);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  return { data, loading, setNext, next, isPending };
};
