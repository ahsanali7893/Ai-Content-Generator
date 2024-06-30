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
  {
    name: "Code Snippet",
    desc: "An AI tool that generates code snippets based on your input.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    aiPrompt:
      "Generate a code snippet in the specified programming language based on the given description and requirements",
    slug: "generate-code-snippet",
    form: [
      {
        label: "Enter programming language",
        field: "input",
        name: "language",
        required: true,
      },
      {
        label: "Enter code requirements",
        field: "textarea",
        name: "requirements",
      },
    ],
  },
  {
    name: "Function Documentation",
    desc: "An AI tool that creates documentation for your code functions.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/2555/2555024.png",
    aiPrompt:
      "Generate documentation for the given code function in bullet points, including description, parameters, and return values",
    slug: "generate-function-documentation",
    form: [
      {
        label: "Enter code function",
        field: "textarea",
        name: "code",
        required: true,
      },
      {
        label: "Enter function description",
        field: "textarea",
        name: "description",
      },
    ],
  },
  {
    name: "Story Plot",
    desc: "An AI tool that generates story plots based on your input.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1674/1674291.png",
    aiPrompt:
      "Generate a story plot in bullet points based on the given genre and key elements",
    slug: "generate-story-plot",
    form: [
      {
        label: "Enter story genre",
        field: "input",
        name: "genre",
        required: true,
      },
      {
        label: "Enter key elements",
        field: "textarea",
        name: "elements",
      },
    ],
  },
  {
    name: "Character Description",
    desc: "An AI tool that creates detailed character descriptions.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1680/1680864.png",
    aiPrompt:
      "Generate a detailed character description in bullet points based on the given character traits and background",
    slug: "generate-character-description",
    form: [
      {
        label: "Enter character traits",
        field: "textarea",
        name: "traits",
        required: true,
      },
      {
        label: "Enter character background",
        field: "textarea",
        name: "background",
      },
    ],
  },
];
