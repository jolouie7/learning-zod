import { useState } from "react";
import { z } from "zod";

function App() {
  const UserSchema = z.object({ username: z.string() });

  const user = { username: "Alex" };

  console.log(UserSchema.safeParse(user));

  return <div>Hello world</div>;
}

export default App;
