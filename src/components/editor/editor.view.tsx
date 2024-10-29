import StarterKit from "@tiptap/starter-kit";
import { RichTextReadOnly } from "mui-tiptap";
const extensions = [StarterKit];

type EditorViewProps = {
  content: string;
};

function EditorView({ content }: EditorViewProps) {
  return (
    <div>
      <RichTextReadOnly content={content} extensions={extensions} />
    </div>
  );
}

export default EditorView;
