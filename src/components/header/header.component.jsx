import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/SVG/star.svg';
import homeLogo from '../../assets/icon/logo2.png';
// import SearchIcon from '../search-icon/search-icon.component';
import SearchBox from '../../components/search-icon/search-icon.component';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleDarkMode } from "../../redux/themes/themes.actions";
import { selectDarkMode } from "../../redux/themes/themes.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Button from "../atomic/button/button.styles";
import CartDropdown from '../complex/cart-dropdown/cart-dropdown.component';
import {
  HeaderContainer,
  LogoContainer,
  Logo as Image,
  LogoCard,
  Span,
  Span2,
  Span3,

  OptionLink, OptionsContainer
} from './header.styles';

export const Header = (props) => {
  const { currentUser, hidden, signOutStart , toggleDarkMode} = props;
  return (
    <HeaderContainer>
      <LogoContainer to="/signin">
        <LogoCard>
          <Image src={homeLogo} />
        </LogoCard>
      </LogoContainer>
      {/* <Button kind="warning" onClick={toggleDarkMode}>
        Toggle Mode
      </Button> */}
      {/* <Button >
             Default Btn
           </Button>
           <Button
             kind="success"
             onClick={() => console.log("success clicked :D")}
           >
             Toggle Size
           </Button> */}
      <OptionsContainer>
        <OptionLink  to="/hire">
          <Span>h</Span>
          <Span>ire</Span>
          <Span>Me</Span>
          <Span3>&nbsp;!</Span3>
        </OptionLink>
        <OptionLink to="/about">aboutMe</OptionLink>
        {/* {currentUser ? ( // ternary operator to check if currentUser is valid. which means the user is signed-in.
               // then load sign-out button. if there isn't load sign-in button.
               <OptionLink as="div" onClick={signOutStart}>
                 SIGN OUT
               </OptionLink>
             ) : (
               <OptionLink to="/signin">SIGN IN</OptionLink>
             )} */}

        {/* <CartIcon /> */}
        {/* <SearchBox /> */}
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  darkMode: selectDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
