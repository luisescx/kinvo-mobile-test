import { FlatList, FlatListProps, Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

const marginBottom = Platform.select({
  ios: getBottomSpace(),
  default: 0,
});

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  margin-bottom: ${marginBottom}px;
`;

const ListAttrs = () => ({
  contentContainerStyle: { flexGrow: 1, paddingHorizontal: 20 },
});

export const PensionList = styled(
  FlatList as new (props: FlatListProps<Pension>) => FlatList<Pension>,
).attrs(ListAttrs)``;