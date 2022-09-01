export {}
declare global {
  type lesson = { data: { [key: string]: string }; content: any }
  // course is a array of lessons 
  // each item in the array is a lesson
  type course = lesson[]
  
  type CourseInfo = {
    id: string
    Title: string
    Text_big: string
    Text_small: string
  }
}
