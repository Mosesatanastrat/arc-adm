import { ChoAndRandId, SelectInsetType } from "../../types/insert.type";
import { randomId } from "../utils/random";

export const rowOptions = [
  { value: 10, label: "Show 10 Rows" },
  { value: 15, label: "Show 15 Rows" },
  { value: 20, label: "Show 20 Rows" },
];

export const addTabList = [
  { label: "Details", value: 0 },
  { label: "Choices", value: 1 },
  { label: "Advanced", value: 2 },
  { label: "Preview", value: 3 },
];

export const roomSelection = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
  { label: "8", value: "8" },
  { label: "9", value: "9" },
  { label: "GYM", value: "gym" },
];

export const selectInsertTypeOption = [
  { label: "Automatic", value: SelectInsetType.AUTOMATIC },
  { label: "Data From System", value: SelectInsetType.DATA_FROM_SYSTEM },
  { label: "List", value: SelectInsetType.LIST },
  { label: "Check Boxes", value: SelectInsetType.CHECKBOX },
  { label: "Buttons", value: SelectInsetType.BUTTONS },
  { label: "Dropdown", value: SelectInsetType.DROPDOWN },
  { label: "Picture", value: SelectInsetType.PICTURE },
  { label: "Formula", value: SelectInsetType.FORMULA },
  { label: "Radio Buttons", value: SelectInsetType.RADIO },
];

export const selectInsertFilterOptions = [
  { value: "all", label: "No Filter" },
  ...selectInsertTypeOption,
];

export const getChoiceObj = ({ choId, randId }: ChoAndRandId) => {
  return {
    id: choId,
    name: "",
    random: [
      {
        id: randId,
        key: `Random`,
        value: "",
      },
    ],
  };
};

export const getInsertOperationInitial = ({ choId, randId }: ChoAndRandId) => {
  return {
    id: "",
    name: "",
    question: "",
    insetType: "list",
    colorBackground: "#F07",
    colorText: "#FFC107",
    chartViewName: "",
    picture: null,
    markers: [],
    choices: [getChoiceObj({ choId, randId })],
  };
};

export const editorContent = `
  <h2 style="text-align: center">Hey Insert 👋</h2>`;

// export const editorContent =
//   '<h2 style="text-align: center">Hey there 👋</h2><p>This is a <em>basic</em> example of <code>mui-tiptap</code>, which combines <a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/">Tiptap</a> with customizable <a target="_blank" rel="noopener noreferrer nofollow" href="https://mui.com/">MUI (Material-UI)</a> styles, plus a suite of additional components and extensions! Sure, there are <strong>all <em>kinds</em> of <s>text</s> <u>formatting</u> options</strong> you’d probably expect from a rich text editor. But wait until you see the <span data-type="mention" data-id="15" data-label="Axl Rose">@Axl Rose</span> mentions and lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><p>Isn’t that great? And all of that is editable. <strong><span style="color: #ff9900">But wait, </span><span style="color: #403101"><mark data-color="#ffd699" style="background-color: #ffd699; color: inherit">there’s more!</mark></span></strong> Let’s try a code block:</p><pre><code class="language-css">body {\n  display: none;\n}</code></pre><p></p><p>That’s only the tip of the iceberg. Feel free to add and resize images:</p><img height="auto" src="https://picsum.photos/600/400" alt="random image" width="350" style="aspect-ratio: 3 / 2"><p></p><p>Organize information in tables:</p><table><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Role</p></th><th colspan="1" rowspan="1"><p>Team</p></th></tr><tr><td colspan="1" rowspan="1"><p>Alice</p></td><td colspan="1" rowspan="1"><p>PM</p></td><td colspan="1" rowspan="1"><p>Internal tools</p></td></tr><tr><td colspan="1" rowspan="1"><p>Bob</p></td><td colspan="1" rowspan="1"><p>Software</p></td><td colspan="1" rowspan="1"><p>Infrastructure</p></td></tr></tbody></table><p></p><p>Or write down your groceries:</p><ul data-type="taskList"><li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked="checked"><span></span></label><div><p>Milk</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Eggs</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Sriracha</p></div></li></ul><blockquote><p>Wow, that’s amazing. Good work! 👏 <br>— Mom</p></blockquote><p>Give it a try and click around!</p>';
