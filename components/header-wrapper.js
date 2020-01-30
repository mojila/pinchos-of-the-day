function HeaderWrapper({ children }) {
    return <React.Fragment>
        <div className="pl-5 pr-5 flex justify-between">
            {children}
        </div>
    </React.Fragment>
}

export default HeaderWrapper