<template>
  <editor-content :editor="editor" />
</template>

<script>
import Blockquote from '@tiptap/extension-blockquote'
import { useEditor, EditorContent, EditorMenuBar, Editor, EditorMenuBubble } from '@tiptap/vue-3'
import {
StarterKit,
Blockquote,
CodeBlock,
HardBreak,
Heading,
HorizontalRule,
OrderedList,
BulletList,
ListItem,
TodoItem,
TodoList,
Bold,
Code
}
from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
    EditorMenuBar,
    Editor,
    EditorMenuBubble
  },

  setup() {
    const editor = useEditor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
}
</script>