import { atom, useAtom } from 'jotai';
import { fetchPosts } from '../services/postService';

export const postAtom = atom([]);

export const loadPosts = async (setPosts) => {

    const posts = await fetchPosts();
    setPosts(posts);
  };
export const usePostState = () => {
  const [posts, setPosts] = useAtom(postAtom);
  return posts;
};

export const useSetPostState = () => {
  const [, setPosts] = useAtom(postAtom);
  return setPosts;
};
