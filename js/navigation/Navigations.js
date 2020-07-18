import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import MainPage from '../MainPage'
import Semestre2 from '../Page1'
import Semestre1 from '../Page2'
import Unix1 from '../semestre1/unix'
import Elem1 from '../semestre1/elementary'
import Cgraph1 from '../semestre1/c_graph'
import Unix2 from '../semestre2/unix'
import Elem2 from '../semestre2/elementary2'
import Cgraph2 from '../semestre2/c_graph2'
import Shell from '../semestre2/shell2'
import Net from '../semestre2/Network'

const AppStackNavigator = createStackNavigator({
    MainPage: {
        screen: MainPage,
    },
    semestre2: {
        screen: Semestre2,
    },
    semestre1: {
        screen: Semestre1,
    },
    unix1: {
        screen: Unix1
    },
    elem1: {
        screen: Elem1
    },
    cgraph1: {
        screen: Cgraph1
    },
    unix2: {
        screen: Unix2
    },
    elem2: {
        screen: Elem2
    },
    cgraph2: {
        screen: Cgraph2
    },
    shell: {
        screen: Shell
    },
    net: {
        screen: Net
    },
},{
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
})
export default createAppContainer(AppStackNavigator);