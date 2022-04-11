import React, { useState } from "react";
import classes from "../scss/components/Todo.module.scss";

const Todo = (props) => {
	return (
		<div>
			<div className={classes.container}>
				<h1>Ajouter un Todo</h1>
				<input type="text" placeholder="faire la maquette" />
				<input type="button" value="Ajouter" />
			</div>
		</div>
	);
};

export default Todo;
