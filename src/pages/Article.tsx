import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import posts from '../data/posts.json';
import {
  ArticlePageWrapper,
  ArticleCard,
  BackLink,
  ArticleTitle,
  ArticleMeta,
  ArticleContent,
  AuthorSignature,
  SignatureGreeting,
  SignatureName,
  SignatureLink,
  SignatureLocation,
  SignatureDisclaimer,
  ArticleFooter,
  ArrowLeft,
} from '../components/BlogPostStyles';
import { HomeLink, HomeIcon } from '../components/BlogStyles';
import type { Post } from '../types';

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const post = (posts as Post[]).find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/writing" replace />;
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
        url={`https://jacquesjean.info/writing/${post.slug}`}
        type="article"
        publishedTime={post.date}
      />
      <ArticlePageWrapper>
        <ArticleCard>
          <BackLink to="/writing">
            <ArrowLeft /> All posts
          </BackLink>

          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleMeta>
            {formattedDate} · {post.readingTime} min read
          </ArticleMeta>

          <ArticleContent dangerouslySetInnerHTML={{ __html: post.content }} />

          <AuthorSignature>
            <SignatureGreeting>Faciamus,</SignatureGreeting>
            <SignatureName>Jacques Jean</SignatureName>
            <SignatureLink
              href="https://www.upwork.com/freelancers/~01229e152775e587d5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my other work!
            </SignatureLink>
            <SignatureLocation>
              Based in Austin, Texas<br />
              United States of America
            </SignatureLocation>
            <SignatureDisclaimer>
              The views expressed in this article are solely my own and do not
              represent those of my current or former employers, business
              partners, or affiliates.
            </SignatureDisclaimer>
          </AuthorSignature>

          <ArticleFooter>
            <HomeLink to="/" aria-label="Home">
              <HomeIcon />
            </HomeLink>
          </ArticleFooter>
        </ArticleCard>
      </ArticlePageWrapper>
    </>
  );
}
