import React, { useRef, useEffect } from 'react'
import './tableauEmbed.scss'
import YoungImg from './../assets/Young.jpeg'
import IndigenousImg from './../assets/Indigenous.jpeg'
const { tableau } = window

const TableauEmbed = () => {
  const options = {
    device: 'desktop',
  }
  const ref = useRef(null)
  const url =
    'https://public.tableau.com/views/influenza_16064333146460/Datacollected?:language=en'

  const initViz = () => {
    new tableau.Viz(ref.current, url, options)
  }

  const refTimeSeries = useRef(null)

  const urlTimeSeries =
    'https://public.tableau.com/views/influenza_16064333146460/Sheet2?:language=en'
  const initVizTimeSeries = () => {
    new tableau.Viz(refTimeSeries.current, urlTimeSeries, options)
  }

  const refStateYear = useRef(null)

  const urlStateYear =
    'https://public.tableau.com/views/influenza_16064333146460/Sheet1?:language=en'
  const initVizStateYear = () => {
    new tableau.Viz(refStateYear.current, urlStateYear, options)
  }
  const refAgeYear = useRef(null)

  const urlAgeYear =
    'https://public.tableau.com/views/influenza_16064333146460/Sheet14?:language=en'
  const initVizAgeYear = () => {
    new tableau.Viz(refAgeYear.current, urlAgeYear, options)
  }

  const refFLuYear = useRef(null)

  const urlFLuYear =
    'https://public.tableau.com/views/influenza_16064333146460/Sheet11?:language=en'
  const initVizFLuYear = () => {
    new tableau.Viz(refFLuYear.current, urlFLuYear, options)
  }
  const refSexYear = useRef(null)

  const urlSexYear = 'https://public.tableau.com/shared/MN9T3NFZR'
  const initVizSexYear = () => {
    new tableau.Viz(refSexYear.current, urlSexYear, options)
  }

  const refIndigenous = useRef(null)

  const urlIndigenous = 'https://public.tableau.com/shared/XWQP79M8T'
  const initVizIndigenous = () => {
    new tableau.Viz(refIndigenous.current, urlIndigenous, options)
  }

  useEffect(() => {
    initViz()
    initVizTimeSeries()
    initVizAgeYear()
    initVizStateYear()
    initVizFLuYear()
    initVizSexYear()
    initVizIndigenous()
  }, [])
  return (
    <div className="insightsContainer">
      <h1>Influenza Case Study</h1>
      <div className="sectionContainer">
        <p>
          The goal of this report is to communicate the Influenza records of
          Australia taken from the Australian Department of Health.
        </p>
      </div>
      <h1>About the dataset</h1>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={ref}></div>
        </div>
        <div className="descContainer">
          <h3>Overall</h3>
          <ul>
            <li>Data spans from 2008 to 2017</li>
            <li>Recent years have produced more cases</li>
            <li>Spike in 2009 (H1N1 outbreak)</li>
            <li>Disproportionality with State, Age, Sex & Indigenous Status</li>
            <li>Significate spike in 2009 due toH1N1</li>
            <li>
              Gaps in records
              <table className="greyGridTable">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>State</th>
                    <th>Count of Missing Weeks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2008</td>
                    <td>NT</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>2008</td>
                    <td>SA</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>2008</td>
                    <td>Tas</td>
                    <td>17</td>
                  </tr>

                  <tr>
                    <td>2009</td>
                    <td>NT</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>2009</td>
                    <td>SA</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>2009</td>
                    <td>Vic</td>
                    <td>3</td>
                  </tr>

                  <tr>
                    <td>2009</td>
                    <td>Tas</td>
                    <td>21</td>
                  </tr>

                  <tr>
                    <td>2010</td>
                    <td>NT</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>2010</td>
                    <td>Tas</td>
                    <td>17</td>
                  </tr>
                  <tr>
                    <td>2011</td>
                    <td>NT</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2011</td>
                    <td>Tas</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>2012</td>
                    <td>NT</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>2012</td>
                    <td>Tas</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>2013</td>
                    <td>Tas</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>2015</td>
                    <td>Tas</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </div>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refTimeSeries}></div>
        </div>
        <div className="descContainer">
          <h3>Seasonality</h3>
          <ul>
            <li>Data shows seasonality</li>
            <li>
              Weekly inconsistency, monthly sampling shows stronger seasonality
            </li>
            <li>Positive national trend</li>
          </ul>
        </div>
      </div>
      <h1>The 5 Factors</h1>
      <div className="factorContainer">
        <ul>
          <li>State</li>
          <li>Age</li>
          <li>Sex</li> <li>Flu Type</li>
          <li>indigenous status </li>
        </ul>
      </div>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refStateYear}></div>
        </div>
        <div className="descContainer">
          <h3>State & Year</h3>
          <ul>
            <li>QLD shows most cases between 2008 - 2013</li>
            <li>NSW overtakes QLD in 2013 in case figures</li>
            <li>NSW, QLD, VIC have the highest figures</li>

            <li>VIC and SA gap widens in 2016 and 2017</li>
            <li>NT & TAS have significantly fewer cases and no trend</li>
          </ul>
        </div>
      </div>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refAgeYear}></div>
        </div>
        <div className="descContainer">
          <h3>Age & Year</h3>
          <ul>
            <li>Ages below 10 tend to have more cases recorded overall</li>
            <li>Group 85+ sees a significant rise in cases</li>
          </ul>
        </div>
      </div>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refFLuYear}></div>
        </div>
        <div className="descContainer">
          <h3>Flu & Year</h3>
          <ul>
            <li>A(unsubtyped) and B have a positive trend</li>
            <li>2009 H1N1 outbreak is under control</li>
            <li>
              A(unsubtyped) and B are the reason for the recent year increasing
              trend
            </li>
          </ul>
        </div>
      </div>
      <div className="sectionContainer">
        <div className="vizContainer">
          <div ref={refSexYear}></div>
        </div>
        <div className="descContainer">
          <h3>Sex & Year</h3>
          <ul>
            <li>Overall females tend to have more cases</li>
            <li>{'Age group < 10 cases tend to be skewed to male'}</li>
            <li>
              {
                "    Simulating 1000 times with sample size of age group < 10 case counts, with the hypothesis: 'influenza infections in children have no bias w/ gender'"
              }

              <p>
                <img src={YoungImg} alt="Young Image" />
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="sectionContainer">
        <div className="vizContainer indigenous">
          <div ref={refIndigenous}></div>
        </div>
        <div className="descContainer">
          <h3>Indigenous Status</h3>
          <ul>
            <li>Looking only at NT and WA</li>
            <li>
              Seeing disproportionately large cases in Indigenous communities
              (given population)
            </li>
            <li>
              Vaccine coverage statistics
              <p>
                <img src={IndigenousImg} alt="Indigenous Image" width="400px" />
              </p>
              from <a href="/">health.gov.au</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TableauEmbed
