const posts = [];
const submitError =
  "Please confirm that the fields are not empty and try again!";
const save = document.getElementById("save-btn");
const edit = document.getElementById("edit-btn");
const remove = document.getElementById("delete-btn");

if (save) {
  save.addEventListener("click", savePost);
} else {
  //do nothing
}

//To execute the save action
function savePost() {
  if (
    !document.getElementById("title").value ||
    !document.getElementById("content").value
  ) {
    document.getElementById("error").innerHTML = submitError;
  } else {
    let postTitle = document.getElementById("title").value;
    localStorage.setItem("title", postTitle);

    let postContent = document.getElementById("Content").value;
    localStorage.setItem("content", postContent);
  }
}

let titleDisplay = document.getElementById("displayTitle");
let contentDisplay = document.getElementById("displayContent");

let postTitle = localStorage.getItem("title");
if (titleDisplay) {
  titleDisplay.innerHTML = "<strong>Title: </strong>" + postTitle;
}

let postContent = localStorage.getItem("content");
if (contentDisplay) {
  contentDisplay.innerHTML = "<strong>Content:</strong> " + postContent;
}

posts.push({ postTitle, postContent });

//done saving to array
const list = document.getElementById("postContent");
const postList = document.getElementById("list-post");

for (i = 0; i < posts.length; i++) {
  console.log(posts[i].postTitle);
  if (list) {
    list.innerHTML =
      "<tr><td>" +
      posts[i].postTitle +
      "</td><td>" +
      posts[i].postContent +
      "</td></tr>";
  }
}

for (i = 0; i < posts.length; i++) {
  console.log(posts[i].postTitle);
  if (postList) {
    postList.innerHTML =
      "<tr><td>" +
      posts[i].postTitle +
      "</td><td>" +
      posts[i].postContent +
      "<button id='edit-btn'>Edit Post</button><button id='delete-btn'>Delete Post</button></td></tr>";
  }
}

//Edit button logic

if (edit) {
  edit.addEventListener("click", editPost);
}

function editPost() {}
