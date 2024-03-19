import React from 'react'
import AuthorLayout from '../../components/layout'
import { useParams } from 'react-router-dom'
import { useCats } from '../../../../actions/_commons';
import { useEditBlog } from '../../../../actions/_blog';
import BlogForm from '../../components/ui/BlogForm';

const EditBlog = () => {
  const { slug } = useParams();
  const { values, setValues, loading, EditBlog } = useEditBlog(slug)
  const { list, loading: categoriesLoading } = useCats();

  let error = ""


  // fetch single blog -> detail fetch //
  // form component render with values which i fetched//
  // submit blog edit





  return (
    <AuthorLayout>

      <BlogForm
        from="edit"
        values={values}
        setValues={setValues}
        list={list}
        categoriesLoading={categoriesLoading}
        submit={EditBlog}
        loading={loading}
        error={error}
      />

    </AuthorLayout>
  )
}

export default EditBlog