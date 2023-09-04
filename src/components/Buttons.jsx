import refresh from '../assets/image/refresh 1.png'
function Buttons() {
    return (
        <div className="container">
            <div className="main-buttons">
                <div className="btn-plus">
                    <div className="btn__values">
                        +
                    </div>
                </div>
                <div className="btn-refresh">
                   <img src={refresh} alt="" />
                </div>
                <div className="btn-minus">
                    <div className="btn__values">
                            -
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Buttons;