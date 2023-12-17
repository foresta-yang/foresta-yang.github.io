var posts=["2023/12/16/c语言混淆技术/","2023/12/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };