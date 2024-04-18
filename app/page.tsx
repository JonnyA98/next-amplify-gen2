
import { revalidatePath } from "next/cache";
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils";
import Logout from "@/components/Logout";
import Hero from "@/components/Hero/Hero";


async function App() {
  const user = await AuthGetCurrentUserServer();

  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      done: false,
      priority: "medium",
    });
    revalidatePath("/");
  }
  
  if(user){
    const { data: todos } = await cookiesClient.models.Todo.list();
    return (
      <>
 
        <h1>Hello, Amplify 👋</h1>
        {user && <Logout />}

      </>
    );

  }else {
    return(<> 
    <Hero/></>)
  }

}

export default App;