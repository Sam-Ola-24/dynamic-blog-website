
const posts = [];
let save = document.getElementById("save-btn");

if(save){
save.addEventListener("click", savePost);} else{
  //do nothing
};

//To execute the save action
function savePost() {
    if((!document.getElementById("title").value) || (!document.getElementById("content").value)){
        document.getElementById("error").innerHTML = "Please confirm that the fields are not empty and try again!";
    } else{
  let postTitle = document.getElementById("title").value;
  localStorage.setItem("title", postTitle);
console.log(postTitle);

  let postContent = document.getElementById("content").value;
  localStorage.setItem("content", postContent);
  console.log(postContent);

  posts.push({postTitle, postContent});

  document.getElementById("displayTitle").innerHTML = postTitle;
  document.getElementById("displayContent").innerHTML = postContent;

};
};


for(i=0; i < posts.length; i++){
  document.getElementById("postContent").append(
    "<tr><td>"+i.title+"</td><td>"+i.content+"</td></tr>"
  );
}


for(i=0; i < posts.length; i++){
  document.getElementById("list-post").append(
    "<tr><td>"+i.title+"</td><td>"+i.content+" <button id='edit-btn'>Edit</button>"+" <button id='delete-btn'>Delete</button></tr>"
  );
}

// let postList = document.getElementById("list-post");
// postList.innerHTML.append(postData+"  <button id='edit-btn'>Edit</button>"+" <button id='delete-btn'>Delete</button>");

const edit = document.getElementById("edit-btn");

if(edit){
edit.addEventListener("click", editPost);} else{
//do nothing
}

function editPost(event){

};


const remove = document.getElementById("delete-btn");

if(remove){
remove.addEventListener("click", deletePost); }else{
  //do nothing
}

function deletePost(event){
  postList.innerHTML.remove();
  showAlert("Post has been deleted", "danger");

};

