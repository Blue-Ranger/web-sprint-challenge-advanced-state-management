import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormWrap = styled.div`
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    width: 15%;
    input {
      margin: 4%;
    }
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 3% auto;
  }
`;

const SmurfForm = (props) => {
  console.log("smurf", props);

  useEffect((newSmurf) => {
    if (smurf.age) {
      props.postSmurfs(newSmurf);
    }
  }, []);

  const [smurf, setSmurf] = useState({
    name: "",
    age: 0,
    height: 0,
  });

  const nameChanges = (e) => {
    console.log(e.target);
    const g = e.target.placeholder;
    setSmurf({
      ...smurf,
      name: e.target.value,
    });
  };
  const ageChanges = (e) => {
    console.log(e.target);
    setSmurf({
      ...smurf,
      age: Number(e.target.value),
    });
  };
  const handleChanges = (e) => {
    console.log(e.target);
    setSmurf({
      ...smurf,
      height: `${e.target.value}cm`,
    });
  };

  return (
    <FormWrap>
      <form>
        <input type="text" placeholder="Name" onChange={nameChanges} />
        <input type="text" placeholder="Age" onChange={ageChanges} />
        <input
          type="text"
          placeholder="Height in cm"
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            props.postSmurfs(smurf);
          }}
        >
          ADD Smurf
        </button>
      </form>
    </FormWrap>
  );
};
export default SmurfForm;
