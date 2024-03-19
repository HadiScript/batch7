import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

// useGet
export const useList = (url) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [auth] = useAuth();

  const fetchlist = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setList(data);
    } catch (error) {
      toast.error("something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (auth.token) fetchlist();
  }, [fetchlist, auth.token]);

  return { list, loading };
};

export const useCats = () => useList("/categories");
export const useMyList = () => useList("/posts-by-author");

export const useGetById = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const [auth] = useAuth();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (auth.token) fetchData();
  }, [fetchData, auth.token]);

  return { data, loading };
};

// export const usePost = (url, onSuccess, values) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const submit = async () => {
//     setLoading(true);
//     try {
//       const { data } = await axios.post(url, values);

//       if (data.error) {
//         setError(data.error);
//         return;
//       } else {
//         onSuccess();
//       }
//     } catch (error) {
//       // 500
//       console.log(error, "from create post");
//       return toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     loading,
//     error,
//     submit,
//   };
// };
// export const useDelete
