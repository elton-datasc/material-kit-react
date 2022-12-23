// import { Bar } from "react-chartjs-2";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const Vendas = (props) => {
  const theme = useTheme();

  const data = [
    {
      id: "0",
      group: "Tagima",
      price: 4319.1,
      volume: 6,
    },
    {
      id: "1",
      group: "Tagima",
      price: 1299.0,
      volume: 17,
    },
    {
      id: "2",
      group: "Tagima",
      price: 1299.0,
      volume: 9,
    },
    {
      id: "3",
      group: "Tagima",
      price: 1299.0,
      volume: 5,
    },
    {
      id: "4",
      group: "Ibanez",
      price: 2249.1,
      volume: 19,
    },
    {
      id: "5",
      group: "Ibanez",
      price: 2249.1,
      volume: 18,
    },
    {
      id: "6",
      group: "Ibanez",
      price: 2249.1,
      volume: 9,
    },
    {
      id: "7",
      group: "Ibanez",
      price: 3014.1,
      volume: 16,
    },
    {
      id: "8",
      group: "Ibanez",
      price: 3399.0,
      volume: 10,
    },
    {
      id: "9",
      group: "Tagima",
      price: 3869.1,
      volume: 18,
    },
    {
      id: "10",
      group: "Tagima",
      price: 4319.1,
      volume: 10,
    },
    {
      id: "11",
      group: "Tagima",
      price: 5399.1,
      volume: 17,
    },
    {
      id: "12",
      group: "Tagima",
      price: 7019.1,
      volume: 4,
    },
    {
      id: "13",
      group: "Condor",
      price: 4999.0,
      volume: 5,
    },
    {
      id: "14",
      group: "Tagima",
      price: 2204.1,
      volume: 12,
    },
    {
      id: "15",
      group: "Tagima",
      price: 4499.1,
      volume: 9,
    },
    {
      id: "16",
      group: "Tagima",
      price: 4499.1,
      volume: 4,
    },
    {
      id: "17",
      group: "Tagima",
      price: 4409.1,
      volume: 5,
    },
    {
      id: "18",
      group: "Tagima",
      price: 1199.0,
      volume: 12,
    },
    {
      id: "19",
      group: "Tagima",
      price: 4499.1,
      volume: 15,
    },
    {
      id: "20",
      group: "Tagima",
      price: 4499.1,
      volume: 5,
    },
    {
      id: "21",
      group: "Cort",
      price: 4355.1,
      volume: 17,
    },
    {
      id: "22",
      group: "Tagima",
      price: 1199.0,
      volume: 14,
    },
    {
      id: "23",
      group: "Ibanez",
      price: 2024.1,
      volume: 7,
    },
    {
      id: "24",
      group: "Ibanez",
      price: 2024.1,
      volume: 6,
    },
    {
      id: "25",
      group: "Ibanez",
      price: 2024.1,
      volume: 9,
    },
    {
      id: "26",
      group: "Ibanez",
      price: 3239.1,
      volume: 18,
    },
    {
      id: "27",
      group: "Ibanez",
      price: 2393.1,
      volume: 15,
    },
    {
      id: "28",
      group: "Ibanez",
      price: 2411.1,
      volume: 10,
    },
    {
      id: "29",
      group: "Ibanez",
      price: 2159.1,
      volume: 9,
    },
    {
      id: "30",
      group: "Ibanez",
      price: 2411.1,
      volume: 7,
    },
    {
      id: "31",
      group: "Cort",
      price: 2519.1,
      volume: 4,
    },
    {
      id: "32",
      group: "Cort",
      price: 2519.1,
      volume: 12,
    },
    {
      id: "33",
      group: "Cort",
      price: 4049.1,
      volume: 9,
    },
    {
      id: "34",
      group: "Cort",
      price: 5669.1,
      volume: 4,
    },
    {
      id: "35",
      group: "Tagima",
      price: 1099.0,
      volume: 19,
    },
    {
      id: "36",
      group: "Tagima",
      price: 2699.0,
      volume: 11,
    },
    {
      id: "37",
      group: "Tagima",
      price: 2249.1,
      volume: 9,
    },
    {
      id: "38",
      group: "Tagima",
      price: 1199.0,
      volume: 9,
    },
    {
      id: "39",
      group: "Ibanez",
      price: 3869.1,
      volume: 18,
    },
    {
      id: "40",
      group: "Ibanez",
      price: 3869.1,
      volume: 12,
    },
    {
      id: "41",
      group: "Ibanez",
      price: 3743.1,
      volume: 19,
    },
    {
      id: "42",
      group: "Gibson",
      price: 17499.0,
      volume: 14,
    },
    {
      id: "43",
      group: "Ibanez",
      price: 3599.1,
      volume: 4,
    },
    {
      id: "44",
      group: "Strinberg",
      price: 2399.0,
      volume: 10,
    },
    {
      id: "45",
      group: "Ibanez",
      price: 2294.1,
      volume: 4,
    },
    {
      id: "46",
      group: "Ibanez",
      price: 2429.1,
      volume: 13,
    },
    {
      id: "47",
      group: "Ibanez",
      price: 2510.1,
      volume: 8,
    },
    {
      id: "48",
      group: "Ibanez",
      price: 2339.1,
      volume: 15,
    },
    {
      id: "49",
      group: "Tagima",
      price: 1439.1,
      volume: 11,
    },
    {
      id: "50",
      group: "Ibanez",
      price: 4499.1,
      volume: 19,
    },
    {
      id: "51",
      group: "Ibanez",
      price: 11249.1,
      volume: 11,
    },
    {
      id: "52",
      group: "Ibanez",
      price: 5309.1,
      volume: 10,
    },
    {
      id: "53",
      group: "Ibanez",
      price: 6029.1,
      volume: 9,
    },
    {
      id: "54",
      group: "Ibanez",
      price: 5669.1,
      volume: 16,
    },
    {
      id: "55",
      group: "Cort",
      price: 3599.1,
      volume: 13,
    },
    {
      id: "56",
      group: "Cort",
      price: 4139.1,
      volume: 6,
    },
    {
      id: "57",
      group: "SX",
      price: 1289.0,
      volume: 18,
    },
    {
      id: "58",
      group: "SX",
      price: 1429.0,
      volume: 7,
    },
    {
      id: "59",
      group: "SX",
      price: 1359.0,
      volume: 10,
    },
    {
      id: "60",
      group: "Ibanez",
      price: 5669.1,
      volume: 13,
    },
    {
      id: "61",
      group: "Ibanez",
      price: 2816.1,
      volume: 16,
    },
    {
      id: "62",
      group: "Ibanez",
      price: 5399.1,
      volume: 19,
    },
    {
      id: "63",
      group: "Ibanez",
      price: 2276.1,
      volume: 8,
    },
    {
      id: "64",
      group: "Ibanez",
      price: 2429.1,
      volume: 11,
    },
    {
      id: "65",
      group: "Cort",
      price: 3959.1,
      volume: 15,
    },
    {
      id: "66",
      group: "SX",
      price: 2119.0,
      volume: 5,
    },
    {
      id: "67",
      group: "PRS",
      price: 9329.0,
      volume: 8,
    },
    {
      id: "68",
      group: "SX",
      price: 1289.0,
      volume: 16,
    },
    {
      id: "69",
      group: "Cort",
      price: 4049.1,
      volume: 8,
    },
    {
      id: "70",
      group: "Cort",
      price: 4049.1,
      volume: 8,
    },
    {
      id: "71",
      group: "Ibanez",
      price: 15569.1,
      volume: 13,
    },
    {
      id: "72",
      group: "Ibanez",
      price: 17099.1,
      volume: 14,
    },
    {
      id: "73",
      group: "Ibanez",
      price: 8999.1,
      volume: 15,
    },
    {
      id: "74",
      group: "Waldman",
      price: 1196.1,
      volume: 7,
    },
    {
      id: "75",
      group: "Waldman",
      price: 1331.1,
      volume: 17,
    },
    {
      id: "76",
      group: "Waldman",
      price: 1241.1,
      volume: 12,
    },
    {
      id: "77",
      group: "Tagima",
      price: 4319.1,
      volume: 16,
    },
    {
      id: "78",
      group: "Tagima",
      price: 1439.1,
      volume: 16,
    },
    {
      id: "79",
      group: "Tagima",
      price: 1799.1,
      volume: 7,
    },
    {
      id: "80",
      group: "ESP",
      price: 6299.0,
      volume: 7,
    },
    {
      id: "81",
      group: "PRS",
      price: 9599.0,
      volume: 17,
    },
    {
      id: "82",
      group: "Ibanez",
      price: 4679.1,
      volume: 14,
    },
    {
      id: "83",
      group: "Ibanez",
      price: 3599.1,
      volume: 17,
    },
    {
      id: "84",
      group: "Ibanez",
      price: 3563.1,
      volume: 6,
    },
    {
      id: "85",
      group: "Ibanez",
      price: 3779.1,
      volume: 6,
    },
    {
      id: "86",
      group: "Tagima",
      price: 2204.1,
      volume: 12,
    },
    {
      id: "87",
      group: "Tagima",
      price: 6299.1,
      volume: 7,
    },
    {
      id: "88",
      group: "Ibanez",
      price: 2249.1,
      volume: 6,
    },
    {
      id: "89",
      group: "Tagima",
      price: 2204.1,
      volume: 4,
    },
    {
      id: "90",
      group: "Tagima",
      price: 1299.0,
      volume: 15,
    },
    {
      id: "91",
      group: "Tagima",
      price: 1199.0,
      volume: 17,
    },
    {
      id: "92",
      group: "Tagima",
      price: 1099.0,
      volume: 5,
    },
    {
      id: "93",
      group: "Tagima",
      price: 3644.1,
      volume: 7,
    },
    {
      id: "94",
      group: "Cort",
      price: 3959.1,
      volume: 12,
    },
    {
      id: "95",
      group: "Cort",
      price: 3509.1,
      volume: 14,
    },
    {
      id: "96",
      group: "Strinberg",
      price: 1499.0,
      volume: 9,
    },
    {
      id: "97",
      group: "Jackson",
      price: 3799.0,
      volume: 7,
    },
    {
      id: "98",
      group: "Waldman",
      price: 989.1,
      volume: 15,
    },
    {
      id: "99",
      group: "Waldman",
      price: 989.1,
      volume: 19,
    },
    {
      id: "100",
      group: "Cort",
      price: 3999.0,
      volume: 18,
    },
    {
      id: "101",
      group: "Waldman",
      price: 1259.1,
      volume: 10,
    },
    {
      id: "102",
      group: "Tagima",
      price: 1799.1,
      volume: 11,
    },
    {
      id: "103",
      group: "Tagima",
      price: 1299.0,
      volume: 9,
    },
    {
      id: "104",
      group: "Tagima",
      price: 1299.0,
      volume: 8,
    },
    {
      id: "105",
      group: "Ibanez",
      price: 5399.1,
      volume: 4,
    },
    {
      id: "106",
      group: "Ibanez",
      price: 8729.1,
      volume: 17,
    },
    {
      id: "107",
      group: "Ibanez",
      price: 6299.1,
      volume: 18,
    },
    {
      id: "108",
      group: "Ibanez",
      price: 7469.1,
      volume: 13,
    },
    {
      id: "109",
      group: "Ibanez",
      price: 4049.1,
      volume: 5,
    },
    {
      id: "110",
      group: "Ibanez",
      price: 7019.1,
      volume: 11,
    },
    {
      id: "111",
      group: "Waldman",
      price: 989.1,
      volume: 4,
    },
    {
      id: "112",
      group: "Cort",
      price: 1889.1,
      volume: 9,
    },
    {
      id: "113",
      group: "Cort",
      price: 4949.1,
      volume: 12,
    },
    {
      id: "114",
      group: "Ibanez",
      price: 2789.1,
      volume: 11,
    },
    {
      id: "115",
      group: "Yamaha",
      price: 3599.1,
      volume: 15,
    },
    {
      id: "116",
      group: "Strinberg",
      price: 1879.0,
      volume: 15,
    },
    {
      id: "117",
      group: "Strinberg",
      price: 1879.0,
      volume: 11,
    },
    {
      id: "118",
      group: "Strinberg",
      price: 1149.0,
      volume: 8,
    },
    {
      id: "119",
      group: "Tagima",
      price: 4409.1,
      volume: 5,
    },
    {
      id: "120",
      group: "ESP",
      price: 12749.15,
      volume: 6,
    },
    {
      id: "121",
      group: "Cort",
      price: 5669.1,
      volume: 19,
    },
    {
      id: "122",
      group: "Ibanez",
      price: 2276.1,
      volume: 5,
    },
    {
      id: "123",
      group: "Tagima",
      price: 1099.0,
      volume: 17,
    },
    {
      id: "124",
      group: "Ibanez",
      price: 3743.1,
      volume: 11,
    },
    {
      id: "125",
      group: "Ibanez",
      price: 3959.1,
      volume: 9,
    },
    {
      id: "126",
      group: "Ibanez",
      price: 4949.1,
      volume: 6,
    },
    {
      id: "127",
      group: "Ibanez",
      price: 4499.1,
      volume: 8,
    },
    {
      id: "128",
      group: "Ibanez",
      price: 4589.1,
      volume: 9,
    },
    {
      id: "129",
      group: "Tagima",
      price: 1099.0,
      volume: 17,
    },
    {
      id: "130",
      group: "Tagima",
      price: 1199.0,
      volume: 14,
    },
    {
      id: "131",
      group: "Cort",
      price: 8729.1,
      volume: 12,
    },
    {
      id: "132",
      group: "Ibanez",
      price: 6299.1,
      volume: 6,
    },
    {
      id: "133",
      group: "Tagima",
      price: 5669.1,
      volume: 4,
    },
    {
      id: "134",
      group: "Tagima",
      price: 3509.1,
      volume: 11,
    },
    {
      id: "135",
      group: "Tagima",
      price: 3419.1,
      volume: 8,
    },
    {
      id: "136",
      group: "Tagima",
      price: 4319.1,
      volume: 9,
    },
    {
      id: "137",
      group: "ESP",
      price: 12599.0,
      volume: 15,
    },
    {
      id: "138",
      group: "Tagima",
      price: 4139.1,
      volume: 14,
    },
    {
      id: "139",
      group: "Tagima",
      price: 4139.1,
      volume: 17,
    },
    {
      id: "140",
      group: "Tagima",
      price: 1099.0,
      volume: 8,
    },
    {
      id: "141",
      group: "Tagima",
      price: 1299.0,
      volume: 16,
    },
    {
      id: "142",
      group: "Cort",
      price: 3509.1,
      volume: 13,
    },
    {
      id: "143",
      group: "Ibanez",
      price: 2654.1,
      volume: 16,
    },
    {
      id: "144",
      group: "Ibanez",
      price: 2321.1,
      volume: 7,
    },
    {
      id: "145",
      group: "Tagima",
      price: 4409.1,
      volume: 19,
    },
    {
      id: "146",
      group: "Ibanez",
      price: 14219.1,
      volume: 13,
    },
    {
      id: "147",
      group: "Ibanez",
      price: 15119.1,
      volume: 16,
    },
    {
      id: "148",
      group: "Strinberg",
      price: 849.0,
      volume: 11,
    },
    {
      id: "149",
      group: "Strinberg",
      price: 849.0,
      volume: 14,
    },
    {
      id: "150",
      group: "Strinberg",
      price: 849.0,
      volume: 18,
    },
    {
      id: "151",
      group: "Strinberg",
      price: 5199.0,
      volume: 5,
    },
    {
      id: "152",
      group: "Cort",
      price: 1799.1,
      volume: 4,
    },
    {
      id: "153",
      group: "Cort",
      price: 1799.1,
      volume: 4,
    },
    {
      id: "154",
      group: "Cort",
      price: 1799.1,
      volume: 8,
    },
    {
      id: "155",
      group: "Cort",
      price: 4049.1,
      volume: 15,
    },
    {
      id: "156",
      group: "Ibanez",
      price: 4769.1,
      volume: 5,
    },
    {
      id: "157",
      group: "Ibanez",
      price: 5669.1,
      volume: 14,
    },
    {
      id: "158",
      group: "Ibanez",
      price: 8099.1,
      volume: 18,
    },
    {
      id: "159",
      group: "Ibanez",
      price: 5669.1,
      volume: 16,
    },
    {
      id: "160",
      group: "Ibanez",
      price: 8999.1,
      volume: 18,
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
        title="Preços de guitarras na Black Friday"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 500,
            position: "relative",
          }}
        >
          {/* <Bar data={data} options={options} /> */}
          <ResponsiveSwarmPlot
            data={data}
            groups={[
              "ESP",
              "Condor",
              "Gibson",
              "Jackson",
              "Yamaha",
              "Ibanez",
              "Tagima",
              "Strinberg",
              "Cort",
              "PRS",
              "SX",
              "Waldman",
            ]}
            identity="id"
            value="price"
            valueFormat="$.2f"
            valueScale={{ type: "linear", min: 200, max: 19000, reverse: false }}
            size={{
              key: "volume",
              values: [4, 40],
              sizes: [6, 20],
            }}
            forceStrength={4}
            simulationIterations={80}
            borderColor={{
              from: "color",
              modifiers: [
                ["darker", 0.6],
                ["opacity", 0.5],
              ],
            }}
            margin={{ top: 90, right: 39, bottom: 80, left: 49 }}
            axisTop={{
              orient: "top",
              tickSize: 10,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Marcas",
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
              tickSize: 15,
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
