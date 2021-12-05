const Loader = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="wineglass left">
                    <div className="top"></div>
                </div>
                <div className="wineglass right">
                    <div className="top"></div>
                </div>
            </div>
            <p className="text-center text-white mt-4">Loading....</p>
        </div>
    );
};

export default Loader;
