
<template>
  <div class="container border-top border-bottom" v-if="editor">
    <!-- <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }" class="btn btn-primary">
      bold
    </button>
    <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      italic
    </button>
    <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      strike
    </button>
    <button @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
      code
    </button>
    <button @click="editor.chain().focus().unsetAllMarks().run()">
      clear marks
    </button>
    <button @click="editor.chain().focus().clearNodes().run()">
      clear nodes
    </button> -->
    <!-- <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
      paragraph
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
      h1
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
      h2
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
      h3
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
      h4
    </button>
    <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
      h5
    </button> -->
    <!-- <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
      h6
    </button>
    <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
      bullet list
    </button>
    <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
      ordered list
    </button>
    <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
      code block
    </button>
    <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
      blockquote
    </button>
    <button @click="editor.chain().focus().setHorizontalRule().run()">
      horizontal rule
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
      hard break
    </button> -->
   
    <i class="control mdi mdi-undo text-danger" @click="editor.chain().focus().undo().run()">
    </i>
    <i class="control mdi mdi-redo text-danger" @click="editor.chain().focus().redo().run()">
    </i>
    <i class="control mdi mdi-code-tags text-primary" @click="editor.chain().focus().toggleCodeBlock().run()">
    </i>
     <i class="control mdi mdi-format-list-bulleted text-warning" @click="editor.chain().focus().toggleOrderedList().run()" >
    </i>
    <i class="control mdi mdi mdi-format-list-bulleted-type text-primary" @click="editor.chain().focus().toggleBulletList().run()" >
    </i>
    <i class="control mdi mdi-format-italic text-success" @click="editor.chain().focus().toggleItalic().run()">
    </i>
    <i class="control mdi mdi-format-bold text-info" @click="editor.chain().focus().toggleBold().run()" >
    </i>
   <i class="control mdi mdi-link-variant text-primary" @click="setLink" :class="{ 'is-active': editor.isActive('link') }">
    </i>
    <i class="control mdi mdi-link-variant-off text-muted" @click="editor.chain().focus().unsetLink().run()" :disabled="!editor.isActive('link')">
    </i>
  </div>
  <div class="container-editor py-3 p-2">

  <form @submit="Comment" >
   <div class="d-flex justify-content-between rounded-pill" :class="backgroundModeParent">
    <div class="col-md-9 col-8">
       <editor-content 
        :editor="editor"
        v-model="body" 
        />
    </div>
       
       <div class="comment-btn-wrapper d-flex">
                                 
        <button type="submit" class="btn  send-icon   text-primary rounded-pill d-flex" :class="backgroundModeParent"> 
          <div v-if="commentLoaderState" class="spinner-border-1 spinner-border mt-1 me-1"  role="status"></div>
          <i class="mdi mdi-send"></i> 
        </button>
       </div>
    
    </div> 
  </form> 
  </div>
  
   <!-- <p>{{ body }}</p> -->
</template>


<script>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import Link from '@tiptap/extension-link'
import Mention from '@tiptap/extension-mention'
import suggestion from '@tiptap/suggestion'
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity'
import paragraph from '@tiptap/extension-paragraph'

export default {
  components: {
    EditorContent,
  },

  
  setup() {

   const store = useStore() 

   const body = ref("")
  
   const authUser = computed(()=>store.getters.getAuthUser)

   /* Tip Tap Config Start */ 
    const editor = useEditor({
      content: "Write a comment...",
      extensions: [
        StarterKit,
        Document,
        paragraph.configure({
          HTMLAttributes:{
            class: 'my-custom-paragraph',
          }
        }),
        Link.configure({
          openOnClick: false,
          autolink: true,
          openOnClick: true,
          linkOnPaste: true,
          HTMLAttributes: {
            class: 'my-custom-class',
          },
        }),
         Mention.configure({
          HTMLAttributes: {
            class: 'mention',
            suggestion,
            suggestion: {
            Default: '@',
            Default: () => ({silas})
            },
          },
          renderLabel({ options, node }) {
           return `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`
          }
        }),
      ],
    })


  const  setLink = () => {
      const previousUrl = this.editor.getAttributes('link').href
      const url = window.prompt('URL', previousUrl)

      // cancelled
      if (url === null) {
        return
      }

      // empty
      if (url === '') {
        this.editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .unsetLink()
          .run()

        return
      }

      // update link
      this.editor
        .chain()
        .focus()
        .extendMarkRange('link')
        .setLink({ href: url })
        .run()
  }
      /* Tip Tap Config End */

onMounted(()=>{
  onUpdated(()=>{
   body.value = editor.value.getHTML()
 })
})


 const Comment = (e)=> {
    e.preventDefault()
    const id = computed(()=> store.getters.getPostId)
    store.commit('setCommentLoaderState', true)
    store.dispatch('addComment', {
      body: body.value,
      id: id.value
    }).then(response => {
       store.commit('setCommentBtnState', false) //close the comment editor 
       store.commit('setCommentLoaderState', false) //stop comment loader 
       store.commit('setNotificationText', 'Comment added')//set the dynamic text notification 
    }).catch(error => {
      console.log(error)
    })
  }

 const backgroundModeParent = computed(()=> store.getters.getParentBackgroundMode)
 const commentLoaderState = computed(()=> store.getters.getCommentLoaderState) // get comment loading state

    return { editor, setLink, body, backgroundModeParent, Comment , commentLoaderState}
  },
}
</script>



<style lang="scss">
/* Basic editor styles */

.spinner-border-1{
  height: 15px;
  width: 15px;
  padding: 5px;
}

.my-custom-paragraph{
  margin: 0;
  padding: 0;
}

// .comment-btn-wrapper{
//   //  margin-left: 2px;  
// }

@media(max-width: 765px){
  .comment-btn-wrapper{
     margin-left: 0px;
  }
}

.send-icon{
  font-size: 20px;
}

.send-icon:hover{
  color: rgb(113, 113, 238) !important;
}

.image-mdi{
  font-size: 20px;
}
.add-to-post-con{
  border-radius: 15px;
  position: relative;
}

.para-down{
  position: absolute;
  right: 0;
  top: 13px;
}
.para{
  color: black;
}

.post-btn{
  background-color: #e9e8e8;
   box-shadow: 0px 0px 0px 0px  white;
   border-radius: 11px;
}
.post-btn:hover{
  color: rgb(2, 128, 145);
}

.ProseMirror-focused:focus {
    outline: none;
}

.ProseMirror{
  height: fit-content;
  max-height: 50px;
  overflow-y: scroll;
  background-color: inherit;
  border-radius: 30px !important;
  padding: 10px;
}

.mention {
  color: rgb(51, 116, 177);
  box-decoration-break: clone;
}

.control{
  margin: 5px;
  padding-left: 5px;
}

.container-editor{
    margin-left: 15px !important;
    margin-right: 15px !important;
    border: none;
    outline: none !important;
    border: none !important;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }

.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  p {
   margin:  0;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #525252;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>