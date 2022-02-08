import fs from "fs"
import matter from "gray-matter"
import { join } from "path"


export const baseDirectory = join(process.cwd(), "courses")

// get all course Id's (cid) aka the name of the folders under /courses
// Old implemtation
// export const getAllCourseCid = (source: string = baseDirectory) => {
//   fs.readdirSync(source)
// }

// new implementation to only export folders
export const getAllCourseCid = (source: string = baseDirectory) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dirent => dirent.name)

// const onlyFolders = allFiles.filter(dir => dir.isDirectory())
// return onlyFolders

// get all lessons from a course cid
export const getAlLessonsFromCid = async (cid: string) =>
  fs.readdirSync(join(baseDirectory, cid))

export const getLessons = async (cid: string) => {
  const lessons = await getAlLessonsFromCid(cid)
  const items: lesson[] = []
  lessons.map(async lesson => {
    const fullPath = join(baseDirectory, cid, lesson)
    const fileContent = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContent)
    items.push({ data, content })
  })

  return items
}
