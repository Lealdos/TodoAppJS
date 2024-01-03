/* eslint-disable react/prop-types */
import { createContext, useState, useCallback,useEffect } from "react";
import { supabase } from "supabaseClient/client";
import { useAuth } from "context/User";


export const TasksContext = createContext();

/* 
 export function useTasks() {
    const ctx = useContext(TasksContext)
    if (ctx === undefined) {
      throw new Error('TaskProvider must be used within a TasksContext')
    }
 return ctx
   }
*/

export function TaskProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskLoading, setTaskLoading] = useState(false);
  const { user } = useAuth();

  /*refactor el user provider and hacer pura gettask **/

  const getTasks = useCallback(async (user = null) => {
    if (user?.id) {
      try {
        setTaskLoading(true);
        const { error, data } = await supabase
          .from("Todos")
          .select("id, text, completed")
          .eq("userId", user.id);
        if (error) {
          throw error;
        }
        setTasks(data);
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        setTaskLoading(false);
      }
    }
  }, []);

  const createTask = useCallback( async (taskName, user) => {
    setTaskLoading(true);
    try {
      const { error, data } = await supabase
        .from("Todos")
        .insert({ text: taskName, userId: user.id })
        .select();
      setTasks([...tasks, ...data]);

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setTaskLoading(false);
    }
  },[tasks]);

  const deleteTask = useCallback(async (id, user) => {
    setTaskLoading(true);
    try {
      const { error, data } = await supabase
        .from("Todos")
        .delete()
        .eq("userId", user.id)
        .eq("id", id)
        .select();
      if (error) {
        throw error;
      }
      
      setTasks(tasks.filter((task) => task.id !== data[0].id));
      setTaskLoading(false);
    } catch (error) {
      alert(error.error_description || error.message);
    }
  },[tasks]);

  const updateTask = useCallback(async (id, done) => {
    try {
      const { error, data } = await supabase
        .from("Todos")
        .update({ completed: !done })
        .eq("id", id)
        .select();
      if (error) {
        throw error;
      }
      const newTask = [...tasks];
      const TaskIndex = newTask.findIndex((Task) => Task.id === id);
      newTask[TaskIndex].completed = !newTask[TaskIndex].completed;

      setTasks(
        tasks.map((task) => {
          if (task.id === data[0].id) {
            task.completed = data[0].completed;
          }
          return task;
        })
      );
    } catch (error) {
      alert(error.error_description || error.message);
    }
  },[tasks]);


  useEffect(() => {
    getTasks(user);
  }, [getTasks, user]);
  

  return (
    <TasksContext.Provider
      value={{
        profile,
        setProfile,
        tasks,
        createTask,
        taskLoading,
        getTasks,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
