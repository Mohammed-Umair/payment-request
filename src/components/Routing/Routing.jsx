import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import UserPage from "../../pages/UsePage";
import LandingPage from "../../pages/LandingPage";
import Approval1 from "../Approval/Approval1";
import PaymentApproval1 from "../Approval/PaymentApproval1";
import ApprovalTableDSM from "../Approval/ApprovalTableDSM";
import Approval2 from "../Approval2/Approval2";
import DelectionPage from "../Delection/DelectionPage";
import ReportPage from "../Report/ReportPage";
import DelectionDisplay from "../Delection/DelectionDisplay";
import ReportDisplay from "../Report/ReportDisplay";
import PurchaseVoucherPage from "../PurchaseVoucher/PurchaseVoucherPage";
import DocumentManagement from "../DocumentManagement/DocumentManagement";
import DocumentPdfDetail from "../DocumentManagement/DocumentPdfDetail";
import PurchaseDispaly from "../PurchaseVoucher/PurchaseDispaly";
import PurchasePage from "../PurchaseVoucher/PurchasePage";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/selectUserPage" element={<UserPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/approval1" element={<Approval1 />} />
          <Route path="/paymentApproval1" element={<PaymentApproval1 />} />
          <Route path="/approval2" element={<Approval2 />} />

          <Route path="/approvalTableDSM" element={<ApprovalTableDSM />} />

          {/* /Delection/ */}
          <Route path="/delectionPage" element={<DelectionPage />} />
          <Route path="/delectionDisplay" element={<DelectionDisplay />} />

          {/* /report/ */}


          <Route path="/reportPage" element={<ReportPage/>} />
          <Route path="/reportDisplay" element={<ReportDisplay />} />

          {/* /purchase/ */}
          <Route path="/newpurchasePage" element={<PurchaseVoucherPage/>} />
          <Route path="/purchaseDisplay" element={<PurchaseDispaly/>} />
          <Route path="/purchasePage" element={<PurchasePage/>} />



          {/* Document */}

          <Route path="/documentManagement" element={<DocumentManagement/>} />
          <Route path="/documentpdfDeatil" element={<DocumentPdfDetail />} />







        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
