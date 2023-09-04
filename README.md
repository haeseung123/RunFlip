<div align="center">
  <h1>🏃🏻‍♀️RunFlip🏃🏻‍♂️</h1>
</div>

![iPad mini 8 3 - 1 (1)](https://github.com/haeseung123/RunFlip/assets/106800437/7bd587a0-0d9d-4332-8193-c20d28757318)

🌟 런데이 애플리케이션에서 착안한 간단 러닝 기록앱

> 러닝 데이터를 기록하고 날짜에 도장을 찍어줘요!
> 
> 얼마나 열심히 운동했는지 전체 기록을 알 수 있어요!

<h3>전체 화면</h3>


![iPad mini 8 3 - 2 (3)](https://github.com/haeseung123/RunFlip/assets/106800437/6447c279-8ab4-42f4-9fd6-883347e958f2)



<br>

<h3><u>✨핵심 기능</u></h3>

- 간편하게 달리기를 시작할 수 있습니다.

- 사용자의 러닝 기록을 보기 쉽게 제공하고 달력에 마킹됨에 따라 일자 별 러닝 유무를 알 수 있습니다.

<br>

<details>
<summary><b>핵심 기능 펼치기</b></summary>

<h4>1. 사용자가 러닝을 시작할 수 있어요</h4>
<img src="https://github.com/haeseung123/RunFlip/assets/106800437/f9f236fd-289b-4b2f-86b6-8f89b95ca678" widt="246" height="533">
<li>스톱워치가 시작됨과 동시에 사용자의 러닝이 시작되고 일시정지/종료를 통해 휴식 또는 마무리를 할 수 있습니다.</li>
<li>사용자의 현재위치를 좌표로 받아와 폴리라인을 생성하고 지나온 이동경로를 확인할 수 있습니다.</li>
<li>종료시 경과시간과 이동거리를 기반으로 사용자의 러닝 페이스와 칼로리 데이터를 제공합니다.</li>

<br>

#### [위치정보 구독 중지 처리 문제]

- 폴리 라인은 사용자가 이동하는 좌표 값이 배열로 쌓이고 해당 데이터들이 지도 상의 점으로 인식되어 선을 이어서 시각적으로 제공합니다.
- 위치 정보 구독 함수를 사용하여 위치 정보를 구독하고, 위치 정보가 변경될 때 마다 좌표를 업데이트합니다.

<details>
<summary><b>주요 코드</b></summary>
<div markdown="1">
  
~~~javascript

const [locationSubscription, setLocationSubscription] = useState(null)

useEffect(() => {
  const handleLocationChange = (location) => {
      if(isRunning) {
          const {longitude, latitude} = location.coords
          setCoordinates((prevCoordinates) => [...prevCoordinates, {longitude, latitude}])
      }
  }

  const startLocationSubscription = async () => {
      const subscription = await Location.watchPositionAsync(
          { accuracy: Location.Accuracy.High, distanceInterval: 1 },
          handleLocationChange
      )
      setLocationSubscription(subscription)
  }

  const stopLocationSubscription = () => {
      if(locationSubscription) {
          locationSubscription.remove()
      }
  }

  if(isRunning) {
      startLocationSubscription()
  }
  else {
      stopLocationSubscription()
  }
}, [isRunning])

~~~

</div>
</details>

- 'locationSubscription'는 위치 정보를 감지하기 위해 사용되는 구독을 나타내는 변수로 Location.watchPositionAsync를 호출할 때 반환되는 구독 객체입니다.
- remove라는 메서드가 있어 호출할 경우 해당 구독이 중지되고, 위치 정보 변경을 감지하지 않기 때문에 운동을 마치기 위한 필수 기능입니다.
- 그러나 'locationSubscription' 변수에 할당 된 값이 'undefined'로 반환된 구독 객체가 정상적으로 할당되지 않아 remove 메서드가 동작하지 않았고, 운동을 마칠 수 없다는 것을 알게되었습니다.

- 'Location.watchPositionAsync'는 위치 정보를 비동기적으로 가지고오는 함수임을 알게되어 await을 사용하여 동기적으로 처리할 수 있도록 하였습니다.
- 또한 useEffect 내에서 처리하여 컴포넌트 렌더링 주기와 잘 통합될 수 있도록 하여 중지 구독 객체를 반환받아 이슈를 처리하였습니다.

<br>

<h4>2. 열심히 운동한 데이터를 통합해서 볼 수 있어요</h4>
<img src="https://github.com/haeseung123/RunFlip/assets/106800437/909db329-bf07-4d90-a926-acd14cefac06" widt="246" height="533">
<li>사용자의 프로필 데이터를 보여줍니다.</li>
<li>사용자의 누적된 러닝기록을 합산된 데이터로 확인할 수 있습니다.</li>
<li>러닝한 날엔 날짜에 마킹이 되고 클릭 시 간략한 데이터를 확인할 수 있습니다.</li>

<br>

<h4>3. 전체 기록을 간단 명료하게 확인하고 원하면 상세 데이터를 볼 수 있어요</h4>
<table>
  <th>
    <img src="https://github.com/haeseung123/RunFlip/assets/106800437/983ce151-9112-4020-92a7-4ca8ec55143d" widt="246" height="533">
  </th>
  <th></th>
  <th>
    <img src="https://github.com/haeseung123/RunFlip/assets/106800437/8cf37aaf-08af-4d60-bad9-cd0b4a5f3186" widt="246" height="533">
  </th>
</table>
<li>사용자의 러닝 데이터 배너를 통해 간단하게 제공하고 클릭 시 상세 데이터를 보여줍니다.</li>
<li>상세 화면의 우측 상단 '쓰레기통' 아이콘 클릭 시 해당 데이터가 삭제됩니다.</li>
<li>홈 화면에서 제공되는 전체 기록 데이터에 삭제된 데이터의 수치만큼 계산되고 달력에서도 마킹이 사라진 것을 확인할 수 있습니다.</li>

</details>
<br>

<h3>기술 스택</h3>
<table>
  <th>범위</th>
  <th>스택</th>
  <tr>
    <td>Front End</td>
    <td>
      <img src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=react&logoColor=white"/>
      <img src="https://img.shields.io/badge/expo-000020?style=flat&logo=expo&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>Back End</td>
    <td>
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/>
      <img src="https://img.shields.io/badge/express-000000?style=flat&logo=express&logoColor=white"/>
      <img src="https://img.shields.io/badge/firebase-FFCA28?style=flat&logo=firebase&logoColor=white"/>
    </td>
  </tr>
  <tr>
    <td>Infra</td>
    <td>
      <img src="https://img.shields.io/badge/amazonaws-232F3E?style=flat&logo=amazonaws&logoColor=white"/>
      <img src="https://img.shields.io/badge/ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white"/>
    </td>
  <tr>
    <td>API</td>
    <td>
      <img src="https://img.shields.io/badge/googlemaps-4285F4?style=flat&logo=googlemaps&logoColor=white"/>
    </td>
  </tr>
</table>

>런플립 서버 레포지토리 : https://github.com/haeseung123/RunFlip-server

>프로젝트 개발 일지 : https://velog.io/@showui96/%ED%86%A0%EC%9D%B4-%EB%9F%B0%ED%94%8C%EB%A6%BD-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80-1
