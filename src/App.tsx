import {useState} from 'react'
import {Roadview} from "react-kakao-maps-sdk";

import './App.css'

function App() {

    // 지도의 중심좌표
    const position = {
        lat: 33.450701,
        lng: 126.570667,
        radius: 50,
    }

    // 지도의 크기
    const style = {
        width: "500px",
        height: "280px",
    }

    const [viewPoint, setViewPoint] = useState(
        {
            pan: 0, // 좌우각도 / min: 0 / max: 360
            tilt: 0, // 위아래각도 / min: -85 / max: 85
            zoom: 0 // 확대,축소 / min: -3 / max: 3
        }
    )

    const onViewpointChange = (roadview: any) => {
        const {pan, tilt, zoom} = roadview.getViewpoint()
        console.log(pan, tilt,zoom)
        setViewPoint({ pan, tilt, zoom})
    }
    const onPositionChanged = (roadview: any) => {
        const {La, Ma} =roadview.getPosition()
    }

    interface MapData {
        // pan과 tilt는 소수점 6자리까지 잘라서 전송
        lat: number, // 위도, 소수
        lng: number, // 경도, 소수
        pan: number, //  좌우각도, 소수 / min: 0 / max: 360
        tilt: number, // 위아래각도, 소수 / min: -85 / max: 85
        zoom: number // 확대축소, 정수 / min: -3 / max: 3
        address: string // 주소
    }

    return (
        <div className="App">
            <Roadview // 로드뷰를 표시할 Container
                onViewpointChange={onViewpointChange}
                onPositionChanged={onPositionChanged}
                position={position}
                style={style}
                pan={34.59694259544006}
                tilt={0.21984650896155908}
                zoom={0}
            />
            {/* 아래 지도 두개는 값을 소수점 ()자리까지 떼어냈을 때를 비교하기 위한 테스트용 */}
            <Roadview
                position={position}
                style={style}
                pan={34.5969425}
                tilt={0.2198465}
            />

            <Roadview
                position={position}
                style={style}
                pan={34}
                tilt={0}
                zoom={0}
            />
        </div>
  )
}

export default App
