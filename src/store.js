import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state: {
    counter: 4,
    todolist: [],
  },

  actions: {
    geldi(context) {
      axios
        .get("http://localhost:3000/posts")
        .then(function (response) {
          context.state.todolist = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    filter(context, query) {
      axios
        .get("http://localhost:3000/posts?" + query + "=true")
        .then(function (response) {
          context.state.todolist = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    sil(context, id) {
      context.state.todolist = context.state.todolist.filter(
        (item) => item.id != id
      );

      axios.delete("http://localhost:3000/posts/" + id);
    },
    ekle(context, data) {
      let lenght = context.state.todolist.length + 1;
      data.id = lenght;
      (data.like = false), (data.bookmark = false);
      axios.post("http://localhost:3000/posts/", data);
      context.state.todolist.push(data);
    },
    like(context, data) {
      const reply = context.state.todolist.findIndex((item) => data == item.id);
      let like = context.state.todolist[reply].like;
      let id = context.state.todolist[reply].id;
      if (like == true) {
        context.state.todolist[reply].like = false;
        const post = context.state.todolist[reply];
        axios.put("http://localhost:3000/posts/" + id, post);
      } else {
        context.state.todolist[reply].like = true;
        const post = context.state.todolist[reply];
        axios.put("http://localhost:3000/posts/" + id, post);
      }
    },
    bookmark(context, data) {
      const reply = context.state.todolist.findIndex((item) => data == item.id);
      let bookmark = context.state.todolist[reply].bookmark;
      let id = context.state.todolist[reply].id;
      if (bookmark == true) {
        context.state.todolist[reply].bookmark = false;
        const post = context.state.todolist[reply];
        axios.put("http://localhost:3000/posts/" + id, post);
      } else {
        context.state.todolist[reply].bookmark = true;
        const post = context.state.todolist[reply];
        axios.put("http://localhost:3000/posts/" + id, post);
      }
    },
  },
});
export default store;
