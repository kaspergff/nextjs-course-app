import { FC } from "react";
import { marked } from "marked";

interface Props {
  lesson: lesson;
}
const LessonPage: FC<Props> = ({ lesson }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked.parse(lesson.content, { sanitize: false });
    return { __html: rawMarkup };
  };

  return (
    <div className="p-4 lg:px-64">
      <p className="text-center fontsize-xl font-bold pb-4">
        {lesson.data.title}
      </p>
      <div dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
};

export default LessonPage;
