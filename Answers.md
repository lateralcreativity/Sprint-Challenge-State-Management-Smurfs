1. What problem does the context API help solve?

Context API allows you to access state from whatever component its used in so you no longer have to pass props all the way down from a parent component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is an object you create to act as an identifier for your switch statement.
A reducer is where your switch statemenet is setup and logic for the change you want.
A store is where we store our state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is good for when the state will only be used inside the component.
Application state is good when the state will be spread around the entirety of the project.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

It allows us to use promises (then, catch) so our action creators can use the information we get.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Not sure I haven't had enough experience with both yet but I think for now I will continue with redux.