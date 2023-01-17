import { StatusBar, Platform } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
