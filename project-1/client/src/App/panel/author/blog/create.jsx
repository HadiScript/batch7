import AuthorLayout from "../../components/layout"

import { useCreateBlog } from "../../../../actions/_blog";
import { useList } from "../../../../actions/_commons";
import BlogForm from "../../components/ui/BlogForm";

const CreateBlog = () => {

  const { values, setValues, submit, loading, error } = useCreateBlog("/create-post");
  const { list, loading: categoriesLoading } = useList('/categories');


  // useList("/categories") -> useCats
  // useList("/posts-by-author") -> useBlogList


  return (
    <AuthorLayout>
      <BlogForm
        values={values}
        setValues={setValues}
        list={list}
        categoriesLoading={categoriesLoading}
        submit={submit}
        loading={loading}
        error={error}
      />
    </AuthorLayout>
  )
}

export default CreateBlog