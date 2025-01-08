import service from '../appwrite/config'

const PostCard = ({$id, title, featuredImage}) => {
    return (
        <Link to={`/post/${$id}`}>
            <div>
                <div className='w-full bg-gray-100 rounded-xl p-4'>
                    <img
                    className='rounded-xl'
                    src={service.getFilePreview(featuredImage)}
                    alt={title} />
                </div>
                <h2
                className='text-xl font-bold' >
                    {title}
                </h2>
            </div>
        </Link>
    )
};

export default PostCard;