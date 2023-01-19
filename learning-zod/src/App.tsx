import { useState } from "react";
import { z } from "zod";

function App() {
  const UserSchema = z.object({
    username: z.string(), //string
    age: z.number().optional(), //number
    birthday: z.date().optional(), //date
    isProgrammer: z.boolean().optional(), //boolean
  });

  const user = { username: "Alex" };

  console.log(UserSchema.safeParse(user)); //sageParse return if successful and the data

  return <div>Hello world</div>;
}

export default App;
