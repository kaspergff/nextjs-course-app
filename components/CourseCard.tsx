import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"

const CourseCard: FC<CourseInfo> = ({ id, Title, Text_big, Text_small }) => {
  return (
    <div className="mb-5 border-2 rounded-xl p-6 flex items-center md:items-start flex-col md:flex-row justify-center">
      <Link href={`/courses/${id}`} passHref>
        <a className="block relative">
          <Image
            alt="Course Pic"
            src={`/../public/project_images/${id}.PNG`}
            height="272px"
            width="272px"
            className="object-cover rounded-full"
          />
        </a>
      </Link>
      <div className="w-full md:w-2/3">
        <p className="text-gray-600 w-full font-semibold md:w-5/6 m-auto text-left text-lg md:text-3xl">
          {Title}
        </p>
        <p className="mt-4 text-gray-600 w-full md:w-5/6 m-auto text-left text-md md:text-xl">
          {Text_big}
        </p>
        <p className="mt-4 text-gray-500 w-full md:w-5/6 m-auto text-left text-md md:text-md">
          {Text_small}
        </p>
        <div className="flex mt-8 items-center justify-center">
          <button className="btn btn-primary btn-big mx-4">
            <Link href={`/courses/${id}`} passHref>
              <a className="block relative">Check project</a>
            </Link>
          </button>
          <span className="text-gray-400 text-xl font-light">/</span>
          <span className="text-gray-400 text-md ml-2">100% free!</span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
