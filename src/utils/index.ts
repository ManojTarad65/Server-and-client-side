// This code suppose to run inside the server components
// and not inside the client components

export const add = (a: number, b: number) => 
 a + b;

export const sub = (a: number, b: number) => 
 a - b;
    


//very important
// If you want tp run code in a specific server or client side then you have to install client-only package or server-only package
// npm install client-only
// npm install server-only
