import { useState } from "react";
import { z } from "zod";

function App() {
  enum UserRole {
    STUDENT = "student",
    TEACHER = "teacher",
  }

  // Read Only array
  const Hobbies = ["Basketball", "Swimming", "Video Games"] as const;

  const UserSchema = z.object({
    username: z.string().min(3), //string
    age: z.number().gt(0), //number
    birthday: z.date().optional(), //date
    isProgrammer: z.boolean().optional(), //boolean
    email: z.string().email(),
    // userRole: z.enum(["student", "teacher"]).default("student"), , <-- currently has better support as of Jan 18, 2023
    userRole: z.nativeEnum(UserRole).default(UserRole.STUDENT),
    friends: z.array(z.string()),
  });
  // .pick({ username: true }); //You can use pick to pick out a key
  // .omit({ username: true }); //You can use omit to omit certain keys
  // .deepPartial() //Similar to partial but it works for nested objects
  // .extend({ name: z.string() }) //Extends the UserSchema
  // .merge(z.object({ name: z.string() })) //Merges 2 objects into one
  // .passthrough() //Passthrough allow keys not defined in the schema to show up in the output
  // .strict() // If we have a key not defined in the schema then it will throw an error

  type User = z.infer<typeof UserSchema>; //This is useful because the UserSchema could change a lot

  const user = {
    username: "Alex",
    age: 20,
    birthday: new Date(),
    isProgrammer: true,
    email: "email@test.com",
    userRole: "teacher",
    friends: ["Kyle", "Julie"], //.nonempty() //.min() //.max() //.length()
  };

  // console.log(UserSchema.parse(user));
  // console.log(UserSchema.shape); //gives us all the info within the object
  // console.log(UserSchema.partial().parse(user)); //makes everything optional
  console.log(UserSchema.parse(user));

  return <div>Hello world</div>;
}

export default App;
