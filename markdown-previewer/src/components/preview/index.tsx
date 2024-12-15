import { useRemark } from "react-remark";
import { useBoardContext } from "../../contexts/useBoardContext";
import { useEffect } from "react";

export function Preview() {
  const { boardContent } = useBoardContext();
  const [reactContent, setMarkdownSource] = useRemark();

  useEffect(() => {
    setMarkdownSource(boardContent);
  }, [boardContent, setMarkdownSource]);

  return (
    <div
      id="preview"
      className="border border-neutral-600 rounded-2xl p-4 col-span-2 lg:col-span-1 markdown"
    >
      {reactContent}
    </div>
  );
}
