import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 3rem;
`;

class PokemonDetail extends React.Component {
  
  render() {
    return (
      <Wrapper>
        <h1>Hello World</h1>
      </Wrapper>
    );
  }
}

export default connect()(PokemonDetail);
