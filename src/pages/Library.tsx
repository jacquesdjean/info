import { SEO } from '../components/SEO';
import posts from '../data/posts.json';
import {
  LibraryPageWrapper,
  LibraryCard,
  LibraryHeader,
  LibraryTitle,
  BackLink,
  EntryList,
  EntryItem,
  EntryTitle,
  EntryMeta,
  EntryExcerpt,
  ArrowLeft,
} from '../components/LibraryStyles';
import type { Post } from '../types';

export function Library() {
  return (
    <>
      <SEO
        title="Library"
        description="A collection of writings on business, energy, water, and building things that matter."
        url="https://jacquesjean.info/library"
      />
      <LibraryPageWrapper>
        <LibraryCard>
          <LibraryHeader>
            <LibraryTitle>Library</LibraryTitle>
            <BackLink to="/" aria-label="Back to home">
              <ArrowLeft />
              Home
            </BackLink>
          </LibraryHeader>

          <EntryList>
            {(posts as Post[]).map((post) => (
              <EntryItem key={post.slug} to={`/writing/${post.slug}`}>
                <EntryTitle>{post.title}</EntryTitle>
                <EntryMeta>{post.date} · {post.readingTime} min read</EntryMeta>
                <EntryExcerpt>{post.excerpt}</EntryExcerpt>
              </EntryItem>
            ))}
          </EntryList>
        </LibraryCard>
      </LibraryPageWrapper>
    </>
  );
}
