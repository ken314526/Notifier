
const BlogCard = ({
  image,
  title,
  excerpt,
  author,
  authorRole,
  authorImage,
  date,
}: {
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm">{excerpt}</p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-200">
            <img
              src={authorImage}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">{author}</p>
            <p className="text-gray-500 text-xs">{authorRole}</p>
          </div>
          <div className="ml-auto text-gray-500 text-xs sm:text-sm">{date}</div>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=350",
      title: "Organize your digital assets with a new methodology here.",
      excerpt:
        "Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.",
      author: "Andrew Miller",
      authorRole: "CEO",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
      date: "25 Apr",
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=350",
      title: "Organize your digital assets with a new methodology here.",
      excerpt:
        "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
      author: "David Munsan",
      authorRole: "UX",
      authorImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100",
      date: "25 Apr",
    },
    {
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=350",
      title: "Organize your digital assets with a new methodology here.",
      excerpt:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.",
      author: "Andrew Meiler",
      authorRole: "UI",
      authorImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&h=100",
      date: "25 Apr",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="section-subtitle">
          Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              excerpt={blog.excerpt}
              author={blog.author}
              authorRole={blog.authorRole}
              authorImage={blog.authorImage}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
