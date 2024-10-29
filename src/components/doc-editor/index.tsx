// import { Color } from "@tiptap/extension-color";
// import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Image from "@tiptap/extension-image";
import Document from "@tiptap/extension-document";
// import Gapcursor from "@tiptap/extension-gapcursor";
import Paragraph from "@tiptap/extension-paragraph";
// import Table from "@tiptap/extension-table";
// import TableCell from "@tiptap/extension-table-cell";
// import TableHeader from "@tiptap/extension-table-header";
// import TableRow from "@tiptap/extension-table-row";
// import Dropcursor from "@tiptap/extension-dropcursor";
import FontFamily from "@tiptap/extension-font-family";
import Text from "@tiptap/extension-text";
import EditorJSONPreview from "./editor.json.preview";
// import { useCallback } from "react";
import "./style.css";
import { docEditorContent } from "../../common/constants/FormData";
import MenuBarEditor from "./menu.bar.editor";

function DocEditor() {
  const extensions = [Document, Paragraph, Text, TextStyle, FontFamily];
  return (
    <EditorProvider
      slotBefore={<MenuBarEditor />}
      extensions={extensions}
      content={docEditorContent}
      slotAfter={<EditorJSONPreview />}
    />
  );
}

export default DocEditor;
