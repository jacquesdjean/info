import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import posts from '../data/posts.json';
import {
  PostPageWrapper,
  PostContainer,
  BackLink,
  PostTitle,
  PostMeta,
  PostContent,
  PostFooter,
  ArrowLeft,
} from '../components/BlogPostStyles';
import { HomeLink, HomeIcon } from '../components/BlogStyles';
import type { Post } from '../types';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = (posts as Post[]).find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`https://jacquesjean.info/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
      />
      <PostPageWrapper>
        <PostContainer>
          <BackLink to="/blog">
            <ArrowLeft /> All posts
          </BackLink>

          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            {formattedDate} · {post.readingTime} min read
          </PostMeta>

          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />

          <PostFooter>
            <HomeLink to="/" aria-label="Home">
              <HomeIcon />
            </HomeLink>
          </PostFooter>
        </PostContainer>
      </PostPageWrapper>
    </>
  );
}
