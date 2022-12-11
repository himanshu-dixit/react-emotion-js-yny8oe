/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
const NavBarCSSSelected = css`
  padding: 32px;
  display: flex;
  color: #FFFFFF;
  font-size: 12px;
`;

const boxDesc = css`
  display: flex;
  flex-direction: column;
  gap:24px;
`;

const step = css`
  font-size: 13px;
  color: #A0A0A0;
  font-weight: 400;
`;

const selectedStep = css`
  #count{
    color: #87FF4F;
  }
  font-size: 18px;
  color: #fff;
`;

const Step = ({ selected }) => {
  return (
    <div css={[step, selected && selectedStep]}>
      <span id="count">Step 1:</span> crusher records step automatically. where
      we enter
    </div>
  );
};

function Steps() {
  const [step, setStep] = React.useState(0);
  return (
    <header>
      <div css={[NavBarCSSSelected]}>
        <div css={boxDesc}>
          <Step />
          <Step selected={true} />
          <Step />
        </div>

        <div></div>
      </div>
    </header>
  );
}

export default Steps;
