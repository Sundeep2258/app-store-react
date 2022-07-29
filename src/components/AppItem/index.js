import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails
  return (
    <>
      <li className="app-item-container">
        <img className="app-image" src={imageUrl} alt={`app-item ${appId}`} />
        <h1 className="app-name">{appName}</h1>
      </li>
    </>
  )
}

export default AppItem
