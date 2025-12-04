import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-gray-50 scroll-mt-24 reveal" aria-labelledby="blog-heading">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em] mb-4">Bilgi Merkezi</p>
          <h2 id="blog-heading" className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Güncel İçerikler ve Rehberler
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Stratejik yönetim, liderlik gelişimi ve kurumsal dönüşüm konularında uzman görüşleri,
            pratik ipuçları ve sektör trendleri.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="relative flex flex-col h-full p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-xl hover:border-blue-200 group"
            >
              {/* Category badge + meta */}
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <span className="px-3 py-1 text-sm font-semibold text-blue-700 rounded-full bg-blue-50">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-xs text-gray-500 ml-auto">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold leading-tight text-gray-900 transition-colors group-hover:text-blue-700">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="mb-8 leading-relaxed text-gray-600">{post.summary}</p>

              {/* Read more link */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 group-hover:gap-3"
                  aria-label={`${post.title} blog yazısını oku`}
                >
                  Devamını oku
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-xl group-hover:opacity-100"></div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl"
          >
            Tüm Yazıları Görüntüle
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
