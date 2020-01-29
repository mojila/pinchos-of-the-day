const moment = require("moment")

function Time({ time }) {
    return <React.Fragment>
        <div className="text-gray-500">
            <span className="mr-4">{ moment(time).format('MMM,DD').toString() }</span>
            <span>{ moment(time).format('hh:mm A').toString() }</span>
        </div>
    </React.Fragment>
}

Time.getInitialProps = async function() {
    return {
        time: moment()
    }
}

export default Time