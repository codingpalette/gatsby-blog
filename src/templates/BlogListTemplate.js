import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { palette } from '../components/common/GlobalStyles';
import SEO from '../components/seo';
import Pagination from '../components/post/Pagination';

const Container = styled.div`
  display: block;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const List = styled.li`
  & + li {
    margin-top: 1.5rem;
  }
  a {
    color: ${palette.white};
  }
  a:hover {
    color: ${palette.green};
  }
`;
const Date = styled.time`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${palette.green};
`;
const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 5px 0;
`;
// const TextContent = styled.div`
//   p {
//     font-size: 0.9rem;
//     font-weight: bold;
//   }
// `;

const BlogListTemplate = ({ data, pageContext }) => {
  const blogs = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <h1>Blog</h1>
        <ol>
          {blogs.map(edge => {
            return (
              <List key={edge.node.id}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <Date datetime={edge.node.frontmatter.date}>
                    {edge.node.frontmatter.date}
                  </Date>
                  <Title>{edge.node.frontmatter.title}</Title>
                </Link>
              </List>
            );
          })}
        </ol>
        <Pagination data={pageContext} />
      </Container>
    </Layout>
  );
};

export default BlogListTemplate;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`;
