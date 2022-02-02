import fs from "fs"
import matter from "gray-matter"
import { join } from "path"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"
import { read } from "to-vfile"

export const baseDirectory = join(process.cwd(), "courses")

// get all course Id's (cid) aka the name of the folders under /courses
export const getAllCourseCid = (source: string = baseDirectory) =>
  fs.readdirSync(source)

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
