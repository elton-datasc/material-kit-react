// import { Bar } from "react-chartjs-2";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Vendas = (props) => {
  const theme = useTheme();

  const data = [
    {
      id: "0.0",
      group: "group A",
      price: 330,
      volume: 9,
    },
    {
      id: "0.1",
      group: "group A",
      price: 373,
      volume: 6,
    },
    {
      id: "0.2",
      group: "group A",
      price: 122,
      volume: 11,
    },
    {
      id: "0.3",
      group: "group A",
      price: 87,
      volume: 19,
    },
    {
      id: "0.4",
      group: "group A",
      price: 488,
      volume: 17,
    },
    {
      id: "0.5",
      group: "group A",
      price: 490,
      volume: 20,
    },
    {
      id: "0.6",
      group: "group A",
      price: 87,
      volume: 14,
    },
    {
      id: "0.7",
      group: "group A",
      price: 328,
      volume: 14,
    },
    {
      id: "0.8",
      group: "group A",
      price: 124,
      volume: 18,
    },
    {
      id: "0.9",
      group: "group A",
      price: 115,
      volume: 10,
    },
    {
      id: "0.10",
      group: "group A",
      price: 75,
      volume: 9,
    },
    {
      id: "0.11",
      group: "group A",
      price: 362,
      volume: 5,
    },
    {
      id: "0.12",
      group: "group A",
      price: 456,
      volume: 8,
    },
    {
      id: "0.13",
      group: "group A",
      price: 303,
      volume: 8,
    },
    {
      id: "0.14",
      group: "group A",
      price: 74,
      volume: 4,
    },
    {
      id: "0.15",
      group: "group A",
      price: 103,
      volume: 12,
    },
    {
      id: "0.16",
      group: "group A",
      price: 175,
      volume: 18,
    },
    {
      id: "0.17",
      group: "group A",
      price: 125,
      volume: 12,
    },
    {
      id: "0.18",
      group: "group A",
      price: 53,
      volume: 7,
    },
    {
      id: "0.19",
      group: "group A",
      price: 338,
      volume: 10,
    },
    {
      id: "0.20",
      group: "group A",
      price: 84,
      volume: 6,
    },
    {
      id: "0.21",
      group: "group A",
      price: 151,
      volume: 16,
    },
    {
      id: "0.22",
      group: "group A",
      price: 107,
      volume: 6,
    },
    {
      id: "0.23",
      group: "group A",
      price: 200,
      volume: 11,
    },
    {
      id: "0.24",
      group: "group A",
      price: 107,
      volume: 12,
    },
    {
      id: "0.25",
      group: "group A",
      price: 408,
      volume: 12,
    },
    {
      id: "0.26",
      group: "group A",
      price: 343,
      volume: 13,
    },
    {
      id: "0.27",
      group: "group A",
      price: 229,
      volume: 18,
    },
    {
      id: "0.28",
      group: "group A",
      price: 11,
      volume: 9,
    },
    {
      id: "0.29",
      group: "group A",
      price: 43,
      volume: 11,
    },
    {
      id: "0.30",
      group: "group A",
      price: 472,
      volume: 17,
    },
    {
      id: "0.31",
      group: "group A",
      price: 257,
      volume: 14,
    },
    {
      id: "0.32",
      group: "group A",
      price: 301,
      volume: 5,
    },
    {
      id: "0.33",
      group: "group A",
      price: 310,
      volume: 20,
    },
    {
      id: "0.34",
      group: "group A",
      price: 30,
      volume: 5,
    },
    {
      id: "0.35",
      group: "group A",
      price: 255,
      volume: 8,
    },
    {
      id: "0.36",
      group: "group A",
      price: 305,
      volume: 13,
    },
    {
      id: "0.37",
      group: "group A",
      price: 263,
      volume: 17,
    },
    {
      id: "0.38",
      group: "group A",
      price: 352,
      volume: 16,
    },
    {
      id: "0.39",
      group: "group A",
      price: 260,
      volume: 18,
    },
    {
      id: "0.40",
      group: "group A",
      price: 454,
      volume: 17,
    },
    {
      id: "0.41",
      group: "group A",
      price: 67,
      volume: 18,
    },
    {
      id: "0.42",
      group: "group A",
      price: 373,
      volume: 18,
    },
    {
      id: "0.43",
      group: "group A",
      price: 438,
      volume: 12,
    },
    {
      id: "0.44",
      group: "group A",
      price: 41,
      volume: 18,
    },
    {
      id: "0.45",
      group: "group A",
      price: 192,
      volume: 4,
    },
    {
      id: "0.46",
      group: "group A",
      price: 166,
      volume: 14,
    },
    {
      id: "0.47",
      group: "group A",
      price: 171,
      volume: 13,
    },
    {
      id: "0.48",
      group: "group A",
      price: 170,
      volume: 6,
    },
    {
      id: "0.49",
      group: "group A",
      price: 131,
      volume: 11,
    },
    {
      id: "0.50",
      group: "group A",
      price: 70,
      volume: 9,
    },
    {
      id: "0.51",
      group: "group A",
      price: 23,
      volume: 4,
    },
    {
      id: "0.52",
      group: "group A",
      price: 472,
      volume: 18,
    },
    {
      id: "0.53",
      group: "group A",
      price: 271,
      volume: 13,
    },
    {
      id: "0.54",
      group: "group A",
      price: 316,
      volume: 11,
    },
    {
      id: "0.55",
      group: "group A",
      price: 184,
      volume: 16,
    },
    {
      id: "0.56",
      group: "group A",
      price: 201,
      volume: 7,
    },
    {
      id: "0.57",
      group: "group A",
      price: 430,
      volume: 12,
    },
    {
      id: "0.58",
      group: "group A",
      price: 458,
      volume: 16,
    },
    {
      id: "0.59",
      group: "group A",
      price: 4,
      volume: 17,
    },
    {
      id: "0.60",
      group: "group A",
      price: 190,
      volume: 13,
    },
    {
      id: "0.61",
      group: "group A",
      price: 160,
      volume: 14,
    },
    {
      id: "0.62",
      group: "group A",
      price: 194,
      volume: 8,
    },
    {
      id: "0.63",
      group: "group A",
      price: 106,
      volume: 6,
    },
    {
      id: "0.64",
      group: "group A",
      price: 238,
      volume: 20,
    },
    {
      id: "0.65",
      group: "group A",
      price: 257,
      volume: 14,
    },
    {
      id: "1.0",
      group: "group B",
      price: 358,
      volume: 18,
    },
    {
      id: "1.1",
      group: "group B",
      price: 52,
      volume: 15,
    },
    {
      id: "1.2",
      group: "group B",
      price: 287,
      volume: 6,
    },
    {
      id: "1.3",
      group: "group B",
      price: 321,
      volume: 11,
    },
    {
      id: "1.4",
      group: "group B",
      price: 415,
      volume: 4,
    },
    {
      id: "1.5",
      group: "group B",
      price: 369,
      volume: 7,
    },
    {
      id: "1.6",
      group: "group B",
      price: 126,
      volume: 12,
    },
    {
      id: "1.7",
      group: "group B",
      price: 365,
      volume: 7,
    },
    {
      id: "1.8",
      group: "group B",
      price: 210,
      volume: 16,
    },
    {
      id: "1.9",
      group: "group B",
      price: 140,
      volume: 12,
    },
    {
      id: "1.10",
      group: "group B",
      price: 153,
      volume: 17,
    },
    {
      id: "1.11",
      group: "group B",
      price: 26,
      volume: 10,
    },
    {
      id: "1.12",
      group: "group B",
      price: 299,
      volume: 10,
    },
    {
      id: "1.13",
      group: "group B",
      price: 64,
      volume: 19,
    },
    {
      id: "1.14",
      group: "group B",
      price: 290,
      volume: 17,
    },
    {
      id: "1.15",
      group: "group B",
      price: 370,
      volume: 10,
    },
    {
      id: "1.16",
      group: "group B",
      price: 58,
      volume: 4,
    },
    {
      id: "1.17",
      group: "group B",
      price: 436,
      volume: 9,
    },
    {
      id: "1.18",
      group: "group B",
      price: 472,
      volume: 8,
    },
    {
      id: "1.19",
      group: "group B",
      price: 421,
      volume: 9,
    },
    {
      id: "1.20",
      group: "group B",
      price: 165,
      volume: 8,
    },
    {
      id: "1.21",
      group: "group B",
      price: 63,
      volume: 4,
    },
    {
      id: "1.22",
      group: "group B",
      price: 127,
      volume: 16,
    },
    {
      id: "1.23",
      group: "group B",
      price: 252,
      volume: 8,
    },
    {
      id: "1.24",
      group: "group B",
      price: 451,
      volume: 6,
    },
    {
      id: "1.25",
      group: "group B",
      price: 492,
      volume: 15,
    },
    {
      id: "1.26",
      group: "group B",
      price: 451,
      volume: 5,
    },
    {
      id: "1.27",
      group: "group B",
      price: 390,
      volume: 18,
    },
    {
      id: "1.28",
      group: "group B",
      price: 115,
      volume: 7,
    },
    {
      id: "1.29",
      group: "group B",
      price: 491,
      volume: 6,
    },
    {
      id: "1.30",
      group: "group B",
      price: 89,
      volume: 16,
    },
    {
      id: "1.31",
      group: "group B",
      price: 251,
      volume: 9,
    },
    {
      id: "1.32",
      group: "group B",
      price: 451,
      volume: 15,
    },
    {
      id: "1.33",
      group: "group B",
      price: 295,
      volume: 12,
    },
    {
      id: "1.34",
      group: "group B",
      price: 129,
      volume: 6,
    },
    {
      id: "1.35",
      group: "group B",
      price: 39,
      volume: 5,
    },
    {
      id: "1.36",
      group: "group B",
      price: 19,
      volume: 16,
    },
    {
      id: "1.37",
      group: "group B",
      price: 259,
      volume: 18,
    },
    {
      id: "1.38",
      group: "group B",
      price: 450,
      volume: 8,
    },
    {
      id: "1.39",
      group: "group B",
      price: 404,
      volume: 4,
    },
    {
      id: "1.40",
      group: "group B",
      price: 94,
      volume: 18,
    },
    {
      id: "1.41",
      group: "group B",
      price: 22,
      volume: 11,
    },
    {
      id: "1.42",
      group: "group B",
      price: 433,
      volume: 14,
    },
    {
      id: "1.43",
      group: "group B",
      price: 324,
      volume: 7,
    },
    {
      id: "1.44",
      group: "group B",
      price: 83,
      volume: 11,
    },
    {
      id: "1.45",
      group: "group B",
      price: 498,
      volume: 4,
    },
    {
      id: "1.46",
      group: "group B",
      price: 194,
      volume: 12,
    },
    {
      id: "1.47",
      group: "group B",
      price: 430,
      volume: 5,
    },
    {
      id: "1.48",
      group: "group B",
      price: 219,
      volume: 4,
    },
    {
      id: "1.49",
      group: "group B",
      price: 42,
      volume: 13,
    },
    {
      id: "1.50",
      group: "group B",
      price: 136,
      volume: 8,
    },
    {
      id: "1.51",
      group: "group B",
      price: 209,
      volume: 19,
    },
    {
      id: "1.52",
      group: "group B",
      price: 412,
      volume: 16,
    },
    {
      id: "1.53",
      group: "group B",
      price: 230,
      volume: 14,
    },
    {
      id: "1.54",
      group: "group B",
      price: 304,
      volume: 5,
    },
    {
      id: "1.55",
      group: "group B",
      price: 366,
      volume: 10,
    },
    {
      id: "1.56",
      group: "group B",
      price: 465,
      volume: 7,
    },
    {
      id: "1.57",
      group: "group B",
      price: 340,
      volume: 10,
    },
    {
      id: "1.58",
      group: "group B",
      price: 276,
      volume: 18,
    },
    {
      id: "1.59",
      group: "group B",
      price: 151,
      volume: 20,
    },
    {
      id: "1.60",
      group: "group B",
      price: 141,
      volume: 7,
    },
    {
      id: "1.61",
      group: "group B",
      price: 216,
      volume: 15,
    },
    {
      id: "1.62",
      group: "group B",
      price: 470,
      volume: 7,
    },
    {
      id: "1.63",
      group: "group B",
      price: 27,
      volume: 8,
    },
    {
      id: "1.64",
      group: "group B",
      price: 471,
      volume: 11,
    },
    {
      id: "1.65",
      group: "group B",
      price: 370,
      volume: 15,
    },
    {
      id: "1.66",
      group: "group B",
      price: 407,
      volume: 14,
    },
    {
      id: "1.67",
      group: "group B",
      price: 8,
      volume: 19,
    },
    {
      id: "1.68",
      group: "group B",
      price: 149,
      volume: 15,
    },
    {
      id: "1.69",
      group: "group B",
      price: 490,
      volume: 5,
    },
    {
      id: "1.70",
      group: "group B",
      price: 357,
      volume: 18,
    },
    {
      id: "1.71",
      group: "group B",
      price: 224,
      volume: 20,
    },
    {
      id: "1.72",
      group: "group B",
      price: 31,
      volume: 12,
    },
    {
      id: "1.73",
      group: "group B",
      price: 406,
      volume: 6,
    },
    {
      id: "1.74",
      group: "group B",
      price: 250,
      volume: 6,
    },
    {
      id: "1.75",
      group: "group B",
      price: 129,
      volume: 16,
    },
    {
      id: "1.76",
      group: "group B",
      price: 390,
      volume: 8,
    },
    {
      id: "1.77",
      group: "group B",
      price: 248,
      volume: 18,
    },
    {
      id: "1.78",
      group: "group B",
      price: 262,
      volume: 14,
    },
    {
      id: "2.0",
      group: "group C",
      price: 423,
      volume: 15,
    },
    {
      id: "2.1",
      group: "group C",
      price: 367,
      volume: 14,
    },
    {
      id: "2.2",
      group: "group C",
      price: 19,
      volume: 15,
    },
    {
      id: "2.3",
      group: "group C",
      price: 127,
      volume: 5,
    },
    {
      id: "2.4",
      group: "group C",
      price: 280,
      volume: 6,
    },
    {
      id: "2.5",
      group: "group C",
      price: 253,
      volume: 20,
    },
    {
      id: "2.6",
      group: "group C",
      price: 384,
      volume: 4,
    },
    {
      id: "2.7",
      group: "group C",
      price: 358,
      volume: 14,
    },
    {
      id: "2.8",
      group: "group C",
      price: 438,
      volume: 10,
    },
    {
      id: "2.9",
      group: "group C",
      price: 496,
      volume: 8,
    },
    {
      id: "2.10",
      group: "group C",
      price: 37,
      volume: 4,
    },
    {
      id: "2.11",
      group: "group C",
      price: 298,
      volume: 9,
    },
    {
      id: "2.12",
      group: "group C",
      price: 453,
      volume: 7,
    },
    {
      id: "2.13",
      group: "group C",
      price: 151,
      volume: 17,
    },
    {
      id: "2.14",
      group: "group C",
      price: 20,
      volume: 9,
    },
    {
      id: "2.15",
      group: "group C",
      price: 321,
      volume: 14,
    },
    {
      id: "2.16",
      group: "group C",
      price: 432,
      volume: 12,
    },
    {
      id: "2.17",
      group: "group C",
      price: 434,
      volume: 9,
    },
    {
      id: "2.18",
      group: "group C",
      price: 401,
      volume: 8,
    },
    {
      id: "2.19",
      group: "group C",
      price: 1,
      volume: 17,
    },
    {
      id: "2.20",
      group: "group C",
      price: 87,
      volume: 13,
    },
    {
      id: "2.21",
      group: "group C",
      price: 275,
      volume: 4,
    },
    {
      id: "2.22",
      group: "group C",
      price: 95,
      volume: 12,
    },
    {
      id: "2.23",
      group: "group C",
      price: 288,
      volume: 10,
    },
    {
      id: "2.24",
      group: "group C",
      price: 334,
      volume: 20,
    },
    {
      id: "2.25",
      group: "group C",
      price: 266,
      volume: 10,
    },
    {
      id: "2.26",
      group: "group C",
      price: 197,
      volume: 5,
    },
    {
      id: "2.27",
      group: "group C",
      price: 25,
      volume: 11,
    },
    {
      id: "2.28",
      group: "group C",
      price: 309,
      volume: 8,
    },
    {
      id: "2.29",
      group: "group C",
      price: 184,
      volume: 4,
    },
    {
      id: "2.30",
      group: "group C",
      price: 6,
      volume: 8,
    },
    {
      id: "2.31",
      group: "group C",
      price: 209,
      volume: 6,
    },
    {
      id: "2.32",
      group: "group C",
      price: 325,
      volume: 11,
    },
    {
      id: "2.33",
      group: "group C",
      price: 444,
      volume: 17,
    },
    {
      id: "2.34",
      group: "group C",
      price: 74,
      volume: 20,
    },
    {
      id: "2.35",
      group: "group C",
      price: 410,
      volume: 6,
    },
    {
      id: "2.36",
      group: "group C",
      price: 245,
      volume: 13,
    },
    {
      id: "2.37",
      group: "group C",
      price: 22,
      volume: 14,
    },
    {
      id: "2.38",
      group: "group C",
      price: 102,
      volume: 20,
    },
    {
      id: "2.39",
      group: "group C",
      price: 318,
      volume: 11,
    },
    {
      id: "2.40",
      group: "group C",
      price: 382,
      volume: 16,
    },
    {
      id: "2.41",
      group: "group C",
      price: 5,
      volume: 7,
    },
    {
      id: "2.42",
      group: "group C",
      price: 132,
      volume: 12,
    },
    {
      id: "2.43",
      group: "group C",
      price: 422,
      volume: 6,
    },
    {
      id: "2.44",
      group: "group C",
      price: 169,
      volume: 13,
    },
    {
      id: "2.45",
      group: "group C",
      price: 292,
      volume: 5,
    },
    {
      id: "2.46",
      group: "group C",
      price: 117,
      volume: 13,
    },
    {
      id: "2.47",
      group: "group C",
      price: 428,
      volume: 6,
    },
    {
      id: "2.48",
      group: "group C",
      price: 498,
      volume: 16,
    },
    {
      id: "2.49",
      group: "group C",
      price: 170,
      volume: 19,
    },
    {
      id: "2.50",
      group: "group C",
      price: 247,
      volume: 4,
    },
    {
      id: "2.51",
      group: "group C",
      price: 472,
      volume: 5,
    },
    {
      id: "2.52",
      group: "group C",
      price: 457,
      volume: 12,
    },
    {
      id: "2.53",
      group: "group C",
      price: 395,
      volume: 11,
    },
    {
      id: "2.54",
      group: "group C",
      price: 285,
      volume: 7,
    },
    {
      id: "2.55",
      group: "group C",
      price: 426,
      volume: 14,
    },
    {
      id: "2.56",
      group: "group C",
      price: 325,
      volume: 8,
    },
    {
      id: "2.57",
      group: "group C",
      price: 368,
      volume: 18,
    },
    {
      id: "2.58",
      group: "group C",
      price: 141,
      volume: 14,
    },
    {
      id: "2.59",
      group: "group C",
      price: 118,
      volume: 8,
    },
    {
      id: "2.60",
      group: "group C",
      price: 165,
      volume: 4,
    },
    {
      id: "2.61",
      group: "group C",
      price: 395,
      volume: 8,
    },
    {
      id: "2.62",
      group: "group C",
      price: 330,
      volume: 10,
    },
    {
      id: "2.63",
      group: "group C",
      price: 278,
      volume: 19,
    },
    {
      id: "2.64",
      group: "group C",
      price: 413,
      volume: 7,
    },
    {
      id: "2.65",
      group: "group C",
      price: 465,
      volume: 6,
    },
    {
      id: "2.66",
      group: "group C",
      price: 9,
      volume: 12,
    },
    {
      id: "2.67",
      group: "group C",
      price: 434,
      volume: 6,
    },
  ];

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider,
        },
      },
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card {...props}>
      <CardHeader
        action={
          <Button endIcon={<ArrowDropDownIcon fontSize="small" />} size="small">
            Last 7 days
          </Button>
        }
        title="Latest Sales"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: "relative",
          }}
        >
          {/* <Bar data={data} options={options} /> */}
          <ResponsiveSwarmPlot
            data={data}
            groups={["group A", "group B", "group C"]}
            identity="id"
            value="price"
            valueFormat="$.2f"
            valueScale={{ type: "linear", min: 0, max: 500, reverse: false }}
            size={{
              key: "volume",
              values: [4, 20],
              sizes: [6, 20],
            }}
            forceStrength={4}
            simulationIterations={100}
            borderColor={{
              from: "color",
              modifiers: [
                ["darker", 0.6],
                ["opacity", 0.5],
              ],
            }}
            margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
            axisTop={{
              orient: "top",
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: "preço na vertical, grupo na horizontal",
              legendPosition: "middle",
              legendOffset: -46,
            }}
            axisRight={{
              orient: "right",
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: "preço na vertical, grupo na horizontal",
              legendPosition: "middle",
              legendOffset: 76,
            }}
            axisBottom={{
              orient: "bottom",
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: "preço na vertical, grupo na horizontal",
              legendPosition: "middle",
              legendOffset: 46,
            }}
            axisLeft={{
              orient: "left",
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: "price if vertical, group if horizontal",
              legendPosition: "middle",
              legendOffset: -76,
            }}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small">
          Overview
        </Button>
      </Box>
    </Card>
  );
};
