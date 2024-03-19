import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import { useGetById } from "./_commons";
import { useNavigate } from "react-router-dom";

const initValues = {
  title: "",
  content: null,
  categories: [],
};

export const useCreateBlog = (url, dataFromEditPage) => {
  const [values, setValues] = useState(initValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(url, values);

      if (data.error) {
        setError(data.error);
        return;
      }
    } catch (error) {
      // 500
      console.log(error, "from create post");
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dataFromEditPage) {
      setValues(dataFromEditPage);
    }
  }, []);

  return {
    setValues,
    values,

    loading,
    error,
    submit,
  };
};

export const useEditBlog = (slug) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initValues);
  const [loading, setLoading] = useState(false);

  const { data } = useGetById(`/post/${slug}`);

  useEffect(() => {
    let arr = [];
    data?.categories?.map((x) => arr.push(x.name));
    setValues({ ...values, content: data.content, title: data.title, categories: arr });
  }, [data]);

  const EditBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.put(`/edit-post/${data._id}`, values);
      if (res.data.error) {
        return toast.error(res.data.error);
      } else {
        navigate("/blogs");
        toast.success("Edit");
      }
    } catch (error) {
      console.log(error);
      return toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { values, setValues, loading, EditBlog };
};
