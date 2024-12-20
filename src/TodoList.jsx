import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
	return (
		<Droppable droppableId="todos">
			{(droppableProvided) => (
				<div
					ref={droppableProvided.innerRef}
					{...droppableProvided.droppableProps}
					className="bg-white rounded-t-md overflow-hidden  dark:bg-gray-800 [&>article]:px-4 mt-8 transition-all
			duration-1000"
				>
					{todos.map((todo, index) => (
						<Draggable
							key={todo.id}
							index={index}
							draggableId={`${todo.id}`}
						>
							{(draggableProvided) => (
								<TodoItem
									key={todo.id}
									todo={todo}
									removeTodo={removeTodo}
									updateTodo={updateTodo}
									ref={draggableProvided.innerRef}
									{...draggableProvided.dragHandleProps}
									{...draggableProvided.draggableProps}
								/>
							)}
						</Draggable>
					))}
					{droppableProvided.placeholder}
				</div>
			)}
		</Droppable>
	);
};
export default TodoList;
