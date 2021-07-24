import * as React from "react";
import { v4 as uuidv4 } from "uuid";

import InputField from "../components/InputField";

const DynamicForm = () => {
  const [inputFields, setInputFields] = React.useState([
    { id: uuidv4(), email: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((inputField) => {
      if (id === inputField.id) {
        inputField[event.target.name] = event.target.value;
      }
      return inputField;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), email: "" }]);
  };

  const handleRemoveFields = (id) => {
    const newInputFields = inputFields.filter(
      (inputField) => inputField.id !== id
    );
    setInputFields(newInputFields);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id} className="flex">
            <InputField
              label="email"
              name="email"
              value={inputField.email}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <button onClick={() => handleRemoveFields(inputField.id)}>x</button>
          </div>
        ))}
        <button onClick={handleAddFields}>+</button>
      </form>
    </div>
  );
};

export default DynamicForm;
