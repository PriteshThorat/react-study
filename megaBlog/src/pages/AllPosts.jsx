import { useState, useEffect } from "react";
import { Conainer, PostCard } from '../components/index';
import service from '../appwrite/config';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then(posts => {
            if(posts){
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className="w-full py-8">
            <Conainer>
                <div className="flex flex-wrap">
                    {
                        posts.map(post => (
                            <div 
                            key={post.$id}
                            className="p-2 w-1/4" >
                                <PostCard {...post}/>
                            </div>
                        ))
                    }
                </div>
            </Conainer>
        </div>
    );
};

export default AllPosts;