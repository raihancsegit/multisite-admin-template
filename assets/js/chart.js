// Todays Date start
var currentDate = new Date();
var format_options = { year: 'numeric', month: 'long', day: 'numeric' };
var todays_date = currentDate.toLocaleDateString('en-US', format_options);
// Todays Date end

let last_30_day_data = {
  series: [
    {
      name: "Creatiya ",
      data: [30, 55, 41, 67,13, 23, 20, 8, 13, 27, 33, 12, 22, 43, 21, 49, 13, 23, 20, 8, 13, 27, 33, 12, 54, 36, 64, 75, 10, 24],
    },
    {
      name: "TemplyStock",
      data: [70, 23, 20, 8, 13, 27, 33, 12, 13, 23, 20, 8, 13, 27, 33, 12, 13, 23, 20, 8, 13, 27, 33, 12, 52, 32, 45, 62, 32, 81],
    }
  ],

  xaxis: {
    categories: [
        "May 10",
        "May 11",
        "May 12",
        "May 13",
        "May 14",
        "May 15",
        "May 16",
        "May 17",
        "May 18",
        "May 19",
        "May 20",
        "May 21",
        "May 22",
        "May 23",
        "May 24",
        "May 25",
        "May 26",
        "May 27",
        "May 28",
        "May 29",
        "May 30",
        "June 1",
        "June 2",
        "June 3",
        "June 4",
        "June 5",
        "June 6",
        "June 7",
        "June 8",
        "June 9",
    ],

  },
}

let today_data = {
  series: [
    {
      name: "Creatiya ",
      data: [90],
    },
    {
      name: "TemplyStock",
      data: [70],
    }
  ],

  xaxis: {
    categories: [todays_date],

  },
}

let current_month_data = {
  series: [
    {
      name: "Creatiya ",
      data: [30, 55, 41, 67,13, 23, 20, 8, 13, 27, 33, 12, 22, 43, 21],
    },
    {
      name: "TemplyStock",
      data: [70, 23, 20, 8, 13, 27, 33, 12, 13, 23, 20, 8, 13, 27, 33],
    }
  ],
  xaxis: {
    categories: [
        "Feb 1",
        "Feb 2",
        "Feb 3",
        "Feb 4",
        "Feb 5",
        "Feb 6",
        "Feb 7",
        "Feb 8",
        "Feb 9",
        "Feb 10",
        "Feb 11",
        "Feb 12",
        "Feb 13",
        "Feb 14",
        "Feb 15"
    ],

  },
}


let last_month_data = {
  series: [
    {
      name: "Creatiya ",
      data: [56, 32, 84, 67,49, 71, 65, 90, 80, 70, 95, 63, 28, 33, 62, 20, 81, 13, 27, 33, 12, 13, 23, 20, 80, 33,56, 32, 84, 67],
    },
    {
      name: "TemplyStock",
      data: [70, 23, 20, 13, 27, 33, 12, 13, 23, 20, 18, 13, 27, 33,56, 32, 84, 67,49, 71, 65, 90, 80, 70, 95, 63, 28, 33, 62, 75],
    }
  ],
  xaxis: {
    categories: [
        "Jan 1",
        "Jan 2",
        "Jan 3",
        "Jan 4",
        "Jan 5",
        "Jan 6",
        "Jan 7",
        "Jan 8",
        "Jan 9",
        "Jan 10",
        "Jan 11",
        "Jan 12",
        "Jan 13",
        "Jan 14",
        "Jan 16",
        "Jan 17",
        "Jan 18",
        "Jan 19",
        "Jan 20",
        "Jan 21",
        "Jan 22",
        "Jan 23",
        "Jan 24",
        "Jan 25",
        "Jan 26",
        "Jan 27",
        "Jan 28",
        "Jan 29",
        "Jan 30",
        "Jan 31",
    ],

  }
};


let current_year_data = {
  series: [
    {
      name: "Creatiya ",
      data: [98, 67],
    },
    {
      name: "TemplyStock",
      data: [80, 79],
    }
  ],

  xaxis: {
    categories: ["January", "February"],
  },
};

let all_time_data = {
  series: [
    {
      name: "Creatiya ",
      data: [56, 71, 65, 90, 80, 70, 95, 10],
    },
    {
      name: "TemplyStock",
      data: [32, 84, 67, 49, 71, 65, 90, 12],
    }
  ],

  xaxis: {
    categories: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  },
}

let last_year_data = {
  series: [
    {
      name: "Creatiya ",
      data: [56, 32, 84, 67,49, 71, 65, 90, 80, 70, 95, 63],
    },
    {
      name: "TemplyStock",
      data: [13, 27, 33,56, 32, 84, 67, 49, 71, 65, 90, 80],
    }
  ],

  xaxis: {
    categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  },
}

var options = {
  colors:['#2D78FA', '#FA419B'],

  chart: {
    type: "bar",
    height: 350,
    stacked: true,
  },

  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],

  yaxis: {
    show: false
  },

  fill: {
    opacity: 0.2,
  },
  legend: {
    position: "top",
    offsetX: "-100%",
    offsetY: 30,
  },

  grid: {
    show: false,
    borderColor: '#000000',
    strokeDashArray: 1,
    position: 'back',
    xaxis: {
        lines: {
            show: false
        }
    },   
    yaxis: {
        lines: {
            show: false
        }
    },  
    row: {
        colors: undefined,
        opacity: 0.5
    },  
    column: {
        colors: undefined,
        opacity: 0.5
    },  
    padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },  
},

dataLabels: {
    enabled: false,
  },
  
stroke: {
    show: true,
    curve: 'straight',
    lineCap: 'butt',
    colors: undefined,
    width: 1,
    dashArray: 0, 
},

tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      var y = series[seriesIndex][dataPointIndex];
      document.querySelector(".apexcharts-tooltip").style.transform = `translateX(12px) translateY(${y}px)`
      return `<div class="arrow_box">
                <div class="inner_box">
                  <span>$ ${y}</span>
                </div>
              </div>`
    }
  }
};



var last_30_day = new ApexCharts(document.querySelector("#last_30_day_chart"), {...options, ...last_30_day_data});
var today = new ApexCharts(document.querySelector("#today_chart"), {...options, ...today_data});
var current_month_chart = new ApexCharts(document.querySelector("#current_month_chart"), {...options, ...current_month_data});
var last_month_chart = new ApexCharts(document.querySelector("#last_month_chart"), {...options, ...last_month_data});
var current_year_chart = new ApexCharts(document.querySelector("#current_year_chart"), {...options, ...current_year_data});
var last_year_chart = new ApexCharts(document.querySelector("#last_year_chart"), {...options, ...last_year_data});
var all_time_chart = new ApexCharts(document.querySelector("#all_time_chart"), {...options, ...all_time_data});

last_30_day.render();
today.render();
current_month_chart.render();
last_month_chart.render();
current_year_chart.render();
last_year_chart.render();
all_time_chart.render();

