import React from "react";
import {
  useQuery,
  gql
} from "@apollo/client";

function QueryResult() {
    const { loading, error, data } = useQuery(gql`
      {
        books {
          title
          author
        }
      }
    `);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.books.map((book: any) => (
      <div key={book.title}>
        <p>
          {book.title}: {book.author}
        </p>
      </div>
    ));
  }

  export default QueryResult;