const { print, close } = require("./utils/Utils");

const QUERYS = {
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
};

const OutputView = {
  printTextMatchedResult() {
    print("\n페어 매칭 결과입니다.");
  },

  printMatchResult(messageArray) {
    messageArray.forEach((str) => print(str));
  },

  printMatchedPairs(message) {
    print(message);
  },

  printMessage(message) {
    print(message);
  },
};

module.exports = OutputView;
