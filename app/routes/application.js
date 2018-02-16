import Route from '@ember/routing/route';
import RouteQueryManager from 'ember-apollo-client/mixins/route-query-manager';
import allGamesQuery from '../gql/all-games';

export default Route.extend(RouteQueryManager, {
  model() {
    return this.get('apollo').watchQuery({ query: allGamesQuery });
  }
});
