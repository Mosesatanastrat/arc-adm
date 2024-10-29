import { useCurrentEditor } from "@tiptap/react";

function MenuBarEditor() {
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  return (
    <div>
      <button
        onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
        className={
          editor.isActive("textStyle", { fontFamily: "Inter" })
            ? "is-active"
            : ""
        }
        data-test-id="inter"
      >
        Inter
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            .setFontFamily("Comic Sans MS, Comic Sans")
            .run()
        }
        className={
          editor.isActive("textStyle", {
            fontFamily: "Comic Sans MS, Comic Sans",
          })
            ? "is-active"
            : ""
        }
        data-test-id="comic-sans"
      >
        Comic Sans
      </button>
    </div>
  );
}

export default MenuBarEditor;
