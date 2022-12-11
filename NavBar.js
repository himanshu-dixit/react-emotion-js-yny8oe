/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const NavBarCSSSelected = css`
  padding: 32px;
  label: -selected;
  background-color: #21031E;
  height: 187px;
  color: #FFFFFF;
  font-size: 21px;

  display: flex;
  flex-direction: column;

  justify-content: center;

  h1{
    margin-bottom: 32px;
  }
`;

const box = css`
  display: flex;
  justify-content: space-between;
  span{
    font-size:12px;
    color: #90868F;
    margin-top: 12px;
  }
`;

const boxDesc = css`
  display: flex;

  #button{
    width: 160px;
  height: 39px;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;

  background: #0C69EC;
  border-radius: 10px;
  cursor: pointer;
  }

  #value-box{
    margin-left: 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    #value{
      background: #E9E9E9;
      padding: 4px 8px;
      border-radius: 4px;
      margin-left: 8px;
      color: #000;
    }
  }
`;

function NavBar() {
  return (
    <header>
      <div css={[NavBarCSSSelected]}>
        <div css={box}>
          <h1>Get familiar with the recorder</h1>

          <span>skip</span>
        </div>

        <div css={boxDesc}>
          <div id="button">set color to red</div>
          <div id="value-box">
            color in state is = <div id="value">blue</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
