import React, { useState, useContext, createContext } from 'react';

const PriceContext = createContext();

const PriceProvider = ({ children }) => {
  const domainInitial = {
    title: '도메인',
    bol: false,
    price: 0,
    info: `www.WhatyouWant.netlify.app
    위와같은 도메인을 기본으로 제공합니다.
    
    `,
  };

  const [domain, setDomain] = useState(domainInitial);
  const domainChange = (event) => {
    if (event.target.checked === true) {
      setDomain({
        ...domain,
        price: 10000,
        bol: true,
        info: `www.WhatyouWant.com
        사용자에게 익숙한 도메인을 사용해보세요.
        
        `,
      });
    } else {
      setDomain(domainInitial);
    }
  };

  const serverInitial = {
    mainTitle: '서버',
    title: '서버',
    bol: false,
    price: 0,
    info: `◾ 구축비용 : 무료.
    ◾ 데이터 : 100GB / Month 기본제공
      
    소개, 정보전달이 목적이신 분.
    
    로그인, 사용자참여 X


    `,
  };

  const [server, setServer] = useState(serverInitial);
  const serverChange = (event) => {
    if (event.target.value === '서버') {
      setServer({
        ...server,
        title: '두번째서버',
        bol: true,
        price: 20000,
        info: `◾ 구축비용 : 20,000원부터. (1회)
    ◾ 데이터 : 기본제공 

     ▫ Write/Delete : 600,000 번 / Month
     ▫ Read : 1,500,000 번 / Month

    웹애플리케이션 제작이 목적이신분.
    
    구글로그인, 실시간채팅, 게시판 등 다양한 기능

`,
      });
    } else {
      setServer(serverInitial);
    }
  };
  const consultInitial = {
    title: '제작비용',
    bol: false,
    price: 100000,
    info: `페이지 1개 기준 제작비용입니다.
   페이지 개수, 기능에 따라 가격이 달라집니다.
    자세한 상담을 통해 가격을 받아보시길 바랍니다.
    `,
  };
  const [consult, setConsult] = useState(consultInitial);

  const designerInitial = {
    title: '디자인',
    price: 0,
    val: 0,
    info: `회사에서 제작한 디자인 샘플을 골라주시면
     내용과 사진만 바꿔드립니다. `,
  };

  const [design, setDesign] = useState(designerInitial);
  const designChange = (e, val) => {
    if (val === 1) {
      setDesign({
        ...design,
        price: 100000,
        val: 1,
        info: `원하시는 디자인 샘플을 주신다면
      요구사항대로 디자인해드립니다.
      `,
      });
    } else if (val === 2) {
      setDesign({
        ...design,
        price: 500000,
        val: 2,
        info: `전문디자이너가 함께 참여하여
      컨셉에 맞는 디자인 설계부터
       제작까지 받으실 수 있는 서비스입니다.
      `,
      });
    } else if (val === 0) {
      setDesign(designerInitial);
    }
  };

  const photoInitial = {
    mainTitle: '사진촬영',
    title: '수염난친구',
    bol: false,
    price: 0,
    info: `사진찍는 것을 좋아하는 친구가,
    10Cut, 무료로 촬영해드립니다.
    소재지가 서울이어야
    무료입니다.
    `,
  };

  const [photo, setPhoto] = useState(photoInitial);
  const photoChange = (event) => {
    if (event.target.value === '수염난친구') {
      setPhoto({
        ...photo,
        title: '전문가',
        bol: true,
        price: 100000,
        info: `전국 어디든
        드론촬영 가능한 전문가를 함께 동반하여
        촬영합니다.
`,
      });
    } else {
      setPhoto(photoInitial);
    }
  };
  const insureInitial = {
    title: '보험',
    bol: false,
    price: 0,
    info: `보험이 없을 경우, 코드 리팩토링,
    디자인 수정 시 추가비용이 발생합니다.
    `,
  };

  const [insure, setInsure] = useState(insureInitial);
  const insureChange = (event) => {
    if (event.target.checked === true) {
      setInsure({
        ...insure,
        price: 4900,
        bol: true,
        info: `월 4900원으로
        코드 최적화, 성능최적화, 
        월 2회 컴포넌트 2개 내에서
        디자인 수정을 받아보세요. `,
      });
    } else {
      setInsure(insureInitial);
    }
  };
  const price =
    consult.price +
    photo.price +
    domain.price +
    server.price +
    design.price +
    insure.price * 12;
  return (
    <PriceContext.Provider
      value={{
        domain,
        setDomain,
        domainChange,
        server,
        serverChange,
        consult,
        design,
        designChange,
        photo,
        photoChange,
        price,
        insure,
        insureChange,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
};

export const usePriceContext = () => {
  return useContext(PriceContext);
};

export { PriceContext, PriceProvider };
