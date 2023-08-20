"use client"; // for client render
/* The error message "Event handlers cannot be passed to Client Component props" typically occurs in Next.js 
when you are trying to pass event handler functions, such as onClick, onChange, etc., 
as props to a component that is meant to be executed on the client side.*/

const EventFunction = () => {
  return (
    <>
      <button onClick={() => alert("Alert data")}>Click Me</button>
    </>
  );
};

export default EventFunction;
