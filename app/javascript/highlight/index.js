import hljs from 'highlight.js'
// Recently, I've found that this path is required import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/gruvbox-dark.css'

hljs.configure({languages: ["ruby", "bash", "javascript"]})
// hljs.configure({ languages: ['ruby', 'erb', 'bash', 'javascript'] })
document.addEventListener('turbolinks:load', (event) => {
  document.querySelectorAll('pre').forEach((block) => {
    hljs.highlightBlock(block)
  })
})