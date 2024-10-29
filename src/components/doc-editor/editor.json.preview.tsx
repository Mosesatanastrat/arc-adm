import { useCurrentEditor } from "@tiptap/react";

function EditorJSONPreview() {
  const { editor } = useCurrentEditor();

  return editor ? <pre>{JSON.stringify(editor.getJSON(), null, 2)}</pre> : null;
}

export default EditorJSONPreview;
