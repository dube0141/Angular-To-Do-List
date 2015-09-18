var app = angular.module('toDoApp', []);

app.controller('TodoListController', function () {
	var list = this;
	
	if (localStorage.getItem("tasks")) {
		list.items = JSON.parse(localStorage.getItem("tasks"));
	} else {
		list.items = [
			{ task: "Finish Angular assignment", status: "icon-check" },
			{ task: "Sleep", status: "icon-close" },
			{ task: "Work on next assignment", status: "icon-close" }
		];
		localStorage.setItem("tasks", JSON.stringify(list.items));
	}

	list.addItem = function (item) {
		var newItem = {
			task: item,
			status: "icon-close"
		};
		delete list.input;
		list.items.push(newItem);
		localStorage.setItem("tasks", JSON.stringify(list.items));
	}

	list.removeItem = function (e) {
		list.items.splice(e, 1);
		localStorage.setItem("tasks", JSON.stringify(list.items));
	}

	list.toggle = function (e) {
		if (list.items[e].status === "icon-close") {
			list.items[e].status = "icon-check";
		} else {
			list.items[e].status = "icon-close";
		}
		localStorage.setItem("tasks", JSON.stringify(list.items));
	}
});