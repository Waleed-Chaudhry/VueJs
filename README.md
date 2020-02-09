# VueJs

### Vue Cli

#### Installation
```
npm install -g vue-cli

Go to the directory where you want to create your folder:
vue init webpack-simple vue-cli
// webpack-simple is the template
// vue-cli is the name of the project

cd vue-cli
npm install
npm run dev // Start the development server
npm run build // Create build.js inside the dist folder for deployment
```

#### Styling
* Add scoped to the style to make it apply to just your component
* On the rendered DOM, Vue adds data-v-something attribute to add each of your scoped component
* v-bind can be abbreivated as :
* When passing an object or array from the parent to the child, you're passing the pointer to the memory location, but when you're passing in a primitive such as a string, you're passing it's value, not the memory location. Changing an object in the child will also change it in the parent, but that's not the case with a primitive such as a string
* Can't communicate between siblings. Have to pass the data back to the parent, and then the parent passes it to the child
* v-model -> two-way binding for form inputs
* v-bind -> brings a js value into the template
    * v-model.lazy -> Only fired when we click somewhere else
    * by default, it will update on every keystroke
    * .trim -> will remove trailing whitespaces
    * .number -> will convert the string to number behind the scene
* Interpolation between <textarea>{{ test }}</textarea> doesn't work!
    * You have to use v-model
* <p style="white-space: pre">Message: {{ message }}</p> to keep line breaks when you display message on the html template
    * This makes it output with multiple lines
* v-if -> Display a div only if a value is true