/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { supabase } from "supabaseClient/client";

export const UserContext = createContext();

/* ask to antonio if this is the right way to do it
// export function useAuth() {
//   return useContext(UserContext)
//   }
*/

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [adding, setAdding] = useState(false);
  const [taskloadoing, setTaskLoading] = useState(false);


  const checkUser = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      try {
        const supabaseResponse = await supabase.auth.getUser();
        const userId = supabaseResponse.data.user.id;
        return setUser(userId);
      } catch (error) {
        console.log(error);
      }
    } else {
      setUser(null);
    }
  };

  const getTasks = async (/*completed = false*/) => {
    setTaskLoading(true);

    try {
      const { error, data } = await supabase
        .from("Todos")
        .select("id, text, completed")
        .eq("userId", user)
      console.log('primera llamada', data)
      if (error) {
        throw error;
      }
      setTasks(data);
      console.log('base datos', data)
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setTaskLoading(false);
    }
  };

  const createTask = async (taskName) => {
    setAdding(true);
    try {
      console.log('usuario ', user)

      const { error } = await supabase
        .from("Todos")
        .insert({ text: taskName, userId: user }).select()

      if (error) {
        throw error;
      }

    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setAdding(false);
    }
  };

  const deleteTask = async (id) => {
    try {

      const { error, data } = await supabase
        .from("Todos")
        .delete()
        .eq("userId", user)
        .eq("id", id).select();
      console.log(data)
      if (error) {
        throw error;
      }

      setTasks(tasks.filter((task) => task.id !== data[0].id));
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  const updateTask = async (id, completed) => {

    const { error, data } = await supabase
      .from('Todos')
      .update({ completed: !completed })
      .eq('id', id)
      .select()
    console.log('error', error)
    console.log('data updatedata', data)
  }

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_IN') {
        console.log('SIGNED_IN', session)
        setUser(session.user.id);
      }

    })
  }, [user]);
  return (
    <UserContext.Provider value={{ user, setUser, tasks, createTask, adding, taskloadoing, checkUser, getTasks, deleteTask,updateTask }}>
      {children}
    </UserContext.Provider>
  );
}
