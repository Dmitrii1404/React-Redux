import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(50, {
        //pollingInterval: 1000 // Автоматически обновлять данные
    });

    // получаем [некоторая функция, {объект с данными}] = postAPI...
    // error: createError - потому что у нас уже есть компонент error (выше определили его)
    // поэтому новый error определим как createError
    // аналогично с isLoading: isCreateLoading
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();


    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost);
    }

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }

    return (
        <div>
            <button onClick={handleCreate}>Добавить пост</button>
            <button onClick={() => refetch()}>Обновить</button>
            {isLoading && <h1>идет загрузка...</h1>}
            {error && <h1>Ошибка получения данных</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    );
};

export default PostContainer;