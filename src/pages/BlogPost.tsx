import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { SEO } from '../components';
import posts from '../data/posts.json';
import type { Post } from '../types';

const ArticleWrapper = styled.article`
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 0 4rem;

  @media (max-width: 768px) {
    padding: 1rem 0 2rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  color: #6a6a6a;
  margin-bottom: 2rem;

  &:hover {
    color: #0d7377;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const Arrow = styled.span`
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.95rem;
  color: #6a6a6a;
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }
`;

const Content = styled.div`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #2a2a2a;

  h2 {
    font-size: 1.75rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.375rem;
    margin-top: 2rem;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #0d7377;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: #14919b;
    }
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #0d7377;
    padding-left: 1.25rem;
    margin: 2rem 0;
    font-style: italic;
    color: #4a4a4a;
  }

  img {
    border-radius: 8px;
    margin: 2rem 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const NotFound = styled.div`
  text-align: center;
  padding: 4rem 0;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #6a6a6a;
    margin-bottom: 2rem;
  }
`;

function formatDate(dateString: string): string {
  const date = new window.Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = (posts as Post[]).find((p) => p.slug === slug);

  if (!post) {
    return (
      <NotFound>
        <h1>Post Not Found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <BackLink to="/blog">
          <Arrow>&larr;</Arrow> Back to all posts
        </BackLink>
      </NotFound>
    );
  }

  return (
    <ArticleWrapper>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`https://jacquesjean.info/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
      />

      <BackLink to="/blog">
        <Arrow>&larr;</Arrow> Back to all posts
      </BackLink>

      <Title>{post.title}</Title>
      <Meta>
        <span>{formatDate(post.date)}</span>
        <span>{post.readingTime} min read</span>
      </Meta>

      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </ArticleWrapper>
  );
}
