var app = new Vue({  
  el: '#app',  
  data : {
      isTrue_1_portrait: false,
      isTrue_1_landscape: true,
      isTrue_2: true,
      isTrue_3: true,
      isTrue_4: false,
      isTrue_5: false,
      isTrue_6: false,
      isTrue_accord : true,
      isTrue_chat: false,
      current_match: "",
      
      matches:
      
        [{"match": "1","date": "9/01","teams": "U1 - U4","location": "AJ Katzenmaier","time": "9:30 A.M."},
        {"match": "2","date": "9/01","teams": "U3 - U2","location":"Greenbay","time": "1:00 P.M."},
        {"match" : "3","date": "9/08","teams": "U5 - U6","location":"Howard A Yeager","time": "9:30 A.M."},
        {"match": "4","date":"9/08","teams":"U6 - U1","location": "Marjorie P Hart","time": "1:00 P.M."},
        {"match": "5","date": "9/15","teams": "U2 - U4","location": "North","time": "9:30 A.M."},
        {"match": "6","date": "9/15","teams": "U3 - U5","location": "AJ Katzenmaier","time": "1:00 P.M."},
        {"match": "7", "date":"9/22","teams": "U1 - U3","location": "South","time": "9:30 A.M."},
        {"match": "8","date": "9/22","teams": "U2 - U6","location": "Howard A Yeager","time": "1:00 P.M."},
        {"match": "9","date": "9/29","teams": "U4 - U5","location": "Greenbay","time": "9:30 A.M."},
        {"match": "10","date": "10/06","teams": "U2 - U5","location": "Marjorie P Hart","time": "9:30 A.M."},
        {"match" : "11", "date": "10/06","teams": "U1 - U6","location": "South","time": "1:00 P.M."},
        {"match": "12", "date": "10/08","teams": "U3 - U4","location": "Howard A Yeager","time": "9:30 A.M."},
        {"match": "13", "date": "10/08","teams": "U5 - U1", "location": "Greenbay","time": "1:00 P.M."},
        {"match": "14", "date": "10/20", "teams": "U6 - U3","location": "North", "time": "9:30 A.M."},
        { "match": "15", "date": "10/20", "teams": "U2 - U4", "location": "Marjorie P Hart", "time": "1:00 P.M."},
        {"match": "16", "date": "10/27", "teams": "U3 - U1", "location": "AJ Katzenmaier", "time": "9:30 A.M."},
        {"match": "17", "date": "10/27", "teams": "U5 - U6", "location": "Howard A Yeager", "time" :"1:00 P.M."}
  ],
      teams: [
          {"name": "U1", "pts": 55, "W": 18, "L": 0, "D": 2, "position": "1", "coach": "Pancho Ibañez"},
          {"name": "U3", "pts": 45, "W": 18, "L": 2, "D": 0, "position": "2", "coach": "Vladimir Putin"},
          {"name": "U2", "pts": 38, "W": 12, "L": 6, "D": 2, "position": "3", "coach": "Ricardo Tarambana"},
          {"name": "U6", "pts": 24, "W": 7, "L":10, "D": 3, "position": "4", "coach": "W.Churchill"},
          {"name": "U4", "pts": 15, "W": 5, "L":15, "D": 0, "position": "5", "coach": "Coco Basile"},
          {"name": "U5", "pts": 42, "W": 13, "L":0, "D": 3, "position": "6", "coach": "Álvarez Thomas"},
      ]
},
    }); 
    

var data_teams= [
    {'id': '1',
    'performance': [['2009',40], ['2010', 45], ['2011', 29], ['2012', 38],['2013',39], ['2014',21],['2015', 23],['2016', 46],['2017', 24],['2018', 33]]},
    {'id': '2',
    'performance': [['2009',23], ['2010', 40], ['2011', 19], ['2012', 38],['2013',48], ['2014',22],['2015', 35],['2016', 41],['2017', 41],['2018', 27]]},
    {'id': '3',
    'performance': [['2009',21], ['2010', 26], ['2011', 29], ['2012', 32],['2013',30], ['2014',19],['2015', 23],['2016', 39],['2017', 22],['2018', 31]]},
    {'id': '4',
    'performance': [['2009',49], ['2010', 40], ['2011', 41], ['2012', 35],['2013',39], ['2014',38],['2015', 44],['2016', 46],['2017', 28],['2018', 33]]},
    {'id': '5',
    'performance': [['2009',15], ['2010', 20], ['2011', 26], ['2012', 26],['2013',34], ['2014',36],['2015', 35],['2016', 38],['2017', 40],['2018', 41]]},
    {'id': '6',
    'performance': [['2009',40], ['2010', 45], ['2011', 35], ['2012', 36],['2013',30], ['2014',23],['2015', 23],['2016', 20],['2017', 18],['2018', 17]]}];
var checked = Array.from(document.querySelectorAll('input[name=check1]:checked')).map(x => x.value);
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementById("panel_div");
panel.style.display = "none";
var chatPage = document.getElementById("chatPage");
var matchId = ""; 
// Accordion 


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

 /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function getInfo(id) {
    if (window.matchMedia("(max-width: 639px)").matches){
    for (var i = 0; i < app.matches.length; i++){
        if (app.matches[i].match == id){
            app.current_match = app.matches[i];
            app.isTrue_1_portrait = true; 
            app.isTrue_2 = false;
            app.isTrue_3 = false;
            app.isTrue_4 = false;
            app.isTrue_5 = false;
            app.isTrue_accord = false;
            panel.style.display = "none";
            matchId = app.matches[i].match;
                }
    }
    }else if (window.matchMedia("(min-width: 640px)").matches){
        for (var i = 0; i < app.matches.length; i++){
        if (app.matches[i].match == id){
            app.current_match = app.matches[i];
            panel.style.display = "none";
            matchId = app.matches[i].match;
}
        }
    }
}

function comeBack(){
    if (window.matchMedia("(max-width: 639px)").matches){
    app.isTrue_1_portrait = false;
    app.isTrue_2 = true;
    app.isTrue_3 = true;
    app.isTrue_4 = false;
    app.isTrue_5 = false;
    app.isTrue_6 = false;
    app.isTrue_accord = true; 
    app.isTrue_chat = false; 
    panel.style.display = "none";
    chatPage.style.display = "none";
    SignUpDiv.style.display = "none";
    SignInDiv.style.display = "none"; 
    gifSignIn.style.display  = "none";
    messageSignUp.style.display = "none"; 
    messageSignIn.style.display = "none";
    checked = [];
}else if (window.matchMedia("(min-width: 640px)").matches){
    app.isTrue_1_landscape = true;
     app.isTrue_2 = true;
    app.isTrue_3 = true;
    app.isTrue_4 = false;
    app.isTrue_5 = false;
    app.isTrue_6 = false;
    app.isTrue_accord = true; 
    app.isTrue_chat = false;
    panel.style.display = "none";
    chatPage.style.display = "none";
    SignUpDiv.style.display = "none";
    SignInDiv.style.display = "none"; 
    gifSignIn.style.display  = "none";
    messageSignUp.style.display = "none"; 
    messageSignIn.style.display = "none";
}
}


function filterHour(e){
    checked = Array.from(document.querySelectorAll('input[name=check1]:checked')).map(x => x.value);
    if (checked[0] == "nine"){
         app.isTrue_2 = false;
        app.isTrue_1_portrait = false;
        app.isTrue_4 = true;
        app.isTrue_5 = false;
        app.isTrue_accord = false; 
        panel.style.display  = "none";
    }else if(checked[0] == "thirdteen"){
        app.isTrue_2 = false; 
        app.isTrue_1_portrait = false;
        app.isTrue_accord = false; 
        app.isTrue_5 = true;
        app.isTrue_4 = false;
        app.isTrue_accord = false;
        panel.style.display = "none";
    }else if (checked[0] == "all"){
        app.isTrue_accord = true; 
        app.isTrue_4 = false;
        app.isTrue_5 = false;
        app.isTrue_1_portrait= false;
        app.isTrue_2= true;
        app.isTrue_3= true;
        panel.style.display = "none";
        }
};

function getTablePosition(){
    if (window.matchMedia("(max-width: 639px)").matches){
        app.isTrue_1_portrait = false;
        app.isTrue_2 = false;
        app.isTrue_3 = false;
        app.isTrue_4 = false;
        app.isTrue_5 = false; 
        app.isTrue_6 = true;
        app.isTrue_accord = false; 
        checked = [];
        var chart = document.getElementById("chart_div");
        var chart2 = document.getElementById("chart_div_2");
        chart.innerHTML= "";
        chart2.innerHTML = ""; 
        panel.style.display = "none";
        
    }else if (window.matchMedia("(min-width: 640px)").matches){
        app.isTrue_1_portrait = false;
        app.isTrue_1_landscape = false;
        app.isTrue_2 = false;
        app.isTrue_3 = false;
        app.isTrue_4 = false;
        app.isTrue_5 = false; 
        app.isTrue_6 = true;
        app.isTrue_accord = false; 
        panel.style.display = "none";
        checked = [];
        var chart = document.getElementById("chart_div");
        var chart2 = document.getElementById("chart_div_2");
        chart.innerHTML= "";
        chart2.innerHTML = "";
    }
}

// Blinking text 

function blinker() {
    $('.blinking').fadeOut(500);
    $('.blinking').fadeIn(500);
    }
    setInterval(blinker, 1000);


//Load Google Charts

google.charts.load('current', {packages: ['corechart', 'line']});

// Function to get Google's charts with team performance info: // 

function getDataChart(e){

    buttonId = e.target.id;

    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts(dataD){

        for (var i = 0; i  < 6; i++){
            if (buttonId == app.teams[i].position){
                dataD = data_teams[i];
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'years');
                data.addColumn('number', 'points');
                data.addRows([[dataD.performance[5][0], dataD.performance[5][1]]]);
                data.addRows([[dataD.performance[6][0], dataD.performance[6][1]]]);
                data.addRows([[dataD.performance[7][0], dataD.performance[7][1]]]);
                data.addRows([[dataD.performance[8][0], dataD.performance[8][1]]]);
                data.addRows([[dataD.performance[9][0], dataD.performance[9][1]]]);
                
                var data2 = new google.visualization.arrayToDataTable([['matches', 'perfomance'],['Win',app.teams[i].W], ['Lose',app.teams[i].L], ['Draw', app.teams[i].D]]);
                var options2 = {title: "Team results in current tournament", 
                                titleTextStyle: {fontSize: 17},
                                width: $(window).width(),
                                backgroundColor: '#E6E6FA',
                                is3D: true };
                
                var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                var chart2  = new google.visualization.PieChart(document.getElementById('chart_div_2'));
                
                var options ={title: 'Team Performance in last years:',
                            titleTextStyle: {fontSize: 17}, 
                            width: $(window).width(),
                            hAxis: {title: 'Year', 
                            titleTextStyle: {fontSize: 15, bold: true}}, 
                            vAxis: { title: 'Points', titleTextStyle: {fontSize: 15, bold: true}, viewWindow : {min:0, max:60}}, 
                            lineWidth: 3, pointSize: 8, 
                            backgroundColor: '#E6E6FA', 
                            series: {color: '#e2431e'},
                            height: 220};
                chart.draw(data, options);
                chart2.draw(data2, options2);
                window.addEventListener('resize',drawCharts, false);
            }
        }
    }
}

/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';


// Shortcuts to DOM Elements.
var buttonChat = document.getElementById('buttonChat');
var buttonChat2 = document.getElementById('buttonChat2');
var signUpEmail = document.getElementById('sign-up-email');
var emailSignUp = document.getElementById('emailSignUp');
var passwordSignUp = document.getElementById('passwordSignUp');
var email = document.getElementById('email');  
var password = document.getElementById('password');
var SignInDiv = document.getElementById('SignInDiv');
var SignUpDiv = document.getElementById('SignUpDiv');
var messageForm = document.getElementById('message-form');
var messageInput = document.getElementById('new-post-message');
var titleInput = document.getElementById('new-post-title');
var signInButton = document.getElementById('sign-in-button');
var signInEmail = document.getElementById('sign-in-email');
var signInEmailButton = document.getElementById('sign-in-email-button');
var signUpEmailButton = document.getElementById('sign-up-email-button');
SignInDiv.style.display = "none";
SignUpDiv.style.display = "none";
var signOutButton = document.getElementById('sign-out-button');
var splashPage = document.getElementById('page-splash');
var addPost = document.getElementById('add-post');
var addButton = document.getElementById('add');
var recentPostsSection = document.getElementById('recent-posts-list');
var userPostsSection = document.getElementById('user-posts-list');
var topUserPostsSection = document.getElementById('top-user-posts-list');
var recentMenuButton = document.getElementById('menu-recent');
var myPostsMenuButton = document.getElementById('menu-my-posts');
var myTopPostsMenuButton = document.getElementById('menu-my-top-posts');
var listeningFirebaseRefs = [];
var gifSignIn = document.getElementById('gifSignIn');
gifSignIn.style.display = "none";
var messageSignUp = document.getElementById('messageSignUp');
var messageSignIn = document.getElementById('messageSignIn');
messageSignUp.style.display = "none";
messageSignIn.style.display = "none"; 
var usernameSignUp = document.getElementById('usernameSignUp');
/**
 * Saves a new post to the Firebase DB.
 */
// [START write_fan_out]
function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  localStorage.setItem('newPost', JSON.stringify(postData));
  if (navigator.onLine){
      updates['/posts/' + matchId + '/' + newPostKey] = postData;
      updates['/user-posts/' + uid + '/' + matchId + '/' + newPostKey] = postData;
      return firebase.database().ref().update(updates);
  }else{
      var newPostLocal = JSON.parse(localStorage.getItem("newPost"));
      setTimeout(function(){
          updates['/posts/' + matchId + '/' + newPostKey] = newPostLocal;
          updates['/user-posts/' + uid + '/' + matchId + '/' + newPostKey] = newPostLocal;
      }, 180000);
      return firebase.database().ref().update(updates);
  }
}
// [END write_fan_out]

/**
 * Star/unstar post.
 */
// [START post_stars_transaction]
function toggleStar(postRef, uid) {
  postRef.transaction(function(post) {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}
// [END post_stars_transaction]

/**
 * Creates a post element.
 */

function createPostElement(postId, title, text, author, authorId, authorPic) {
  var uid = firebase.auth().currentUser.uid;

  var html =
      '<div class="post post-' + postId + ' mdl-cell mdl-cell--12-col ' +
                  'mdl-cell--6-col-tablet mdl-cell--4-col-desktop mdl-grid mdl-grid--no-spacing">' +
        '<div class="mdl-card mdl-shadow--2dp">' +
          '<div class="mdl-card__title mdl-color--light-blue-600 mdl-color-text--white">' +
            '<h4 class="mdl-card__title-text"></h4>' +
          '</div>' +
          '<div class="header">' +
            '<div>' +
              '<div class="avatar"></div>' +
              '<div class="username mdl-color-text--black"></div>' +
            '</div>' +
          '</div>' +
          '<span class="star">' +
            '<div class="not-starred material-icons">star_border</div>' +
            '<div class="starred material-icons">star</div>' +
            '<div class="star-count">0</div>' +
          '</span>' +
          '<div class="text"></div>' +
          '<div class="comments-container"></div>' +
          '<form class="add-comment" action="#">' +
            '<div class="mdl-textfield mdl-js-textfield">' +
              '<input class="mdl-textfield__input new-comment" type="text">' +
              '<label class="mdl-textfield__label">Comment...</label>' +
            '</div>' +
          '</form>' +
        '</div>' +
      '</div>';

  // Create the DOM element from the HTML.
  var div = document.createElement('div');
  div.innerHTML = html;
  var postElement = div.firstChild;
  if (componentHandler) {
    componentHandler.upgradeElements(postElement.getElementsByClassName('mdl-textfield')[0]);
  }

  var addCommentForm = postElement.getElementsByClassName('add-comment')[0];
  var commentInput = postElement.getElementsByClassName('new-comment')[0];
  var star = postElement.getElementsByClassName('starred')[0];
  var unStar = postElement.getElementsByClassName('not-starred')[0];

  // Set values.
  postElement.getElementsByClassName('text')[0].innerText = text;
  postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = title;
  postElement.getElementsByClassName('username')[0].innerText = author || 'Anonymous';
  postElement.getElementsByClassName('avatar')[0].style.backgroundImage = 'url("' +
      (authorPic || './silhouette.jpg') + '")';

  // Listen for comments.
  // [START child_event_listener_recycler]
  var commentsRef = firebase.database().ref('post-comments/' + matchId + '/' + postId);
  commentsRef.on('child_added', function(data) {
    addCommentElement(postElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_changed', function(data) {
    setCommentValues(postElement, data.key, data.val().text, data.val().author);
  });

  commentsRef.on('child_removed', function(data) {
    deleteComment(postElement, data.key);
  });
  // [END child_event_listener_recycler]

  // Listen for likes counts.
  // [START post_value_event_listener]
  var starCountRef = firebase.database().ref('posts/' + matchId + '/' + postId + '/starCount');
  starCountRef.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val());
  });
  // [END post_value_event_listener]

  // Listen for the starred status.
  var starredStatusRef = firebase.database().ref('posts/' + matchId + '/' + postId + '/stars/' + uid);
  starredStatusRef.on('value', function(snapshot) {
    updateStarredByCurrentUser(postElement, snapshot.val());
  });

  // Keep track of all Firebase reference on which we are listening.
  listeningFirebaseRefs.push(commentsRef);
  listeningFirebaseRefs.push(starCountRef);
  listeningFirebaseRefs.push(starredStatusRef);

  // Create new comment.
  addCommentForm.onsubmit = function(e) {
    e.preventDefault();
    createNewComment(postId, firebase.auth().currentUser.displayName, uid, commentInput.value);
    commentInput.value = '';
    commentInput.parentElement.MaterialTextfield.boundUpdateClassesHandler();
  };

  // Bind starring action.
  var onStarClicked = function() {
    var globalPostRef = firebase.database().ref('/posts/' + matchId + '/' +postId);
    var userPostRef = firebase.database().ref('/user-posts/' +authorId + '/' + matchId + '/' + postId);
    toggleStar(globalPostRef, uid);
    toggleStar(userPostRef, uid);
  };
  unStar.onclick = onStarClicked;
  star.onclick = onStarClicked;

  return postElement;
}

/**
 * Writes a new comment for the given post.
 */
function createNewComment(postId, username, uid, text) {
  firebase.database().ref('post-comments/' + matchId + '/' +postId).push({
    text: text,
    author: username,
    uid: uid
  });
}

/**
 * Updates the starred status of the post.
 */
function updateStarredByCurrentUser(postElement, starred) {
  if (starred) {
    postElement.getElementsByClassName('starred')[0].style.display = 'inline-block';
    postElement.getElementsByClassName('not-starred')[0].style.display = 'none';
  } else {
    postElement.getElementsByClassName('starred')[0].style.display = 'none';
    postElement.getElementsByClassName('not-starred')[0].style.display = 'inline-block';
  }
}

/**
 * Updates the number of stars displayed for a post.
 */
function updateStarCount(postElement, nbStart) {
  postElement.getElementsByClassName('star-count')[0].innerText = nbStart;
}

/**
 * Creates a comment element and adds it to the given postElement.
 */
function addCommentElement(postElement, id, text, author) {
  var comment = document.createElement('div');
  comment.classList.add('comment-' + id);
  comment.innerHTML = '<span class="username"></span><span class="comment"></span>';
  comment.getElementsByClassName('comment')[0].innerText = text;
  comment.getElementsByClassName('username')[0].innerText = author || 'Anonymous';

  var commentsContainer = postElement.getElementsByClassName('comments-container')[0];
  commentsContainer.appendChild(comment);
}

/**
 * Sets the comment's values in the given postElement.
 */
function setCommentValues(postElement, id, text, author) {
  var comment = postElement.getElementsByClassName('comment-' + id)[0];
  comment.getElementsByClassName('comment')[0].innerText = text;
  comment.getElementsByClassName('fp-username')[0].innerText = author;
}

/**
 * Deletes the comment of the given ID in the given postElement.
 */
function deleteComment(postElement, id) {
  var comment = postElement.getElementsByClassName('comment-' + id)[0];
  comment.parentElement.removeChild(comment);
}

/**
 * Starts listening for new posts and populates posts lists.
 */
function startDatabaseQueries() {
  // [START my_top_posts_query]
  var myUserId = firebase.auth().currentUser.uid;
  var topUserPostsRef = firebase.database().ref('user-posts/' + myUserId + '/' + matchId).orderByChild('starCount');
  // [END my_top_posts_query]
  // [START recent_posts_query]
  var recentPostsRef = firebase.database().ref('posts/'+ matchId).limitToLast(100);
  // [END recent_posts_query]
  var userPostsRef = firebase.database().ref('user-posts/' + myUserId + '/' + matchId);

  var fetchPosts = function(postsRef, sectionElement) {
    postsRef.on('child_added', function(data) {
      var author = data.val().author || 'Anonymous';
      var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      containerElement.insertBefore(
        createPostElement(data.key, data.val().title, data.val().body, author, data.val().uid, data.val().authorPic),
        containerElement.firstChild);
    });
    postsRef.on('child_changed', function(data) {
      var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      var postElement = containerElement.getElementsByClassName('post-' + data.key)[0];
      postElement.getElementsByClassName('mdl-card__title-text')[0].innerText = data.val().title;
      postElement.getElementsByClassName('username')[0].innerText = data.val().author;
      postElement.getElementsByClassName('text')[0].innerText = data.val().body;
      postElement.getElementsByClassName('star-count')[0].innerText = data.val().starCount;
    });
    postsRef.on('child_removed', function(data) {
      var containerElement = sectionElement.getElementsByClassName('posts-container')[0];
      var post = containerElement.getElementsByClassName('post-' + data.key)[0];
      post.parentElement.removeChild(post);
    });
  };

  // Fetching and displaying all posts of each sections.
  fetchPosts(topUserPostsRef, topUserPostsSection);
  fetchPosts(recentPostsRef, recentPostsSection);
  fetchPosts(userPostsRef, userPostsSection);

  // Keep track of all Firebase refs we are listening to.
  listeningFirebaseRefs.push(topUserPostsRef);
  listeningFirebaseRefs.push(recentPostsRef);
  listeningFirebaseRefs.push(userPostsRef);
}

/**
 * Writes the user's data to the database.
 */
// [START basic_write]
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
// [END basic_write]

/**
 * Cleanups the UI and removes all Firebase listeners.
 */
function cleanupUi() {
  // Remove all previously displayed posts.

  topUserPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
  recentPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';
  userPostsSection.getElementsByClassName('posts-container')[0].innerHTML = '';

  // Stop all currently listening Firebase listeners.
  listeningFirebaseRefs.forEach(function(ref) {
    ref.off();
  });
  listeningFirebaseRefs = [];
}

/**
 * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
 * programmatic token refresh but not a User status change.
 */
var currentUID;

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
 */
function onAuthStateChanged(user) {
  // We ignore token refresh events.
  if (user && currentUID === user.uid) {
    return;
  }

  cleanupUi();
  if (user) {
    currentUID = user.uid;
    splashPage.style.display = 'none';
    writeUserData(user.uid, user.displayName, user.email, user.photoURL);
    startDatabaseQueries();
  } else {
    // Set currentUID to null.
    currentUID = null;
    // Display the splash page where you can sign-in.
    splashPage.style.display = '';
  }
}

/**
 * Creates a new post for the current user.
 */
function newPostForCurrentUser(title, text) {
  // [START single_value_read]
  var userId = firebase.auth().currentUser.uid;
  return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    // [START_EXCLUDE]
    return writeNewPost(firebase.auth().currentUser.uid, username,
      firebase.auth().currentUser.photoURL,
      title, text);
    // [END_EXCLUDE]
  });
  // [END single_value_read]
}

/**
 * Displays the given section element and changes styling of the given button.
 */
function showSection(sectionElement, buttonElement) {
  recentPostsSection.style.display = 'none';
  userPostsSection.style.display = 'none';
  topUserPostsSection.style.display = 'none';
  addPost.style.display = 'none';
  recentMenuButton.classList.remove('is-active');
  myPostsMenuButton.classList.remove('is-active');
  myTopPostsMenuButton.classList.remove('is-active');

  if (sectionElement) {
    sectionElement.style.display = 'block';
  }
  if (buttonElement) {
    buttonElement.classList.add('is-active');
  }
}

// Bindings on load.
buttonChat.addEventListener('click', function() {
    
    SignUpDiv.style.display = "none";
    SignInDiv.style.display = "none"; 
    
    onAuthStateChanged();
  // Bind Sign in button.
  signInButton.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
    
    var user = firebase.auth().currentUser; 
    
    signInEmail.addEventListener('click', function(){
     gifSignIn.style.display = "block";
      var provider = new firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error){
        messageSignIn.style.display = "block";
     gifSignIn.style.display = "none";
    })});
  // Bind Sign Up button 
    signUpEmail.addEventListener('click', function(){
         gifSignIn.style.display = "block";
        var provider = new firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value).catch(function(error){
        messageSignUp.style.display = "block";
        gifSignIn.style.display = "none";
    })}
                                );
    
  // Bind Sign out button.
  signOutButton.addEventListener('click', function() {
    firebase.auth().signOut();
    gifSignIn.style.display  = "none";
    SignInDiv.style.display = "none";
    SignUpDiv.style.display = "none"; 
    messageSignIn.style.display = "none";
    messageSignUp.style.display = "none"; 
    password.value = "";
    passwordSignUp.value = ""; 
  });

  // Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  
  // Saves message on form submit.
  messageForm.onsubmit = function(e) {
    e.preventDefault();
    var text = messageInput.value;
    var title = titleInput.value;
    if (text && title) {
      newPostForCurrentUser(title, text).then(function() {
        myPostsMenuButton.click();
      });
      messageInput.value = '';
      titleInput.value = '';
    }
  };

  // Bind menu buttons.
  recentMenuButton.onclick = function() {
    showSection(recentPostsSection, recentMenuButton);
  };
  myPostsMenuButton.onclick = function() {
    showSection(userPostsSection, myPostsMenuButton);
  };
  myTopPostsMenuButton.onclick = function() {
    showSection(topUserPostsSection, myTopPostsMenuButton);
  };
  addButton.onclick = function() {
    showSection(addPost);
    messageInput.value = '';
    titleInput.value = '';
  };
  recentMenuButton.onclick();
});


buttonChat2.addEventListener('click', function() {
    
    SignUpDiv.style.display = "none";
    SignInDiv.style.display = "none"; 
    
    onAuthStateChanged();
  // Bind Sign in button.
  signInButton.addEventListener('click', function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
    
    var user = firebase.auth().currentUser; 
    
    signInEmail.addEventListener('click', function(){
     gifSignIn.style.display = "block";
      var provider = new firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error){
        messageSignIn.style.display = "block";
     gifSignIn.style.display = "none";
    })});
  // Bind Sign Up button 
    signUpEmail.addEventListener('click', function(){
         gifSignIn.style.display = "block";
        var provider = new firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value).catch(function(error){
        messageSignUp.style.display = "block";
        gifSignIn.style.display = "none";
    })}
                                );
    
  // Bind Sign out button.
  signOutButton.addEventListener('click', function() {
    firebase.auth().signOut();
    gifSignIn.style.display  = "none";
    SignInDiv.style.display = "none";
    SignUpDiv.style.display = "none"; 
    messageSignIn.style.display = "none";
    messageSignUp.style.display = "none"; 
    password.value = "";
    passwordSignUp.value = ""; 
  });

  // Listen for auth state changes
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
  
  // Saves message on form submit.
  messageForm.onsubmit = function(e) {
    e.preventDefault();
    var text = messageInput.value;
    var title = titleInput.value;
    if (text && title) {
      newPostForCurrentUser(title, text).then(function() {
        myPostsMenuButton.click();
      });
      messageInput.value = '';
      titleInput.value = '';
    }
  };

  // Bind menu buttons.
  recentMenuButton.onclick = function() {
    showSection(recentPostsSection, recentMenuButton);
  };
  myPostsMenuButton.onclick = function() {
    showSection(userPostsSection, myPostsMenuButton);
  };
  myTopPostsMenuButton.onclick = function() {
    showSection(topUserPostsSection, myTopPostsMenuButton);
  };
  addButton.onclick = function() {
    showSection(addPost);
    messageInput.value = '';
    titleInput.value = '';
  };
  recentMenuButton.onclick();
});

chatTitle = document.getElementById('chatTitle');

function getChatPage(){
    if(matchId != ""){
        chatTitle.innerHTML = ""
        chatTitleRow = chatTitle.insertRow(0);
        chatTitleCell = chatTitleRow.insertCell(0);
        chatTitleCell.innerHTML = "<h3>" + app.current_match.teams + " messages</h3>";
        app.isTrue_chat = false; 
        app.isTrue_1_portrait= false;
        app.isTrue_1_landscape=false;
        app.isTrue_2= false;
        app.isTrue_3= false;
        app.isTrue_4= false;
        app.isTrue_5= false;
        app.isTrue_6= false;
        app.isTrue_accord= false;
        panel.style.display = "none";
        chatPage.style.display= "block";
    }
}
function getSignInDiv(){
    SignInDiv.style.display = "block";
    SignUpDiv.style.display = "none";
}
function getSignUpDiv(){
    SignUpDiv.style.display ="block"; 
    SignInDiv.style.display = "none"; 
}