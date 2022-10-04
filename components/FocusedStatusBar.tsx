import { StatusBar} from 'react-native'
import { useIsFocused } from '@react-navigation/core';

const FocusedStatusBar = (prod) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...prod} /> : null;
}

export default FocusedStatusBar