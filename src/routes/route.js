import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/splash-screen';
import Login from '../screen/login';
import Cadastro from '../screen/cadastro';
import Inicio from '../screen/inicio';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Inicio" component={Inicio} />
    </Stack.Navigator>
  );
}
