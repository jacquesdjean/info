import { SEO } from '../components/SEO';
import posts from '../data/posts.json';
import {
  BlogPageWrapper,
  PostList,
  PostLink,
  HomeLink,
  HomeIcon,
} from '../components/BlogStyles';
import type { Post } from '../types';

export function Blog() {
  return (
    <>
      <SEO
        title="Writing"
        description="Thoughts on business, energy, water, and building things that matter."
        url="https://jacquesjean.info/blog"
      />
      <BlogPageWrapper>
        <PostList>
          {(posts as Post[]).map((post) => (
            <PostLink key={post.slug} to={`/blog/${post.slug}`}>
              {post.title}
            </PostLink>
          ))}
        </PostList>

        <HomeLink to="/" aria-label="Home">
          <HomeIcon />
        </HomeLink>
      </BlogPageWrapper>
    </>
  );
}
