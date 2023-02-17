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
        height: "450px",
    }

    const [deg, setDeg] = useState(
        {
            pan: 0, // 좌우각도
            tilt: 0 // 위아래각도
        }
    )

    const onViewpointChange = (roadview: any) => {
        console.log(roadview.getViewpoint())
        setDeg({pan: roadview.getViewpoint().pan, tilt: roadview.getViewpoint().tile})
    }

    return (
        <div className="App">
            <Roadview // 로드뷰를 표시할 Container
                position={position}
                style={style}
                onViewpointChange={onViewpointChange}
            />

            <Roadview
                position={position}
                style={style}/>
                pan={deg.pan}
                tilt={deg.tilt}
        </div>
  )
}

export default App
