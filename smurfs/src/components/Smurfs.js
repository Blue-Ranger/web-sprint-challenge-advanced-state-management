import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, postSmurfs } from "../actions/index";
import SmurfForm from "./SmurfForm";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  div {
    width: 10%;
  }
`;
const Smurfs = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchSmurfs();
  }, []);
  return (
    <div>
      <Wrap>
        {props.smurfs.map((smurf) => {
          return (
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
            </div>
          );
        })}
      </Wrap>
      <SmurfForm postSmurfs={props.postSmurfs} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchSmurfs, postSmurfs })(Smurfs);
