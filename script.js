window.onload = () => {
  const posts = [
    {title: "Welcome to My Blog", content: "This is my first blog post. I'm excited to share my thoughts and experiences with you all!"},
    {title: "Learning JavaScript", content: "JavaScript is a powerful programming language that enables interactive web development. Today I learned about event listeners and DOM manipulation."},
    {title: "Web Development Tips", content: "Always write clean and maintainable code. Use meaningful variable names and comment your code when necessary."
    }]
    
  posts.map((post) => createPost(post.title, post.content))

  const form = document.getElementById("blog-form")
  const addBtn = document.getElementById("add-blog-post")

  addBtn.addEventListener("click", () => {
    form.classList.remove("hidden")
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.getElementById("post-title").value.trim()
    const content = document.getElementById("post-content").value.trim()

    if (title && content) {
      createPost(title, content)
      form.reset()
      form.classList.add("hidden")
    }
  })
}

const createPost = (titleText, contentText) => {
  const container = document.getElementById("blog-container")

  const post = document.createElement("div")
  post.classList.add("each-post")

  // Edit Title button
  const titleRow = document.createElement("div")
  titleRow.classList.add("title-row")

  const title = document.createElement("h3")
  title.textContent = titleText

  const editTitleBtn = document.createElement("button")
  editTitleBtn.textContent = "Edit Title"
  editTitleBtn.addEventListener("click", () => editText(title, "title"))

  titleRow.appendChild(title)
  titleRow.appendChild(editTitleBtn)

  const content = document.createElement("p")
  content.textContent = contentText

  // Edit Content button
  const editContentBtn = document.createElement("button")
  editContentBtn.textContent = "Edit Content"
  editContentBtn.addEventListener("click", () => editText(content, "content"))

  // Delete Post button 
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Delete Post"
  deleteBtn.addEventListener("click", () => deletePost(post, title.textContent))

  post.appendChild(titleRow)
  post.appendChild(content)
  post.appendChild(editContentBtn)
  post.appendChild(deleteBtn)
  container.appendChild(post)
}

const editText = (element, label) => {
  const newText = prompt(`Enter the new ${label}:`, element.textContent)
  if (newText) {
    element.textContent = newText
  }
}

const deletePost = (post, titleText) => {
  const toDelete = confirm(`Are you sure you want to delete "${titleText}"?`)
  if (toDelete) {
    post.remove()
  }
}