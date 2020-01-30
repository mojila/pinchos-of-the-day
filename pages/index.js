import Sidebar from "../components/sidebar"
import Content from "../components/content"

function HomePage({ stars }) {
  return <React.Fragment>
      <div className="bg-purple-900 p-2">
        <div className="bg-white rounded-lg flex">
          <div className="flex-initial rounded-lg p-3">
            <Sidebar/>
          </div>
          <div className="md:flex-1">
            <Content/>
          </div>
        </div>
      </div>
  </React.Fragment>
}

export default HomePage