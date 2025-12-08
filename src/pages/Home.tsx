import styled from 'styled-components';
import { Hero, SEO, BlogCard } from '../components';
import posts from '../data/posts.json';
import type { Post } from '../types';

const RecentPostsSection = styled.section`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid #eaeaea;

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const ViewAllLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #0d7377;
  font-weight: 500;

  &:hover {
    color: #14919b;
  }
`;

export function Home() {
  const recentPosts = (posts as Post[]).slice(0, 3);

  return (
    <>
      <SEO />
      <Hero />

      {recentPosts.length > 0 && (
        <RecentPostsSection>
          <SectionTitle>Recent Writing</SectionTitle>
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
          <ViewAllLink href="/blog">View all posts &rarr;</ViewAllLink>
        </RecentPostsSection>
      )}
    </>
  );
}
