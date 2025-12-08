import styled from 'styled-components';
import { SEO, BlogCard } from '../components';
import posts from '../data/posts.json';
import type { Post } from '../types';

const BlogWrapper = styled.div`
  padding: 2rem 0 4rem;

  @media (max-width: 768px) {
    padding: 1rem 0 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.125rem;
  color: #6a6a6a;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const PostsList = styled.div`
  margin-top: 1rem;
`;

const EmptyState = styled.p`
  color: #6a6a6a;
  font-style: italic;
  text-align: center;
  padding: 3rem 0;
`;

export function Blog() {
  const allPosts = posts as Post[];

  return (
    <BlogWrapper>
      <SEO
        title="Writing"
        description="Thoughts on building businesses, investing in water and energy, and the future."
        url="https://jacquesjean.info/blog"
      />

      <PageTitle>Writing</PageTitle>
      <PageDescription>
        Thoughts on building businesses, investing, and the future.
      </PageDescription>

      <PostsList>
        {allPosts.length > 0 ? (
          allPosts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <EmptyState>No posts yet. Check back soon!</EmptyState>
        )}
      </PostsList>
    </BlogWrapper>
  );
}
