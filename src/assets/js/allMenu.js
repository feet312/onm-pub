export default[
  {
    menuTitle: '대시보드',
    children: [
      {
        menuTitle: '대시보드',
      }
    ]
  },
  {
    menuTitle: '회원관리',
    children: [
      {
        menuTitle: '고객그룹관리',
        child: [ '고객그룹관리-1', '고객그룹관리-2', '고객그룹관리-3' ]
      },
      {
        menuTitle: '회원정보관리',
        child: [ '회원정보관리-1', '회원정보관리-2', '회원정보관리-3' ]
      },
      {
        menuTitle: '인증정보(회원카드)관리'
      },
      { 
        menuTitle: '고객상담관리'
      },
      {
        menuTitle: '민원접수관리'
      },
      {
        menuTitle: '충전기상태 및 제어'
      }
    ]
  },
  {
    menuTitle: '충전인프라관리',
    children: [
      {
        menuTitle: '인프라관리', 
        child: [ '충전기 제조사 관리', '충전기 모델 관리', '충전소 관리', '충전기 관리' ]
      }
    ]
  },
  {
    menuTitle: '요금 및 프로모션관리'
  },
  {
    menuTitle: '결제정보관리'
  },
  {
    menuTitle: '로밍관리'
  },
  {
    menuTitle: '통계관리'
  },
  {
    menuTitle: '시스템관리'
  }
]
  