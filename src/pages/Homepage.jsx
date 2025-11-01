
import AddTask from '@/components/AddTasks'
import DateTimeFillter from '@/components/DateTimeFillter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StastsAndFillter from '@/components/StastsAndFillter'
import TaskListPagination from '@/components/TaskListPagnination'
import TasksList from '@/components/TasksList'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import api from "@/lib/axios.js";


function Homepage() {
    const [tasksBuffer, setTaskBuffter] = useState([])
    const [activeTasksCount, setAcctiveTasksCount] = useState(0)
    const [completeTasksCount, setCompleteTasksCount] = useState(0)
    const [fillter, setFillter] = useState("all")

    useEffect(() => {
        fetchTasks()
    }, [])


    // logic gọi Api
    const fetchTasks = async () => {
        try {
            const res = await api.get('/api')
            setTaskBuffter(res.data.tasks)
            setAcctiveTasksCount(res.data.activeCount)
            setCompleteTasksCount(res.data.completeCount)
        }
        catch (error) {
            toast("không thể trích xuát database")
            console.error("không thể trích xuát database", error)
        }
    }

    const filteredTasks = tasksBuffer.filter((task) => {
        switch (fillter) {
            case "active":
                return task.status === "active";
            case "complete":
                return task.status === "complete";
            default:
                return true;
        }
    });
    const  handleNewTask =  () => {
        fetchTasks()
    }

    return (
        <div className="min-h-screen w-full bg-[#f5f5dc] relative">
            {/* Dreamy Sunset Gradient Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        linear-gradient(180deg, 
          rgba(245,245,220,1) 0%, 
          rgba(255,223,186,0.8) 25%, 
          rgba(255,182,193,0.6) 50%, 
          rgba(147,112,219,0.7) 75%, 
          rgba(72,61,139,0.9) 100%
        ),
        radial-gradient(circle at 30% 20%, rgba(255,255,224,0.4) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(72,61,139,0.6) 0%, transparent 70%),
        radial-gradient(circle at 50% 60%, rgba(147,112,219,0.3) 0%, transparent 60%)
      `,
                }}
            />
            {/* Your Content/Components */}
            <div className="container pt-8 mx-auto relative z-10">
                <div className=" w-full max-w-2xl p-6 mx-auto space-y-6 ">

                    {/* Đầu trang */}
                    <Header />

                    {/* tạo nhiệm vụ */}
                    <AddTask handleNewTask={handleNewTask} />

                    {/* tạo thống kê và bộ lọc */}
                    <StastsAndFillter
                        completedTaskCount={completeTasksCount}
                        acitveTaskcount={activeTasksCount}
                        filter={fillter}
                        setFillter={setFillter} />

                    {/* danh sách nhiệm vụ */}
                    <TasksList filterTasks={filteredTasks} fillter={fillter} handleTaskChange={handleNewTask}/>

                    {/* phân trang và lọc theo date */}
                    <div className='flex flex-col items-center justify- gap-6 sm:flex-row '>
                        <TaskListPagination />
                        <DateTimeFillter />
                    </div>

                    {/* footer */}
                    <Footer
                        completedTaskCount={completeTasksCount}
                        acitveTaskcount={activeTasksCount} />


                </div>

            </div>
        </div>


    )

}

export default Homepage