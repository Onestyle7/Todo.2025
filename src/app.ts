import { putLog, TodoComponent } from "./components/todo";

putLog("Coś zalogowałem...");

const todo = new TodoComponent();
const appEl = document.getElementById("app");

const wrapper = document.createElement("div");

appEl?.appendChild(wrapper);
todo.mount(wrapper);
