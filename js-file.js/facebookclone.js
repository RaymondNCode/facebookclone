const getInputElement = document.querySelector('.post-input');
getInputElement.addEventListener('click', () => {
  uploadPost();
});

function uploadPost() {
  const popUpElement = document.querySelector('.pop-up');
  const getbodyElement = document.body;
  popUpElement.style.display = 'flex';
  getbodyElement.style.overflow = 'hidden';
}

const getCloseButtonElement = document.querySelector('.js-close-pop-up');
getCloseButtonElement.addEventListener('click', () => {
  closePopUpPost();
});

const getPopUpInputElement = document.querySelector
  ('.js-pop-up-input');

getPopUpInputElement.addEventListener('input',() => {
  if (getPopUpInputElement.value !== '') {
    changeColor();
  } else {changeBackColor();}

});

function changeColor() {
  const getElement = document.querySelector('.js-row2-5-container');
  getElement.style.backgroundColor = 'rgb(8, 102, 255)';
  getElement.style.cursor = 'pointer';
  getElement.style.color = 'white';

};
function changeBackColor() {
  const getElement = document.querySelector('.js-row2-5-container');
  getElement.style.backgroundColor = 'rgb(240, 242, 245)';
  getElement.style.cursor = 'not-allowed';
  getElement.style.color = 'darkgray';
};

function closePopUpPost() {
  const popUpElement = document.querySelector('.pop-up');
  const getbodyElement = document.body;
  popUpElement.style.display = 'none';
  getbodyElement.style.overflow = 'visible';
}


/*This is a function/DOM to add new user post */
const addPostEventListener = document.querySelector('.js-row2-5-container');
addPostEventListener.addEventListener('click', () => {
  content = document.querySelector('.js-pop-up-input').value;
  passNewPostHTML(content);
  closePopUpPost();
  document.querySelector('.js-pop-up-input').value = '';
})

let NewPostHTML = '';

function passNewPostHTML (content) {
  
  let HTML = `        
                  <div class="poster-info">
                    <div>
                      <div class="poster-info-column">
                        <img src="images/profile_picture.jpg">
                        <div>
                          <div class='poster-name'>韩俊康</div>
                          <div class="post-date">just now · &#127757;</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="material-symbols-outlined">more_horiz</div>
                      <div class="material-symbols-outlined">close</div>
                    </div>
                  </div>
                  <div class="post-content">${content}</div>
                  <div class="post-result">
                    <div class="post-like">
                      <div class="material-symbols-outlined">thumb_up</div>
                      <div class="post-result-text"></div>
                    </div>
                    <div class="post-like">
                      <div class="post-result-text"></div>
                      <div class="material-symbols-outlined">comment</div>
                      <div class="post-result-text"></div>
                      <div class="material-symbols-outlined">share</div>
                    </div>
                  </div>
                  <div class="post-interact">
                    <div class="post-interact-column">
                      <div class="material-symbols-outlined">thumb_up</div>
                      <div class="post-interact-text">Like</div>
                    </div>
                    <div class="post-interact-column">
                      <div class="material-symbols-outlined">comment</div>
                      <div class="post-interact-text">Comment</div>
                    </div>
                    <div class="post-interact-column">
                      <div class="material-symbols-outlined">share</div>
                      <div class="post-interact-text">Share</div>
                    </div>
                </div>
              `;
  const newPostElement = document.createElement('div');
  newPostElement.className = 'friend-post-section';
  newPostElement.innerHTML = HTML;
  const getPostElement = document.querySelector('.js-friend-post-container');
  getPostElement.prepend(newPostElement);
}


/* this section is to showcase to store array object and for loop out 
the comment in FB (still trying) */


const postComment = [
  {
    name: 'Nora Chen',
    content: 'This dog was drawn by Disney',
    date: '1d'
  },
  {
    name: 'Alan McQueen',
    content: 'Carrot every evening when we cook, ours get an inch, they love it  😊',
    date: '14h'
  },
  {
    name: 'Jessie Gauthier',
    content: 'Such a good/pretty boy 😍',
    date: '14h'
  }
];

function displayComment () {
  for (let i = 0; i < postComment.length; i++) {
    let currentIndex = postComment[i];
    let commenterName = currentIndex.name;
    let commenterContent = currentIndex.content;
    let time = currentIndex.date;
    let commenterContainerHTML = `
                                    <img class="round-img" src="images/commenter-img1.jpg">
                                    <div class="commenter-column">
                                      <div class="name-comment">
                                        <div class="commenter-name">${commenterName}</div>
                                        <div class="commenter-content">${commenterContent}</div>

                                      </div>
                                      <div class="time-like-reply">
                                        <span>${time}</span>
                                        <span>Like</span>
                                        <span>Reply</span>
                                      </div>
                                    </div>`;
    const newPostElement = document.createElement('div');
    newPostElement.className = 'commenter-container';
    newPostElement.innerHTML += commenterContainerHTML;
    document.querySelector('.comment-pop-up .row2-2-container').append(newPostElement);
    console.log(document.querySelector('.comment-pop-up .row2-2-container'));
  }
}

displayComment(postComment);


/*
const postComments = [
  {
    name: 'Nora Chen',
    content: 'This dog was drawn by Disney',
    date: '1d'
  },
  {
    name: 'Alan McQueen',
    content: 'Carrot every evening when we cook, ours get an inch, they love it  😊',
    date: '14h'
  },
  {
    name: 'Jessie Gauthier',
    content: 'Such a good/pretty boy 😍',
    date: '14h'
  }
];

function displayComments(comments) {
  const container = document.querySelector('.comment-pop-up .row2-2-container');
  
  comments.forEach(comment => {
    const commenterContainerHTML = `
      <div class="commenter-container">
        <img class="round-img" src="images/commenter-img1.jpg">
        <div class="commenter-column">
          <div class="name-comment">
            <div class="commenter-name">${comment.name}</div>
            <div class="commenter-content">${comment.content}</div>
          </div>
          <div class="time-like-reply">
            <span>${comment.date}</span>
            <span>Like</span>
            <span>Reply</span>
          </div>
        </div>
      </div>`;
      
    const newCommentElement = document.createElement('div');
    newCommentElement.innerHTML = commenterContainerHTML;
    
    container.appendChild(newCommentElement);
  });
}

displayComments(postComments);
*/


//This section is to close comment popup 
document.querySelector('.js-close-comment-pop-up')
.addEventListener('click', () => {
  closePopUpComment();
  function closePopUpComment () {
    getCSSproperty = document.querySelector('.js-comment-pop-up');
    getCSSproperty.style.display ='none';
  }
});

//This section is to open comment popup 
document.querySelector('.js-display-comment-button')
.addEventListener('click', () => {
  openPopUpComment();
  function openPopUpComment() {
    getCSSproperty = document.querySelector('.js-comment-pop-up');
    getCSSproperty.style.display ='flex';
  };
});

