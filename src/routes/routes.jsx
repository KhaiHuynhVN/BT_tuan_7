import routesConfig from "../routesConfig";
import * as Pages from "../pages";
import * as Layouts from "../layouts";

const routes = [
   { path: routesConfig.home.path, component: Pages.Home, layout: Layouts.DefaultLayout },
   { path: routesConfig.stateManagement.path, component: Pages.StateManagement, layout: Layouts.DefaultLayout },
   { path: routesConfig.APIcall.path, component: Pages.APIcall, layout: Layouts.DefaultLayout },
   { path: routesConfig.reactHookForm.path, component: Pages.ReactHookForm, layout: Layouts.DefaultLayout },
];

export default routes;
