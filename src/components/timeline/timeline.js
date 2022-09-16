import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import "./timeline.css";
import MWapiService from "../../services/mwapiService";

export default class ApexChart extends Component {
  mwapiService = new MWapiService();

  state = {
    clickedEra: {
      name: "",
      data: [
        {
          arc: "",
          x: "",
          y: ["", ""],
          description: "",
          rangeName: "",
        },
      ],
    },

    textTimeline: null,
    erasListP: [],
    erasInfoP: [],
    erasListPPP: [],
    options: {
      chart: {
        animations: { enabled: false },
        type: "rangeBar",
        toolbar: { show: false },
        zoom: { enabled: false },
        brush: { enabled: false },
        height: "50",
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
      yaxis: { labels: { show: false } },
      legend: {
        position: "bottom",
        fontSize: "16px",
        itemMargin: {
          horizontal: 16,
          vertical: 8,
        },

        onItemClick: {
          toggleDataSeries: false,
        },
      },
      tooltip: {
        enabled: true,
        followCursor: true,
        marker: {
          show: false,
        },
        custom: ({ seriesIndex, w }) => {
          //console.log(w.config.series[seriesIndex]);
          this.setState({
            clickedEra: w.config.series[seriesIndex],
          });
          return null;
        },
      },
    },
    series: [],
  };

  getStrippedHTML(wikiRespond) {
    let strippedHtml = wikiRespond.text
      .replace(/<[^>]+>/g, "")
      .replace(/[[\]']+/g, "");
    //.replace(/(\r\n|\r|\n){2}/g, "$1")
    //.replace(/(\r\n|\r|\n){3,}/g, "$1\n")
    //.replace(/\s\s+/g, " ");
    //console.log(strippedHtml);
    return strippedHtml;
  }

  getNestedErasList(erasList, erasInfo) {
    const amazingDataStructure = [];
    const series = [];
    let cnt = 0;
    const len = erasList.length;
    let newEra = "";
    let newEraInfo = erasInfo;
    let arc = "";
    for (let i = 1; cnt < len; i++) {
      arc = erasList[cnt].slice(2);
      amazingDataStructure.push({
        //getting rid of the numeration
        arc: arc,
        eras: [],
        arcDates: [],
      });
      //counter for all the elements we have worked with
      cnt++;
      // skipping the ones we worked with
      for (let j = cnt; j < len; j++) {
        // checking if element is a child
        if (Number(erasList[j][0]) === i) {
          //getting rid of the numeration in string
          newEra = erasList[j].slice(4);
          //getting eraInfo including dates & description
          let newEraInfoDesc = newEraInfo
            .substr(newEraInfo.indexOf(newEra) + newEra.length)
            .split(/\n\n/gm)[0];
          let elem = [
            {
              arc: arc,
              x: "1",
              y: newEraInfoDesc
                .match(/\w*\s\d*\W\s\d{4}/gm)
                .map((date) => new Date(date).getTime()),
              description: newEraInfoDesc.split(/\n/gm).pop(),
            },
          ];
          series.push({
            name: newEra,
            data: elem,
          });

          amazingDataStructure[i - 1].eras.push(series[series.length - 1]);

          cnt++;
        } else {
          break;
        }
      }
    }
    series[series.length - 1].data[0].y.push(new Date().getTime());
    return [amazingDataStructure, series];
  }

  updateTimeline = () => {
    this.mwapiService.getTimeline().then((wikiRespond) => {
      const strippedHTML = this.getStrippedHTML(wikiRespond);

      const erasList = strippedHTML.split("Timeline eras")[1];

      const erasListPPP = erasList
        .replace(/(\r\n|\r|\n){3,}/g, "$1\n")
        .replace(/(\r\n|\r|\n){2}/g, "$1")
        .split("\n1.")
        .filter((n) => {
          return n;
        });

      const erasInfo = strippedHTML
        .split("Timeline eras")
        [(1, 2)].split("End of spoiler warning.")[0];

      const erasInfoP = erasInfo.split("\n\n").filter((n) => {
        return n;
      });

      const erasListP = erasList.split("\n").filter((n) => {
        return n;
      });

      const dataToShow = this.getNestedErasList(erasListPPP, erasInfo);
      //console.log(dataToShow[1])
      //console.log(this.state.series);
      //console.log(erasInfo);
      const newSeries = dataToShow[1];
      //console.log(newSeries);

      this.setState({
        textTimeline: strippedHTML,
        erasListP: erasListP,
        erasInfoP: erasInfoP,
        erasListPPP: erasListPPP,
        series: newSeries,
      });
    });
  };

  componentDidMount() {
    this.updateTimeline();
  }

  render() {
    const { erasListP, erasListPPP, erasInfoP, options, series, clickedEra } =
      this.state;
    const isCardShown = clickedEra.name === "";
    console.log(isCardShown)
    return (
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="rangeBar"
          height="350"
        />
        <div className="timeline">
          <div style={isCardShown ? { display: "none" } : {}} className="card">
            <div className="title-holder">
              <div className="arc-title">{clickedEra.data[0].arc}:</div>

              <div className="era-title">{clickedEra.name}</div>
            </div>

            <div className="dates">
              {new Date(clickedEra.data[0].y[0]).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              {" — "}
              {new Date(clickedEra.data[0].y[1]).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="description">{clickedEra.data[0].description}</div>
          </div>
        </div>
      </div>
    );
  }
}

/**

        custom: ({ seriesIndex, w }) => {
          //console.log(w.config.series[seriesIndex]);
          this.setState({
            clickedEra: w.config.series[seriesIndex],
          });
          return null;
        },
 */
