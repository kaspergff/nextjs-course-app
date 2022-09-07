import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const baseDirectory = join(process.cwd(), "courses");

export const getAllCourseCid = (source: string = baseDirectory) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dirent) => dirent.name);

// const onlyFolders = allFiles.filter(dir => dir.isDirectory())
// return onlyFolders

// get all lessons from a course cid
export const getAlLessonsFromCid = (cid: string) =>
  fs.readdirSync(join(baseDirectory, cid));

export const getLessons = (cid: string) => {
  const lessons = getAlLessonsFromCid(cid);
  const less = lessons.filter((str, index, arr) => str != "info.md");

  const items: lesson[] = [];
  less.map((lesson) => {
    const fullPath = join(baseDirectory, cid, lesson);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    items.push({ data, content });
  });

  return items;
};

export const getLessonInfo = () => {
  const courses = getAllCourseCid();
  let info: info[] = [];

  courses.forEach((cid) => {
    const less = "info.md";
    const fullPath = join(baseDirectory, cid, less);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContent);
    info.push({ cid, data });
  });

  return info;
};
