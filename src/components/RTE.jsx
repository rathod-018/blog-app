import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({
  name = "content",
  control,
  label,
  defaultValue = "",
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 inline-block pl-1 text-sm text-gray-400">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey="1htihwzixn613akni0yqga0siqku48tbzhf4a2efsfofojvn"
            value={value}
            onEditorChange={onChange}
            init={{
              height: 420,
              branding: false,
              menubar: false,
              skin: "oxide-dark",
              content_css: "dark",

              plugins: [
                "lists",
                "link",
                "image",
                "code",
                "fullscreen",
                "preview",
                "wordcount",
              ],

              toolbar:
                "undo redo | blocks | bold italic underline | forecolor | alignleft aligncenter alignright | bullist numlist | link image | code fullscreen",

              content_style: `
                body {
                  background-color: #0e0e11;
                  color: #e5e7eb;
                  font-family: Inter, system-ui, sans-serif;
                  font-size: 15px;
                  line-height: 1.7;
                }
              `,
            }}
          />
        )}
      />
    </div>
  );
}
