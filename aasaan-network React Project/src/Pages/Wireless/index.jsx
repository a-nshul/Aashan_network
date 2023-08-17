import Header from "../../Component/Reusable/Header";
import Button from "../../Component/Reusable/Form/Button";
import Table from "../../Component/Reusable/Table";
import WirlessModal from "../../Component/Modals/WirlessModal";
import { useState } from "react";
import BackButton from "../../Component/Reusable/BackButton";

/**
 *
 * @returns Add wirless devices and manage devices component
 */
function Wireless() {
  const [show, setShow] = useState(false);

  /**
   *
   * @returns show and hide create wirless button bases on state
   */
  const showCreateDevice = () => {
    if (!show) {
      return <Button name={"Create New WiFi"} onClick={() => setShow(true)} />;
    }
  };

  /**
   *
   * @returns show the table content and add wirless form based on state
   */
  const showWirlessContent = () => {
    if (show) {
      return (
        <>
          <BackButton setShow={setShow} />
          <WirlessModal
            show={show}
            type={"WIRELESS"}
            onHide={() => setShow(false)}
          />
        </>
      );
    } else {
      return (
        <Table
          type={"WIRELESS"}
          // dataList={handleTableData}
          isCheckbox={false}
          // handleAllSelect={handleAllSelect}
        />
      );
    }
  };

  return (
    <div className={"privateBody"}>
      <div className="row">
        <div className="col-sm-10">
          <Header type={"WIRELESS"} />
        </div>
        <div className="col-sm-2">{showCreateDevice()}</div>
      </div>

      {showWirlessContent()}
    </div>
  );
}

export default Wireless;
