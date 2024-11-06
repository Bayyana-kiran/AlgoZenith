import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/logo.svg";
import { ReactComponent as DashBoard } from "../Assets/dashboard.svg";
import { ReactComponent as LeaderBoard } from "../Assets/Leaderboard.svg";
import { ReactComponent as Forum } from "../Assets/forums.svg";
import { ReactComponent as UpSkill } from "../Assets/Upskill.svg";
import { ReactComponent as Contest } from "../Assets/Contest.svg";
import { ReactComponent as Learn } from "../Assets/learn.svg";
import { ReactComponent as Howitworks } from "../Assets/Howitworks.svg";
import { ReactComponent as Learning } from "../Assets/Learning.svg";
import { ReactComponent as Sessions } from "../Assets/sessions.svg";
import { ReactComponent as Clock } from "../Assets/clock.svg";
import { LinearProgress } from "@mui/material";
import { ReactComponent as Clip } from "../Assets/clip.svg";
import { ReactComponent as Chart } from "../Assets/Chart.svg";
import { ReactComponent as Arrow } from "../Assets/arrow.svg";
import { ReactComponent as Bell } from "../Assets/Bell.svg";
import { ReactComponent as Duration } from "../Assets/duration.svg";
//
import { ReactComponent as Question } from "../Assets/question.svg";
import { ReactComponent as Video } from "../Assets/video.svg";
import { ReactComponent as Exercise } from "../Assets/exercise.svg";

const drawerWidth = 240;
const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
  },
});

function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // State to track the selected chapter

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const menuItems = [
    { text: "DashBoard", icon: <DashBoard />, component: DashBoard },
    { text: "Learn", icon: <Learn />, component: Learn },
    { text: "Forums", icon: <Forum />, component: Forum },
    { text: "UpSkill", icon: <UpSkill />, component: UpSkill },
    { text: "Contest", icon: <Contest />, component: Contest },
    { text: "Leaderboard", icon: <LeaderBoard />, component: LeaderBoard },
  ];

  const chapters = [
    {
      id: 1,
      name: "Chapter 1",
      icon: <Clock width={20} height={20} />,
      text: "05:00:00",
    },
    {
      id: 2,
      name: "Chapter 2",
      icon: <Clock width={20} height={20} />,
      text: "04:00:00",
    },
    {
      id: 3,
      name: "Chapter 3",
      icon: <Clock width={20} height={20} />,
      text: "05:00:00",
    },
    {
      id: 4,
      name: "Chapter 4",
      icon: <Clock width={20} height={20} />,
      text: "06:00:00",
    },
    {
      id: 5,
      name: "Chapter 5",
      icon: <Clock width={20} height={20} />,
      text: "07:00:00",
    },
  ];

  const [selectedChapter, setSelectedChapter] = useState(chapters[0].id);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter.id);
  };

  const internalitems = [
    { id: 1, icon: <Video sx={{ width: 4, height: 4 }} />, text: "Video" },
    {
      id: 2,
      icon: <Question sx={{ width: 8, height: 8 }} />,
      text: "Article",
    },
    { id: 3, icon: <Exercise sx={{ width: 8, height: 8 }} />, text: "Quiz" },
    {
      id: 4,
      icon: <Duration sx={{ width: 8, height: 8 }} />,
      text: "Exercise",
    },
    {
      id: 5,
      icon: <Clip sx={{ width: 8, height: 8 }} />,
      text: "Combined Resource",
    },
  ];

  //menu
  const drawer = (
    <Box
      sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}
    >
      <Toolbar>
        <Box>
          <Box>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 30, margin: "auto" }}
        />
      </Toolbar>
      <List
        sx={{
          color: "#172B4D",
          marginleft: "10px",
        }}
      >
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            sx={{
              py: 1,
              "&:hover": {
                backgroundColor: "#D6F4FF",
                transform: "scale(0.95)",
                cursor: "pointer",
                borderRadius: "10px",
                transition: "all 0.2s ease-in-out",
                "& .MuiTypography-root": {
                  color: "#172B4D",
                  fontWeight: "700",
                },
              },
            }}
          >
            <Box sx={{ height: "20px", mr: 2, marginBottom: "15px" }}>
              {item.icon}
            </Box>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: "400",
                  }}
                >
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [selectedPart, setSelectedPart] = useState(null);

  const handlePartClick = (part) => {
    if (selectedPart === part) {
      setSelectedPart(null);
    } else {
      setSelectedPart(part);
    }
  };
  const time = [
    { id: 1, text: "05:00:00", icon: <clock /> },
    { id: 2, text: "06:00:00", icon: <clock /> },
    { id: 3, text: "07:00:00", icon: <clock /> },
    { id: 4, text: "08:00:00", icon: <clock /> },
    { id: 5, text: "09:00:00", icon: <clock /> },
  ];
  const partProgress = {
    "Part 1": 50, // 50% completed for Part 1
    "Part 2": 80, // 80% completed for Part 2
    "Part 3": 30, // 30% completed for Part 3
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ display: "flex", height: "100vh", backgroundColor: "#FFFFFF" }}
      >
        <Box
          sx={{
            width: "22%",
            backgroundColor: "#FFFFFF",
            p: 2,
            boxSizing: "border-box",
          }}
        >
          {drawer}
        </Box>

        <Box
          sx={{
            width: "80%",
            p: 3,
            boxSizing: "border-box",
            overflowY: "auto",
            paddingTop: 0,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              alignItems: "flex-end",
            }}
          >
            <Box />

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button>
                <Bell width={34} height={34} />
              </Button>
              <Button>
                <Avatar alt="Profile" src="/path/to/profile-image.jpg" />
              </Button>
            </Box>
          </Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #A4E6FF",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                p: 1,
                justifyContent: "space-between",
                height: "50px",
                padding: "15px",
                borderBottom: "1px solid transparent",
                borderImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #A4E6FF 60%, #A4E6FF 40%, rgba(0, 0, 0, 0) 100%)",
                borderImageSlice: 7,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#EFF5FF",
                  borderRadius: "5px",
                  padding: "8px",
                  gap: 1,
                  width: "40%",
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    flex: 1,
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "white",
                      border: "0.92px solid",
                      borderImageSource:
                        "linear-gradient(104.1deg, #05445E -162.17%, #D2E3FF 100%)",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                    },
                    color: "#000",
                    borderRadius: "7px",
                    fontSize: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    "& .MuiButton-startIcon": {
                      width: "15%",
                    },
                  }}
                  startIcon={<Learning sx={{ fontSize: "1.2rem" }} />}
                >
                  Learning Material
                </Button>

                <Button
                  variant="text"
                  sx={{
                    flex: 1,
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "white",
                      border: "0.92px solid",
                      borderImageSource:
                        "linear-gradient(104.1deg, #05445E -162.17%, #D2E3FF 100%)",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                    },
                    color: "#000",
                    fontSize: "0.75rem",
                    borderRadius: "7px",
                    display: "flex",
                    alignItems: "center",
                    "& .MuiButton-startIcon": {
                      width: "15%",
                    },
                  }}
                  startIcon={<Sessions sx={{ fontSize: "1.2rem" }} />}
                >
                  Mentor Session
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<Howitworks sx={{ fontSize: "1.2rem" }} />}
                  sx={{
                    backgroundColor: "white",
                    borderColor: "#99E4FF",
                    color: "#172B4D",
                    borderWidth: 1,
                    boxShadow: "none",
                    borderRadius: "9px",
                    height: "90%",
                    padding: "2px 6px ",
                    fontWeight: 700,
                    fontSize: "12px",
                    ":hover": {
                      backgroundColor: "white",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
                    },
                    "& .MuiButton-startIcon": {
                      width: "18%",
                    },
                  }}
                >
                  How It Works
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", height: "100vh", p: 2 }}>
              <Box
                sx={{
                  width: "35%",
                  pr: 2,
                  overflowY: "auto",
                }}
              >
                {chapters.map((chapter) => (
                  <Box key={chapter.id} sx={{ mb: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "transparent",
                        color: "#172B4D",
                        fontWeight: 400,
                        border: "none",
                        borderBottom: "1px solid transparent",
                        borderImage:
                          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, #A4E6FF 50%, rgba(0, 0, 0, 0) 100%)",
                        borderImageSlice: 1,
                        padding: "10px",
                        ":hover": {
                          backgroundColor: "#EFF5FF",
                          color: "#000000",
                          fontWeight: 700,
                        },
                        "&:hover .time-text": {
                          color: "#608AD2",
                          fontWeight: 400,
                        },
                        "&:hover .clock-icon, &:hover .time-text": {
                          opacity: 1,
                        },
                      }}
                      onClick={() => handleChapterClick(chapter)}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <span>{chapter.name}</span>
                      </Box>
                      <Box
                        className="clock-icon"
                        sx={{
                          opacity: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        {chapter.icon}
                        <span
                          className="time-text"
                          sx={{ opacity: 0, transition: "opacity 0.3s ease" }}
                        >
                          {chapter.text}
                        </span>
                      </Box>
                    </Button>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  width: "100%",
                  pl: 3,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {selectedChapter && (
                  <Box>
                    {["Part 1", "Part 2", "Part 3"].map((part, index) => (
                      <Box
                        key={index}
                        sx={{
                          mb: 2,
                          borderRadius: "inherit",
                          border: "1px solid transparent",
                          borderImageSource:
                            "linear-gradient(360deg, rgba(164, 230, 255, 0) 12.84%, #A4E6FF 120.5%)", // Gradient border color
                          borderImageSlice: 1,
                          cursor: "pointer",
                          transition:
                            "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                          ":hover": {
                            backgroundColor: "#F5F8FA",
                            transform: "scale(1.02)", // Slightly enlarges on hover
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Adds a shadow on hover
                          },
                          display: "flex",
                          flexDirection: "column",
                          position: "relative",
                          backgroundColor: "#fff",
                          
                        }}
                        onClick={() => handlePartClick(part)}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <Typography
                              variant="h8"
                              sx={{
                                fontcolor: "#17384D",
                              }}
                            >
                              {part}
                            </Typography>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: "bold",
                              }}
                            >
                              Lorem ipsum dolor sit amet
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-end",
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <Clock width={20} height={20} />
                                <Typography
                                  variant="h8"
                                  sx={{
                                    color: "#17384D",
                                  }}
                                >
                                  02:00:00
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <Chart width={20} height={20} />
                                <Typography
                                  variant="h8"
                                  sx={{
                                    color: "#17384D",
                                  }}
                                >
                                  Medium
                                </Typography>
                              </Box>

                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <Clip width={20} height={20} />
                                <Typography
                                  variant="h8"
                                  sx={{
                                    color: "#17384D",
                                  }}
                                >
                                  5
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  transform:
                                    selectedPart === part
                                      ? "rotate(180deg)"
                                      : "rotate(0deg)",
                                  transition: "transform 0.3s ease",
                                }}
                              >
                                <Arrow width={20} height={20} />
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                padding: "2px 8px",
                                border: "1px solid #99E4FF",
                                backgroundColor: "#EFF5FF",
                                color: "black",
                                borderRadius: "5px",
                                fontWeight: "450",
                                fontSize: "12px",
                              }}
                            >
                              75% Completed
                            </Box>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            width: "100%",
                            height: "6px",
                            borderRadius: "0px 0px 50px 50px",
                          }}
                        >
                          <LinearProgress
                            sx={{
                              width: "100%",
                              height: "6px",
                              borderRadius: "0px 0px 50px 50px",
                              backgroundColor: "#EFF5FF",
                              "& .MuiLinearProgress-bar": {
                                backgroundColor: "#172B4DD9",
                              },
                            }}
                            value={50}
                            variant="determinate"
                          />
                        </Box>

                        {selectedPart === part && (
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 3,
                              padding: 2,
                            }}
                          >
                            {internalitems.map((item) => (
                              <Box
                                key={item.id}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  paddingBottom: "15px",
                                  borderBottom: "1px solid transparent",
                                  borderImageSource:
                                    "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, rgba(23, 43, 77, 0.3) 50%, rgba(5, 68, 94, 0) 100%)",
                                  borderImageSlice: 1,
                                  transition:
                                    "transform 0.3s ease, opacity 0.3s ease",
                                  justifyContent: "space-between",
                                  "&:hover": {
                                    transform: "scale(1.02)",
                                    opacity: 0.9,
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "5px",
                                      height: "25px",
                                      width: "25px",
                                    }}
                                  >
                                    {item.icon}
                                  </Box>
                                  <Typography
                                    variant="body2"
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    {item.text}
                                  </Typography>
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    fontWeight: "bold",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: 20,
                                      height: 20,
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Duration
                                      sx={{
                                        width: "14px",
                                        height: "14px",
                                        fontSize: "10px",
                                      }}
                                    />
                                  </Box>

                                  <Typography
                                    variant="h6"
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",

                                      fontSize: "14px",
                                    }}
                                  >
                                    10:00
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Sidebar;
