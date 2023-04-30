import React, { useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { loadPosts, usePostState, useSetPostState } from "../state/postSelectors";

const DataTable = () => {
  const posts = usePostState();
  const setPosts = useSetPostState();

  useEffect(() => {
    if (posts.length === 0) {
      loadPosts(setPosts);
    }
  }, [posts.length]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {posts.length === 0 && <Spinner animation="grow" />}
        {posts.length !== 0 &&
          posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DataTable;