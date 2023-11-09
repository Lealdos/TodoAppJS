export const default_ToDo = [
  { id: 1, text: 'Watch across the spiderverse', completed: true },
  { id: 3, text: 'finish Dr.House', completed: false },
  { id: 2, text: 'learn professional react', completed: true },
  { id: 4, text: 'Found an IT job', completed: false },
  { id: 5, text: 'Go to Disney with Ana', completed: false },
  {id:6,text:'walk around and check the EE',completed:false}
]


localStorage.setItem('Todos_V1', JSON.stringify(default_ToDo))