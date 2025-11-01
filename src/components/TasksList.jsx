
import TaskCard from "./TaskCard"
import TaskEmptyState from "./TaskEmptyState"


function TasksList({ filterTasks,fillter,handleTaskChange }) {


    if (!filterTasks || filterTasks.length === 0) {
        return <TaskEmptyState filter={fillter} />
    }


    return (
        <div className="space-y-3">

            {filterTasks.map((task, index) => {
                return <TaskCard
                    key={task.id ?? index}
                    task={task}
                    index={index}
                    handleTaskChange={handleTaskChange}
                />
            })}
        </div>
    )
}

export default TasksList