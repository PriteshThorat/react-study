import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import service from '../appwrite/config';
import { Button, Container } from '../components/index';
import parse from 'html-react-parser';
import { useSelector } from "react-redux";

const Post = () => {
    const [post, setPost] = useState(null);
    const [imgUrl, setImgUrl] = useState('');

    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector(state => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if(slug){
            service.getPost(slug).then(post => {
                if(post){
                    setPost(post);

                    service.getFilePreview(post.featuredImage)
                    .then(url => {
                        if(url){
                            setImgUrl(url);
                        }
                    })
                    .catch(error => {
                        console.log("At Post: ", error);
                    });
                }else{
                    navigate("/");
                }
            });
        }else{
            navigate("/");
        }
    }, [slug, navigate, imgUrl]);

    const deletePost = () => {
        service.deletePost(slug).then(status => {
            if(status){
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        })
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                    src={imgUrl}
                    className="rounded-xl"
                    alt={post.title} />
                    {
                        isAuthor && (
                            <div className="absolute right-6 top-6">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                    bgColor="bg-green-500"
                                    className="mr-3" >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                bgColor="bg-red-500"
                                onClick={deletePost} >
                                    Delete
                                </Button>
                            </div>
                        )
                    }
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">
                        {post.title}
                    </h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
};

export default Post;