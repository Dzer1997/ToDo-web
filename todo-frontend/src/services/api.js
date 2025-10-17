const BASE_URL = "http://localhost:8080";

// 1️⃣ Hent alle tasks
export async function getAllTask() {
    try {
        const response = await fetch(BASE_URL + "/tasks");

        if (!response.ok) {
            throw new Error("Noget gik galt med fetch: " + response.status);
        }

        const tasks = await response.json();
        console.log("Tasks hentet:", tasks);
        return tasks;
    } catch (error) {
        console.error("FEJL:", error.message);
    }
}

// 2️⃣ Tilføj ny task
export  async function addTask(newTask) {
    try {
        const response = await fetch(BASE_URL + "/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error(`HTTP-fejl! status: ${response.status}`);
        }

        const createdTask = await response.json();
        console.log("Ny opgave oprettet:", createdTask);
        return createdTask;

    } catch (error) {
        console.error("Noget gik galt:", error.message);
    }
}

// 3️⃣ Opdater task
export async function updateTask(taskId, updatedTask){
    try {
        const response = await fetch(BASE_URL + "/tasks/" + taskId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTask)
        });

        if (!response.ok) {
            throw new Error(`HTTP-fejl! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Task opdateret:", result);
        return result;
    } catch (error) {
        console.error("Noget gik galt:", error.message);
    }
}

// 4️⃣ Slet task
export async function deleteTask(taskId) {
    try {
        const response = await fetch(BASE_URL + "/tasks/" + taskId, {
            method: "DELETE"
        });

        if (response.ok) {
            console.log(`Task ${taskId} blev slettet`);
        } else {
            console.error("Kunne ikke slette task");
        }
    } catch (error) {
        console.error("Noget gik galt:", error.message);
    }
}

// 5️⃣ Hent alle kategorier
export async function getAllCategories() {
    try {
        const response = await fetch(BASE_URL + "/category");

        if (!response.ok) {
            throw new Error(`HTTP-fejl! status: ${response.status}`);
        }

        const categories = await response.json();
        console.log("Kategorier hentet:", categories);
        return categories;
    } catch (error) {
        console.error("Noget gik galt:", error.message);
    }
}

export  async function addCategory(newCategory) {
    try {
        const response = await fetch(BASE_URL + "/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        });

        if (!response.ok) {
            throw new Error(`HTTP-fejl! status: ${response.status}`);
        }

        const createdCategory = await response.json();
        console.log("Ny opgave oprettet:", createdCategory);
        return createdCategory;

    } catch (error) {
        console.error("Noget gik galt:", error.message);
    }
}