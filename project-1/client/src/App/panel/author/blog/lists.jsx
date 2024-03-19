
import { Link } from 'react-router-dom'
import { useList } from '../../../../actions/_commons'
import AuthorLayout from '../../components/layout'
import { paths } from '../../../../utils/paths'

const BlogList = () => {
  const { list, loading } = useList('/posts-by-author')



  return (
    <AuthorLayout>
      {
        list?.map(x => <Link to={paths.editBlog(x.slug)} key={x._id}>{x.slug} <br /></Link>)
      }
    </AuthorLayout>
  )
}

export default BlogList