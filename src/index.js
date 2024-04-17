import "./style.css";

const form = document.getElementById("test-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const scores = [];
  for (let i = 1; i <= 10; i++) {
    scores.push(parseInt(formData.get(`q${i}`)));
  }

  const tScore = scores[0] + scores[2] + scores[4] + scores[6] + scores[9];
  const fScore =
    5 -
    scores[0] +
    (5 - scores[2]) +
    (5 - scores[4]) +
    (5 - scores[6]) +
    (5 - scores[9]);
  const dScore = scores[1] + scores[3] + scores[5] + scores[7];
  const fScore2 =
    5 - scores[1] + (5 - scores[3]) + (5 - scores[5]) + (5 - scores[7]);

  const totalScore = tScore + fScore + dScore + fScore2;
  const tPercentage = Math.round((tScore / (tScore + fScore)) * 100);
  const fPercentage = 100 - tPercentage;
  const dPercentage = Math.round((dScore / (dScore + fScore2)) * 100);
  const fPercentage2 = 100 - dPercentage;

  let personalityType = "";
  if (tPercentage > 50 && dPercentage > 50) {
    personalityType = "타입 중시형 디자인 감각형 (TD)";
  } else if (tPercentage > 50 && dPercentage <= 50) {
    personalityType = "타입 중시형 기능 중시형 (TF)";
  } else if (tPercentage <= 50 && dPercentage > 50) {
    personalityType = "자유로운 개발형 디자인 감각형 (FD)";
  } else {
    personalityType = "자유로운 개발형 기능 중시형 (FF)";
  }

  let description = "";

  if (tPercentage > 50 && dPercentage > 50) {
    personalityType = "타입 중시형 디자인 감각형 (TD)";
    description =
      "당신은 코딩할 때 타입을 중요하게 생각하는 동시에 디자인에도 관심이 많군요! 아마도 당신은 픽셀 perfect를 추구하면서도, 변수 이름에는 타입을 꼭 명시해야 직성이 풀리는 타입일 거예요. 당신의 코드는 아름다우면서도 견고할 것 같네요!";
  } else if (tPercentage > 50 && dPercentage <= 50) {
    personalityType = "타입 중시형 기능 중시형 (TF)";
    description =
      "당신은 코드의 안정성과 기능 구현에 초점을 맞추는 개발자군요! 타입스크립트로 무장한 당신의 코드는 버그 따위는 쉽게 통과할 수 없는 요새 같을 거예요. 하지만 가끔은 디자인에도 신경 써보는 건 어떨까요? 아무도 당신의 완벽한 코드를 보기 싫어하진 않을 거예요!";
  } else if (tPercentage <= 50 && dPercentage > 50) {
    personalityType = "자유로운 개발형 디자인 감각형 (FD)";
    description =
      "당신은 자유로운 영혼의 디자이너 기질을 가진 개발자군요! 당신의 코드는 창의적이고 아름다워서, 보는 이들을 감탄하게 만들 거예요. 하지만 가끔은 타입 에러에 시달리는 자신을 발견할지도 모르겠어요. 자유로움과 안정성의 균형을 찾는 것, 그것이 당신에게 주어진 숙제입니다!";
  } else {
    personalityType = "자유로운 개발형 기능 중시형 (FF)";
    description =
      "당신은 자유분방한 스타일로 기능 구현에 진심인 개발자군요! 당신의 코드는 창의적이고 유연해서, 어떤 요구사항이 와도 당신은 자유자재로 해결해 나갈 수 있을 거예요. 하지만 가끔 코드가 묘하게 꼬여버릴 때면, 타입의 중요성을 깨닫게 될지도 모르겠네요!";
  }

  result.innerHTML = `
    <h2>당신의 성격 유형은...</h2>
    <p>${personalityType}</p>
    <p>${description}</p>
    <p>타입 중시형(T): ${tPercentage}%, 자유로운 개발형(F): ${fPercentage}%</p>
    <p>디자인 감각형(D): ${dPercentage}%, 기능 중시형(F): ${fPercentage2}%</p>
  `;
});
