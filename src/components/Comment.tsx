/** @jsxImportSource theme-ui */
import {Container, BaseStyles, ThemeProvider, Button } from "theme-ui";

import { useComments } from "use-comments";
import { formatDate, formatStatus } from "./utils";

import theme from "./theme";

import { AddComment } from "./AddComment";
import { useState } from "react";

const LIMIT = 3;

const Comments = ({ postId }: { postId: string }) => {
  const [offset, setOffset] = useState(0);
  const { comments, addComment, count, loading } = useComments(
    "https://use-comments-app.herokuapp.com/v1/graphql",
    postId,
    {
      limit: LIMIT,
      offset
    }
  );

  const currentPage = Math.ceil((offset - 1) / LIMIT + 1);

  return (
    <section sx={{ width: "70%", pb: "100px" }}>
      <AddComment onSubmit={addComment} />
      <h3>{count === 1 ? "1 comment" : `${count} comments`}</h3>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {comments.map(({ author, content, created_at, status }) => (
            <article key={created_at}>
              <div>
                {`${author} ・ `}
                <time dateTime={created_at}>{formatDate(created_at)}</time>
                {status && ` ・ ${formatStatus(status)}`}
              </div>
              <p>{content}</p>
            </article>
          ))}
        </div>
      )}
      <div
        sx={{
          pt: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Button
          onClick={() => setOffset(prev => prev - LIMIT)}
          sx={
            currentPage === 1
              ? {
                  bg: "gray",
                  pointerEvents: "none"
                }
              : {}
          }
        >
          Prev
        </Button>
        {currentPage} page
        <Button
          onClick={() => setOffset(prev => prev + LIMIT)}
          sx={
            currentPage * LIMIT >= count
              ? {
                  bg: "gray",
                  pointerEvents: "none"
                }
              : {}
          }
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default function Comment() {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Container sx={{ p: [2, 4] }}>
          <Comments postId="demo-app-pagination" />
        </Container>
      </BaseStyles>
    </ThemeProvider>
  );
}
