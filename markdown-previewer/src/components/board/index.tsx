import { useBoardContext } from "../../contexts/useBoardContext";

export function Board() {
  const { boardContent, setBoardContent } = useBoardContext();

  function handleUpdateBoardContent(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setBoardContent(event.target.value);
  }

  return (
    <div className="rounded-2xl p-4 bg-neutral-900 min-h-[calc(100vh-12rem)] focus-within:border focus-within:border-neutral-700 col-span-2 lg:col-span-1">
      <textarea
        name="markdown"
        id="editor"
        defaultValue={boardContent}
        onChange={handleUpdateBoardContent}
        className="w-full h-full bg-transparent border-none outline-none text-neutral-400 font-body resize-none "
      />
    </div>
  );
}
