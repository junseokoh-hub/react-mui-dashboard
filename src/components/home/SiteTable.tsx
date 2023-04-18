import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Text from "../atoms/Text";

const sites = [
  {
    id: 1,
    site_name: "Twitter",
    icon: <TwitterIcon />,
    subs: "12k",
    completion: 72,
    color: "#00acee",
  },
  {
    id: 2,
    site_name: "Facebook",
    icon: <FacebookIcon />,
    subs: "8k",
    completion: 50,
    color: "#3b5998",
  },
  {
    id: 3,
    site_name: "Instagram",
    icon: <InstagramIcon />,
    subs: "23k",
    completion: 85,
    color: "#d62976",
  },
  {
    id: 4,
    site_name: "Github",
    icon: <GitHubIcon />,
    subs: "18k",
    completion: 91,
    color: "#171515",
  },
  {
    id: 5,
    site_name: "LinkedIn",
    icon: <LinkedInIcon />,
    subs: "1k",
    completion: 23,
    color: "#0072b1",
  },
  {
    id: 6,
    site_name: "Youtube",
    icon: <YouTubeIcon />,
    subs: "11k",
    completion: 38,
    color: "#c4302b",
  },
];

const SiteTable = () => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Subs</TableCell>
            <TableCell>Completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sites.map((site) => (
            <TableRow hover={true} key={site.id} sx={{ cursor: "pointer" }}>
              <TableCell sx={{ display: "flex", alignItems: "center" }}>
                <IconButton sx={{ color: site.color }}>{site.icon}</IconButton>{" "}
                <Text variant="overline" sx={{ fontWeight: 600 }}>
                  {site.site_name}
                </Text>
              </TableCell>
              <TableCell>{site.subs}</TableCell>
              <TableCell>
                <LinearProgress
                  value={site.completion}
                  variant="determinate"
                  color={
                    site.completion < 40
                      ? "error"
                      : site.completion > 80
                      ? "success"
                      : "primary"
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SiteTable;
