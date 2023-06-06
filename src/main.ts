import './css/style.css'
import FullList from './model/FullList'
import ListTemplates from './templates/ListTemplates';

const initApp = ():void => {
   const fullList = FullList.instance;
   const listTemplates = ListTemplates.instance;
   listTemplates.render(fullList);
}

document.addEventListener("DOMContentLoaded", initApp)