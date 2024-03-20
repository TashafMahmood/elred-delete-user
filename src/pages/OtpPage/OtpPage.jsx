import { useState } from "react";
import "./otppage.scss";
import Button from "../../components/Button/Button";
import TitleText from "../../components/TitleText/TitleText";
import OTPInput from "react-otp-input";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [incorrectOtp, setIncorrectOtp] = useState(false);

  return (
    <div className="main_page">
      <div className="main_page_content">
        <TitleText title={"One time password"} />
        <div className="main_page_desc">
          We have sent OTP to your registered mobile number{" "}
          <span className="otp-page-phone-number">+91 458 687 2222</span>
        </div>
        <div className="otp-input-label">OTP</div>
        <div className="otp-input-wrapper-div">
          <OTPInput
            value={otp}
            onChange={setOtp}
            isInputNum
            numInputs={6}
            pattern="[0-9]*"
            inputType="number"
            renderInput={(props) => (
              <input
                {...props}
                className={
                  incorrectOtp
                    ? "custom_input_one border_error"
                    : "custom_input_one"
                }
                type="text"
                inputMode="decimal"
              />
            )}
          />
        </div>
      </div>
      <Button
        onClickFunction={() => console.log("clicked")}
        title={"Submit delete request"}
      />
    </div>
  );
};

export default OtpPage;
