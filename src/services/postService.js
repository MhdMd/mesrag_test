import { Client, cacheExchange, fetchExchange, createRequest } from 'urql';

export const fetchPosts = async () => {
  const client = new Client({
    url: 'https://graphqlzero.almansi.me/api',
    exchanges: [cacheExchange, fetchExchange],
  });

  try {
    const request = createRequest(
      `
        {
          posts(options: { paginate: { page: 1, limit: 6 } }) {
            data {
              id
              title
            }
          }
        }
      `
    );

    const response = await client.executeQuery(request);
    const posts = response.data.posts.data;
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// import ApolloClient, { gql } from "apollo-boost";

// export const fetchPosts = async () => {
//   const client = new ApolloClient({
//     uri: "https://graphqlzero.almansi.me/api",
//   });

//   try {
//     const response = await client.query({
//       query: gql`
//         {
//           posts(options: { paginate: { page: 1, limit: 6 } }) {
//             data {
//               id
//               title
//             }
//           }
//         }
//       `,
//     });

//     const posts = response.data.posts.data;
//     return posts;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

//fake response
//     {
//         "id": "1",
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "__typename": "Post"
//     },
//     {
//         "id": "2",
//         "title": "qui est esse",
//         "__typename": "Post"
//     },
//     {
//         "id": "3",
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "__typename": "Post"
//     },
//     {
//         "id": "4",
//         "title": "eum et est occaecati",
//         "__typename": "Post"
//     },
//     {
//         "id": "5",
//         "title": "nesciunt quas odio",
//         "__typename": "Post"
//     },
//     {
//         "id": "6",
//         "title": "dolorem eum magni eos aperiam quia",
//         "__typename": "Post"
//     }
// ]
