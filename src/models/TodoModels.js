/*
 * model is an anonymous function that takes an optional data object
 * a data object can hold anything but should usually be other model(s) if needed
 *
 * to extend the TodoModel @note the comment below.
 */

export default (data = {}) => ({
  collection: [
    {
      title: 'first todo',
      completed: false
    }
  ],
  currentTodo: ''
  // ...data.UserModel()
  // or data.UserModel().aSpecificModelObject
});
