import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./timeline.css";
import MWapiService from "../../services/mwapiService";

export default class ApexChart extends Component {
  mwapiService = new MWapiService();

  state = {
    textTimeline: null,
    erasListP: [],
    erasInfoP: [],
    options: {
      chart: {
        type: "rangeBar",
        toolbar: { show: false },
        zoom: { enabled: false },
        brush: { enabled: false },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "70%",
          rangeBarGroupRows: true,
        },
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#3F51B5",
        "#546E7A",
        "#D4526E",
        "#8D5B4C",
        "#F86624",
        "#D7263D",
        "#1B998B",
        "#2E294E",
        "#F46036",
        "#E2C044",
      ],
      fill: { type: "solid" },
      xaxis: { type: "datetime" },
      yaxis: { labels: { show: true } },
      legend: {
        position: "bottom",
        fontSize: "16px",
        itemMargin: {
          horizontal: 16,
          vertical: 8,
        },
      },
      tooltip: {},
    },
    series: [
      {
        name: "Thomas Jefferson",
        data: [
          {
            x: "4",
            y: [new Date(1801, 2, 4).getTime(), new Date(1802, 2, 4).getTime()],
          },
          {
            x: "2",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
          },
          {
            x: "6",
            y: [
              new Date(1795, 2, 22).getTime(),
              new Date(1797, 2, 4).getTime(),
            ],
          },
        ],
      },
      {
        name: "Aaron Burr",
        data: [
          {
            x: "2",
            y: [new Date(1801, 2, 4).getTime(), new Date(1802, 3, 4).getTime()],
          },
        ],
      },
      {
        name: "John Marshall",
        data: [
          {
            x: "6",
            y: [new Date(1797, 2, 4).getTime(), new Date(1801, 4, 2).getTime()],
          },
        ],
      },
    ],
  };

  getStrippedHTML(wikiRespond) {
    var strippedHtml = wikiRespond.text.replace(/<[^>]+>/g, "");
    //.replace(/(\r\n|\r|\n){2}/g, "$1")
    //.replace(/(\r\n|\r|\n){3,}/g, "$1\n")
    //.replace(/\s\s+/g, " ");
    return strippedHtml;
  }

  updateTimeline = () => {
    this.mwapiService.getTimeline().then((wikiRespond) => {
      const strippedHTML = this.getStrippedHTML(wikiRespond);

      const erasList = strippedHTML
        .split("Timeline eras")[1];

      const erasInfo = strippedHTML
        .split("Timeline eras")
        [(1, 2)].split("End of spoiler warning.")[0];

      const erasInfoP = erasInfo.split("\n").filter(function (n) {
        return n;
      });

      console.log(erasInfoP)

      const erasListP = erasList.split("\n\n").filter(function (n) {
        return n;
      });

      this.setState({
        textTimeline: strippedHTML,
        //erasListP: erasListP,
        erasInfoP: erasInfoP,
      });
    });
  };

  componentDidMount() {
    this.updateTimeline();
  }

  render() {
    const { erasListP, erasInfoP, options, series } = this.state;
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height={250}
        />
        <div className="person-story">
          {erasListP.map((item, index) => (
            <p key={"p" + index}>{item}</p>
          ))}
        </div>

        <div className="person-story">
          {erasInfoP.map((item, index) => (
            <p key={"p" + index}>{item}</p>
          ))}
        </div>
      </div>
    );
  }
}

/**{erasListP.map((item, index) => (
            <p key={"p" + index}>{item}</p>
          ))} */
