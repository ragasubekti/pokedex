import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin: 0 3rem;
`;

class PokemonDetail extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-3" />
        </div>
      </Wrapper>
    );
  }
}

export default connect()(PokemonDetail);
