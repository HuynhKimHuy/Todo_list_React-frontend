
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

import {toast} from "sonner";
import {useState} from "react";
import  api from "../lib/axios.js";
function AddTask({handleNewTask}) {
    const [newTasks, setNewTask] = useState("");

    // lấy dữ liệu từ người dùng nhập lên
    const addTasks = async () => {
        if(newTasks.trim()) {
            try{
                await api.post("/api/", { title: newTasks });
                toast.success("Task added");
                // gọi lại fetchTasks để cập nhật lại giao diện
                handleNewTask();
            }
            catch(err){
                console.log("Error: Lôi khi thêm tasks ", err);
                toast.error(err.message);
            }
            setNewTask("");
        }
        else{
            toast.error("Cần Nhập nội dung của nhiệm vụ");

        }
    }
    const HandleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTasks();
        }
    }
    return (
        <Card className="py-6 px-6 border-0 bg-gradient-card shadow-custom-lg">
            <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                    type="text"
                    placeholder="Cần phải làm gì "
                    className="h-12 text-base bg-slate-50 sm:flex-1 boder-boder/50 focus:boder-primary/50"
                    value={newTasks}
                    onChange={(e)=>setNewTask(e.target.value)}
                    onKeyDown={HandleKeyPress}
                />
                <Button
                    variant="gradient"
                    size="xl"
                    className="px-6"
                    onClick={addTasks}
                    disabled={!newTasks.trim()}>
                    <Plus className="size-5" />
                    Thêm

                </Button>
            </div>
        </Card>
    )
}

export default AddTask