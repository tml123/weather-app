import * as d3 from "d3";
import * as moment from "moment";

import { responsivefy } from './utils'

export default class WindChart {

    constructor(selector=null, data=[], options={}) {
        this.selector = selector;
        this.data = data;
        this.width = options.width || 1000;
        this.height = options.height || 500;

        this.render();
    }

    createScales(width) {
        let minDateValue = d3.min(this.data, d => new Date(moment.unix(d.dt).format('YYYY-MM-DD')));

        let maxDateValue = d3.max(this.data, d => new Date(moment.unix(d.dt).format('YYYY-MM-DD')));

        let x = d3.scaleTime()
            .domain([minDateValue, maxDateValue])
            .range([0, width]);

        let xFormat = d3.axisBottom(x)
            .tickFormat(d3.timeFormat('%m/%d/%Y %H:%M:%S'))

        return { x, xFormat };
    }

    render() {
        let margin = { top: 20, right: 15, bottom: 60, left: 60 }
        let height = this.height || 400;
        let width = (this.width || 1000) - margin.right - margin.left;
        let data = this.data;
        let selector = this.selector;

        if (!selector) {
            let svg = d3.select('body').append('svg');
            svg.attr('id', 'wind-chart');
            selector = 'svg#wind-chart'
        }

        let chart = d3.select(selector)
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
            .call(responsivefy);

        let { x, xFormat } = this.createScales(width);

        let main = chart.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'main');

        main.append('g')
            .attr('transform', `translate(0, ${height})`)
            .attr('class', 'main axis date')
            .call(xFormat);

        chart.append("text")             
            .attr("transform",
                  "translate(" + ((width/2) + margin.left) + " ," + 
                                 (height + margin.bottom) + ")")
            .attr('class', 'axis-label')
            .text("Date");

        main.append('g')
            .selectAll('circle')
            .data(this.data)
            .enter()
            .append('circle')
                .attr('class', 'horse-point')
                .attr('cx', d => x(new Date(moment.unix(d.dt).format('YYYY-MM-DDTHH:MM:ss'))))
                .text(d => d.main.temp)
                .attr('r', 5)
                .attr('cy', (height / 2))
    }
}