import React from "react";
import { connect } from "react-redux";

import { getPokemonList } from "../../modules/actions";
import { bindActionCreators } from "redux";
import PokemonCharacter from "./PokemonCharacter";
import styled from "@emotion/styled";

import { PropagateLoader } from "react-spinners";
import FilterDropdown from "./FilterDropdown";

const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.getPokemonList();
  }

  render() {
    return (
      <React.Fragment>
        <FilterDropdown />
        <HomeWrapper>
          {this.props.pokemons.data.map((pokemon, index) => (
            <PokemonCharacter detail={pokemon} id={index} key={pokemon.name} />
          ))}
          <PropagateLoader
            loading={this.props.pokemons.isLoading}
            color="#ff416c"
          />
        </HomeWrapper>
      </React.Fragment>
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
