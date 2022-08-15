import LoadingImg from "../assets/images/loading.gif";

const Loading = ({ spinnerShow, message }) => {
  return (
    <>
      <div
        className="overlay"
        style={{ display: spinnerShow ? "flex" : "none" }}
      >
        <div className="d-flex justify-content-center align-items-center my-auto h-l">
          <div className="loading flex-column align-items-center">
            <img className="loading-img" src={LoadingImg} alt="loadingImg" />
            <p className="loading-text mt-2">Please wait, while {message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
