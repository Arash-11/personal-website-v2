import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkImages from 'remark-images';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, {defaultSchema} from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

const postsDirectory = path.join(process.cwd(), 'posts');

const getSortedPostsData = () => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);;
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data
    }
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
};


const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => (
    {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  ));
};


const getPostData = async (id) => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Convert markdown into HTML string
  const contentHtml = await unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true}) // Pass raw HTML strings through
    .use(rehypeRaw)
    .use(rehypeSanitize, {
      ...defaultSchema,
      attributes: {
        ...defaultSchema.attributes,
        code: [
          ...(defaultSchema.attributes.code || []),
          // List of all allowed languages:
          [
            'className', 'language-js', 'language-jsx', 'language-ts', 'language-tsx', 'language-css', 'language-scss', 'language-md', 'language-sh', 'language-json', 'language-rs'
          ]
        ]
      }
    })
    .use(rehypeHighlight)
    .use(rehypeStringify, {allowDangerousHtml: true})
    .use(remarkImages) // Serialize the raw HTML strings
    .process(matterResult.content)
    .then((file) => String(file))
    .catch((error) => {
      throw error;
    });

  return {
    id,
    contentHtml,
    ...matterResult.data
  };
};


export { getSortedPostsData, getAllPostIds, getPostData };
