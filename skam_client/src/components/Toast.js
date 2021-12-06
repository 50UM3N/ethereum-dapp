const Toast = ({ setToastData, toastData }) => {
    return (
        <>
            {toastData.enable && (
                <div
                    className="toast-container position-absolute top-0 end-0 p-3"
                    style={{ zIndex: 9000 }}
                >
                    <div
                        className="toast fade show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                    >
                        <div className="toast-header">
                            <div
                                className={`bd-placeholder-img me-2 ${toastData.type} `}
                            ></div>
                            <strong className="me-auto">
                                {toastData.toastTitle}
                            </strong>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => {
                                    setToastData({
                                        type: "",
                                        enable: false,
                                        toastTitle: "",
                                        toastBody: "",
                                    });
                                }}
                            ></button>
                        </div>
                        <div className="toast-body">{toastData.toastBody}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Toast;
