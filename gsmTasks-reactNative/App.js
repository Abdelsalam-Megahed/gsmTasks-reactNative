import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AddTaskForm from './src/components/AddTaskForm';
import MapComponent from './src/components/MapComponent';

const Navigator = createSwitchNavigator(
  { 
   AddTaskPage: AddTaskForm,
   MapPage: MapComponent,
  },
  {
    initialRouteName: 'AddTaskPage',
  }
);

export default createAppContainer(Navigator);

