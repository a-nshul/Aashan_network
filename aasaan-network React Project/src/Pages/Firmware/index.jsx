import Header from "../../Component/Reusable/Header";
import Button from "../../Component/Reusable/Form/Button";
import { contentConstant } from "../../Component/Constant/content";

function Firmware() {
  return (
    <div className={"privateBody"}>
      <div className="row">
        <div className="col-sm-10">
          <Header type={"FIRMWARE"} />
        </div>
        <div className="col-sm-2">
          <Button type="submit" name={"Update Firmware"} />
        </div>
      </div>

      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <div className="row mt-2">
              <div className="col-sm-8">
                <div className="ml-4">
                  <h3>{contentConstant["FIRMWARE"].HEADING}</h3>
                </div>
              </div>
              <div className="col-sm-4">
                <h3>1.1.1.1</h3>
              </div>
            </div>

            {/* ==================================================================== */}

            <div className="row mt-5">
              <div className="col-sm-8">
                <div>
                  <h3 className="pl-4">Up Time</h3>
                </div>
              </div>
              <div className="col-sm-4">
                <span>2 Days, 4 Hours, 36 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Firmware;
