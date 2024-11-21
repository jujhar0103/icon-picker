import { useState } from "react"
import IconPicker from "./components/iconPicker"
import "./css/App.css"
import * as Icon from 'react-feather';

function App() {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState();
  const [IconComponent, setIconComponent] = useState(Icon["Activity"]);

  const displaySelectedIcon = (icon) => {
    setIconComponent(Icon[icon.render.displayName]);
  }

  return (
    <div className="main-container">
      <div className="icon-opener" onClick={() => setShowPicker(!showPicker)}>
        <IconComponent height={50} width={50} />
      </div>
      {
        showPicker ? <IconPicker rowsInOnePage={4} columnsInOnePage={5} iconHeight={40} iconWidth={30} selectedIcon={displaySelectedIcon} /> : <></>
      }
    </div>
  )
}

export default App