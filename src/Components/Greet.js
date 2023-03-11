import react from "react";

// export const Greet = (props) => {
//     return (
//       <div>
//         <h1>Hello {props.name}</h1>
//       </div>
//     );
//   };
  export const Greet = ({name}) => {
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    );
  };
