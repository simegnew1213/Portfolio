import { cn } from "cn";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface BlogCardGridPost {
  id?: string;
  title: string;
  summary?: string;
  href?: string;
  image?: Image;
  category?: string;
  date?: string;
  readTime?: string;
  author?: string;
  avatar?: Image;
  cta?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface BlogCardGridProps {
  heading: string;
  description?: string;
  posts: BlogCardGridPost[];
  className?: string;
}

interface Blog120Props extends BlogCardGridProps {}
type Props = Partial<Blog120Props>;

const person1 = {
  name: "Jack Walsh",
  firstName: "Jack",
  lastName: "Walsh",
  initials: "JW",
  email: "jack.walsh@example.com",
  username: "jackwalsh",
  role: "Product Designer",
  company: "Cartwright",
  location: "Brisbane, Australia",
  avatar: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/avatars/avatar1.webp",
};
const person2 = {
  name: "Ilze Pērkone",
  firstName: "Ilze",
  lastName: "Pērkone",
  initials: "MK",
  email: "iperkone@example.com",
  username: "iperkone",
  role: "Brand Director",
  company: "Kivit",
  location: "Rīga, Latvia",
  avatar: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/avatars/avatar2.webp",
};
const person3 = {
  name: "Vernon Desilets",
  firstName: "Vernon",
  lastName: "Desilets",
  initials: "VD",
  email: "vernod@example.com",
  username: "vernod",
  role: "Creative Director",
  company: "Soho Logix",
  location: "Paris, France",
  avatar: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/avatars/avatar3.webp",
};
const person4 = {
  name: "Lín Wàngshū",
  firstName: "Lín",
  lastName: "Wangshu",
  initials: "LW",
  email: "linwang4@example.com",
  username: "liwang",
  role: "Graphic Designer",
  company: "Tenxcloud",
  location: "Shanghai, China",
  avatar: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/avatars/avatar4.webp",
};
const person5 = {
  name: "Rajesh Bhatt",
  firstName: "Rajesh",
  lastName: "Bhatt",
  initials: "RB",
  email: "rajesh.bhatt@example.com",
  username: "rajeshbhatt",
  role: "UX Researcher",
  company: "Mindtree",
  location: "Mumbai, India",
  avatar: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/avatars/avatar5.webp",
};
const person6 = {
  name: "Jessica Cannon",
  firstName: "Jessica",
  lastName: "Cannon",
  initials: "JC",
  email: "jessica.cannon@example.com",
  username: "jessicacannon",
  role: "Data Analyst",
  company: "Fidelity Investments",
  location: "Boston, USA",
  avatar: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/avatars/avatar6.webp",
};
const defaultProps: Blog120Props = {
  heading: "Blog",
  description: "Notes on design, product, and the work of building software.",
  posts: [
    {
      id: "post-1",
      title: "What changed in interface design this year",
      summary:
        "A look at the patterns that stuck, and the ones that quietly disappeared.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-2-16x9.jpg",
        alt: "A team gathered for a presentation",
      },
      category: "Design",
      date: "March 12, 2026",
      readTime: "6 min",
      author: person1.name,
      avatar: {
        src: person1.avatar,
        alt: person1.name,
      },
      cta: "Read article",
    },
    {
      id: "post-2",
      title: "A practical guide to modern JavaScript",
      summary:
        "The language features we reach for, and the ones we leave alone.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-3-16x9.jpg",
        alt: "A desk with a desktop computer",
      },
      category: "Technology",
      date: "March 4, 2026",
      readTime: "8 min",
      author: person2.name,
      avatar: {
        src: person2.avatar,
        alt: person2.name,
      },
      cta: "Read article",
    },
    {
      id: "post-3",
      title: "Campaigns that still earn their keep",
      summary:
        "What held up after the novelty wore off, told with the numbers we kept.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-4-16x9.jpg",
        alt: "Two colleagues talking by a window",
      },
      category: "Marketing",
      date: "February 24, 2026",
      readTime: "5 min",
      author: person3.name,
      avatar: {
        src: person3.avatar,
        alt: person3.name,
      },
      cta: "Read article",
    },
    {
      id: "post-4",
      title: "How product teams write decisions down",
      summary:
        "A simple record of why a choice was made, written so the next person can find it.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-5-16x9.jpg",
        alt: "Three people collaborating around a laptop",
      },
      category: "Design",
      date: "February 18, 2026",
      readTime: "11 min",
      author: person4.name,
      avatar: {
        src: person4.avatar,
        alt: person4.name,
      },
      cta: "Read article",
    },
    {
      id: "post-5",
      title: "Accessible interfaces without a redesign",
      summary:
        "Small changes that make a page easier to use without a new visual system.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-6-16x9.jpg",
        alt: "A person writing on a glass wall",
      },
      category: "Technology",
      date: "February 9, 2026",
      readTime: "7 min",
      author: person5.name,
      avatar: {
        src: person5.avatar,
        alt: person5.name,
      },
      cta: "Read article",
    },
    {
      id: "post-6",
      title: "Shipping faster without skipping review",
      summary: "How review stays in the path when the calendar gets tight.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-7-16x9.jpg",
        alt: "Colleagues talking in a warm-lit office",
      },
      category: "Marketing",
      date: "January 28, 2026",
      readTime: "9 min",
      author: person6.name,
      avatar: {
        src: person6.avatar,
        alt: person6.name,
      },
      cta: "Read article",
    },
    {
      id: "post-7",
      title: "Measuring what a launch actually did",
      summary:
        "The questions we ask a week later, once the launch post has gone quiet.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-8-16x9.jpg",
        alt: "People talking at an office gathering",
      },
      category: "Design",
      date: "January 19, 2026",
      readTime: "4 min",
      author: person1.name,
      avatar: {
        src: person1.avatar,
        alt: person1.name,
      },
      cta: "Read article",
    },
    {
      id: "post-8",
      title: "The case for fewer tools",
      summary: "Fewer dashboards, fewer logins, and a clearer week.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-9-16x9.jpg",
        alt: "A team meeting around a high table",
      },
      category: "Technology",
      date: "January 8, 2026",
      readTime: "12 min",
      author: person2.name,
      avatar: {
        src: person2.avatar,
        alt: person2.name,
      },
      cta: "Read article",
    },
    {
      id: "post-9",
      title: "Photography, type, and the quiet page",
      summary: "How pictures and type share a page without competing.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-10-16x9.jpg",
        alt: "A person working at a desktop computer",
      },
      category: "Marketing",
      date: "December 16, 2025",
      readTime: "6 min",
      author: person3.name,
      avatar: {
        src: person3.avatar,
        alt: person3.name,
      },
      cta: "Read article",
    },
    {
      id: "post-10",
      title: "Notes on performance budgets",
      summary: "A budget for weight, and what we cut when a page misses it.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-11-16x9.jpg",
        alt: "A person on an office stair",
      },
      category: "Design",
      date: "December 4, 2025",
      readTime: "8 min",
      author: person4.name,
      avatar: {
        src: person4.avatar,
        alt: person4.name,
      },
      cta: "Read article",
    },
    {
      id: "post-11",
      title: "Editorial calendars that people follow",
      summary:
        "A calendar the team actually opens, with room for the piece that is late.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-12-16x9.jpg",
        alt: "A person presenting beside a whiteboard",
      },
      category: "Technology",
      date: "November 21, 2025",
      readTime: "5 min",
      author: person5.name,
      avatar: {
        src: person5.avatar,
        alt: person5.name,
      },
      cta: "Read article",
    },
    {
      id: "post-12",
      title: "Pricing pages that explain themselves",
      summary:
        "Plain language for plans, limits, and what happens when you change your mind.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-1-16x9.jpg",
        alt: "Colleagues working at a shared desk",
      },
      category: "Marketing",
      date: "November 11, 2025",
      readTime: "11 min",
      author: person6.name,
      avatar: {
        src: person6.avatar,
        alt: person6.name,
      },
      cta: "Read article",
    },
    {
      id: "post-13",
      title: "Design critiques that stay kind",
      summary: "Notes on giving feedback that names the work, not the person.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-2-16x9.jpg",
        alt: "A team gathered for a presentation",
      },
      category: "Design",
      date: "October 29, 2025",
      readTime: "7 min",
      author: person1.name,
      avatar: {
        src: person1.avatar,
        alt: person1.name,
      },
      cta: "Read article",
    },
    {
      id: "post-14",
      title: "What we check before a release",
      summary: "The short list we walk before something reaches production.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-3-16x9.jpg",
        alt: "A desk with a desktop computer",
      },
      category: "Technology",
      date: "October 14, 2025",
      readTime: "9 min",
      author: person2.name,
      avatar: {
        src: person2.avatar,
        alt: person2.name,
      },
      cta: "Read article",
    },
    {
      id: "post-15",
      title: "Writing headlines people finish",
      summary: "Headlines that say what the piece is, in the reader's words.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-4-16x9.jpg",
        alt: "Two colleagues talking by a window",
      },
      category: "Marketing",
      date: "September 30, 2025",
      readTime: "4 min",
      author: person3.name,
      avatar: {
        src: person3.avatar,
        alt: person3.name,
      },
      cta: "Read article",
    },
    {
      id: "post-16",
      title: "Onboarding that does not lecture",
      summary:
        "First-run copy that shows the product instead of explaining it.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-5-16x9.jpg",
        alt: "Three people collaborating around a laptop",
      },
      category: "Design",
      date: "September 18, 2025",
      readTime: "12 min",
      author: person4.name,
      avatar: {
        src: person4.avatar,
        alt: person4.name,
      },
      cta: "Read article",
    },
    {
      id: "post-17",
      title: "Color that survives both themes",
      summary: "Token choices that stay readable in light and dark.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-6-16x9.jpg",
        alt: "A person writing on a glass wall",
      },
      category: "Technology",
      date: "September 2, 2025",
      readTime: "6 min",
      author: person5.name,
      avatar: {
        src: person5.avatar,
        alt: person5.name,
      },
      cta: "Read article",
    },
    {
      id: "post-18",
      title: "A shorter path through the docs",
      summary: "Docs organized around the task, not the table of contents.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-7-16x9.jpg",
        alt: "Colleagues talking in a warm-lit office",
      },
      category: "Marketing",
      date: "August 21, 2025",
      readTime: "8 min",
      author: person6.name,
      avatar: {
        src: person6.avatar,
        alt: person6.name,
      },
      cta: "Read article",
    },
    {
      id: "post-19",
      title: "Interviews with the people who use it",
      summary:
        "Conversations with customers, edited down to what they actually said.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-8-16x9.jpg",
        alt: "People talking at an office gathering",
      },
      category: "Design",
      date: "August 7, 2025",
      readTime: "5 min",
      author: person1.name,
      avatar: {
        src: person1.avatar,
        alt: person1.name,
      },
      cta: "Read article",
    },
    {
      id: "post-20",
      title: "Keeping an archive readable",
      summary:
        "Stable URLs, clear dates, and excerpts that still make sense next year.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-9-16x9.jpg",
        alt: "A team meeting around a high table",
      },
      category: "Technology",
      date: "July 24, 2025",
      readTime: "11 min",
      author: person2.name,
      avatar: {
        src: person2.avatar,
        alt: person2.name,
      },
      cta: "Read article",
    },
    {
      id: "post-21",
      title: "Forms that explain their own errors",
      summary: "Labels, messages, and the moment a form asks for help.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-10-16x9.jpg",
        alt: "A person working at a desktop computer",
      },
      category: "Marketing",
      date: "July 10, 2025",
      readTime: "7 min",
      author: person3.name,
      avatar: {
        src: person3.avatar,
        alt: person3.name,
      },
      cta: "Read article",
    },
    {
      id: "post-22",
      title: "The weekly note, and why it stayed",
      summary:
        "Why a short weekly letter outlasted the channels we tried around it.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-11-16x9.jpg",
        alt: "A person on an office stair",
      },
      category: "Design",
      date: "June 26, 2025",
      readTime: "9 min",
      author: person4.name,
      avatar: {
        src: person4.avatar,
        alt: person4.name,
      },
      cta: "Read article",
    },
    {
      id: "post-23",
      title: "Layout systems you can teach",
      summary:
        "A handful of layout ideas new people can learn in an afternoon.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-12-16x9.jpg",
        alt: "A person presenting beside a whiteboard",
      },
      category: "Technology",
      date: "June 12, 2025",
      readTime: "4 min",
      author: person5.name,
      avatar: {
        src: person5.avatar,
        alt: person5.name,
      },
      cta: "Read article",
    },
    {
      id: "post-24",
      title: "Stories from a year of shipping",
      summary:
        "Twelve months of releases, told as the work rather than the changelog.",
      href: "#",
      image: {
        src: "https://cdn.shadcnblocks.com/shadcnblocks/image-set/modern/blog-corporate/photo-1-16x9.jpg",
        alt: "Colleagues working at a shared desk",
      },
      category: "Marketing",
      date: "May 29, 2025",
      readTime: "12 min",
      author: person6.name,
      avatar: {
        src: person6.avatar,
        alt: person6.name,
      },
      cta: "Read article",
    },
  ],
};

const MAX_POSTS = 6;

const Blog120 = (props: Props) => {
  const { heading, description, posts, className } = {
    ...defaultProps,
    ...props,
  };

  const visiblePosts = (posts ?? []).slice(0, MAX_POSTS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-12">
          <header className="flex flex-col items-center gap-4 text-center">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              {heading}
            </h2>
            <p className="max-w-2xl text-lg font-medium text-pretty text-muted-foreground md:text-xl">
              {description}
            </p>
          </header>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Card
                key={post.id ?? post.title}
                className="grid grid-rows-[auto_auto_1fr_auto] overflow-hidden pt-0"
              >
                <a
                  href={post.href}
                  target="_blank"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block aspect-video w-full overflow-hidden bg-muted"
                >
                  <img
                    src={post.image?.src}
                    alt={post.image?.alt ?? post.title}
                    className="h-full w-full object-cover object-center transition-opacity duration-300 hover:opacity-90"
                  />
                </a>
                <CardHeader className="gap-3">
                  <h3 className="text-lg leading-snug font-semibold text-balance">
                    <a
                      href={post.href}
                      target="_blank"
                      className="underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="font-medium text-foreground">
                      {post.author}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-muted-foreground/40"
                    >
                      ·
                    </span>
                    <time className="text-muted-foreground tabular-nums">
                      {post.date}
                    </time>
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {post.summary}
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href={post.href}
                    target="_blank"
                    className="group/cue inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {post.cta}
                    <ArrowRight className="size-4 text-muted-foreground transition-colors group-hover/cue:text-foreground" />
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Blog120 };
