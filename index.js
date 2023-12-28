const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

{
  /* <div class="posting">
    <div class="account">
        <img src="images/avatar-vangogh.jpg" class="img-avatar" />
        <div class="account-info">
            <p class="account-name">Vincent van Gogh</p>
            <p class="account-location">Zudert, Netherlands</p>
        </div>
    </div>
    <img src="images/post-vangogh.jpg" alt="" class="post" />
    <div class="btn">
        <img src="images/icon-heart.png" alt="" class="btn-like button" />
        <img src="images/icon-comment.png" alt="" class="btn-comment button"/>
        <img src="images/icon-dm.png" alt="" class="btn-share button" />
    </div>
    <p class="num-like">21 likes</p>
    <div class="comment-section">
        <p class="username">vincey1853</p>
        <p class="comment">just took a few mushrooms lol</p>
    </div>
</div> */
}

function createPostElement(post) {
  const divPosting = document.createElement('div');
  divPosting.classList.add('posting');

  const divAccount = document.createElement('div');
  divAccount.classList.add('account');

  const imgAvatar = document.createElement('img');
  imgAvatar.classList.add('img-avatar');
  imgAvatar.src = post.avatar;

  const divAccountInfo = document.createElement('div');
  divAccountInfo.classList.add('account-info');

  const pAccountName = document.createElement('p');
  pAccountName.classList.add('account-name');
  pAccountName.textContent = post.name;

  const pAccountLocation = document.createElement('p');
  pAccountLocation.classList.add('account-location');
  pAccountLocation.textContent = post.location;

  divAccountInfo.appendChild(pAccountName);
  divAccountInfo.appendChild(pAccountLocation);

  divAccount.appendChild(imgAvatar);
  divAccount.appendChild(divAccountInfo);

  const imgPost = document.createElement('img');
  imgPost.classList.add('post');
  imgPost.src = post.post;

  const divBtn = document.createElement('div');
  divBtn.classList.add('btn');

  const imgBtnLike = createButton('btn-like', 'images/icon-heart.png');
  const imgBtnComment = createButton('btn-comment', 'images/icon-comment.png');
  const imgBtnShare = createButton('btn-share', 'images/icon-dm.png');

  divBtn.appendChild(imgBtnLike);
  divBtn.appendChild(imgBtnComment);
  divBtn.appendChild(imgBtnShare);

  const pNumLike = document.createElement('p');
  pNumLike.classList.add('num-like');
  pNumLike.textContent = `${post.likes} likes`;

  const divCommentSection = document.createElement('div');
  divCommentSection.classList.add('comment-section');

  const pUsername = document.createElement('p');
  pUsername.classList.add('username');
  pUsername.textContent = post.username;

  const pComment = document.createElement('p');
  pComment.classList.add('comment');
  pComment.textContent = post.comment;

  divCommentSection.appendChild(pUsername);
  divCommentSection.appendChild(pComment);

  divPosting.appendChild(divAccount);
  divPosting.appendChild(imgPost);
  divPosting.appendChild(divBtn);
  divPosting.appendChild(pNumLike);
  divPosting.appendChild(divCommentSection);

  return divPosting;
}

function createButton(className, src) {
  const imgBtn = document.createElement('img');
  imgBtn.classList.add(className, 'button');
  imgBtn.src = src;
  return imgBtn;
}

function render(list) {
  const mainSection = document.querySelector('main');
  list.forEach((post) => {
    const postElement = createPostElement(post);
    mainSection.appendChild(postElement);
  });
}

render(posts);
