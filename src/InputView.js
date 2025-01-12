const { readLine, close } = require("./utils/Utils");

const QUERYS = {
  SELECT: `\n기능을 선택하세요.
1. 페어 매칭
2. 페어 조회
3. 페어 초기화
Q. 종료
`,
  SELECT_MATCHING: `\n#############################################
과정: 백엔드 | 프론트엔드
미션:
- 레벨1: 자동차경주 | 로또 | 숫자야구게임
- 레벨2: 장바구니 | 결제 | 지하철노선도
- 레벨3:
- 레벨4: 성능개선 | 배포
- 레벨5:
############################################
과정, 레벨, 미션을 선택하세요.
ex) 백엔드, 레벨1, 자동차경주
`,
  ALREADY_MATCHING:
    "매칭 정보가 있습니다. 다시 매칭하시겠습니까?\n네 | 아니오\n",
};

const InputView = {
  readSelectValue(callback) {
    readLine(QUERYS.SELECT, callback);
  },

  readSelectMaching(callback) {
    readLine(QUERYS.SELECT_MATCHING, callback);
  },

  readAlreadyMatchingInfo(callback) {
    readLine(QUERYS.ALREADY_MATCHING, callback);
  },

  end() {
    close();
  },
};

module.exports = InputView;
