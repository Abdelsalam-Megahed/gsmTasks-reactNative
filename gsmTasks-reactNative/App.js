import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AddTaskForm from './src/components/AddTaskForm';
import MapComponent from './src/components/MapComponent';
import NavigationButtons  from './src/components/NavigationButtons';

const Navigator = createSwitchNavigator(
  { 
   AddTaskPage: AddTaskForm,
   MapPage: MapComponent,
   NavigationButtonsComponent: NavigationButtons
  },
  {
    initialRouteName: 'AddTaskPage',
  }
);

export default createAppContainer(Navigator);

