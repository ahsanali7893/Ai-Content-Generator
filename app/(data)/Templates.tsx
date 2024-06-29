export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog title ideas in bullet points based on the given niche & outline topic and provide the result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter Your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Social Media Post",
    desc: "An AI tool that generates engaging social media posts based on your input.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1968/1968641.png",
    aiPrompt:
      "Create 3 engaging social media posts in bullet points based on the given topic and target audience",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter Your post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "An AI tool that creates compelling product descriptions.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/12463/12463174.png",
    aiPrompt:
      "Write 3 compelling product descriptions in bullet points based on the given product name and features",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
      },
    ],
  },
  {
    name: "Email Campaign",
    desc: "An AI tool that generates effective email campaign content.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1312/1312285.png",
    aiPrompt:
      "Create 2 email campaign drafts in bullet points based on the given campaign objective and target audience",
    slug: "generate-email-campaign",
    form: [
      {
        label: "Enter campaign objective",
        field: "input",
        name: "objective",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "SEO Keywords",
    desc: "An AI tool that generates SEO keywords for your content.",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/9623/9623640.png",
    aiPrompt:
      "Generate 10 SEO keywords in bullet points based on the given content topic and target audience",
    slug: "generate-seo-keywords",
    form: [
      {
        label: "Enter content topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Video Script",
    desc: "An AI tool that creates video scripts for your content.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/5496/5496748.png",
    aiPrompt:
      "Write a short video script in bullet points based on the given topic and key points",
    slug: "generate-video-script",
    form: [
      {
        label: "Enter video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter key points",
        field: "textarea",
        name: "points",
      },
    ],
  },
];
