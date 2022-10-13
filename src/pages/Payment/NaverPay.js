import React, { useEffect } from "react";

const NaverPay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nsp.pay.naver.com/sdk/js/naverpay.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  // const oPay = Naver.Pay.create({s
  //   mode: "production",
  //   clientId: "u86j4ripEt8LRfPGzQ8",
  // });
  // const clickHandler = () => {
  //   oPay.open({
  //     merchantUserKey: "가맹점 사용자 식별키",
  //     merchantPayKey: "가맹점 주문 번호",
  //     productName: "상품명을 입력하세요",
  //     totalPayAmount: "1000",
  //     taxScopeAmount: "1000",
  //     taxExScopeAmount: "0",
  //     returnUrl: "사용자 결제 완료 후 결제 결과를 받을 URL",
  //   });
  // };
  return (
    <input
      // onClick={clickHandler}
      type="button"
      id="naverPayBtn"
      value="네이버페이 결제 버튼"
    />
  );
};

export default NaverPay;
