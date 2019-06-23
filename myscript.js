
  // TODO: Replace the following with your app's Firebase project configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAI1Q2XIBQl9IHxue5nzKK8Xvy7E6cpaUA",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://dsp-ssp-api.firebaseio.com/",
    projectId: "dsp-ssp-api",
    storageBucket: "gs://dsp-ssp-api.appspot.com",
    messagingSenderId: "55032703071",
    appID: "app-id",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  var database = firebase.database();
  var storage = firebase.storage();

    var query = firebase.database().ref("/").orderByKey();
    query.once("value")
    .then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var firstName = childSnapshot.val().first_name;
        var email = childSnapshot.val().email;
        // app4.todos.push({ text: firstName + ": " + email })

        // app7.groceryList.push({id: key, text: firstName + ": " + email })
        app8.todos.push({id: key, name: firstName + ": " + email })
        app8.nextTodoId = key + 1;

    });
  });

  var storageRef = storage.ref();

  var starsRef = storageRef.child('images/image1.png');

// Get the download URL
starsRef.getDownloadURL().then(function(url) {
// Insert url into an <img> tag to "download"
  console.log(url);
}).catch(function(error) {
// A full list of error codes is available at
// https://firebase.google.com/docs/storage/web/handle-errors
switch (error.code) {
  case 'storage/object-not-found':
    // File doesn't exist
    console.log("File doesn't exist");
    break;

  case 'storage/unauthorized':
    // User doesn't have permission to access the object
    break;

  case 'storage/canceled':
    // User canceled the upload
    break;
  case 'storage/unknown':
    // Unknown error occurred, inspect the server response
    break;
}
});

//vue

var app = new Vue({
el: '#app',
data: {
  message: 'Hello Vue!'
}
})

var app2 = new Vue({
el: '#app-2',
data: {
  message: 'You loaded this page on ' + new Date().toLocaleString()
}
})

var app3 = new Vue({
el: '#app-3',
data: {
  seen: true
}
})

var app4 = new Vue({
el: '#app-4',
data: {
  todos: [
]
}
})

var app5 = new Vue({
el: '#app-5',
data: {
  message: 'Hello Vue.js!'
},
methods: {
  reverseMessage: function () {
    this.message = this.message.split('').reverse().join('')
  }
}
})

var app6 = new Vue({
el: '#app-6',
data: {
  message: 'Hello Vue!'
}
})

Vue.component('todo-item', {
template: '\
    <li>\
    <div class="row">\
    <div class="col s12 m6">\
    <p>{{ name }}\
    </p>\
    </div>\
    <div class="col s12 m6">\
    <button v-on:click="$emit(\'remove\')"class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete_forever</i></button>\
    </div>\
    </div>\
  </li>\
',
props: ['name']
})

var app8 = new Vue({
el: '#todo-list-example',
data: {
  newTodoText: '',
  todos: [
  ],
  nextTodoId: 1
},
methods: {
  addNewTodo: function () {
    this.todos.push({
      id: this.nextTodoId++,
      name: this.newTodoText
    })
    this.newTodoText = ''
  }
}
})
