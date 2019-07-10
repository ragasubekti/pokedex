import React from "react";
import { connect } from "react-redux";

import { getPokemonList } from "../../modules/actions";
import { bindActionCreators } from "redux";
import PokemonCharacter from "./PokemonCharacter";
import styled from "@emotion/styled";

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.getPokemonList();
  }
  render() {
    return (
      <HomeWrapper>
        {this.props.pokemons.data.map(pokemon => (
          <PokemonCharacter name={pokemon.name} />
        ))}
      </HomeWrapper>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getPokemonList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
