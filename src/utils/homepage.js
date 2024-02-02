import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DoneIcon from "@mui/icons-material/Done";
import VerifiedIcon from "@mui/icons-material/Verified";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
export const homePageData = [
  {
    id: 1,
    title: "Purchace reqistion voucher",
    desc: "",
    icon1: (
      <ArticleIcon
        sx={{
          width: "35px",
          height: "35px",
        }}
      />
    ),
    icon2: "",
    herf: "/purchasePage",
  },
  {
    id: 2,
    title: "Document Management System ",
    desc: "",
    icon1: (
      <DocumentScannerIcon
        sx={{
          width: "35px",
          height: "35px",
        }}
      />
    ),
    icon2: (
      <WorkHistoryIcon
        sx={{
          color: "red",
        }}
      />
    ),
    herf: "/documentManagement",
  },
  {
    id: 3,
    title: "Approval 1",
    desc: "",
    icon1: (
      <VerifiedIcon
        sx={{
          width: "45px",
          height: "45px",
          color: "#11338D",
        }}
      />
    ),
    icon2: (
      <WorkHistoryIcon
        sx={{
          color: "red",
        }}
      />
    ),

    herf: "/paymentApproval1",
  },
  {
    id: 4,
    title: "Approval 2",
    desc: "",
    icon1: (
      <VerifiedIcon
        sx={{
          color: "red",
          width: "45px",
          height: "45px",
        }}
      />
    ),
    icon2: (
      <WorkHistoryIcon
        sx={{
          color: "red",
        }}
      />
    ),

    herf: "/approval2",
  },
  {
    id: 5,
    title: "Deletion",
    desc: "",
    icon1: (
      <DeleteOutlineIcon
        sx={{
          width: "35px",
          height: "35px",
        }}
      />
    ),
    icon2: "",

    herf: "/delectionDisplay",
  },
  {
    id: 6,
    title: "Report",
    desc: "",
    icon1: (
      <AssignmentIcon
        sx={{
          width: "35px",
          height: "35px",
        }}
      />
    ),
    icon2: "",
    herf: "/reportPage",
  },
];
