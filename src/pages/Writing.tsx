import { SEO } from '../components/SEO';
import posts from '../data/posts.json';
import {
  WritingPageWrapper,
  ArticleList,
  ArticleLink,
  HomeLink,
  HomeIcon,
} from '../components/BlogStyles';
import type { Post } from '../types';

export function Writing() {
  return (
    <>
      <SEO
        title="Writing"
        description="Thoughts on business, energy, water, and building things that matter."
        url="https://jacquesjean.info/writing"
      />
      <WritingPageWrapper>
        <ArticleList>
          {(posts as Post[]).map((post) => (
            <ArticleLink key={post.slug} to={`/writing/${post.slug}`}>
              {post.title}
            </ArticleLink>
          ))}
        </ArticleList>

        <HomeLink to="/" aria-label="Home">
          <HomeIcon />
        </HomeLink>
      </WritingPageWrapper>
    </>
  );
}
