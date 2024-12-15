import { Board } from "./components/board";
import { Preview } from "./components/preview";

export function App() {
  return (
    <section className="max-w-screen-2xl mx-auto pt-12 px-4 pb-6">
      <div className="flex justify-center mb-12">
        <h1 className="text-3xl text-white font-semibold">Markdown Previewer</h1>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Board />
        <Preview />
      </div>
    </section>
  );
}
