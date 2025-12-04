import { Link, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import { findBlogPost } from '../data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = findBlogPost(slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex items-center min-h-screen bg-white">
          <div className="max-w-3xl px-4 py-16 mx-auto space-y-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em]">Blog</p>
            <h1 className="text-3xl font-bold text-gray-900">İçerik bulunamadı</h1>
            <p className="text-gray-600">Aradığınız blog yazısı kaldırılmış veya adresi değişmiş olabilir.</p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-900 hover:shadow-lg"
            >
              Ana sayfaya dön
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const articleJsonLd = useMemo(
    () =>
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.summary,
        author: {
          '@type': 'Organization',
          name: 'EcyPro Danışmanlık',
        },
        datePublished: post.date,
        mainEntityOfPage: `https://www.ecypro.com/blog/${post.slug}`,
      }),
    [post],
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${post.title} | EcyPro Danışmanlık`;
    }
  }, [post.title]);

  return (
    <>
      <Header />
      <main className="bg-white">
        <article className="max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="inline-flex items-center gap-3">
              <span className="font-semibold text-blue-700">{post.category}</span>
              <span aria-hidden="true">•</span>
              <span>{post.date}</span>
            </div>
            <span>{post.readTime}</span>
          </div>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">{post.title}</h2>
          <p className="mt-3 text-lg text-gray-600">{post.summary}</p>

          <div className="mt-8 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>
                {section.body && <p className="leading-relaxed text-gray-700">{section.body}</p>}
                {section.bullets && (
                  <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 mt-12 sm:flex-row">
            <a
              href={post.ctaHref || '#contact'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-900 hover:shadow-lg"
            >
              {post.ctaLabel || 'İletişime geç'}
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold text-blue-700 rounded-lg hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ana sayfaya dön
            </Link>
          </div>
        </article>

        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
