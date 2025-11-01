import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";


function TaskEmptyState({ filter }) {
   
    return (
        <Card className="p-8 text-center boder-0 bg-gradient-card shadow-custom-md">
            <div className=" space-y-3">
                <Circle className="size-12 mx-auto text-muted-foreground"
                />

                <div>
                    <h3 className="font-medium text-foreground">
                        {
                            filter === "active" ?
                                "Không có nhiệm vụ nào " :
                                filter === "completed" ?
                                    "chưa có nhiệm vụ nào hoàn thành" :
                                    "chưa có nhiệm vụ"
                        }
                    </h3>
                    <p className="text-sm text-muted-foreground"
                    >
                        {filter === 'all' ? "thêm nhiệm vụ mới để  bắt đầu" : "Chuyển sang tất cả để thấy nhiệm vụ"}
                    </p>
                </div>
            </div>
        </Card >
    )
}

export default TaskEmptyState