import Route from './domain/services/routes/routeClient.js'
import example from './examples/home.html';
window.addEventListener('DOMContentLoaded', () => {
    const route = new Route();
    route.listen('/', example);
    route.listen('/xd', 'view2');
}); 