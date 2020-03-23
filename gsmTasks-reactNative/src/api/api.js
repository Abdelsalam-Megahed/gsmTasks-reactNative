const url = 'https://gsmtasks.com/api/tasks/tasks/';
const token= '6eb1f5a68bf6220581dbf67231fe6d541bdbca6f';
const account="https://gsmtasks.com/api/tasks/accounts/2c1d3a20-6317-4373-9a67-13c7f1ebb7de/";
const category = "assignment";

export const fetchTasks = () => 
    fetch(`${url}`, {
        headers: {
              Authorization:`Token ${token}`    
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err));


export const  addNewTask = (raw_address) =>
    fetch(`${url}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization:`Token ${token}`    
        },
        method: 'POST',
        body: JSON.stringify({
            account: account,
            category: category,
            address:{
                raw_address: raw_address,
            }
        })
    })
    .then(res => console.log(res.json()))
    .catch(err => console.log(err));


