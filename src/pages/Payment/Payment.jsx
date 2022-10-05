import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { RiCalendarTodoFill } from "react-icons/ri";
import SelectCard from "./SelectCard";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
function PayMent() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  useEffect(() => {
    fetch("http://10.58.52.123:3000/book/order", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => setInfo(...data.data));
  }, []);

  const { name, price, guest_count, start_date, end_date, nights, content } =
    info;

  const bookingDate = new Date(start_date);
  const bookEndDate = new Date(end_date);

  const AccommodationDate = `${bookingDate.getFullYear()}년${
    bookingDate.getMonth() + 1
  }월${bookingDate.getDate()}일~${bookEndDate.getDate()}일`;

  const bookYear = bookingDate.getFullYear();
  const bookMonth = bookingDate.getMonth() + 1;
  const bookDate = bookingDate.getDate();

  const bookEndYear = bookEndDate.getFullYear();
  const bookEndMonth = bookEndDate.getMonth() + 1;
  const booklastDate = bookEndDate.getDate();

  const convertBookDate = `${bookYear}-${
    bookMonth >= 10 ? bookMonth : "0" + bookMonth
  }-${bookDate >= 10 ? bookDate : "0" + bookDate}`;

  const convertBookEndDate = `${bookEndYear}-${
    bookEndMonth >= 10 ? bookEndMonth : "0" + bookEndMonth
  }-${booklastDate >= 10 ? booklastDate : "0" + booklastDate}`;

  const tax = price * nights * 0.1;

  const goToResult = () => {
    fetch("http://10.58.52.123:3000/book/confirm/order", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        price: totalPrice,
        guests: guest_count,
        startDate: convertBookDate,
        endDate: convertBookEndDate,
      }),
    })
      .then(response => response.json())
      .then(result => result);
    navigate("/result");
  };

  // const date1 = new Date(start_date);

  // const date2 = new Date(end_date);

  // const elapsedMSec = date2.getTime() - date1.getTime();

  // const rangeDate = elapsedMSec / 1000 / 60 / 60 / 24;

  // console.log(rangeDate);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [inputValues, setInputValues] = useState({});

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const totalPrice = "242000";

  const kakaoPay = () => {
    fetch("https://kapi.kakao.com/v1/payment/ready", {
      method: "POST",
      headers: {
        Authorization: `KakaoAK 775499950de8689bb862a2d6b14102a0`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: formBody,
    })
      .then(response => response.json())
      .then(response => {
        const box = response.next_redirect_pc_url;
        window.open(box);
      });
  };

  // const naverPay = () => {
  //   fetch(
  //     "https://dev.apis.naver.com/naverpay-partner/naverpay/payments/v2/reserve",
  //     {
  //       method: "POST",
  //       headers: {
  //         "X-Naver-Client-Id": "zu86j4ripEt8LRfPGzQ8",
  //         "Content-type": "application/json",
  //       },
  //       body: {
  //         modelVersion: "2",
  //         merchantUserKey: "muserkey",
  //         merchantPayKey: "mpaykey",
  //         productName:
  //           "청량한 동해 바다 가까이 휴식을 위한 숙소의 B401(스파,하프오션뷰)",
  //         productCount: 10,
  //         totalPayAmount: 1000,
  //         deliveryFee: 2500,
  //         returnUrl: "{http://localhost:3000}",
  //         taxScopeAmount: 1000,
  //         taxExScopeAmount: 0,
  //         environmentDepositAmount: 0,
  //         purchaserName: "김효성",
  //         purchaserBirthday: "20000101",
  //         productItems: [
  //           {
  //             categoryType: "BOOK",
  //             categoryId: "GENERAL",
  //             uid: "107922211",
  //             name: "한국사",
  //             payReferrer: "NAVER_BOOK",
  //             count: 10,
  //           },
  //           {
  //             categoryType: "MUSIC",
  //             categoryId: "CD",
  //             uid: "299911002",
  //             name: "Loves",
  //             payReferrer: "NAVER_BOOK",
  //             count: 10,
  //           },
  //         ],
  //       },
  //     }
  //   )
  //     .then(response => response.json())
  //     .then(response => {
  //       const box = response.next_redirect_pc_url;
  //       window.open(box);
  //     });
  // };

  const bodyData = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name:
      "청량한 동해 바다 가까이 휴식을 위한 숙소의 B401(스파,하프오션뷰)",
    quantity: 1,
    total_amount: 22000,
    vat_amount: 0,
    tax_free_amount: 0,
    approval_url: "http://localhost:3000",
    fail_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  };

  let formBody = [];

  for (let property in bodyData) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(bodyData[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  const clickHandler = e => {
    if (inputValues.결제방식 === "카카오페이") {
      return kakaoPay();
    } else if (inputValues.결제방식 === "네이버페이") {
      // return naverPay();
    } else {
      goToResult();
    }
  };

  return (
    <Container>
      <Header>
        <button>
          {loading && <Loading />}
          <FaArrowLeft />
        </button>
        <p>예약요청</p>
      </Header>
      <ContentContainer>
        <LeftContent>
          <PortionContainer>
            <SubHeader>예약정보</SubHeader>
            <DateContainer>
              <div>
                <SmallHeader>날짜</SmallHeader>
                <SmallestHeader>{AccommodationDate}</SmallestHeader>
              </div>
              <SmallHeader>수정</SmallHeader>
            </DateContainer>
            <DateContainer>
              <div>
                <SmallHeader>게스트</SmallHeader>
                <SmallestHeader>게스트{guest_count}명</SmallestHeader>
              </div>
              <SmallHeader>수정</SmallHeader>
            </DateContainer>
          </PortionContainer>
          <PortionContainer>
            <SubHeader>결제 방식 선택하기</SubHeader>
            <DateContainer>
              <div>
                <SmallHeader>전액결제</SmallHeader>
                <SmallestHeader>
                  총액을 결제하시면 모든 절차가 완료됩니다.
                </SmallestHeader>
              </div>
              <SmallHeader>₩{price}</SmallHeader>
            </DateContainer>
            <DateContainer>
              <div>
                <SmallHeader>
                  요금 일부는 지금 결제, 나머지는 나중에 결제
                </SmallHeader>
                <SmallestHeader>
                  지금 ₩{price / 2}을(를) 결제하시면, 나머지 금액{price / 2}은
                  동일한 결제수단으로 2022년 10월 9일 자동 청구됩니다. 추가
                  수수료는 없습니다.
                </SmallestHeader>
              </div>
              <SmallHeader>₩{price / 2}</SmallHeader>
            </DateContainer>
          </PortionContainer>
          <PortionContainer>
            <CardHeaderWrap>
              <SubHeader>결제수단</SubHeader>

              <ImgContainer>
                <CardImg
                  src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg"
                  alt="비자카드"
                />
                <CardImg
                  src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg"
                  alt="비자카드"
                />
                <CardImg
                  src="//a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg"
                  alt="비자카드"
                />
              </ImgContainer>
            </CardHeaderWrap>
            <SelectCardWrap>
              <SelectCard onChange={handleInput} handleInput={handleInput} />
            </SelectCardWrap>
            <SmallHeader>쿠폰 입력하기</SmallHeader>
          </PortionContainer>
          <PortionContainer>
            <SubHeader>필수 입력 정보</SubHeader>
            <SmallHeader>호스트에게 메시지 보내기</SmallHeader>
            <SmallestHeader>
              호스트에게 여행목적과 도착 예정 시간을 알려주세요
            </SmallestHeader>
            <ProfileContainer>
              <ProfileWrap>
                <ProfileImg
                  src="https://a0.muscache.com/im/pictures/user/054da6b8-f15e-44e9-9ff6-46f8ce32704f.jpg?aki_policy=profile_x_medium"
                  alt="프로필이미지"
                />
                <ProfileText>
                  <p>Onda</p>
                  <span>에어비앤비 가입:2020년</span>
                </ProfileText>
              </ProfileWrap>
              <ProfileInput />
            </ProfileContainer>
          </PortionContainer>

          <PortionContainer>
            <SubHeader>환불 정책</SubHeader>
            <SmallHeader>
              10월 6일 오후 11:03 전까지 무료로 취소하실 수 있습니다.
            </SmallHeader>
            <SmallestHeader>
              10월 17일 전에 취소하면 부분 환불을 받으실 수 있습니다.
            </SmallestHeader>
          </PortionContainer>
          <PortionContainer2>
            <RiCalendarTodoFill size="35" color="red" />
            <div>
              <Notice>
                호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직
                확정된 것이 아닙니다.
              </Notice>
              <NoticeSub>
                예약 확정 전까지는 요금이 청구되지 않습니다.
              </NoticeSub>
            </div>
          </PortionContainer2>
          <PortionContainer>
            <span>
              아래 버튼을 선택하면 호스트가 설정한 숙소 이용규칙, 에어비앤비
              재예약 및 환불 정책에 동의하며, 피해에 대한 책임이 본인에게 있을
              경우 에어비앤비가 결제 수단으로 청구의 조치를 취할 수 있다는
              사실에 동의하는 것입니다. 호스트가 예약 요청을 수락하면 표시된
              총액이 결제되는 데 동의합니다.
            </span>
          </PortionContainer>

          <BookButton onClick={clickHandler}>예약하기</BookButton>
        </LeftContent>
        <RightContent>
          <ConfirmInfoContainer>
            <ContainerSection>
              <SummaryWrap>
                <ConfirmImg
                  src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-51950498/original/5b248a50-093a-4b07-8925-04d38f9e4241.jpeg?aki_policy=large"
                  alt="확정이미지"
                />
                <div>
                  <span>{name}</span>
                  <p>{content}</p>
                </div>
              </SummaryWrap>
            </ContainerSection>
            <ContainerSection>
              <Promotion>
                <span>에어 커버</span>를 통한 예약 보호
              </Promotion>
            </ContainerSection>
            <ContainerSection>
              <Fee>요금 세부정보</Fee>

              <FeeDetail>
                <p>
                  ₩{price} x {nights}박
                </p>
                <p>₩{price * nights}</p>
              </FeeDetail>
              <FeeDetail>
                <p>서비스 수수료</p>
                <p>₩{tax}</p>
              </FeeDetail>
            </ContainerSection>
            <ContainerSection>
              <FeeDetail2>
                <p>총 합계 (KRW)</p>
                <p>₩{price * nights + tax}</p>
              </FeeDetail2>
            </ContainerSection>
          </ConfirmInfoContainer>
        </RightContent>
      </ContentContainer>

      {/*
       */}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 760px;
  margin: 0 auto;
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 760px;
`;

const LeftContent = styled.div`
  display: flex;

  width: 400px;
  flex-direction: column;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  position: sticky;
  top: 50px;
`;

const Header = styled.div`
  display: flex;
  width: 760px;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 15px;

  gap: 15px;
  p {
    font-size: 25px;
  }
`;

const PortionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 1px solid #dddddd;
  padding-top: 25px;
  padding-bottom: 25px;
  span {
    font-size: 7px;
  }
`;

const SubHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

const SmallHeader = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
`;

const SmallestHeader = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: #7e7e7e;
`;

const CardHeaderWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImgContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const CardImg = styled.img`
  width: 22px;
  height: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileWrap = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  font-size: 12px;
  span {
    font-size: 11px;
    padding-top: 5px;
    color: #7e7e7e;
  }
`;

const ProfileInput = styled.input`
  margin-top: 20px;
  height: 80px;
  border: 1px solid #7e7e7e;
`;

const PortionContainer2 = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dddddd;
`;

const Notice = styled.p`
  padding-left: 20px;
  font-size: 12px;
  font-weight: 500;
`;

const NoticeSub = styled.p`
  padding-left: 20px;
  font-size: 12px;
  margin-top: 5px;
  color: #7e7e7e;
`;
const ConfirmInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  scroll-padding-right: 15px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  margin-left: 70px;
`;

const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dddddd;

  p.Fee {
    font-weight: bold;
  }
  p.FeeDetail {
    font-weight: bold;
  }
`;

const ConfirmImg = styled.img`
  width: 100px;
  height: 80px;
  border-radius: 8px;
`;

const SummaryWrap = styled.div`
  display: flex;
  font-size: 15px;
  p {
    font-size: 10px;
    padding-top: 5px;
    padding-bottom: 8px;
    padding-left: 8px;
    padding-right: 20px;
    word-break: keep-all;
  }
  span {
    padding-left: 8px;
    font-size: 10px;
    color: grey;
  }
`;

const FeeDetail = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin-top: 13px;
    font-size: 12px;
    color: black;
  }
`;
const FeeDetail2 = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 12px;
    font-weight: bold;
  }
`;
const Promotion = styled.p`
  font-size: 12px;
  span {
    color: red;
    font-weight: bold;
  }
`;
const BookButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: #f42d56;
  color: white;
`;

const Fee = styled.p`
  font-weight: bold;
`;

const SelectCardWrap = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export default PayMent;
