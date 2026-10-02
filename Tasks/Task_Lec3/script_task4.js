
// Task 4 : Array of Objects

let posts = [
  {
    id: 1,
    title: "HTML",
    content: "HTML builds the structure of web pages.",
    image: "HTML logo",
  },
  {
    id: 2,
    title: "CSS",
    content: "CSS styles web pages.",
  },
  {
    id: 3,
    title: "JavaScript",
    content: "JavaScript makes web pages interactive.",
    image: "JavaScript logo",
  },
  {
    id: 4,
    title: "React",
    content: "React helps build user interfaces.",
  },
];

for (let i = 0; i < posts.length; i++) {
  if (!posts[i].image) {
    posts[i].image = "default image";
  }

  console.log(posts[i]);
}
