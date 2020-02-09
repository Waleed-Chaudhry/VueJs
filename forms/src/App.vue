<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                                <!-- Simple Input 2: Bind the value of js property email to this input -->
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"
                            ></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                                    <!-- Check Button 2: Bind the input to the js property -->
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                                    <!-- Check Button 2: Bind the input to the js property 
                                         Both inputs are modelled to the same js property -->
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                                <!-- Radio Button 2: Bind both inputs to js property gender
                                     VueJs ensures that only of the two can now be selected -->

                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                            <!-- Select 4: Bind the select (not input) to the js property-->
                        <!-- Select 2: Dynamically fill the template -->
                        <option v-for="priority in priorities" v-bind:key="priority"> {{ priority }} </option>
                    </select>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                        class="btn btn-primary" 
                        @click.prevent="submitted">Submit!
                    </button>
                    <!-- Form 1: Click prevent to prevent the form from sent to a server -->
                </div>
            </div>
        </form>
        <hr>
        <!-- Form 4: Display the div only after submit is clicked -->
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <!-- Simple Input 3: Display the js property -->
                        <p>Mail:  {{ userData.email }} </p>
                        <p>Password:  {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <!-- Check Button 3: Iterate through the sendMail array -->
                        <!-- v-bind:key is just a Vetur thing -->
                        <ul>
                            <li v-for="item in sendMail" v-bind:key="item"> {{ item }}</li>
                        </ul>
                        <!-- Radio Button 3: Display the js property -->
                        <p>Gender: {{ gender }} </p>
                        <!-- Select 5: Display the selected priority -->
                        <p>Priority: {{ selectedPriority }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    // Simple Input 1: Create the js property
                    email: '',
                    password: '',
                    age: 27
                },
                message: '',
                sendMail: [], // Check Button 1: Create an array to store the checked options
                gender: 'Male', // Radio Button 1: Create the js property
                priorities: ['High', 'Medium', 'Low'], // Select 1: Create list of options
                selectedPriority: 'High', // Select 3: Property to hold the selected value
                isSubmitted: false // Form 2: Property to check if submitted has been clicked
            }
        },
        // Form 3: Method called on submit
        methods: {
            submitted() {
                console.log('here')
                this.isSubmitted = true
            }
        }
    }
</script>

<style>

</style>
