import { baseURL } from './baseurl';

// Function for setting a  default restangular configuration

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl(baseURL);
}
