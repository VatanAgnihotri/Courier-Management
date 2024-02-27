import {
  HeaderBoxWrapper,
  HeaderAppBarContainer,
  HeaderContentContainer,
  HeaderToolBarContainer,
} from "./Header.style";

export default function Header() {
  return (
    <HeaderBoxWrapper sx={{ flexGrow: 1 }}>
      <HeaderAppBarContainer>
        <HeaderToolBarContainer>
          <HeaderContentContainer>Logo</HeaderContentContainer>
        </HeaderToolBarContainer>
      </HeaderAppBarContainer>
    </HeaderBoxWrapper>
  );
}
