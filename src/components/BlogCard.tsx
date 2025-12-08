import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Post } from '../types';

const Card = styled(Link)`
  display: block;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eaeaea;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:first-child {
    border-top: 1px solid #eaeaea;
  }

  &:hover {
    background-color: #fafafa;
    margin: 0 -1rem;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 0;

    &:hover {
      margin: 0 -0.5rem;
      padding: 1.25rem 0.5rem;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;

  ${Card}:hover & {
    color: #0d7377;
  }

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #6a6a6a;
  margin-bottom: 0.75rem;
`;

const Date = styled.span``;

const ReadingTime = styled.span``;

const Excerpt = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

interface BlogCardProps {
  post: Post;
}

function formatDate(dateString: string): string {
  const date = new window.Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card to={`/blog/${post.slug}`}>
      <Title>{post.title}</Title>
      <Meta>
        <Date>{formatDate(post.date)}</Date>
        <ReadingTime>{post.readingTime} min read</ReadingTime>
      </Meta>
      <Excerpt>{post.excerpt}</Excerpt>
    </Card>
  );
}
