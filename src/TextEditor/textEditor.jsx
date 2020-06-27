import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function TextEditor(props) {
  // function test() {
  //   props.handleEditorChange();
  // }
  return (
    <div>
      <Editor
        apiKey="3q3vjb0bbtg3jx437evqdsttkyz77mwas325effmyrxwrk33"
        initialValue={props.content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help",
        }}
        value={props.content}
        onEditorChange={props.handleEditorChange}
      />
    </div>
  );
}
