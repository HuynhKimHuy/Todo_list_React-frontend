import React from "react";
import { Card } from "./ui/card";
import { Calendar, CheckCircle2, Circle, SquarePen, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {toast} from "sonner";
import api from "../lib/axios.js";
import {useState} from "react";


function TaskCard({ task, index,handleTaskChange }) {

    const [isEditing, setEditing] = useState(false);
    const [updateTitle, setUpdateTitle] = useState("");

    const deleteTask = async (id) => {
        console.log("Deleting task:", id, task);

        try{
            await api.delete(`/api/${id}`);
            toast.success("Task deleted successfully.");
            handleTaskChange();
        }
        catch(err){
            console.error("cannot delete task");
            toast.error(err.message);
        }
    }

    const updateTask = async () => {
        try{
        setEditing(false)
        await api.put(`/api/${task._id}`, {title: updateTitle})
            toast.success("Task updated successfully.");
        handleTaskChange();
        }catch(err){
            console.error("cannot update task");
            toast.error(err.message);
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
                updateTask()
        }
    }

    const tongleTask = async () => {
        try{
            if(task.status == "active"){
                await api.put(`/api/${task._id}`,{
                    status:"complete",
                    completedAt:new Date().toISOString(),
                })
            }
             else{
                await api.put(`/api/${task._id}`,{
                    status:"active",
                    completedAt:null,
                })
            }
             handleTaskChange();
        }
        catch(err){
            console.error("cannot change status task");
        }
    }
    return (
        <Card
            className={cn(
                "p-4 bg-gradient-card boder-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group",
                task.status === "complete" && "opacity-60"
            )}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <div className="flex items-center gap-4">
                {/* nút phần đầu card */}
                <Button
                    // 
                    variant="ghost"
                    size="icon"
                    onClick={tongleTask}
                    className={cn(
                        " flex-shrink-0 rounded-full transiton-all duration-200",
                        task.status === "complete"
                            ? "text-success hover:text:success/80"
                            : "text-muted-foreground hover:text-primarty"
                    )}
                >
                    {/* nút tròn */}
                    {task.status === "complete"
                        ?
                        (<CheckCircle2 className="size-5" />)
                        : (<Circle className="size-5" />)
                    }
                </Button>
                {/* tiêu đề */}
                <div className=" flex-1 min-w-0">
                    {isEditing ?
                        (<Input
                        placeholder="cần phải làm gì"
                        onChange={(e)=>setUpdateTitle(e.target.value)}
                        value ={updateTitle}
                        onKeyDown={handleKeyPress}
                        onBlur={()=>{setEditing(false);  setUpdateTitle(task.title||"")}}
                        className="flex-1 h-12 text-base border-border/50 focus:border-0 forcus:ring-primary/20 "
                        type="text"
                    />) : (<p className={cn("text-base transition-all duration-200",
                        task.status === "complete" ? "line-through text-muted-foreground" : "text-foreground")}>{task.title}</p>)}
                    {/* ngày tạo và hoàn thành */}
                    <div className="flex items-center gap-2 mt-1">
                        <Calendar className="size-3 text-muted-foreground"
                        /> <span className="text-xs">
                            {new Date(task.createdAt).toLocaleString()}
                        </span>
                        {task.completedAt && (
                            <>
                                <span className="text-xs">-</span>
                                <Calendar className="size-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">
                                    {new Date(task.completedAt).toLocaleString()}
                                </span>

                            </>
                        )}
                    </div>
                </div>



                {/* nút chỉnh và xóa  */}
                <div
                    className="hidden gap-2 group-hover:inline-flex animate-slide-up">
                    {/* nút edit */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setEditing(!isEditing)}
                        className="flex-shink-0 transition-colors size-8 text-muted-foreground hover:text-info">
                        <SquarePen className="size-4" />

                    </Button>
                    {/* nút xóa */}
                    <Button
                        onClick={()=>deleteTask(task._id)}
                        variant='ghost'
                        size="icon"
                        className="flex-shink-0 transition-colors size-8 text-muted-foreground hover:text-info">
                        <Trash2 className="size-4" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default TaskCard