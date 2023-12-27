/* eslint-disable react/prop-types */
import { createContext, useState, useCallback } from 'react';
import { supabase } from 'supabaseClient/client';

export const UserContext = createContext();

/* ask to antonio if this is the right way to do it
// export function useAuth() {
//   return useContext(UserContext)
//   }
*/

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [adding, setAdding] = useState(false);
    const [taskLoading, setTaskLoading] = useState(false);

    const getTasks = useCallback(
        async (/*completed = false*/) => {
            setTaskLoading(true);

            try {
                if (user) {
                    const { error, data } = await supabase
                        .from('Todos')
                        .select('id, text, completed')
                        .eq('userId', user);
                    if (error) {
                        throw error;
                    }
                    setTasks(data);
                }
            } catch (error) {
                alert(error.error_description || error.message);
            } finally {
                setTaskLoading(false);
            }
        },
        [user, setTasks, setTaskLoading]
    );

    const createTask = async (taskName) => {
        setAdding(true);
        try {
            const { error, data } = await supabase
                .from('Todos')
                .insert({ text: taskName, userId: user })
                .select();
            setTasks([...tasks, ...data]);

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
                .from('Todos')
                .delete()
                .eq('userId', user)
                .eq('id', id)
                .select();
            if (error) {
                throw error;
            }

            setTasks(tasks.filter((task) => task.id !== data[0].id));
        } catch (error) {
            alert(error.error_description || error.message);
        }
    };

    const updateTask = async (id, done) => {
        try {
            const { error, data } = await supabase
                .from('Todos')
                .update({ completed: !done })
                .eq('id', id)
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
    };
    /*
    // useEffect(() => {
    //     supabase.auth.onAuthStateChange((event, session) => {
    //         if (event == 'SIGNED_IN' || session) {
    //             console.log('SIGNED_IN', session);
    //             setUser(session.user.id);
    //         }
    //     });
    // }, [user, getTasks]);
    
    */
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                profile,
                setProfile,
                tasks,
                createTask,
                adding,
                taskLoading,
                getTasks,
                deleteTask,
                updateTask,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
