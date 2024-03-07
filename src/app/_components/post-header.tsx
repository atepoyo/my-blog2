import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
